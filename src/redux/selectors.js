export const selectMovies = (state) => state.movies.data;
export const selectSelectedMovie = (state) => state.movies.selectedMovie;
export const selectTotalAmount = (state) => state.movies.totalAmount;

export const selectCurrentSort = (state) => state.movies.sort.current;
export const selectSortParams = (state) => state.movies.sort.params;
export const selectCurrentFilter = (state) => state.movies.filter.current;
export const selectFilterParams = (state) => state.movies.filter.params;

export const selectIsLoadingMovies = (state) => state.app.isLoadingMovies;
export const selectIsLoadingSelectedMovie = (state) => state.app.isLoadingSelectedMovie;
