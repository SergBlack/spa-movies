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
  const { search, pathname, hash } = useLocation();
  const hasParams = search.indexOf('=') > -1;

  const setValueWithQuery = (newQuery) => {
    const searchParams = stringifyQuery(newQuery);

    setValue(newQuery);
    history.push(`${pathname}?${searchParams}${hash}`);
  };

  return [
    hasParams ? { ...defaultQuery, ...parseQuery(search) } : defaultQuery,
    setValueWithQuery,
  ];
};

export default useQuery;
