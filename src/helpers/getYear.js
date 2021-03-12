import { DATE_NOT_SET } from '../constants/textMessages';

export default function getYear(date) {
  const year = new Date(date).getFullYear();
  return Number.isNaN(year) ? DATE_NOT_SET : year;
}
