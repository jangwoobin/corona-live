import { FunctionComponent } from "react";
import formatNumber from "../../utils/formatNumber";
import Box from "../Box";
import "./style.css";

interface Props {
  summary?: SummaryType
}

//  = ({summary}) => { 이 부분은 = (props) => 에서 props.summary를 앞당겨 가져옴 ( Destructuring )
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EA%B0%9D%EC%B2%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4
// props.summary.incDec 이런식으로 사용하는 구문을 summary.incDec로 단축하기 위해 사용
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
