import { useLocation, useHistory } from 'react-router-dom';

const parseQuery = (search) => {
  const urlParams = new URLSearchParams(search);
  const params = {};

  urlParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
};

const stringifyQuery = (query) => new URLSearchParams(query).toString();

const useQuery = ([defaultQuery, setValue]) => {
  const history = useHistory();
  const { search } = useLocation();
  const hasParams = search.indexOf('=') > -1;

  const setValueWithQuery = (newQuery, newPath) => {
    const searchParams = stringifyQuery(newQuery);

    setValue(newQuery);
    history.push(`${newPath}?${searchParams}`);
  };

  return [
    hasParams ? { ...defaultQuery, ...parseQuery(search) } : defaultQuery,
    setValueWithQuery,
  ];
};

export default useQuery;
