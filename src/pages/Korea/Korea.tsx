import { useCallback, useEffect, useState } from "react";
import Summary from "../../Components/Summary"
import TodaySummary from "../../TodaySummary"
import { httpGetSummary } from "../../httpAPI";


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
            <TodaySummary/>
        </>
    )
}

export default Korea