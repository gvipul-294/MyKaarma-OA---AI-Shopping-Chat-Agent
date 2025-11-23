export interface Phone {
  id: string;
  name: string;
  brand: string;
  price: number;
  specs: {
    processor: string;
    ram: string;
    storage: string;
    display: string;
    camera: string;
    battery: string;
    os: string;
  };
  features: string[];
  description: string;
  imageUrl: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model' | 'system';
  text: string;
  isError?: boolean;
  relatedData?: {
    type: 'product-list' | 'comparison';
    data: Phone[];
  };
}

export enum LoadingState {
  IDLE = 'IDLE',
  THINKING = 'THINKING', // AI is generating text
  FETCHING = 'FETCHING', // AI is calling a tool
}
