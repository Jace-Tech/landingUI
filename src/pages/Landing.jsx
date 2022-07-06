import { Box, Container, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import Button from '../components/Button'
import Footer from '../components/Footer'
import FormInput from '../components/FormInput'
import Header from '../components/Header'
import TimeCard from '../components/TimeCard'
import { FontContext } from '../contexts/fontContext'
import { BLUE, DARK_PURPLE } from '../utils'

const Landing = () => {
    const { DEFAULT_FONT_SIZE } = useContext(FontContext)
    const [time, setTime] = useState({
        day: 7,
        hour: 0,
        minute: 0,
        second: 0
    })
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
    })

    const handleClick = () => {
        if(user.firstname && user.lastname && user.email) {
            alert(JSON.stringify(user, null, 4))
            setUser({
                firstname: "",
                lastname: "",
                email: "",
            })
        }
        else {
            alert("Please fill the form")
        }
    }

    const FONT_SIZE = DEFAULT_FONT_SIZE * 2.45
    const styles = {
        bold: {
            fontWeight: 500
        },
        input: {
            display: "flex",
            flex: 1,
            backgroundColor: "transparent",
            padding: `${DEFAULT_FONT_SIZE * .85}px  ${DEFAULT_FONT_SIZE + 12}px`,
            outline: 0,
            fontSize: DEFAULT_FONT_SIZE * .8,
            fontWeight: 300,
            opacity: 1,
        }
    }


    useEffect(() => {
        const handler = setInterval(() => {
            const DUE_DATE = new Date("6 June 2022")
            const TIME = new Date(DUE_DATE - Date.now())
            const day = Math.floor((TIME.getTime() / 1000) / (24 * 60 * 60))
            const hour = TIME.getHours()
            const minute = TIME.getMinutes()
            const second = TIME.getSeconds()

            const time = {
                day,
                hour,
                minute,
                second
            }

            
            setTime(time)
            
            if(TIME < Date.now()) {
                const time = {
                    day: 0,
                    hour: 0,
                    minute: 0,
                    second: 0
                }

                setTime(time)
                clearInterval(handler)
            }
        }, 1000)
    }, [])

    return (
        <Box minH={"100vh"} w={"full"} bgColor={DARK_PURPLE}> 
            <Header isDark />

            <Container mt={10} position={"relative"} zIndex={10}>
                <Heading textAlign={"center"} fontWeight={800} fontSize={FONT_SIZE} letterSpacing={"wide"} lineHeight={1.5} color={"white"} textTransform={"uppercase"}>Something awesome is <br /> coming soon</Heading>
                <Text mt={4} fontSize={FONT_SIZE * .4} textAlign={"center"} color={"white"} fontWeight={"thin"}>
                    Your all-in-one affliate marketing tracking software <strong style={styles.bold}>track</strong>, <strong style={styles.bold}>automate</strong> and <br /> <strong style={styles.bold}>optimize</strong> your campaign.
                </Text>

                <HStack mt={5} gap={2} justifyContent={"center"}>
                    <TimeCard time={time.day} text={"day"} />
                    <TimeCard time={time.hour} text={"hour"} />
                    <TimeCard time={time.minute} text={"minute"} />
                    <TimeCard time={time.second} text={"second"} />
                </HStack>
                
                <Flex mt={5}  color={"whiteAlpha.700"} gap={2} px={2} justifyContent={"center"}>
                    <FormInput 
                        placeholder={"First Name..."}
                        value={user.firstname}
                        handleChange={(e) => setUser(prev => ({ ...prev, firstname: e.target.value }))}
                    />

                    <FormInput 
                        placeholder={"Last Name..."}
                        value={user.lastname}
                        handleChange={(e) => setUser(prev => ({ ...prev, lastname: e.target.value }))}
                    />
                </Flex>

                <Flex mt={5} backgroundColor={"white"} color={"black"} rounded={"full"}>
                    <input style={styles.input} value={user.email} onChange={(e) => setUser(prev => ({ ...prev, email: e.target.value }))}placeholder="Enter your email address" />
                    <Button color={BLUE} title={"join our wait list"} handleClick={handleClick} />
                </Flex>
            </Container>

            <Box mt={20} pt={10} position={"relative"} overflow={"hidden"}>
                <Box 
                    rounded={"full"}
                    borderColor={"whiteAlpha.700"}
                    borderWidth={1}
                    bgColor={"rgba(255, 255, 255, .2)"} 
                    backdropBlur={"sm"}
                    w={"180vmin"}
                    position={"absolute"}
                    left={"50%"}
                    top={0}
                    transform={"translate(-50%)"}
                    h={"180vmin"}
                />
                <Footer />
            </Box>
        </Box>
    )
}

export default Landing
