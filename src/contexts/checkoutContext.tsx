import { ReactNode, createContext, useState } from "react";

interface ContextProviderProps {
    children: ReactNode
}

interface CheckoutContextI {
    checkoutProductsList: Product[]
    setCheckoutProductsList: ([]) => void
}

type Product = {
    id: string,
    name: string,
    imageUrl: string,
    url: string,
    price: string,
}

export const CheckoutContext = createContext({} as CheckoutContextI)

export function CheckoutContextProvider({ children }: ContextProviderProps) {
    const [checkoutProductsList, setCheckoutProductsList] = useState<Product[]>([])

    return (
        <CheckoutContext.Provider value={{checkoutProductsList, setCheckoutProductsList}}>
            {children}
        </CheckoutContext.Provider>
    )
}