import Box from "../Box"
import "./style.css"


const Sidebar = () => {
    return (
        <aside>
            <Box 
            isPadding
            >
                <header>
                    <h1>
                        CORONA LIVE
                    </h1>
                </header>
            </Box>
            <Box>
            <ul>
                <li className="selected">국내</li>
                <li>해외</li>
                <li>백신</li>
            </ul>
            </Box>
        </aside>
    )
}

export default Sidebar