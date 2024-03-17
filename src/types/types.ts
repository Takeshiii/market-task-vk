export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ButtonComponentProps {
  type: string;
  startIcon?: string;
  disabled?: boolean;
  onClick: () => void;
}

export interface ProductButtonProps {
  quantity: number;
  handleDecreaseClick: () => void;
  handleIncreaseClick: () => void;
  handleDeleteClick: () => void;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface CartState {
  cartItems: CartItem[];
  totalPrice: number;
}
