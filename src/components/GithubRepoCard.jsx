import { Badge, Box, Flex, Heading, HStack, Image, LinkBox, LinkOverlay, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const GithubRepoCard = ({ stars, avatar, desc, name, link, issues, update, owner}) => {
    const [isMobile] = useMediaQuery("(max-width: 425px)")

    const getDay = () => {
        const dateParser = new Intl.DateTimeFormat("en-us", {
            dateStyle: "long"
        })
        const time = new Date(update)
        return dateParser.format(time)
    }

    return (
        <Flex shadow={"lg"} maxW={"80%"} my={5} rounded={"sm"} flexWrap={"wrap"} gap={5}>
            <LinkBox w={isMobile ? "100%" : 150}>
                <LinkOverlay href={owner} w={"100%"} h={isMobile ? "100px" : 150}>
                    <Image w={"100%"} h={"100%"} objectFit={"cover"} src={avatar} />
                </LinkOverlay>
            </LinkBox>

            <Box flex={1} px={3} py={3}>
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

                <Flex mt={5} flexWrap={"wrap"} gap={3}>
                    <HStack>
                        <Badge color={"green.600"} bgColor={"green.50"} py={1} px={2}>
                            Stars: {stars}
                        </Badge>

                        <Badge color={"gray.600"} bgColor={"gray.100"} py={1} px={2}>
                            Issues: {issues}
                        </Badge>
                    </HStack>
                    <Text minW={200} fontSize={"sm"} color={"gray.500"}>Updated { getDay() } </Text>
                </Flex>
            </Box>
        </Flex>
    )
}

export default GithubRepoCard