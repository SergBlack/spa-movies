const objectParamsToQueryString = (params) => {
  const queryString = Object.keys(params).map((key) => `${key}=${params[key]}`).join('&');
  return `?${queryString}`;
};

export default objectParamsToQueryString;
