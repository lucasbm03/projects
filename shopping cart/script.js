const cartItems = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  cartItems.removeChild(event.target);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const adcProduct = async (event) => {
  const sku = getSkuFromProductItem(event.target.parentElement);
  const result = await fetchItem(sku);
  const { title: name, price: salePrice } = result;
  const product = { 
    sku,
    name,
    salePrice,
  };
  const newItem = createCartItemElement(product);
  cartItems.appendChild(newItem);
};

const createProductItemElement = ({
  sku,
  name,
  image,
}) => {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const btn = section
  .appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  btn.addEventListener('click', adcProduct);
  section.appendChild(btn);
  
  return section;
};

const getFetchProducts = async () => {
  const loading = document.getElementById('loading');
  const returnFetch = await fetchProducts('computador');
  loading.remove();
  returnFetch.results.forEach((ele) => {
    const concat = document.getElementsByClassName('items')[0];
    const {
      id: sku,
      title: name,
      thumbnail: image,
    } = ele;
    const news = createProductItemElement({
      sku,
      name,
      image,
    });
    return concat.append(news);
  });
};
const localEsvaziar = document.getElementsByClassName('empty-cart')[0];

localEsvaziar.addEventListener('click', () => {
    cartItems.innerHTML = '';
    localStorage.clear();
  });

window.onload = () => { 
  getFetchProducts();
 };
