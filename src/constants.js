/* enum - перечисляемый тип */

const constants = {
  REGEX_NAME: /^[А-ЯЁ][а-яё]*|[A-Z][a-z]*$/,
  REGEX_EMAIL: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
  REGEX_PASSWORD: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
  THEMES: {
    DARK: 'DARK',
    LIGHT: 'LIGHT',
  },
};

export default constants;
