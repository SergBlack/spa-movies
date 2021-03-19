import { DATE_NOT_SET } from '@constants/textMessages';

export default function getYear(date) {
  const year = new Date(date).getFullYear();
  return year || DATE_NOT_SET;
}
