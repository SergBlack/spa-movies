import { useLocation, useHistory } from 'react-router-dom';

const parseQuery = (search) => Object.fromEntries(new URLSearchParams(search));

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
