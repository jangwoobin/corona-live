import { FunctionComponent } from "react"
import "./style.css"

interface PropsType {
    isPadding?: boolean
}

const Box: FunctionComponent<PropsType> = (props) => {
    return (
        <div className="box"  style={{
            padding: props.isPadding ? '15px' : 0
        }}>
            {props.children}           
        </div>
    )
}

export default Box