const objectParamsToQueryString = (params) => {
  const queryString = Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&');
  return `?${queryString}`;
};

export default objectParamsToQueryString;
