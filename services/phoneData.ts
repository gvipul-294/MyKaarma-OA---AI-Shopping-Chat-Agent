import { Phone } from '../types';

// Mock Database of Mobile Phones (India Context)
export const MOCK_PHONES: Phone[] = [
  // --- Ultra Premium (> 80k) ---
  {
    id: 's24-ultra',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 129999,
    specs: {
      processor: 'Snapdragon 8 Gen 3',
      ram: '12GB',
      storage: '256GB',
      display: '6.8" QHD+ AMOLED 120Hz',
      camera: '200MP Main + 50MP (5x) + 12MP UW',
      battery: '5000 mAh',
      os: 'One UI 6.1',
    },
    features: ['AI Features', 'S Pen', 'Best Zoom Camera', 'Titanium', '7yr Updates'],
    description: 'The ultimate Android flagship. Best camera phone for zoom photography and productivity.',
    imageUrl: 'https://picsum.photos/seed/s24ultra/300/400',
  },
  {
    id: 'iphone-15-pro-max',
    name: 'Apple iPhone 15 Pro Max',
    brand: 'Apple',
    price: 154000,
    specs: {
      processor: 'A17 Pro',
      ram: '8GB',
      storage: '256GB',
      display: '6.7" Super Retina XDR',
      camera: '48MP Main + 12MP (5x) + 12MP UW',
      battery: '4441 mAh',
      os: 'iOS 17',
    },
    features: ['Titanium Design', 'Best Video Camera', 'Action Button', 'USB-C', 'Gaming'],
    description: 'Top-tier performance with the best video recording capabilities in the industry.',
    imageUrl: 'https://picsum.photos/seed/iphone15promax/300/400',
  },
  {
    id: 'xiaomi-14-ultra',
    name: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    price: 99999,
    specs: {
      processor: 'Snapdragon 8 Gen 3',
      ram: '16GB',
      storage: '512GB',
      display: '6.73" AMOLED 120Hz',
      camera: '50MP (1-inch) + 50MP (3.2x) + 50MP (5x)',
      battery: '5000 mAh',
      os: 'HyperOS',
    },
    features: ['Leica Optics', '1-inch Sensor', 'Best Camera', 'Professional Photography', '90W Charging'],
    description: 'A camera powerhouse co-engineered with Leica, featuring a massive 1-inch sensor.',
    imageUrl: 'https://picsum.photos/seed/xiaomi14ultra/300/400',
  },

  // --- Premium (50k - 80k) ---
  {
    id: 's24',
    name: 'Samsung Galaxy S24',
    brand: 'Samsung',
    price: 74999,
    specs: {
      processor: 'Exynos 2400',
      ram: '8GB',
      storage: '256GB',
      display: '6.2" FHD+ AMOLED 120Hz',
      camera: '50MP + 10MP (3x) + 12MP UW',
      battery: '4000 mAh',
      os: 'One UI 6.1',
    },
    features: ['Compact', 'Galaxy AI', 'Telephoto Zoom', '7yr Updates', 'One-Hand Use'],
    description: 'A premium compact Android flagship perfect for one-handed use with full AI features.',
    imageUrl: 'https://picsum.photos/seed/s24/300/400',
  },
  {
    id: 'oneplus-12',
    name: 'OnePlus 12',
    brand: 'OnePlus',
    price: 64999,
    specs: {
      processor: 'Snapdragon 8 Gen 3',
      ram: '12GB',
      storage: '256GB',
      display: '6.82" 2K ProXDR 120Hz',
      camera: '50MP + 64MP (3x) + 48MP UW',
      battery: '5400 mAh',
      os: 'OxygenOS 14',
    },
    features: ['Hasselblad Camera', 'Fast Charging', 'Great Battery', 'Top Performance'],
    description: 'Excellent all-rounder with one of the best battery lives and fast charging speeds.',
    imageUrl: 'https://picsum.photos/seed/oneplus12/300/400',
  },
  {
    id: 'pixel-8',
    name: 'Google Pixel 8',
    brand: 'Google',
    price: 62999,
    specs: {
      processor: 'Tensor G3',
      ram: '8GB',
      storage: '128GB',
      display: '6.2" Actua OLED 120Hz',
      camera: '50MP Main + 12MP UW',
      battery: '4575 mAh',
      os: 'Android 14',
    },
    features: ['AI Camera', 'Clean Software', 'Compact', '7yr Updates', 'One-Hand Use'],
    description: 'Smartest smartphone with AI-powered camera features and a compact form factor.',
    imageUrl: 'https://picsum.photos/seed/pixel8/300/400',
  },
  {
    id: 'iphone-15',
    name: 'Apple iPhone 15',
    brand: 'Apple',
    price: 70999,
    specs: {
      processor: 'A16 Bionic',
      ram: '6GB',
      storage: '128GB',
      display: '6.1" OLED 60Hz',
      camera: '48MP Main + 12MP UW',
      battery: '3349 mAh',
      os: 'iOS 17',
    },
    features: ['Dynamic Island', 'Great Video', 'Compact', 'Reliable', 'One-Hand Use'],
    description: 'The standard iPhone experience with a great main camera and USB-C.',
    imageUrl: 'https://picsum.photos/seed/iphone15/300/400',
  },

  // --- Upper Mid-Range (30k - 50k) ---
  {
    id: 'oneplus-12r',
    name: 'OnePlus 12R',
    brand: 'OnePlus',
    price: 39999,
    specs: {
      processor: 'Snapdragon 8 Gen 2',
      ram: '8GB',
      storage: '128GB',
      display: '6.78" AMOLED 120Hz',
      camera: '50MP Main + 8MP UW',
      battery: '5500 mAh',
      os: 'OxygenOS 14',
    },
    features: ['Gaming Performance', 'Battery King', 'Fast Charging', 'Smooth Display'],
    description: 'Flagship grade performance and battery life at a mid-range price.',
    imageUrl: 'https://picsum.photos/seed/oneplus12r/300/400',
  },
  {
    id: 'pixel-8a',
    name: 'Google Pixel 8a',
    brand: 'Google',
    price: 49999,
    specs: {
      processor: 'Tensor G3',
      ram: '8GB',
      storage: '128GB',
      display: '6.1" OLED 120Hz',
      camera: '64MP Main + 13MP UW',
      battery: '4492 mAh',
      os: 'Android 14',
    },
    features: ['Best Camera in Segment', 'Clean Android', 'AI Features', 'Compact', 'One-Hand Use'],
    description: 'The best camera experience you can get under 50k with stock Android.',
    imageUrl: 'https://picsum.photos/seed/pixel8a/300/400',
  },
  {
    id: 'iqoo-neo-9-pro',
    name: 'iQOO Neo 9 Pro',
    brand: 'iQOO',
    price: 34999,
    specs: {
      processor: 'Snapdragon 8 Gen 2',
      ram: '8GB',
      storage: '256GB',
      display: '6.78" 144Hz AMOLED',
      camera: '50MP (IMX920) + 8MP UW',
      battery: '5160 mAh',
      os: 'Funtouch OS 14',
    },
    features: ['Best Gaming Phone', '144Hz', 'Fast Charging', 'Performance'],
    description: 'Unbeatable performance for gamers under 40k.',
    imageUrl: 'https://picsum.photos/seed/iqooneo9pro/300/400',
  },
  {
    id: 'samsung-a55',
    name: 'Samsung Galaxy A55',
    brand: 'Samsung',
    price: 39999,
    specs: {
      processor: 'Exynos 1480',
      ram: '8GB',
      storage: '128GB',
      display: '6.6" AMOLED 120Hz',
      camera: '50MP + 12MP UW + 5MP Macro',
      battery: '5000 mAh',
      os: 'One UI 6.1',
    },
    features: ['Premium Build', 'IP67 Waterproof', 'Security', 'Good Battery'],
    description: 'Premium metal build and reliable software experience.',
    imageUrl: 'https://picsum.photos/seed/samsunga55/300/400',
  },

  // --- Mid-Range (20k - 30k) ---
  {
    id: 'moto-edge-50-pro',
    name: 'Motorola Edge 50 Pro',
    brand: 'Motorola',
    price: 29999,
    specs: {
      processor: 'Snapdragon 7 Gen 3',
      ram: '8GB',
      storage: '256GB',
      display: '6.7" 144Hz pOLED',
      camera: '50MP + 13MP UW + 10MP Telephoto',
      battery: '4500 mAh',
      os: 'Hello UI',
    },
    features: ['Best Camera under 30k', 'Telephoto Lens', 'Wireless Charging', 'Pantone Colors', 'Curved Display'],
    description: 'The most feature-packed phone under 30k, offering a telephoto lens and wireless charging.',
    imageUrl: 'https://picsum.photos/seed/motoedge50pro/300/400',
  },
  {
    id: 'realme-12-pro-plus',
    name: 'Realme 12 Pro+',
    brand: 'Realme',
    price: 28999,
    specs: {
      processor: 'Snapdragon 7s Gen 2',
      ram: '8GB',
      storage: '256GB',
      display: '6.7" AMOLED 120Hz',
      camera: '50MP Main + 64MP Periscope (3x)',
      battery: '5000 mAh',
      os: 'Realme UI 5.0',
    },
    features: ['Periscope Zoom', 'Best Portrait Camera', 'Luxury Design', 'Leather Back'],
    description: 'Brings flagship-grade zoom capabilities to the mid-range segment.',
    imageUrl: 'https://picsum.photos/seed/realme12proplus/300/400',
  },
  {
    id: 'poco-x6-pro',
    name: 'POCO X6 Pro',
    brand: 'POCO',
    price: 25999,
    specs: {
      processor: 'Dimensity 8300 Ultra',
      ram: '12GB',
      storage: '512GB',
      display: '6.67" 1.5K AMOLED 120Hz',
      camera: '64MP + 8MP UW',
      battery: '5000 mAh',
      os: 'HyperOS',
    },
    features: ['Best Performance under 30k', 'Gaming', 'Fast Storage', 'High Res Display'],
    description: 'The performance king of the segment, perfect for heavy gaming.',
    imageUrl: 'https://picsum.photos/seed/pocox6pro/300/400',
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
      camera: '50MP Main + 50MP UW',
      battery: '5000 mAh',
      os: 'Nothing OS 2.5',
    },
    features: ['Unique Design', 'Clean UI', 'Glyph Lights', 'Balanced Specs', 'Good Camera'],
    description: 'A stylish, balanced phone with clean software and unique aesthetics.',
    imageUrl: 'https://picsum.photos/seed/nothing2a/300/400',
  },
  {
    id: 'oneplus-nord-ce4',
    name: 'OnePlus Nord CE 4',
    brand: 'OnePlus',
    price: 24999,
    specs: {
      processor: 'Snapdragon 7 Gen 3',
      ram: '8GB',
      storage: '128GB',
      display: '6.7" AMOLED 120Hz',
      camera: '50MP (Sony LYT600) + 8MP UW',
      battery: '5500 mAh',
      os: 'OxygenOS 14',
    },
    features: ['Great Battery', '100W Charging', 'Smooth UI', 'Expandable Storage'],
    description: 'Reliable daily driver with a massive battery and super fast charging.',
    imageUrl: 'https://picsum.photos/seed/nordce4/300/400',
  },

  // --- Budget (15k - 20k) ---
  {
    id: 'moto-g84',
    name: 'Motorola Moto G84',
    brand: 'Motorola',
    price: 18999,
    specs: {
      processor: 'Snapdragon 695',
      ram: '12GB',
      storage: '256GB',
      display: '6.55" pOLED 120Hz',
      camera: '50MP OIS + 8MP UW',
      battery: '5000 mAh',
      os: 'Android 13',
    },
    features: ['12GB RAM', 'pOLED Display', 'Leather Back', 'OIS Camera', 'Lightweight', 'Compact'],
    description: 'Best display and design in the under 20k segment with huge RAM.',
    imageUrl: 'https://picsum.photos/seed/motog84/300/400',
  },
  {
    id: 'iqoo-z9',
    name: 'iQOO Z9',
    brand: 'iQOO',
    price: 19999,
    specs: {
      processor: 'Dimensity 7200',
      ram: '8GB',
      storage: '128GB',
      display: '6.67" AMOLED 120Hz',
      camera: '50MP Sony IMX882 OIS',
      battery: '5000 mAh',
      os: 'Funtouch OS 14',
    },
    features: ['Fast Performance', 'Good Main Camera', 'Bright Display', 'Gaming'],
    description: 'Fastest processor in the segment with a capable Sony main camera sensor.',
    imageUrl: 'https://picsum.photos/seed/iqooz9/300/400',
  },
  {
    id: 'realme-narzo-70-pro',
    name: 'Realme Narzo 70 Pro',
    brand: 'Realme',
    price: 19999,
    specs: {
      processor: 'Dimensity 7050',
      ram: '8GB',
      storage: '128GB',
      display: '6.67" AMOLED 120Hz',
      camera: '50MP Sony IMX890 OIS',
      battery: '5000 mAh',
      os: 'Realme UI 5.0',
    },
    features: ['Flagship Camera Sensor', 'Air Gestures', 'Glass Back', 'Fast Charging'],
    description: 'Features a flagship-grade main camera sensor (IMX890) for superior low light photos.',
    imageUrl: 'https://picsum.photos/seed/narzo70pro/300/400',
  },
  {
    id: 'cmf-phone-1',
    name: 'CMF Phone 1',
    brand: 'Nothing',
    price: 15999,
    specs: {
      processor: 'Dimensity 7300',
      ram: '6GB',
      storage: '128GB',
      display: '6.67" AMOLED 120Hz',
      camera: '50MP Main + Depth',
      battery: '5000 mAh',
      os: 'Nothing OS',
    },
    features: ['Modular Design', 'Clean UI', 'Customizable', 'Good Performance'],
    description: 'Unique customizable design with clean software at an affordable price.',
    imageUrl: 'https://picsum.photos/seed/cmfphone1/300/400',
  },

  // --- Entry Level (< 15k) ---
  {
    id: 'samsung-m34',
    name: 'Samsung Galaxy M34',
    brand: 'Samsung',
    price: 12999,
    specs: {
      processor: 'Exynos 1280',
      ram: '6GB',
      storage: '128GB',
      display: '6.5" AMOLED 120Hz',
      camera: '50MP OIS + 8MP UW',
      battery: '6000 mAh',
      os: 'One UI',
    },
    features: ['Huge Battery', 'OIS Camera', 'AMOLED Display', 'Samsung Brand'],
    description: 'Best battery life and display quality for budget users.',
    imageUrl: 'https://picsum.photos/seed/samsungm34/300/400',
  },
  {
    id: 'moto-g64',
    name: 'Motorola Moto G64',
    brand: 'Motorola',
    price: 14999,
    specs: {
      processor: 'Dimensity 7025',
      ram: '8GB',
      storage: '128GB',
      display: '6.5" LCD 120Hz',
      camera: '50MP OIS + 8MP UW',
      battery: '6000 mAh',
      os: 'Android 14',
    },
    features: ['12GB RAM Option', 'OIS Camera', 'Big Battery', 'Stereo Speakers'],
    description: 'Great all-rounder with OIS camera and massive battery.',
    imageUrl: 'https://picsum.photos/seed/motog64/300/400',
  },
  {
    id: 'redmi-13-5g',
    name: 'Redmi 13 5G',
    brand: 'Xiaomi',
    price: 13999,
    specs: {
      processor: 'Snapdragon 4 Gen 2 AE',
      ram: '6GB',
      storage: '128GB',
      display: '6.79" LCD 120Hz',
      camera: '108MP Main',
      battery: '5030 mAh',
      os: 'HyperOS',
    },
    features: ['Glass Back', '108MP Camera', 'Large Display', '5G'],
    description: 'Premium glass design and high-resolution camera on a budget.',
    imageUrl: 'https://picsum.photos/seed/redmi135g/300/400',
  },
  {
    id: 'poco-m6-pro',
    name: 'POCO M6 Pro 5G',
    brand: 'POCO',
    price: 10999,
    specs: {
      processor: 'Snapdragon 4 Gen 2',
      ram: '4GB',
      storage: '128GB',
      display: '6.79" LCD 90Hz',
      camera: '50MP Main',
      battery: '5000 mAh',
      os: 'MIUI 14',
    },
    features: ['Best Value 5G', 'Glass Back', 'Good Performance', 'Clean Looks'],
    description: 'The most affordable recommendation for 5G connectivity.',
    imageUrl: 'https://picsum.photos/seed/pocom6pro/300/400',
  }
];

