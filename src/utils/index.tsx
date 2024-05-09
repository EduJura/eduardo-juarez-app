import HttpRequest from "../global/HttpClient/Request";

const serviceBaseURL: string | undefined =
  process.env.REACT_APP_BASE_SERVICE_URL;

export const getBaseURL = function (): string {
  return process.env.PUBLIC_URL || "";
};

export const printE2ETestInfo = function (baseURL: string, driver: any): void {
  console.log("**********************************");
  console.log("TESTING ENVIRONMENT INFORAMTION");
  console.log("Base URL:", baseURL || "");
  console.log("Driver:", driver);
  console.log("**********************************");
};

export const httpRequest = new HttpRequest(serviceBaseURL);