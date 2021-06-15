import configs from '../configs';
/**
 * 
 * @param {object} options 
 * @returns {Promise}
 */
export const getUsers = (options = {}) => {
  const defaultOptions = {
    page: 1,
    format: 'json',
    results: configs.DEFAULT_AMOUNT,
    seed: configs.API_KEY,
    inc: configs.DEFAULT_USER,
  };

  const finalOptions = {
    ...defaultOptions,
    ...options,
  };

  const query = new URLSearchParams(finalOptions).toString();
  console.log(query);

  return fetch(
    `${configs.BASE_URL}/?${query}`
  ).then(res => res.json());
};
