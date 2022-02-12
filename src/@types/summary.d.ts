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