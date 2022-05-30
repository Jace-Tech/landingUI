import React, { useContext } from 'react'
import { FontContext } from '../contexts/fontContext'

const FormInput = ({ value, handleChange, placeholder }) => {
    const { DEFAULT_FONT_SIZE } = useContext(FontContext)
    
    const styles = {
        input: {
            display: "flex",
            backgroundColor: "transparent",
            padding: `${DEFAULT_FONT_SIZE * .5}px ${(DEFAULT_FONT_SIZE * 0.8) + 2}px`,
            margin: ` ${(DEFAULT_FONT_SIZE * 0.8) - 2}px 0`,
            outline: 0,
            fontSize: DEFAULT_FONT_SIZE * .8,
            borderBottom: `2px solid rgba(255, 255, 255, .2)`
        }
    }

    return (
        <input style={styles.input} value={value} onChange={handleChange} placeholder={placeholder} />
    )
}

export default FormInput