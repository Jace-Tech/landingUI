import { Badge, Box, Container, Flex, Heading, HStack, Image, LinkBox, LinkOverlay, Spacer, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchRepositories } from '../api/github'
import GithubRepoCard from '../components/GithubRepoCard'
import GithubRepoSkeleton from '../components/GithubRepoSkeleton'
import { DARK_PURPLE, PURPLE } from '../utils'

const Github = () => {
    const [repos, setRepos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(20)
    const toast = useToast()

    const handleFetchRepo = async () => {
        const result = await fetchRepositories(page, perPage)
        if("error" in result) {
            toast({
                title: result.error,
                status: "error",
                isClosable: true,
                duration: 5000
            })
            return
        }
        const data = result?.map(repo => {
            const item = {
                id: repo.id,
                avatar: repo.owner.avatar_url,
                stars: repo.stargazers_count,
                desc: repo.description,
                name: repo.name,
                issues: repo.open_issues_count,
                update: repo.updated_at,
                link: repo.html_url,
                owner: repo.owner.html_url
            }

            return item
        })

        setRepos(data)

    }

    useEffect(() => {
        handleFetchRepo(page, perPage)
    }, [page, perPage])

    useEffect(() => console.log(repos), [repos])
    return (
        <Box h={"100vh"} position={"relative"}>
            {/* Header */}
            <Box py={5} bgColor={PURPLE} shadow={"lg"} position={"sticky"} top={0} left={0} zIndex={100}>
                <Container maxW={"container.xl"}>
                    <LinkBox color={"white"}>
                        <Link to={""}>
                            <Heading fontSize={"3xl"} fontWeight={600}>GitHub Trends</Heading>
                        </Link>
                    </LinkBox>
                </Container>
            </Box>
            {/* Header */}

            <Flex>
                <Spacer />
            </Flex>

            <Box mt={10}>
                <Container maxW={"container.lg"}>
                    { 
                        repos.length ? 
                            repos.map(repo => <GithubRepoCard key={repo.id} {...repo} />) :
                            new Array(10).fill("_").map((_, index) => <GithubRepoSkeleton key={index} />) 
                    }
                </Container>
            </Box>
        </Box>
    )
}

export default Github