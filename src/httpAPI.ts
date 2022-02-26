import axios from "axios";

// 프로젝트에서 사용한 corona api의 apiKey (https://github.com//dhlife09/Corona-19-API)
// 정상적인 경우에는 apiKey는 클라이언트에서 보관하면 보안상의 이슈가 있음
// 보통 환경변수로 관리하거나 서버에서 관리하는게 안전
const apiKey = "8uRXaFHE9kTb1LqGVmUgOhe5DCQciMI4f";

// axios : api 서버와 통신하기 위한 request 라이브러리
// axios.create로 인스턴스를 만들고 baseURL을 설정하여 기본 api url을 설정
// params에 serviceKey를 지정하여 매번 요청시 자동으로 params에 serviceKey를 포함하여 요청함
const httpClient = axios.create({
  baseURL: "https://api.corona-19.kr",
  params: { 
  },
});

// 국내 코로나 현황 API
// async, await : 네트워크 요청은 요청시간이 있기 때문에 javascript 코드에서 기다릴 수가 없음
// 그래서 httpClient.get 함수는 Promise를 반환하는데 await 키워드를 사용하면 요청이 끝날 때까지 기다림
export const httpGetSummary = async (): Promise<SummaryType> => {
  const { data } = await httpClient.get("/korea/beta/");

  const { korea, API, quarantine, ...cities  } = data

  return {
    ...korea,
    deathPcnt: API.deathPcnt,
    recPcnt: API.recPcnt,
    cities: Object.values(cities)
  };
};

export const httpGetVaccineSummary = async () : Promise<VaccineSummaryType> => {
  const { data } = await httpClient.get('/korea/vaccine/');

  return data.korea
}

// 세계 백신 현황 API
export const httpGetWorldSummary = async () => {
  const { data } = await axios.get<WorldSummaryType>('https://api.covid19api.com/summary')

  return data
}