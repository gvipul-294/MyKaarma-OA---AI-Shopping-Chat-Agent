import { Phone } from '../types';

// Mock Database of Mobile Phones (India Context)
export const MOCK_PHONES: Phone[] = [
  {
    id: 'pixel-8a',
    name: 'Google Pixel 8a',
    brand: 'Google',
    price: 49999,
    specs: {
      processor: 'Google Tensor G3',
      ram: '8GB',
      storage: '128GB',
      display: '6.1" OLED 120Hz',
      camera: '64MP Main + 13MP Ultrawide',
      battery: '4492 mAh',
      os: 'Android 14',
    },
    features: ['Best Camera', 'Clean Android', 'AI Features', '7 years updates'],
    description: 'The affordable Pixel with flagship-grade camera and AI smarts.',
    imageUrl: 'https://picsum.photos/seed/pixel8a/300/400',
  },
  {
    id: 'pixel-8',
    name: 'Google Pixel 8',
    brand: 'Google',
    price: 65000,
    specs: {
      processor: 'Google Tensor G3',
      ram: '8GB',
      storage: '128GB',
      display: '6.2" OLED 120Hz',
      camera: '50MP Main + 12MP Ultrawide',
      battery: '4575 mAh',
      os: 'Android 14',
    },
    features: ['Flagship Camera', 'Compact', 'AI Eraser'],
    description: 'The compact flagship with an incredible camera system.',
    imageUrl: 'https://picsum.photos/seed/pixel8/300/400',
  },
  {
    id: 'iphone-15',
    name: 'Apple iPhone 15',
    brand: 'Apple',
    price: 70900,
    specs: {
      processor: 'A16 Bionic',
      ram: '6GB',
      storage: '128GB',
      display: '6.1" Super Retina XDR',
      camera: '48MP Main + 12MP Ultrawide',
      battery: '3349 mAh',
      os: 'iOS 17',
    },
    features: ['Dynamic Island', 'Great Video', 'Ecosystem', 'Resale Value'],
    description: 'Standard iPhone with the new Dynamic Island and USB-C.',
    imageUrl: 'https://picsum.photos/seed/iphone15/300/400',
  },
  {
    id: 'oneplus-12r',
    name: 'OnePlus 12R',
    brand: 'OnePlus',
    price: 39999,
    specs: {
      processor: 'Snapdragon 8 Gen 2',
      ram: '8GB',
      storage: '128GB',
      display: '6.78" AMOLED 120Hz LTPO',
      camera: '50MP Main + 8MP UW',
      battery: '5500 mAh',
      os: 'OxygenOS 14',
    },
    features: ['Battery King', 'Fast Charging', 'Gaming Performance'],
    description: 'A performance beast with incredible battery life.',
    imageUrl: 'https://picsum.photos/seed/oneplus12r/300/400',
  },
  {
    id: 's23-fe',
    name: 'Samsung Galaxy S23 FE',
    brand: 'Samsung',
    price: 34999,
    specs: {
      processor: 'Exynos 2200',
      ram: '8GB',
      storage: '128GB',
      display: '6.4" Dynamic AMOLED 2X',
      camera: '50MP + 12MP + 8MP Telephoto',
      battery: '4500 mAh',
      os: 'One UI 6',
    },
    features: ['Telephoto Lens', 'Wireless Charging', 'IP68 Rating'],
    description: 'The Fan Edition delivering core flagship features at a mid-range price.',
    imageUrl: 'https://picsum.photos/seed/s23fe/300/400',
  },
  {
    id: 'nothing-2a',
    name: 'Nothing Phone (2a)',
    brand: 'Nothing',
    price: 23999,
    specs: {
      processor: 'Dimensity 7200 Pro',
      ram: '8GB',
      storage: '128GB',
      display: '6.7" AMOLED 120Hz',
      camera: '50MP Main + 50MP Ultrawide',
      battery: '5000 mAh',
      os: 'Nothing OS 2.5',
    },
    features: ['Unique Design', 'Glyph Interface', 'Clean Software'],
    description: 'A uniquely designed mid-ranger with personality.',
    imageUrl: 'https://picsum.photos/seed/nothing2a/300/400',
  },
  {
    id: 'moto-edge-50-pro',
    name: 'Motorola Edge 50 Pro',
    brand: 'Motorola',
    price: 29999,
    specs: {
      processor: 'Snapdragon 7 Gen 3',
      ram: '8GB',
      storage: '256GB',
      display: '6.7" pOLED 144Hz',
      camera: '50MP + 13MP + 10MP Telephoto',
      battery: '4500 mAh',
      os: 'Hello UI (Android 14)',
    },
    features: ['Pantone Validated Display', '125W Charging', 'Wireless Charging'],
    description: 'A well-rounded phone with excellent display and charging speeds.',
    imageUrl: 'https://picsum.photos/seed/moto50/300/400',
  },
  {
    id: 'redmi-note-13-pro',
    name: 'Redmi Note 13 Pro+',
    brand: 'Xiaomi',
    price: 28999,
    specs: {
      processor: 'Dimensity 7200 Ultra',
      ram: '8GB',
      storage: '256GB',
      display: '6.67" AMOLED 120Hz Curved',
      camera: '200MP Main + 8MP UW',
      battery: '5000 mAh',
      os: 'HyperOS',
    },
    features: ['200MP Camera', 'IP68 Rating', 'Curved Display'],
    description: 'Premium features like IP68 and curved screen in the Note series.',
    imageUrl: 'https://picsum.photos/seed/redmi13/300/400',
  },
  {
    id: 'poco-x6-pro',
    name: 'POCO X6 Pro',
    brand: 'POCO',
    price: 25999,
    specs: {
      processor: 'Dimensity 8300 Ultra',
      ram: '8GB',
      storage: '256GB',
      display: '6.67" AMOLED 120Hz',
      camera: '64MP Main',
      battery: '5000 mAh',
      os: 'HyperOS',
    },
    features: ['Gaming Performance', 'Best Value', 'Fast Storage'],
    description: 'The absolute performance king in the under 30k segment.',
    imageUrl: 'https://picsum.photos/seed/pocox6/300/400',
  },
  {
    id: 'iqoo-neo-9-pro',
    name: 'iQOO Neo 9 Pro',
    brand: 'iQOO',
    price: 34999,
    specs: {
      processor: 'Snapdragon 8 Gen 2',
      ram: '8GB',
      storage: '128GB',
      display: '6.78" AMOLED 144Hz',
      camera: '50MP Sony IMX920',
      battery: '5160 mAh',
      os: 'Funtouch OS 14',
    },
    features: ['Flagship Processor', 'Gaming Chip', 'Fast Charging'],
    description: 'Top-tier gaming performance without the flagship price tag.',
    imageUrl: 'https://picsum.photos/seed/iqooneo9/300/400',
  }
];

