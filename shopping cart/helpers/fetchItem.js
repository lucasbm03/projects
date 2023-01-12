const fetchItem = (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;
  return fetch(url)
    .then((ele) => ele.json())
    .catch((error) => error);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}