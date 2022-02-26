import { useCallback, useEffect, useState } from "react";
import WorldSummaryList from "../../Components/WorldSummaryList";
import WorldTodaySummary from "../../Components/WorldTodaySummary";
import { httpGetWorldSummary } from "../../httpAPI";


// korea.tsx와 비슷한 구조이니 korea에서 확인
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