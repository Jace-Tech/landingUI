import { Box, Flex, HStack, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GithubRepoSkeleton = () => {
    return (
        <Flex shadow={"md"} my={3} w={"100%"} rounded={"md"}>
            <Skeleton h={150} w={200} />
            <Box ml={5} py={3} pr={3}>
                <SkeletonText noOfLines={1} size={"20px"} />
                <SkeletonText mt={5} noOfLines={3} spacing={4} />   

                <HStack mt={5}>
                    <Skeleton h={"20px"} w={"600px"} />
                    <Skeleton h={"20px"} />
                    <SkeletonText noOfLines={1} spacing={4} />
                </HStack>
            </Box>
        </Flex>
    )
}

export default GithubRepoSkeleton