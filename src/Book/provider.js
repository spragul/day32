import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
    const [book, setBook] = useState([]);
    const [issuedbook, setIssuedbook] = useState([]);
    useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await fetch("https://642c3e4b208dfe25472bac85.mockapi.io/library/libraryapp", {
                    method: "GET"
                });
                const data = await response.json();
                setBook(data)
            } catch (error) {
                console.log(error);
            }
        }
        getDetails();
    }, [])
    useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await fetch("https://642c3e4b208dfe25472bac85.mockapi.io/library/issuedbook", {
                    method: "GET"
                });
                const data = await response.json();
                setIssuedbook(data)
            } catch (error) {
                console.log(error);
            }
        }
        getDetails();
    }, [])


    return (
        <AppContext.Provider
            value={{
                book,
                setBook,
                issuedbook,
                setIssuedbook
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
export const AppState = () => {
    return useContext(AppContext)
}
export default AppProvider
