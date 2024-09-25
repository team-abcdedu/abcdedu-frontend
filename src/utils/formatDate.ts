/**
 *
 * @param localDateTimeString LocalDateTime 형식 string
 * @returns YYYY-MM-DD hh:mm
 */

export const formatDate = (localDateTimeString: string, hasTime?: boolean) => {
  const date = new Date(localDateTimeString);
  const koreanTime = new Date(date.getTime() + 9 * 60 * 60 * 1000); // UTC+9 시간차(한국 시간) 적용

  const year = koreanTime.getFullYear();
  const month = String(koreanTime.getMonth() + 1).padStart(2, '0');
  const day = String(koreanTime.getDate()).padStart(2, '0');
  const hours = String(koreanTime.getHours()).padStart(2, '0');
  const minutes = String(koreanTime.getMinutes()).padStart(2, '0');

  const formattedTime = `${year}-${month}-${day} ${hasTime ? `${hours}:${minutes}` : ``}`;
  return formattedTime;
};

/* // 서버에서 한국 시간으로 넘겨주면 사용할 코드
export const formatDate = (localDateTimeString: string) => {
  const [date, timePart] = localDateTimeString.split('T');
  const time = timePart.slice(0, 5);
  return `${date} ${time}`;
};
*/
