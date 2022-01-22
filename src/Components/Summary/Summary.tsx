import Box from "../Box"
import "./style.css"

const Summary = () => {
    return (
        <Box isPadding>
        <article className="summary">
            <ul>
                <li>
                    <div className="title">확진자</div>
                    <div className="count">726,274</div>
                    <div className="compare">7,009</div>
                </li>
                <li>
                    <div className="title">사망자</div>
                    <div className="count">726,274</div>
                    <div className="compare">7,009</div>
                </li>
                <li>
                    <div className="title">완치자</div>
                    <div className="count">726,274</div>
                    <div className="compare">7,009</div>
                </li>
                <li>
                    <div className="title">위중증자</div>
                    <div className="count">726,274</div>
                    <div className="compare">7,009</div>
                </li>
               </ul>
        </article>
        </Box>
    )
}
export default Summary