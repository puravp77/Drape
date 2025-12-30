// wishlistUtils.js
export const getWishlist = () => {
  const wishlist = localStorage.getItem("wishlist");
  return wishlist ? JSON.parse(wishlist) : [];
};

export const addToWishlist = (product) => {
  const wishlist = getWishlist();
  const isAlready = wishlist.find((p) => p.id === product.id);
  if (!isAlready) {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
};

export const removeFromWishlist = (productId) => {
  let wishlist = getWishlist();
  wishlist = wishlist.filter((p) => p.id !== productId);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

export const isInWishlist = (productId) => {
  const wishlist = getWishlist();
  return wishlist.some((p) => p.id === productId);
};