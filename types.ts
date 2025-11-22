export type StoreCategory = 
  | "Anchor" 
  | "Apparel" 
  | "Children's" 
  | "Food & Drink" 
  | "Books" 
  | "Health & Beauty" 
  | "Sports" 
  | "Electronics" 
  | "Specialty" 
  | "Entertainment" 
  | "Services" 
  | "All";

export interface Store {
  name: string;
  category: StoreCategory;
  domain?: string; // Used for fetching logos
  description?: string;
  featured?: boolean;
  customLogoType?: 'temmy-store'; // Added for custom CSS logos
  floor?: string; // '1', '2', '3', 'UG'
}

export interface GeneratedImage {
  url: string;
  prompt: string;
}