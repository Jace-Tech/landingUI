import { createContext, useEffect, useState } from "react";


export const FontContext = createContext()

const FontContextProvider = ({ children }) => {
    const [DEFAULT_FONT_SIZE, setDEFAULT_FONT_SIZE] = useState(16)

    const handleResize = () => {
        const width = window.innerWidth
        if(width >= 1240) {
            setDEFAULT_FONT_SIZE(16)
        }
        else if(width >= 992 && width < 1240) {
            setDEFAULT_FONT_SIZE(15)
        }
        else if(width >= 768 && width < 992) {
            setDEFAULT_FONT_SIZE(14)
        }
        else if(width >= 425 && width < 768) {
            setDEFAULT_FONT_SIZE(13)
        }
        else {
            setDEFAULT_FONT_SIZE(12)
        }

    }
    useEffect(() => {
        const resizeHandler = window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        handleResize()
    }, [])

    return (
        <FontContext.Provider value={{ DEFAULT_FONT_SIZE }}>
            { children }
        </FontContext.Provider>
    )
}

export default FontContextProvider