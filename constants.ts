import { Store } from './types';

export const CATEGORIES = [
  "All", "Anchor", "Apparel", "Food & Drink", "Entertainment", 
  "Electronics", "Health & Beauty", "Children's", "Books", 
  "Sports", "Specialty", "Services"
];

export const STORE_DATA: Store[] = [
  // Anchor Stores
  { name: "Target", category: "Anchor", domain: "target.com", featured: true, description: "Expect More. Pay Less.", floor: "1" },
  { name: "Dillard's", category: "Anchor", domain: "dillards.com", featured: true, description: "The Style of Your Life.", floor: "1" },
  { name: "Ashley HomeStore", category: "Anchor", domain: "ashleyfurniture.com", description: "Home Furniture & Decor.", floor: "2" },

  // Apparel
  { name: "H&M", category: "Apparel", domain: "hm.com", floor: "1" },
  { name: "Prada", category: "Apparel", domain: "prada.com", featured: true, floor: "2" },
  { name: "Victoria's Secret & Pink", category: "Apparel", domain: "victoriassecret.com", floor: "2" },
  { name: "Hollister", category: "Apparel", domain: "hollisterco.com", floor: "1" },
  { name: "Buckle", category: "Apparel", domain: "buckle.com", floor: "2" },
  { name: "Aeropostale", category: "Apparel", domain: "aeropostale.com", floor: "1" },
  { name: "American Eagle Outfitters", category: "Apparel", domain: "ae.com", floor: "1" },
  { name: "Gap", category: "Apparel", domain: "gap.com", floor: "1" },
  { name: "Francesca's", category: "Apparel", domain: "francescas.com", floor: "1" },

  // Children
  { name: "Miniso", category: "Children's", domain: "miniso.com", floor: "1" },
  { name: "Build-A-Bear Workshop", category: "Children's", domain: "buildabear.com", floor: "1" },
  { name: "Carter's Babies & Kids", category: "Children's", domain: "carters.com", floor: "1" },

  // Food & Drink
  { name: "Crumbl Cookies", category: "Food & Drink", domain: "crumblcookies.com", featured: true, floor: "1" },
  { name: "Starbucks", category: "Food & Drink", domain: "starbucks.com", floor: "1" },
  { name: "Grubhouse", category: "Food & Drink", domain: "grubhub.com", floor: "1", description: "Casual Dining" },
  { name: "Baskin Robbins", category: "Food & Drink", domain: "baskinrobbins.com", floor: "Food Court" },
  { name: "Temmy Park Café", category: "Food & Drink", description: "Exclusive to Riverside Estates.", floor: "2" },
  { name: "Sweet Bites Candy", category: "Food & Drink", description: "Local favorite.", floor: "1" },
  { name: "Panda Express", category: "Food & Drink", domain: "pandaexpress.com", floor: "Food Court" },
  { name: "Sbarro", category: "Food & Drink", domain: "sbarro.com", floor: "Food Court" },
  { name: "McDonald's", category: "Food & Drink", domain: "mcdonalds.com", floor: "Food Court" },
  { name: "Chick-fil-A", category: "Food & Drink", domain: "chick-fil-a.com", floor: "Food Court" },
  { name: "Auntie Anne's", category: "Food & Drink", domain: "auntieannes.com", floor: "1" },

  // Books
  { name: "Barnes & Noble", category: "Books", domain: "barnesandnoble.com", floor: "2" },

  // Health & Beauty
  { name: "Bath & Body Works", category: "Health & Beauty", domain: "bathandbodyworks.com", floor: "1" },
  { name: "Sephora", category: "Health & Beauty", domain: "sephora.com", featured: true, floor: "1" },
  { name: "GNC", category: "Health & Beauty", domain: "gnc.com", floor: "1" },
  { name: "Thaya Day Spa", category: "Health & Beauty", domain: "thaya.com", description: "Luxury spa services.", floor: "2" },

  // Sports
  { name: "Journeys", category: "Sports", domain: "journeys.com", floor: "1" },
  { name: "JD Sports", category: "Sports", domain: "jdsports.com", floor: "1" },

  // Electronics
  { name: "GameStop", category: "Electronics", domain: "gamestop.com", floor: "2" },
  { name: "Apple Store", category: "Electronics", domain: "apple.com", featured: true, floor: "1" },

  // Specialty
  { name: "Kay Jewelers", category: "Specialty", domain: "kay.com", floor: "2" },
  { name: "Hot Topic", category: "Specialty", domain: "hottopic.com", floor: "1" },
  { name: "Five Below", category: "Specialty", domain: "fivebelow.com", floor: "1" },
  { name: "TemmyStore", category: "Specialty", description: "The original classic.", customLogoType: "temmy-store", floor: "1" },
  { name: "Yankee Candle", category: "Specialty", domain: "yankeecandle.com", floor: "1" },

  // Entertainment
  { name: "Temmyem World", category: "Entertainment", description: "Indoor Playground", floor: "3" },
  { name: "Temmy Cinema", category: "Entertainment", description: "IMAX Experience", floor: "3" },
  { name: "Arcade Machines", category: "Entertainment", description: "Retro gaming", floor: "3" },

  // Services
  { name: "Sunglass Hut", category: "Services", domain: "sunglasshut.com", floor: "1" },
  { name: "Photo Booth", category: "Services", description: "Capture the memory.", floor: "Corridors" },
  { name: "ATM", category: "Services", description: "Banking.", floor: "All Floors" },
];