export const selectMovies = (state) => state.movies.data;
export const selectSelectedMovie = (state) => state.movies.selectedMovie;
export const selectTotalAmount = (state) => state.movies.totalAmount;

export const selectEditedMovie = (state) => state.movieForm;

export const selectIsLoadingMovies = (state) => state.app.isLoadingMovies;
export const selectIsLoadingSelectedMovie = (state) => state.app.isLoadingSelectedMovie;