// Helper Functions
export const searchPhones = (
  query?: string,
  minPrice: number = 0,
  maxPrice: number = 200000,
  brands?: string[]
): Phone[] => {
  const normalizedQuery = query?.toLowerCase() || '';
  const normalizedBrands = brands?.map(b => b.toLowerCase()) || [];

  return MOCK_PHONES.filter(phone => {
    const matchesPrice = phone.price >= minPrice && phone.price <= maxPrice;
    
    const matchesBrand = normalizedBrands.length === 0 || 
      normalizedBrands.includes(phone.brand.toLowerCase());

    const matchesQuery = normalizedQuery === '' || 
      phone.name.toLowerCase().includes(normalizedQuery) ||
      phone.description.toLowerCase().includes(normalizedQuery) ||
      phone.features.some(f => f.toLowerCase().includes(normalizedQuery)) ||
      phone.brand.toLowerCase().includes(normalizedQuery);

    return matchesPrice && matchesBrand && matchesQuery;
  });
};

export const getPhoneDetails = (modelName: string): Phone | undefined => {
  return MOCK_PHONES.find(p => p.name.toLowerCase().includes(modelName.toLowerCase()));
};

export const comparePhones = (modelNames: string[]): Phone[] => {
  const results: Phone[] = [];
  for (const name of modelNames) {
    const phone = MOCK_PHONES.find(p => p.name.toLowerCase().includes(name.toLowerCase()));
    if (phone) results.push(phone);
  }
  return results.slice(0, 3); // Max 3 for comparison
};
