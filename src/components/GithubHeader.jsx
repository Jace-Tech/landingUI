import { Box, Container, Heading, LinkBox } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'



const GithubHeader = () => {
    return (
        <Box py={5} bgColor={"gray.900"} shadow={"lg"} position={"sticky"} top={0} left={0} zIndex={100}>
            <Container maxW={"container.xl"}>
                <LinkBox color={"white"}>
                    <Link to={"/comingsoon"}>
                        <Heading fontSize={"3xl"} fontWeight={600}>GitHub Trends</Heading>
                    </Link>
                </LinkBox>
            </Container>
        </Box>
    )
}

export default GithubHeader