import { Box, Flex, IconButton, Input, SimpleGrid, Slide, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { IoClose } from "react-icons/io5"

const Filter = ({ isOpen, onToggle, page, perPage, handleChangePage, handleChangePerPage }) => {
    return (
        <Slide in={isOpen} style={{ zIndex: 1500 }}>
            <Box position="fixed" right="0" top="0" boxShadow="xl" bg="white" p={5} width={{ sm: "90%", md: "70%", lg: "35%" }} h="100vh" zIndex={1500}>
                <Flex alignItems="center" justifyContent="flex-end" pb={2} borderBottom="1px" borderBottomColor="gray.200">
                    <Text fontSize="xl" fontWeight="500" color="gray.600" textTransform="capitalize"> filters </Text>
                    <Spacer />
                    <IconButton size="sm" onClick={onToggle} icon={<IoClose fontSize="large" color="#777" />} variant='ghost'></IconButton>
                </Flex>

                <Box my={5}>
                    <SimpleGrid columns={2} spacing={5}>
                        <Box>
                            <Text fontWeight="400" color="gray.500" mb={2} fontSize="sm" textTransform="uppercase">Page</Text>
                            <Box>
                                <Input width="100%" type="number" placeholder='Min' defaultValue={page} onChange={handleChangePage} />
                            </Box>
                        </Box>

                        <Box>
                            <Text fontWeight="400" color="gray.500" mb={2} fontSize="sm" textTransform="uppercase">No per page</Text>
                            <Box>
                                <Input width="100%" type="number" placeholder='Min' defaultValue={perPage} onChange={handleChangePerPage} />
                            </Box>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
        </Slide>
    )
}

export default Filter