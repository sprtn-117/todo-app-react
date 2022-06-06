import React from "react";



function useLocalStorage(itemName, initialValue){
    const [error, SetError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue)

    React.useEffect(() => {
        setTimeout(() => {
            try{
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem;
                
                if (!localStorageItem){
                localStorage.setItem(itemName, JSON.stringify(initialValue))
                parsedItem = initialValue
                }
                else{
                parsedItem = JSON.parse(localStorageItem)
                }
                
                setItem(parsedItem)
                setLoading(false)
                }
            catch(error){
                SetError(error)
            }
            }, 1000)
    })

    const saveItem = (newItem) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem))
            setItem(newItem)
        } catch (error) {
            
        }
    }
    
    return {item, saveItem, loading, error}

  }

  export {useLocalStorage};