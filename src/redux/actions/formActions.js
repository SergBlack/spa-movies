import {
  SET_EDITED_MOVIE_TO_FORM,
  RESET_FORM,
  HANDLE_INPUT,
  HANDLE_SELECT,
} from '@/redux/types';

export const setEditedMovieToForm = (data) => ({ type: SET_EDITED_MOVIE_TO_FORM, payload: data });
export const resetForm = () => ({ type: RESET_FORM });
export const handleFormInput = (key, value) => ({ type: HANDLE_INPUT, payload: { [key]: value } });
export const handleFormSelect = (data) => ({ type: HANDLE_SELECT, payload: data });
