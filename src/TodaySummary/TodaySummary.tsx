
import Box from "../Components/Box";
import "./style.css";

const TodaySummary = () => {
  return (
    <Box isPadding>
      <article className="today-summary">
        <dl>
          <dt>오늘 확진자</dt>
          <dd>6,555명</dd>  
          {/* 전날 대비 */}
          {/* 해외 유입, 지역 발생 */}
        </dl>
      </article>
    </Box>
  );
};

export default TodaySummary;
