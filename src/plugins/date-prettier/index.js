function prettyDate(dateStr) {
  if (typeof dateStr !== "string") return dateStr;

  const pattern =
    /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})\T(?<hh>\d{2}):(?<mm>\d{2}):(?<ss>\d{2})\Z/;

  const result = dateStr.match(pattern);
  if (!result) return dateStr;
  const groups = result.groups || {};
  return `${groups.day}.${groups.month}.${groups.year} ${groups.hh}:${groups.mm}`;
}

function displayVal(val) {
  return val < 10 ? `0${val}` : val;
}

function localDate(dateStr) {
  const date = new Date(dateStr);
  const month = displayVal(date.getMonth()+1);
  
  const day = displayVal(date.getDate());
  const hour = displayVal(date.getHours());
  const minutes = displayVal(date.getMinutes());

  return `${day}.${month}.${date.getFullYear()} ${hour}:${minutes}`;
}

export default {
  install(app) {
    const global = app.config.globalProperties;

    global.$fullYear = new Date().getFullYear();
    global.$prettyDate = prettyDate;
    global.$localDate = localDate;
  },
};
