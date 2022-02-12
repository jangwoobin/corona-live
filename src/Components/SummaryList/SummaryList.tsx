import { FunctionComponent } from "react";
import Box from "../Box";
import "./style.css"

interface Props {
    summary?: SummaryType
}

const SummaryList: FunctionComponent<Props> = props => {
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
                        <th>지역</th>
                        <th>오늘 확진자</th>
                        <th>총 확진자</th>
                        <th>사망자</th>
                        <th>완치자</th>
                    </thead>
                    <tbody>
                        {props.summary?.cities.map(city => {                            
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