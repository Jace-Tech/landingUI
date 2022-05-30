import { Box, Container, Flex, Hide, HStack, Image, LinkBox, Spacer } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import logoWhite from "../assets/logo-white.png"
import logo from "../assets/logo.png"
import { FontContext } from '../contexts/fontContext'
import Button from './Button'
import HeaderLink from './HeaderLink'

const Header = ({ isDark }) => {
    const { DEFAULT_FONT_SIZE } = useContext(FontContext)
    const SIZE = DEFAULT_FONT_SIZE * 5.1

    const links = [
        { path: '/about', title: "about us" },
        { path: '/blog', title: "blog" },
    ]

    return (
        <Box py={8}>
            <Container maxW={"container.lg"}>
                <Flex alignItems={"center"}>
                    <LinkBox>
                        <Link to={"/"}>
                            <Image src={isDark ? logoWhite : logo} w={SIZE} objectFit={"contain"} />
                        </Link>
                    </LinkBox>

                    <Spacer />

                    <Hide below={"768"}>
                        <HStack gap={10}>
                            { links.map((link, index) => (
                                <HeaderLink isDark={isDark} key={`${link.title}-${index}`} {...link} index={index} />
                            ))}
                            <Button title={"contact us"}/>
                        </HStack>
                    </Hide>
                </Flex>
            </Container>
        </Box>
    )
}

export default Header