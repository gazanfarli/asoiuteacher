import isObjectEmpty from './isObjectEmpty';

const NotFound = () => {
  return 'Not Found';
}

export default function listArrValues(obj, param) {
  let values = '';
  isObjectEmpty(obj) ? obj[param].forEach((item, index) => {
    values += index !== obj[param].length - 1 ? item + ', ' : ' ' + item;
  }) : NotFound();
  return values;
}