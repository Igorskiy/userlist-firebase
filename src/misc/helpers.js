const numericPattern = /(\d)+/;
const NoNumericPattern = /(\D)+/;

export const showInvalidData = (values) => {
  const invalidDataList = [];
  const name = values.name;
  const surname = values.surname;
  const phoneNumber = values.phoneNumber;

  if(!phoneNumber || phoneNumber.search(NoNumericPattern) !== -1) {
    invalidDataList.push('номер телефона');
  }
  if(!name || name.search(numericPattern) !== -1) {
    invalidDataList.push('имя');
  }
  if(!surname || surname.search(numericPattern) !== -1) {
    invalidDataList.push('фамилия')
  }

  return invalidDataList.join(', ');
};


export const checkAllDataValid = (values) => {
  const name = values.name;
  const surname = values.surname;
  const phoneNumber = values.phoneNumber;

  return (
    (phoneNumber && phoneNumber.search(NoNumericPattern) === -1)
    &&
    (name && name.search(numericPattern) === -1)
    &&
    (surname && surname.search(numericPattern) === -1)
  )
};

export const debounce = (f, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => f(...args), delay);
  };
};