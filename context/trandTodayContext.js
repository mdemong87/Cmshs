import { createContext, useContext, useState } from "react";


const TrandContext = createContext();

export function UseTreandToday() {
    return useContext(TrandContext);
}

export function TrandProvider({ children }) {


    const [marquee, setmarquee] = useState({});




    const vl = {
        marquee,
        setmarquee,


    }
    return (
        <TrandContext.Provider value={vl}>
            {children}
        </TrandContext.Provider>
    )
}