import { formatDistanceToNow, parseISO } from "date-fns";

export const formatDateToDaysAgo = (dateString: string): string => {
  const date = parseISO(dateString);
  return formatDistanceToNow(date, { addSuffix: true });
};
