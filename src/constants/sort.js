export const SORT_LIST = [
  'Release date Aa-Zz',
  'Release date Zz-Aa',
  'Rating Aa-Zz',
  'Rating Zz-Aa',
];

export const SORT_PARAMS_MAP = {
  'Release date Aa-Zz': { sortBy: 'release_date', sortOrder: 'desc' },
  'Release date Zz-Aa': { sortBy: 'release_date', sortOrder: 'asc' },
  'Rating Aa-Zz': { sortBy: 'vote_average', sortOrder: 'desc' },
  'Rating Zz-Aa': { sortBy: 'vote_average', sortOrder: 'asc' },
};
