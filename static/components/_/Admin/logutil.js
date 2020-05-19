function isSameDay(c, d) {
  return (
    c.getFullYear() === d.getFullYear() &&
    c.getMonth() === d.getMonth() &&
    c.getDate() === d.getDate()
  );
}
const options = {
  hour: "numeric",
  hour12: true,
  minute: "numeric",
  second: "numeric",
};
const hasIntl = typeof Intl !== "undefined";
export function stampFormat(timeStamp) {
  const ts = new Date(timeStamp);
  try {
    if (hasIntl) {
      const date = new Date();
      if (ts.getFullYear() !== date.getFullYear()) {
        options.year = "numeric";
      }
      if (!isSameDay(ts, date)) {
        options.month = options.day = "numeric";
      }
      return Intl.DateTimeFormat("en", options).format(ts);
    }
  } catch (e) {
    return console.log(e);
  }
  return ts.toLocaleString();
}
