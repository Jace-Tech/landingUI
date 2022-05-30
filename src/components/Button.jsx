import { LinkBox } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FontContext } from '../contexts/fontContext'
import { PURPLE } from '../utils'

const Button = ({ handleClick, color, isDark, title }) => {
    const { DEFAULT_FONT_SIZE } = useContext(FontContext)
    const FONT_SIZE = DEFAULT_FONT_SIZE * 0.75
    const SIZE = DEFAULT_FONT_SIZE * 0.8

    return (
        <LinkBox userSelect={"none"} cursor={"pointer"} color={color ? "white" : "black"} onClick={handleClick} display={"flex"} rounded={"full"} shadow={"md"} fontSize={FONT_SIZE} textTransform={"uppercase"} fontWeight={600} w={"fit-content"} bgColor={color ? color : "white"} p={SIZE - 0.5} px={ 2 * SIZE }>
            {title ? title : "Button"} 
        </LinkBox>
    )
}

export default Button