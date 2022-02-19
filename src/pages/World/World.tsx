import { useCallback, useEffect, useState } from "react";
import WorldSummaryList from "../../Components/WorldSummaryList";
import WorldTodaySummary from "../../Components/WorldTodaySummary";
import { httpGetWorldSummary } from "../../httpAPI";


const World = () => {
    const [worldSummary, setWorldSummary] = useState<WorldSummaryType>();

    const getWorldSummary = useCallback(async () => {
      
      const worldSummary = await httpGetWorldSummary()
      setWorldSummary(worldSummary)
    }, []);
  
    useEffect(() => {
      getWorldSummary();
    }, []);

    return (
        <>
            <WorldTodaySummary summary={worldSummary}/>
            <WorldSummaryList summary={worldSummary}/>
        </>
    )
}

export default World