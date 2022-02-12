import { FunctionComponent, useCallback, useMemo, useState } from "react";
import Box from "../Box";
import "./style.css"

interface Props {
    summary?: SummaryType
}

const SummaryList: FunctionComponent<Props> = props => {

    const [sortOption, setSortOption] = useState<{
        key: keyof Omit<SummaryType, "cities">
        order : 'asc' |'desc'
    }>({
        key : 'incDec',
        order: 'desc'
    })

    const sortedCities = useMemo(() => {
        if(!props.summary) return []
        
        const sortSign = sortOption.order == 'asc' ? -1 : 1

        return props.summary?.cities.sort((a, b) => {
            if(a[sortOption.key] < b[sortOption.key]) return sortSign * 1
            if(a[sortOption.key] > b[sortOption.key]) return sortSign * -1
            return 0
        })
    }, [props.summary, sortOption])

    const handleClickHeader = useCallback((key: keyof Omit<SummaryType, "cities">) => {
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
                        <th onClick={() => handleClickHeader('countryNm')}>지역</th>
                        <th onClick={() => handleClickHeader('incDec')}>오늘 확진자
                        {
                            sortOption.key == 'incDec' && (
                                <span className="material-icons">
                                    {sortOption.order == 'asc' ? 'arrow_upward' : 'arrow_downward'}
                                </span>
                            )
                        }
                        </th>
                        <th onClick={() => handleClickHeader('totalCnt')}>총 확진자</th>
                        <th onClick={() => handleClickHeader('deathCnt')}>사망자</th>
                        <th onClick={() => handleClickHeader('recCnt')}>완치자</th>
                    </thead>
                    <tbody>
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