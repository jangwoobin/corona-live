import { FunctionComponent } from "react"
import "./style.css"

interface propsType {
    isPadding?: boolean
}

const Box: FunctionComponent<propsType> = (props) => {
    return (
        <div className="box"  style={{
            padding: props.isPadding ? '15px' : 0
        }}>
            {props.children}
        </div>
    )
}

export default Box  