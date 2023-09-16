function fullDateAndTime(timeElapsed) {
  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;
  let weeks = days * 7;
  let month = days * 30;
  let year = days * 365;
  if (timeElapsed > year) {
    let num = timeElapsed / year;
    return Math.round(num) + " years";
  } else if (timeElapsed > month) {
    let num = timeElapsed / month;
    return Math.round(num) + " months";
  } else if (timeElapsed > weeks) {
    let num = timeElapsed / weeks;
    return Math.round(num) + " weeks";
  } else if (timeElapsed > days) {
    let num = timeElapsed / days;
    return Math.round(num) + " days";
  } else if (timeElapsed > hours) {
    let num = timeElapsed / hours;
    return Math.round(num) + " hours";
  } else if (timeElapsed > minutes) {
    let num = timeElapsed / minutes;
    return Math.round(num) + " minutes";
  } else if (timeElapsed > 0 && timeElapsed < minutes) {
    let num = timeElapsed / seconds;
    return Math.round(num) + " seconds";
  } else {
    return "...";
  }
}

export default function getUploadedDuration(date) {
  let start = date;
  let end = Date.now();
  let timeElapsed = getTimeElapsed(start, end);
  let time = fullDateAndTime(timeElapsed);
  return time;
}
function getTimeElapsed(start, end) {
  return end - start;
}

export function getFormatedDate(date) {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" }); // Use 'long' for the full month name, 'short' for the abbreviated name
  const year = date.getFullYear();
  return day + " " + month + " " + year;
}
