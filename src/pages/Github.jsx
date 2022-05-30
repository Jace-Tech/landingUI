import { Box, Container, Flex, IconButton, Spacer, Text, useDisclosure, useMediaQuery, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { fetchRepositories } from '../api/github'
import Filter from '../components/Filter'
import GithubHeader from '../components/GithubHeader'
import GithubRepoCard from '../components/GithubRepoCard'
import GithubRepoSkeleton from '../components/GithubRepoSkeleton'
import { IoOptions } from 'react-icons/io5'

const Github = () => {
    const [repos, setRepos] = useState([])
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(20)
    const toast = useToast()
    const { onToggle, isOpen } = useDisclosure()
    const [isMobile] = useMediaQuery("(max-width: 425px)")

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

    return (
        <Box minH={"100vh"} position={"relative"}>
            {/* Header */}
            <GithubHeader />
            {/* Header */}


            {/* Filter */}
                <IconButton zIndex={100} fontSize={"lg"} bgColor={"gray.700"} _hover={{ bgColor: "gray.700" }} _active={{ bgColor: "gray.700" }} color={"white"} shadow={"lg"} position={"fixed"} bottom={isMobile ? 5 : 16} right={isMobile ? 5 : 16} onClick={onToggle}>
                    <IoOptions />
                </IconButton>

                <Filter onToggle={onToggle} page={page} perPage={perPage} isOpen={isOpen} handleChangePage={e => setPage(e.target.value)} handleChangePerPage={e => setPerPage(e.target.value)} />
            {/* Filter */}


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