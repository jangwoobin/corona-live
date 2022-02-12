interface SummaryType {
    //   NowCase: string;
    //   TodayDeath: number;
    //   TodayRecovered: number;
    //   TotalCase: string;
    //   TotalCaseBefore: string;
    //   TotalChecking: number;
    //   TotalDeath: string;
    //   TotalRecovered: string;
    //   caseCount: number;
    //   casePercentage: number;
    //   checkingCounter: number;
    //   checkingPercentage: number;
    //   city1n: string;
    //   city1p: string;
    //   city2n: string;
    //   city2p: string;
    //   city3n: string;
    //   city3p: string;
    //   city4n: string;
    //   city4p: string;
    //   city5n: string;
    //   city5p: string;
    //   deathPercentage: number;
    //   notcaseCount: number;
    //   notcasePercentage: number;
    //   recoveredPercentage: number;
    //   resultCode: string;
    //   resultMessage: string;
    //   source: string;
    //   updateTime: string;
  
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
  }
  
  interface TodaySummaryType {}
  