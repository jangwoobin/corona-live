import { useCallback, useEffect, useState } from "react";
import Summary from "../../Components/Summary"
import TodaySummary from "../../TodaySummary"
import { httpGetSummary } from "../../httpAPI";
import SummaryList from "../../Components/SummaryList";


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