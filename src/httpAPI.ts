import axios from "axios";

const apiKey = "8uRXaFHE9kTb1LqGVmUgOhe5DCQciMI4f";

const httpClient = axios.create({
  baseURL: "https://api.corona-19.kr",
  params: {
    serviceKey: apiKey,
  },
});

export const httpGetSummary = async (): Promise<SummaryType> => {
  const { data } = await httpClient.get("/korea/beta/");

  httpClient.get("/korea/country/new/");

  httpGetTodaySummary();
  const summary = data.API;
  const korea: SummaryType = data.korea;
  return {
    ...korea,
    deathPcnt: summary.deathPcnt,
    recPcnt: summary.recPcnt,
  };
};

export const httpGetTodaySummary = async () => {
  const { data } = await axios.get<{
    Countries: {
      Country: string;
      CountryCode: string;
      NewConfirmed: number;
      NewDeaths: number;
      NewRecovered: number;
      TotalConfirmed: number;
      TotalDeaths: number;
      TotalRecovered: number;
    }[];
  }>("https://api.covid19api.com/summary");

  console.log(data.Countries.find(({ CountryCode }) => CountryCode == "KR"));
};
