import { useCallback, useEffect, useState } from "react";
import Summary from "../../Components/Summary"
import SummaryList from "../../Components/SummaryList";
import { httpGetSummary } from "../../httpAPI";
import TodaySummary from "../../TodaySummary";


const Korea = () => {
    const [summary, setSummary] = useState<SummaryType>();

    const getSummary = useCallback(async () => {
      const summary = await httpGetSummary();
  
      setSummary(summary);
    }, []);
  
    useEffect(() => {
      getSummary();
    }, []);

    return (
        <>
            <Summary summary={summary}/>
            <TodaySummary summary={summary}/>
            <SummaryList summary={summary}/>
        </>
    )
}

export default Korea