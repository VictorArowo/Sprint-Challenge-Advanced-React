import countries from './iso-country-code';

const getCode = country => {
  const keyCode = Object.keys(countries).find(
    key => countries[key] === country
  );
  return keyCode.toLowerCase();
};

export default getCode;
