import React, {useState} from 'react'
export const myContext = React.createContext();


export default function ContextProvider({children}) {
  const [term, setTerm] = useState("")
  const [advancedSearchActive, setAdvancedSearchActive] = useState(false);

  const onHandleTermSearch = (e) => { // manejador de evento, cuando usuario cambie el termino de busqueda
    e.preventDefault();
    setTerm(e.target.value);
  };

  const onHandleCheck = (e) => { // manejador de evento, cuando el usuario cambie a busqueda avanzada
    setAdvancedSearchActive(e.target.checked);
  };


  return (
    <myContext.Provider 
    value={{
      term,
      advancedSearchActive,
      onHandleTermSearch,
      onHandleCheck  
    }}>
      {children}
    </myContext.Provider>
  )
}
