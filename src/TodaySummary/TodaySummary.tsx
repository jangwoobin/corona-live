import { FunctionComponent } from "react";
import Box from "../Components/Box";
import formatNumber from "../utils/formatNumber";
import "./style.css";

interface Props {
  summary?: SummaryType
}

const TodaySummary: FunctionComponent<Props> = ({summary}) => {
  return (
    <Box isPadding>
      <article className="today-summary">
        <div className="left">
          <dl>
            <dt>오늘 확진자</dt>
            <dd>{formatNumber(summary?.incDec)}명</dd>
          </dl>
        </div>
        <div className="right">
          <dl>
            <dt>지역 발생</dt>
            <dd>{formatNumber(summary?.incDecK)}</dd>
          </dl>
          <dl>
            <dt>해외 유입</dt>
            <dd>{formatNumber(summary?.incDecF)}</dd> 
          </dl>
        </div>
      </article>
    </Box>
  );
};

export default TodaySummary;
