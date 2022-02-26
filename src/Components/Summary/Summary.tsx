import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { httpGetSummary } from "../../httpAPI";
import formatNumber from "../../utils/formatNumber";
import Box from "../Box";
import "./style.css";

interface Props {
  // ? 는 optional 값으로 값이 있을 수도 없을 수도 있는 경우에 사용
  // API 요청 시점에서 불러오는 시간이 있기 때문에 초기값이 없는 경우로 ? 을 사용함
  summary?: SummaryType 
}

const Summary: FunctionComponent<Props> = ({summary}) => {
  return (
    <Box isPadding>
      <article className="summary">
        <ul>
          <li>
            <div className="title">확진</div>
            <div
              className="count"
              // 리액트에서 스타일 지정하는 방법 중 inline-style 구문
              style={{
                color: "rgb(235, 83, 116)",
              }}
            >
              {/* 숫자에 천 단위로 콤마를 찍어주는 유틸 함수 */}
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
