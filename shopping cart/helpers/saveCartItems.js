const saveCartItems = (key) => {
  const localStorage1 = localStorage.setItem('cartItems', key);
  return localStorage1;
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
