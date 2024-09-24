/**
 *
 * @param localDateTimeString LocalDateTime 형식 string
 * @returns YYYY-MM-DD hh:mm
 */
export const formatDate = (localDateTimeString: string) => {
  const [date, timePart] = localDateTimeString.split('T');
  const time = timePart.slice(0, 5);
  return `${date} ${time}`;
};
