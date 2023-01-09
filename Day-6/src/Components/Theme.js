
import React, { createContext, useState } from 'react'
 const ThemeChanger= createContext();

function Theme({children}) {
const [data,setData]=useState();
  return (
    <div>
        <ThemeChanger.Provider value={[data,setData]}>
            {children}
        </ThemeChanger.Provider>
    </div>
  )
}

export {Theme,ThemeChanger}