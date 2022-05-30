import { Box, Fade, Flex, Heading, Icon, IconButton, Spacer, useMediaQuery, VStack } from '@chakra-ui/react'
import {BLUE, DARK_PURPLE, PURPLE} from "../utils/index"
import React, { useState } from 'react'
import bg from "../assets/page.jpeg"
import { IoArrowForward } from 'react-icons/io5'
import ContactInput from '../components/ContactInput'
import Button from '../components/Button'

const Contact = ({ isOpen, onToggle }) => {
    const [contact, setContact] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: ""
    })
    const [isMobile] = useMediaQuery("(max-width: 425px)")
    const [isTablet] = useMediaQuery("(max-width: 768px)")

    const handleClick = () => {
        if(contact.email && contact.firstname && contact.lastname && contact.message) {
            alert(JSON.stringify(contact, null, 4))
            setContact({
                firstname: "",
                lastname: "",
                email: "",
                message: ""
            })
            onToggle()
        }
        else {
            alert("Please fill the form")
        }
    }

    return (
        <Fade in={isOpen}>
            <Flex position={"absolute"} left={0} top={0} gap={0} w={"100%"} h={"100%"} zIndex={3000}>
                <Box flex={1} h={"100%"} mr={-16} w={"100%"} bg={`linear-gradient(to right, rgba(124, 15, 213, .15), rgba(124, 15, 213, .15)), url(${bg})`} bgSize={"cover"} bgPos={"left"} className={"blurry"}/>
                <Box w={isTablet ? "70%" : isMobile ? "100%" : "45%"} bgColor={DARK_PURPLE} pos={"relative"} px={10}>
                    <IconButton onClick={onToggle} rounded={"full"} fontSize={"lg"} color={PURPLE} w={16} h={16} pos={"absolute"} left={-8} top={8}>
                        <IoArrowForward />
                    </IconButton>

                    <Heading textAlign={"center"} mt={16} fontSize={"3xl"} color={"white"} lineHeight={1.5} letterSpacing={"wide"} fontWeight={500}>Hey, we are still in the works, <br /> but you can send us a message!</Heading>
                    
                    <VStack mt={10} gap={5}>
                        <ContactInput 
                            label={"First Name"}
                            value={contact.firstname}
                            handleChange={e => setContact(prev => ({...prev, firstname: e.target.value}))}
                            placeholder={"Enter your first name"}
                        />

                        <ContactInput 
                            label={"last Name"}
                            value={contact.lastname}
                            handleChange={e => setContact(prev => ({...prev, lastname: e.target.value}))}
                            placeholder={"Enter your last name"}
                        />

                        <ContactInput 
                            label={"email Name"}
                            value={contact.email}
                            handleChange={e => setContact(prev => ({...prev, email: e.target.value}))}
                            placeholder={"Enter your email address"}
                        />

                        <ContactInput 
                            isText 
                            label={"Tell us what you need help with: "} 
                            value={contact.message}
                            handleChange={e => setContact(prev => ({...prev, message: e.target.value}))}
                            placeholder={"Enter a topic, 'Channel problem...'"}
                            pV={2}
                        />

                        <Box w={"100%"}>
                            <Button handleClick={handleClick} isLarge={true} title={"send now"} color={BLUE} />
                        </Box>
                    </VStack>
                </Box>
            </Flex>
        </Fade>
    )
}

export default Contact