import { react , createContext } from "react";

const itemContext = createContext();

  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);

function CustomItemContext( {children} ) {
    reuturn (
        <itemContext.Provider value={{total, setTotal, item, setItem}}>
            {children}
        </itemContext.Provider>
    )
}

export { itemContext };
export default CustomItemContext;