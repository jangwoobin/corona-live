import { FunctionComponent, useCallback, useMemo, useState } from "react";
import Box from "../Box";
import SortArrow from "../SortArrow";
import "./style.css"

interface Props {
    summary?: WorldSummaryType
}

const SummaryList: FunctionComponent<Props> = props => {

    const [sortOption, setSortOption] = useState<{
        key: keyof WorldSummaryType['Countries'][0]
        order : 'asc' |'desc'
    }>({
        key : 'TotalConfirmed',
        order: 'desc'
    })

    const sortedCountry = useMemo(() => {
        if(!props.summary) return []
        
        const sortSign = sortOption.order == 'asc' ? -1 : 1

        return props.summary?.Countries.sort((a, b) => {
            if(a[sortOption.key] < b[sortOption.key]) return sortSign * 1
            if(a[sortOption.key] > b[sortOption.key]) return sortSign * -1
            return 0
        })
    }, [props.summary, sortOption])

    const handleClickHeader = useCallback((key: keyof WorldSummaryType['Countries'][0]) => {
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
                        <th onClick={() => handleClickHeader('Country')}>국가
                        <SortArrow
                            sortKey="Country"
                            sortOption={sortOption}
                        /></th>
                        <th onClick={() => handleClickHeader('NewConfirmed')}>오늘 확진자
                        <SortArrow
                            sortKey="NewConfirmed"
                            sortOption={sortOption}
                        />
                        </th>
                        <th onClick={() => handleClickHeader('TotalConfirmed')}>총 확진자
                        <SortArrow
                            sortKey="TotalConfirmed"
                            sortOption={sortOption}
                        /></th>
                        <th onClick={() => handleClickHeader('TotalDeaths')}>사망자
                        <SortArrow
                            sortKey="TotalDeaths"
                            sortOption={sortOption}
                        /></th>
                        
                    </thead>
                    <tbody>
                        {sortedCountry.map(country => {                            
                            return (
                                <tr>
                                    <td>{country.Country}</td>
                                    <td>{country.NewConfirmed}<span>명</span></td>
                                    <td>{country.TotalConfirmed}<span>명</span></td>
                                    <td>{country.TotalDeaths}<span>명</span></td>
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