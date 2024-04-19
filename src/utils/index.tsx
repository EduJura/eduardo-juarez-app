export const getBaseURL = function() {
  return process.env.REACT_APP_BASE_URL || "";
}

export const printE2ETestInfo = function (baseURL, driver) {
  console.log("**********************************");
  console.log("TESTING ENVIRONMENT INFORAMTION");
  console.log("Base URL:", baseURL);
  console.log("Driver:", driver);
  console.log("**********************************");
};