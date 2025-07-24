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

    const handleAdd = (price) => {
    setTotal(total + price)
    setItem(item + 1)
  };

  const handleRemove = (price) => {
    if(total <= 0) {
      return;
    }
    setItem(item - 1)
    setTotal((prevState) => prevState - price)
  };

  function handleReset() {
   setTotal(0);
   setItem(0); 
}
    
    return (
        <itemContext.Provider value={{total, item, handleAdd,handleReset, handleRemove}}>
            {children}
        </itemContext.Provider>
    )
}

export { itemContext, useValue };
export default CustomItemContext;