import { FunctionComponent, useCallback, useMemo, useState } from "react";
import Box from "../Box";
import SortArrow from "../SortArrow";
import "./style.css"

interface Props {
    summary?: SummaryType
}

const SummaryList: FunctionComponent<Props> = props => {

    const [sortOption, setSortOption] = useState<{
        // keyof : 타입의 key 값을 가져오는 구문
        // Omit : 타입스크립트의 유틸함수로 <가져올 타입, 제외할 타입의 키 값>
        // SummaryType에 cities란 타입을 제외한 키값의 타입을 얻기위한 방법
        key: keyof Omit<SummaryType, "cities">
        order : 'asc' |'desc'
    }>({
        key : 'incDec',
        order: 'desc'
    })

    // useMemo: 계산된 값을 리턴하는 hook 함수로 []안에 들어가는 값이 변경될 때마다 새로운 값을 리턴함
    // useState와 다른점은 set하는 함수가 없고 자동으로 값이 계산되는 변수로 사용
    // sortOption과 props.summary의 값이 변경될 때 정렬값으로 테이블을 재정렬함
    const sortedCities = useMemo(() => {
        // props.summary가 없는 경우 빈 배열 리턴
        if(!props.summary) return []
        
        // 정렬하는 코드
        const sortSign = sortOption.order == 'asc' ? -1 : 1

        return props.summary?.cities.sort((a, b) => {
            if(a[sortOption.key] < b[sortOption.key]) return sortSign * 1
            if(a[sortOption.key] > b[sortOption.key]) return sortSign * -1
            return 0
        })
    }, [props.summary, sortOption])

    // 테이블 헤더를 클릭할 때 정렬 값을 변경하는 함수 key를 파라미터로 받고 클릭 시 반대로 정렬
    const handleClickHeader = useCallback((key: keyof Omit<SummaryType, "cities">) => {
        // sortOption을 변경하는 함수 실행
        setSortOption({
            key,
            order: 
                sortOption.key != key ? 'desc' :  
                sortOption.order == 'asc' ? 'desc' : 'asc'
        })
    }, [sortOption])


    return (
        <Box isPadding>
            <article className="summary-list">
                <table
                cellSpacing={10}
                >
                    <colgroup>
                        <col width="50px"/>
                    </colgroup>
                    <thead>
                        {/* 테이블 헤더 클릭 시 정렬값을 변경하는 함수 실행*/}
                        {/* => 정렬값이 변경되고 sortedCities의 useMemo가 다시 리턴되면서 테이블이 재정렬됨*/}
                        <th onClick={() => handleClickHeader('countryNm')}>지역
                        {/* 정렬값에 따라 바뀌는 화살표 컴포넌트 */}
                        <SortArrow
                            sortKey="countryNm"
                            sortOption={sortOption}
                        /></th>
                        <th onClick={() => handleClickHeader('incDec')}>오늘 확진자
                        <SortArrow
                            sortKey="incDec"
                            sortOption={sortOption}
                        />
                        </th>
                        <th onClick={() => handleClickHeader('totalCnt')}>총 확진자
                        <SortArrow
                            sortKey="totalCnt"
                            sortOption={sortOption}
                        /></th>
                        <th onClick={() => handleClickHeader('deathCnt')}>사망자
                        <SortArrow
                            sortKey="deathCnt"
                            sortOption={sortOption}
                        /></th>
                        <th onClick={() => handleClickHeader('recCnt')}>완치자
                        <SortArrow
                            sortKey="recCnt"
                            sortOption={sortOption}
                        /></th>
                    </thead>
                    <tbody>
                        {/* 정렬된 도시 데이터를 테이블 뷰에 그리는 코드 */}
                        {/* 배열.map : 배열을 한바퀴 돌면서 return 값에 따라 새로운 배열을 만듬 */}
                        {sortedCities.map(city => {                            
                            return (
                                <tr>
                                    <td>{city.countryNm}</td>
                                    <td>{city.incDec}<span>명</span></td>
                                    <td>{city.totalCnt}<span>명</span></td>
                                    <td>{city.deathCnt}<span>명</span></td>
                                    <td>{city.recCnt}<span>명</span></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </article>
        </Box>
    )
}

export default SummaryList