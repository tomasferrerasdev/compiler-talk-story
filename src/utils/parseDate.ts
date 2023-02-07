export const parseDate = (date: object) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const dateString = date.toString();
  const parseDate = new Date(dateString);
  const month = parseDate.getUTCMonth();

  const day = parseDate.getUTCDate();
  const monthName = months[month];

  const fullParseDate = `${monthName} ${day}`;
  return fullParseDate;
};
