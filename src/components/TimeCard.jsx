import { Heading, Text, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FontContext } from '../contexts/fontContext'

const TimeCard = ({ time, text }) => {
    const { DEFAULT_FONT_SIZE } = useContext(FontContext)
    const FONT_SIZE = DEFAULT_FONT_SIZE

    const title = +time > 1 ? `${text}s` : text
    return (
        <VStack gap={-2} h={"fit-content"} rounded={"md"} bgColor={"white"} fontSize={FONT_SIZE} p={"1.3em"} px={"1.5em"}>
            <Heading fontSize={"2em"} >{ time }</Heading>
            <Text textTransform={"capitalize"} fontWeight={600} fontSize={".8em"}>{ title }</Text>
        </VStack>
    )
}

export default TimeCard