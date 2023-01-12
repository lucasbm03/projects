const fetchProducts = (product) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  return fetch(url)
  .then((jsn) => jsn.json())
  .then((data) => data);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
