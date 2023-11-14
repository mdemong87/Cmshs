import { createContext, useContext } from "react";


const PaymentContext = createContext();

export function UsePayment() {
    return useContext(PaymentContext);
}

export function PaymentProvider({ children }) {







    const vl = {
        marquee,
        setmarquee,


    }
    return (
        <PaymentContext.Provider value={vl}>
            {children}
        </PaymentContext.Provider>
    )
}