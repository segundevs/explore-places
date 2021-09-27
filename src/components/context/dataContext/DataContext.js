import { createContext, useContext, useEffect, useReducer } from "react";
import DataReducer from './DataReducer';

export const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
}


const DataProvider = ({children}) => {

  const initialValues = {}

  const [response, dispatch] = useReducer(DataReducer, initialValues);



  return (
    <DataContext.Provider value={{response, dispatch}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;