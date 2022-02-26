import { useCallback, useEffect, useState } from "react";
import Summary from "../../Components/Summary"
import SummaryList from "../../Components/SummaryList";
import TodaySummary from "../../Components/TodaySummary"
import { httpGetSummary } from "../../httpAPI";


// 리액트는 기본적으로 상태값이 변경되면 화면이 재렌더링 되기 때문에 useCallback이나 useEffect로 렌더링 최적화를 해줘야 함
const Korea = () => {
    // useState: 리액트의 컴포넌트 상태 함수로 [값, set 함수] = useState<타입>(초기값) 으로 사용
    const [summary, setSummary] = useState<SummaryType>();

    // useCallback: 함수를 최적화하여 사용하기 위한 hook 함수로 []안에 들어가는 값이 변경되면 함수가 새로 생성됨
    const getSummary = useCallback(async () => {
      // 국내 코로나 현황 api 호출
      const summary = await httpGetSummary();
  
      // summary state에 api 응답값 저장
      setSummary(summary);
    }, []);
  
    // 렌더링 라이프사이클 hook 함수로 []안에 들어가는 값이 변경되면 함수 안에 구문이 재실행됨
    // []로 지정하면 컴포넌트가 처음 렌더링될 때만 실행
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