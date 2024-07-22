export const getProducts = async (productId) => {
  const res = await fetch(`https://dummyjson.com/products`);
  return res.json();
};

export const getProductDetails = async (productId) => {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  return res.json();
};
