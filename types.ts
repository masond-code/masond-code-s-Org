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
}

export interface GeneratedImage {
  url: string;
  prompt: string;
}