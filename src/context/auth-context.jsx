import React, { createContext, useState, useCallback, useEffect } from 'react'


export const AppContext = createContext()


export const AppContextProvider = ({ children }) => {

	const [values, setValues] = useState({
		
		})



	

	
	const setValueFunc = (key, value) => {
		switch (key) {
			
			default:{
				return
			}


		}
	}


	return (
		<AppContext.Provider value={{ values, setValueFunc }}>
			{children}
		</AppContext.Provider>
	)
}
