import { useCallback, useEffect, useState } from "react";
import { httpGetSummary } from "../../httpAPI";
import formatNumber from "../../utils/formatNumber";
import Box from "../Box";
import "./style.css";

const Summary = () => {
  const [summary, setSummary] = useState<SummaryType>();

  const getSummary = useCallback(async () => {
    const summary = await httpGetSummary();

    setSummary(summary);
  }, []);

  useEffect(() => {
    getSummary();
  }, []);

  return (
    <Box isPadding>
      <article className="summary">
        <ul>
          <li>
            <div className="title">확진</div>
            <div
              className="count"
              style={{
                color: "rgb(235, 83, 116)",
              }}
            >
              {formatNumber(summary?.totalCnt)}
            </div>
            <span>{formatNumber(summary?.incDec)}</span>
          </li>
          <li>
            <div className="title">사망</div>
            <div className="count">{formatNumber(summary?.deathCnt)}</div>
            <span>{formatNumber(summary?.deathPcnt)}%</span>
          </li>
          <li>
            <div className="title">완치</div>
            <div
              className="count"
              style={{
                color: "rgb(86, 115, 235)",
              }}
            >
              {formatNumber(summary?.recCnt)}
            </div>
            <span>{formatNumber(summary?.recPcnt)}%</span>
          </li>
          <li>
            <div className="title">치료중</div>
            <div className="count">{formatNumber(summary?.isolCnt)}</div>
          </li>
        </ul>
      </article>
    </Box>
  );
};

export default Summary;
