import { Badge, Box, Flex, Heading, HStack, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import React from 'react'

const GithubRepoCard = ({ stars, avatar, desc, name, link, issues, update, owner}) => {
    const getDay = () => {
        const dateParser = new Intl.DateTimeFormat("en-us", {
            dateStyle: "long"
        })
        const time = new Date(update)
        return dateParser.format(time)
    }
    const day = getDay()

    return (
        <Flex shadow={"lg"} minW={400} maxW={600} my={5} rounded={"sm"}>
            <LinkBox w={130}>
                <LinkOverlay href={owner}>
                    <Image w={"100%"} objectFit={"cover"} src={avatar} />
                </LinkOverlay>
            </LinkBox>
            <Box ml={5} py={3} flex={1} pr={5}>
                <LinkBox>
                    <Heading fontSize={"xl"} fontWeight={600} color={"blue.600"}>
                        <LinkOverlay href={link}>
                            {name}
                        </LinkOverlay>
                    </Heading>
                </LinkBox>
                <Text fontSize={"sm"} color={"gray.600"} mt={2} lineHeight={1.5}>
                    { desc }
                </Text>
                <HStack mt={5}>
                    <Badge color={"green.600"} bgColor={"green.50"} py={1} px={2}>
                        Stars: {stars}
                    </Badge>

                    <Badge color={"gray.600"} bgColor={"gray.100"} py={1} px={2}>
                        Issues: {issues}
                    </Badge>

                    <Text fontSize={"sm"} color={"gray.500"}>Updated {day} </Text>
                </HStack>
            </Box>
        </Flex>
    )
}

export default GithubRepoCard