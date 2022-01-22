import"./style.css"


const Sidebar = () => {
    return (
        <aside>
            <header>
                <h1>
                    CORONA LIVE
                    </h1>            
                </header>
                <ul>
                    <li className="selected">국내</li>
                    <li>해외</li>
                    <li>백신</li>
                </ul>
            </aside>
    )
}

export default Sidebar