import { FunctionComponent } from "react"
import "./style.css"

// Props : 부모컴포넌트에서 자식 컴포넌트로 데이터를 넘겨줄 때 사용
interface PropsType {
    isPadding?: boolean
}

// 여러 컴포넌트를 만들 때 공통으로 들어가는 박스형 스타일을 컴포넌트화 함

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