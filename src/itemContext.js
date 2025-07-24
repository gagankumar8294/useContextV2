import { useContext , createContext, useState } from "react";

const itemContext = createContext();

// Custom hook as a function
function useValue() {
    const value = useContext(itemContext);
    return value;
}

function CustomItemContext({children}) {
    
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    
    return (
        <itemContext.Provider value={{total, setTotal, item, setItem}}>
            {children}
        </itemContext.Provider>
    )
}

export { itemContext, useValue };
export default CustomItemContext;