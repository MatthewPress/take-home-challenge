import dayjs from "dayjs";

const formatDate = (providedDate, providedFormat) => {
  return dayjs(providedDate).format(providedFormat);
};

export { 
  formatDate 
}