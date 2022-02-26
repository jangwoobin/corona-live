//@types 폴더 안에 생성된 d.ts 파일은 이 프로젝트 내에서 글로벌로 사용할 타입을 지정할 수 있음

interface SummaryType {
  countryNm: string; // 도시명
  deathCnt: number; // 사망자 수
  incDec: number; // 전일대비 확진
  incDecF: number; // 전일대비 확진 - 해외
  incDecK: number; // 전일대비 확진 - 국내
  isolCnt: number; // 치료중인 확진자 수
  qurRate: number; // 코로나 발생률
  recCnt: number; // 완치자 수
  totalCnt: number; // 전체 확진자 수
  deathPcnt: number; // 사망률
  recPcnt: number; // 완치율

  cities: Omit<SummaryType, 'cities'>[]
}


interface WorldSummaryType {
  Global: {
    Date: string
    NewConfirmed:number
    NewDeaths:number
    NewRecovered:number
    TotalConfirmed:number
    TotalDeaths:number
    TotalRecovered:number
  }
  Countries: {
    Country: string
    CountryCode: string
    Date: string
    ID: string
    NewConfirmed: number
    NewDeaths: number
    NewRecovered: number
    Slug: string
    TotalConfirmed: number
    TotalDeaths: number
    TotalRecovered: number
  }[]

}