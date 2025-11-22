import { Store } from './types';

export const CATEGORIES = [
  "All", "Anchor", "Apparel", "Food & Drink", "Entertainment", 
  "Electronics", "Health & Beauty", "Children's", "Books", 
  "Sports", "Specialty", "Services"
];

export const STORE_DATA: Store[] = [
  // Anchor Stores
  { name: "Target", category: "Anchor", domain: "target.com", featured: true, description: "Expect More. Pay Less." },
  { name: "Dillard's", category: "Anchor", domain: "dillards.com", featured: true, description: "The Style of Your Life." },
  { name: "Ashley HomeStore", category: "Anchor", domain: "ashleyfurniture.com", description: "Home Furniture & Decor." },

  // Apparel
  { name: "H&M", category: "Apparel", domain: "hm.com" },
  { name: "Prada", category: "Apparel", domain: "prada.com", featured: true },
  { name: "Victoria's Secret & Pink", category: "Apparel", domain: "victoriassecret.com" },
  { name: "Hollister", category: "Apparel", domain: "hollisterco.com" },
  { name: "Buckle", category: "Apparel", domain: "buckle.com" },
  { name: "Aeropostale", category: "Apparel", domain: "aeropostale.com" },
  { name: "American Eagle", category: "Apparel", domain: "ae.com" },
  { name: "Gap", category: "Apparel", domain: "gap.com" },

  // Children
  { name: "Miniso", category: "Children's", domain: "miniso.com" },
  { name: "Build-A-Bear", category: "Children's", domain: "buildabear.com" },
  { name: "Carter's", category: "Children's", domain: "carters.com" },

  // Food & Drink
  { name: "Crumbl Cookies", category: "Food & Drink", domain: "crumblcookies.com", featured: true },
  { name: "Starbucks", category: "Food & Drink", domain: "starbucks.com" },
  { name: "Grubhouse", category: "Food & Drink", domain: "grubhub.com" }, // Placeholder domain
  { name: "Baskin Robbins", category: "Food & Drink", domain: "baskinrobbins.com" },
  { name: "Temmy Park Café", category: "Food & Drink", description: "Exclusive to Riverside Estates." },
  { name: "Sweet Bites Candy", category: "Food & Drink", description: "Local favorite." },
  { name: "Panda Express", category: "Food & Drink", domain: "pandaexpress.com" },
  { name: "Sbarro", category: "Food & Drink", domain: "sbarro.com" },
  { name: "McDonald's", category: "Food & Drink", domain: "mcdonalds.com" },
  { name: "Chick-fil-A", category: "Food & Drink", domain: "chick-fil-a.com" },
  { name: "Auntie Anne's", category: "Food & Drink", domain: "auntieannes.com" },

  // Books
  { name: "Barnes & Noble", category: "Books", domain: "barnesandnoble.com" },

  // Health & Beauty
  { name: "Bath & Body Works", category: "Health & Beauty", domain: "bathandbodyworks.com" },
  { name: "Sephora", category: "Health & Beauty", domain: "sephora.com", featured: true },

  // Sports
  { name: "Journeys", category: "Sports", domain: "journeys.com" },
  { name: "JD Sports", category: "Sports", domain: "jdsports.com" },

  // Electronics
  { name: "GameStop", category: "Electronics", domain: "gamestop.com" },
  { name: "Apple Store", category: "Electronics", domain: "apple.com", featured: true },

  // Specialty
  { name: "Kay Jewelers", category: "Specialty", domain: "kay.com" },
  { name: "Hot Topic", category: "Specialty", domain: "hottopic.com" },
  { name: "Five Below", category: "Specialty", domain: "fivebelow.com" },
  { name: "TemmyStore", category: "Specialty", description: "The original classic.", customLogoType: "temmy-store" },
  { name: "Yankee Candle", category: "Specialty", domain: "yankeecandle.com" },

  // Entertainment
  { name: "Temmyem World", category: "Entertainment", description: "Theme park fun." },
  { name: "Temmy Cinema", category: "Entertainment", description: "IMAX Experience." },
  { name: "Arcade Machines", category: "Entertainment", description: "Retro gaming." },

  // Services
  { name: "Sunglass Hut", category: "Services", domain: "sunglasshut.com" },
  { name: "Photo Booth", category: "Services", description: "Capture the memory." },
  { name: "ATM", category: "Services", description: "Banking." },
];