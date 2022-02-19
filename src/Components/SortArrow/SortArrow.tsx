import { FunctionComponent } from "react";
import "./style.css"


interface Props{
    sortKey: string
    sortOption: {
        key: string
        order: 'asc' | 'desc'
    }
}

const SortArrow: FunctionComponent<Props> = props => {
    if(props.sortKey !== props.sortOption.key) return null

    return (
        <span className="material-icons">
           {props.sortOption.order == 'asc' ? 'arrow_upward' : 'arrow_downward'}
        </span>
    )
}

export default SortArrow