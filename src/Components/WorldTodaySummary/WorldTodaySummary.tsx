import { FunctionComponent } from "react";
import formatNumber from "../../utils/formatNumber";
import Box from "../Box";
import "./style.css";

interface Props {
  summary?: WorldSummaryType
}

const TodaySummary: FunctionComponent<Props> = ({summary}) => {
  return (
    <Box isPadding>
      <article className="today-summary">
        <div className="left">
          <dl>
            <dt>총 확진자</dt>
            <dd>{formatNumber(summary?.Global.TotalConfirmed)}명</dd>
          </dl>
        </div>
        <div className="right">
          <dl>
            <dt>오늘 확진자</dt>
            <dd>{formatNumber(summary?.Global.NewConfirmed)}</dd>
          </dl>
          <dl>
            <dt>사망자</dt>
            <dd>{formatNumber(summary?.Global.TotalDeaths)}</dd> 
          </dl>
        </div>
      </article>
    </Box>
  );
};

export default TodaySummary;
