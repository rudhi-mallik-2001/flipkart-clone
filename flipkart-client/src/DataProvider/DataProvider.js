import { createContext, useState } from 'react';
export const Createcontex = createContext(null);
const DataProvider = ({ children }) => {
  const [account, setAccount] = useState('');
  return (
    <Createcontex.Provider value={{
      account,
      setAccount
    }}>
      {children}
    </Createcontex.Provider>
  )
}

export default DataProvider;