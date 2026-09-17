import { products as catalogProducts, assets } from '../assets/frontend_assets/assets';

const PRODUCT_STORAGE_KEY = 'vashnoracraft-products';

const giftCategories = [
  {
    category: 'Marriage',
    subCategory: 'Wedding hampers',
    name: 'Personalized Wedding Gift Hamper',
    description:
      'A thoughtfully arranged hamper for weddings, engagements, and new beginnings.',
    image: assets.weddingGiftHamperImg,
  },
  {
    category: 'Couples',
    subCategory: 'Romantic gifts',
    name: 'Romantic Couple Gift Box',
    description:
      'A meaningful surprise for anniversaries, date nights, and special memories together.',
    image: assets.coupleGiftImg,
  },
  {
    category: 'Festivals',
    subCategory: 'Festive hampers',
    name: 'Premium Festival Gift Hamper',
    description:
      'A festive collection made to share warmth, joy, and celebration with loved ones.',
    image: assets.festivalHamperImg,
  },
  {
    category: 'Kids',
    subCategory: 'Return gifts',
    name: 'Kids Birthday Return Gift Basket',
    description:
      'A cheerful gift basket for birthdays, school celebrations, and little moments of joy.',
    image: assets.kidsGiftImg,
  },
  {
    category: 'Customized',
    subCategory: 'Gift hampers',
    name: 'Customized Aesthetic Gift Hamper',
    description:
      'A beautiful customizable hamper curated to make someone feel truly special.',
    image: assets.aestheticHamperImg,
  },
];

const normalizeGiftProducts = (products) => {
  return products.map((product, index) => {
    if (!['Women', 'Men', 'Kids'].includes(product.category)) {
      return product;
    }

    const gift = giftCategories[index % giftCategories.length];

    return {
      ...product,
      name: gift.name,
      description: gift.description,
      category: gift.category,
      subCategory: gift.subCategory,
      image: [gift.image],
    };
  });
};

export const getProducts = () => {
  // Server-side / SSR safety
  if (typeof window === 'undefined') {
    return normalizeGiftProducts(catalogProducts);
  }

  const storedProducts = window.localStorage.getItem(PRODUCT_STORAGE_KEY);

  // No products stored yet
  if (!storedProducts) {
    const giftProducts = normalizeGiftProducts(catalogProducts);

    window.localStorage.setItem(
      PRODUCT_STORAGE_KEY,
      JSON.stringify(giftProducts)
    );

    return giftProducts;
  }

  try {
    const parsedProducts = JSON.parse(storedProducts);

    // Make sure stored data is an array
    if (!Array.isArray(parsedProducts)) {
      throw new Error('Invalid products data');
    }

    const products = normalizeGiftProducts(parsedProducts);

    window.localStorage.setItem(
      PRODUCT_STORAGE_KEY,
      JSON.stringify(products)
    );

    return products;
  } catch (error) {
    console.error('Error loading products:', error);

    const giftProducts = normalizeGiftProducts(catalogProducts);

    window.localStorage.setItem(
      PRODUCT_STORAGE_KEY,
      JSON.stringify(giftProducts)
    );

    return giftProducts;
  }
};

export const saveProducts = (nextProducts) => {
  if (typeof window === 'undefined') {
    return;
  }

  if (!Array.isArray(nextProducts)) {
    console.error('saveProducts expects an array');
    return;
  }

  window.localStorage.setItem(
    PRODUCT_STORAGE_KEY,
    JSON.stringify(nextProducts)
  );
};