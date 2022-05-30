import { FormControl, FormLabel, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'

const ContactInput = ({ label, placeholder, value, handleChange, isText, pV }) => {
    
    if(isText) {
        return (
            <FormControl>
                <FormLabel mt={5} textTransform={"capitalize"} mb={4} color={"white"} fontSize={"sm"} fontWeight={400}>{label}</FormLabel>
                <Textarea bgColor={"white"} color={"gray.800"} _placeholder={{ color: "gray.600", textTransform: "capitalize" }} py={pV} fontSize={"sm"} minH={36} placeholder={placeholder} value={value} onChange={handleChange}></Textarea>
            </FormControl>
        )
    }
    return (
        <FormControl>
            <FormLabel textTransform={"capitalize"} mb={4} color={"white"} fontSize={"sm"} fontWeight={400}>{ label }</FormLabel>
            <Input outline={"none"} bgColor={"white"} color={"gray.800"} _placeholder={{color: "gray.600", textTransform: "capitalize"}} py={8} fontSize={"sm"} size={"lg"} placeholder={placeholder} value={value} onChange={handleChange} />
        </FormControl>
    )
}

export default ContactInput