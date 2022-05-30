import { Box, HStack, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { IoLogoYoutube, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5"
import { FontContext } from '../contexts/fontContext'

const Footer = () => {
    const { DEFAULT_FONT_SIZE } = useContext(FontContext)

    const socialHandles = [
        {
            icon: <IoLogoYoutube />,
            link: "https://youtube.com/John Doe"
        },
        {
            icon: <IoLogoFacebook />,
            link: "https://facebook.com/John Doe"
        },
        {
            icon: <IoLogoLinkedin />,
            link: "https://linkedin.com/John Doe"
        },
        {
            icon: <IoLogoInstagram />,
            link: "https://instagram.com/John Doe"
        },
        {
            icon: <IoLogoTwitter />,
            link: "https://twitter.com/John Doe"
        },
    ]
    return (
        <Box py={8} textAlign={"center"} position={"relative"}>
            <HStack justifyContent={"center"} gap={5}>
                {socialHandles.map((handle, index) => (
                    <LinkBox key={index} color={"white"} opacity={.65} transition={".5s"} _hover={{ opacity: 1 }} fontSize={DEFAULT_FONT_SIZE * 1.5} >
                        <LinkOverlay href={handle.link}>
                            {handle.icon}
                        </LinkOverlay>
                    </LinkBox>
                ))}
            </HStack>

            <HStack mt={3} justifyContent={"center"} gap={5}>
                <LinkBox color={"whiteAlpha.700"} _hover={{ color: "white" }} fontWeight={300} fontSize={DEFAULT_FONT_SIZE * .85}>
                    <Link to={""}>Terms of service</Link>
                </LinkBox>

                <LinkBox color={"whiteAlpha.700"} _hover={{ color: "white" }} fontWeight={300} fontSize={DEFAULT_FONT_SIZE * .85}>
                    <Link to={""}>Privacy Policy</Link>
                </LinkBox>
            </HStack>

            <Text mt={5} textTransform={"capitalize"} color={"whiteAlpha.700"} fontSize={DEFAULT_FONT_SIZE * .85}>Copyright &copy; Peddle Technologies. All rights reserved</Text>
        </Box>
    )
}

export default Footer