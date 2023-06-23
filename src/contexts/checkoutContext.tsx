import { ReactNode, createContext, useState } from "react";

interface ContextProviderProps {
  children: ReactNode;
}

interface CheckoutContextI {
  productsList: Product[];
  setProductsList: ([]) => void;
  checkoutProducts: Product[];
  setCheckoutProducts: ([]) => void;
}

type Product = {
  id: string;
  name: string;
  imageUrl: string;
  url: string;
  price: string;
};

export const CheckoutContext = createContext({} as CheckoutContextI);

export function CheckoutContextProvider({ children }: ContextProviderProps) {
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [checkoutProducts, setCheckoutProducts] = useState<Product[]>([]);

  return (
    <CheckoutContext.Provider
      value={{
        productsList,
        setProductsList,
        checkoutProducts,
        setCheckoutProducts,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
