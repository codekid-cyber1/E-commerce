export interface CartItemType {
  id: string | number;
  quantity?: number;
  [key: string]: any;
}

export interface CartState {
  cartItems: CartItemType[];
}

export const initialState: CartState = {
  cartItems: [],
};

export type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItemType }
  | { type: "INCREMENT"; payload: string | number }
  | { type: "DECREMENT"; payload: string | number }
  | { type: "REMOVE_FROM_CART"; payload: string | number }
  | { type: "INITIALIZE_CART"; payload: CartItemType[] };

export function CartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "INITIALIZE_CART": {
      return {
        ...state,
        cartItems: action.payload,
      };
    }
    case "ADD_TO_CART": {
      const item = action.payload;
      const existItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id,
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
              : cartItem,
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...item, quantity: 1 }],
      };
    }
    case "INCREMENT": {
      const id = action.payload;
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item,
          )
          .filter((item) => item.quantity && item.quantity > 0),
      };
    }
    case "DECREMENT": {
      const id = action.payload;
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === id ? { ...item, quantity: (item.quantity || 1) - 1 } : item,
          )
          .filter((item) => item.quantity && item.quantity > 0),
      };
    }
    case "REMOVE_FROM_CART": {
      const removeId = action.payload;

      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== removeId),
      };
    }
    default:
      return state;
  }
}
