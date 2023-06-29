import { ReactNode, createContext, useState } from "react";

interface ContextProviderProps {
  children: ReactNode;
}

interface CheckoutContextI {
  checkoutProducts: Product[];
  setCheckoutProducts: ([]) => void;
}

export type Product = {
  id: string;
  name: string;
  imageUrl: string;
  url: string;
  price: number;
  formattedPrice: string;
};

export const CheckoutContext = createContext({} as CheckoutContextI);

export function CheckoutContextProvider({ children }: ContextProviderProps) {
  const [checkoutProducts, setCheckoutProducts] = useState<Product[]>([]);

  return (
    <CheckoutContext.Provider
      value={{
        checkoutProducts,
        setCheckoutProducts,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