// Helper Functions
export const searchPhones = (
  query?: string,
  minPrice: number = 0,
  maxPrice: number = 200000,
  brands?: string[]
): Phone[] => {
  const normalizedQuery = query?.toLowerCase().trim() || '';
  const normalizedBrands = brands?.map(b => b.toLowerCase()) || [];

  // 1. Basic Filter (Price & Brand)
  const candidates = MOCK_PHONES.filter(phone => {
    const matchesPrice = phone.price >= minPrice && phone.price <= maxPrice;
    const matchesBrand = normalizedBrands.length === 0 || 
      normalizedBrands.includes(phone.brand.toLowerCase());
    return matchesPrice && matchesBrand;
  });

  if (!normalizedQuery) return candidates;

  // 2. Advanced Query Parsing & Filtering
  return candidates.filter(phone => {
      // Create a comprehensive text blob for search
      const fullText = [
          phone.name,
          phone.brand,
          phone.description,
          ...phone.features,
          phone.specs.os,
          phone.specs.display,
          phone.specs.processor
      ].join(' ').toLowerCase();

      // --- Constraint: OS (Android vs iOS) ---
      // If query explicitly mentions 'android', filter out iOS.
      // If query explicitly mentions 'ios' or 'iphone', filter out non-iOS.
      if (normalizedQuery.includes('android')) {
          if (phone.specs.os.toLowerCase().includes('ios')) return false;
      }
      if (normalizedQuery.includes('ios') || normalizedQuery.includes('iphone')) {
          if (!phone.specs.os.toLowerCase().includes('ios')) return false;
      }

      // --- Constraint: Form Factor (Compact / One-hand) ---
      const compactKeywords = ['compact', 'small', 'mini', 'one-hand', 'small size'];
      const isCompactQuery = compactKeywords.some(k => normalizedQuery.includes(k));
      
      if (isCompactQuery) {
          const hasCompactTag = compactKeywords.some(k => fullText.includes(k));
          
          // Regex to extract screen size (e.g. "6.1" from "6.1 inch")
          const sizeMatch = phone.specs.display.match(/(\d+(\.\d+)?)/);
          const screenSize = sizeMatch ? parseFloat(sizeMatch[0]) : 10;
          
          // Logic: If user specifically asks for compact/one-hand, 
          // the phone must either have the text tag OR be physically small (< 6.45 inches)
          // Exception: Foldables (not in list yet) would rely on tags.
          if (screenSize >= 6.45 && !hasCompactTag) return false;
      }

      // --- Constraint: Feature Keywords ---
      // If user uses specific feature words, check for them broadly.
      // But we shouldn't filter strict for "best" or "phone" or "under".
      
      // Keywords that imply a hard requirement if present
      const featureKeywords = [
          'gaming', 'camera', 'battery', '5g', 'curved', 'amoled', 'lcd', 'zoom', 'portrait'
      ];
      
      // Check which feature keywords are in the query
      const queryFeatures = featureKeywords.filter(k => normalizedQuery.includes(k));
      
      // If specific features are requested, at least ONE relevant term should match in the full text
      // to consider it a candidate. 
      // E.g. "Best gaming phone" -> "gaming" is in queryFeatures. Phone must have "gaming" or high performance specs text.
      if (queryFeatures.length > 0) {
           // We do a loose check: does the phone mention ANY of the requested features?
           // Or does it mention the specific one? 
           // Let's be safe: If query has "gaming", phone text must have "gaming" or "snapdragon 8" or "dimensity 8/9"
           // Simplification: just check if fullText contains the keyword.
           const matchesFeature = queryFeatures.every(f => fullText.includes(f));
           if (!matchesFeature) return false;
      }

      return true;
  });
};

