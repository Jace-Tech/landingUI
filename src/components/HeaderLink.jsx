import { LinkBox } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontContext } from '../contexts/fontContext'
import { PINK } from '../utils'

const HeaderLink = ({ path, title, isDark }) => {
    const { DEFAULT_FONT_SIZE } = useContext(FontContext)
    const FONT_SIZE = DEFAULT_FONT_SIZE * 0.75

    const { pathname } = useLocation()

    let isActive = pathname === path
    return (
        <LinkBox fontSize={FONT_SIZE} textTransform={"uppercase"} fontWeight={600} color={isActive ? PINK : isDark ? "white" : "black"}>
            <Link to={path}>{title}</Link>
        </LinkBox>
    )
}

export default HeaderLink