export const getPhoneDetails = (modelName: string): Phone | undefined => {
  const target = modelName.toLowerCase().trim();
  
  // 1. Try Exact Name Match
  const exactMatch = MOCK_PHONES.find(p => p.name.toLowerCase() === target);
  if (exactMatch) return exactMatch;

  // 2. Try Match where model name is a distinct word (prevents "S24" matching "S24 Ultra" incorrectly if S24 Ultra is first)
  // We filter all candidates that include the string
  const candidates = MOCK_PHONES.filter(p => p.name.toLowerCase().includes(target));

  if (candidates.length === 0) return undefined;
  if (candidates.length === 1) return candidates[0];

  // 3. Heuristic: Sort by name length. 
  // If I search "S24", I likely want "Samsung Galaxy S24" (shorter) over "Samsung Galaxy S24 Ultra" (longer).
  // This assumes the user query was specific enough (e.g. "S24") and the shorter result is the base model.
  return candidates.sort((a, b) => a.name.length - b.name.length)[0];
};

export const comparePhones = (modelNames: string[]): Phone[] => {
  const results: Phone[] = [];
  for (const name of modelNames) {
    const phone = getPhoneDetails(name);
    if (phone) results.push(phone);
  }
  return results.slice(0, 3); // Max 3 for comparison
};