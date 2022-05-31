import React, { useState, useEffect } from "react";
import "./cards.css"
import { Text, Heading, Center, Box,  Stack, SimpleGrid, Image } from "@chakra-ui/react";
import GithubIconLight from "../images/GitHub-Mark-Light-64px.png"
import axios from "axios";




function Cards() {
    const [repos, setRepos] = useState([])
    const getData = () => {
        axios('https://api.github.com/users/rubbertoe64/starred').then(response => {
            setRepos(response.data)
        })
        
    }
    useEffect(() => getData(), [])
    console.log(repos)

    
    
    return (
        <SimpleGrid columns={3} spacing={5} minChildWidth='420px' className="w3 w3-animate-top">
        {repos.map((repo) => {
            return(
            <Center py={6} key={repo.id}>
        
            <Box
            maxW={'445px'}
            w={'full'}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            bg={'black'}
            overflow={'hidden'}>
                <Box>
                    <Center>
                        <Heading>{repo.description}</Heading>
                    </Center>
                    
                </Box>
        
            <Stack>
                <Center>
                    <h3
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    {`Repo Create Date: ${new Date(repo.created_at).toLocaleDateString('en-US')}`}
                    </h3>
                </Center>
                <Center>
                    <SimpleGrid columns={2} spacing={10}>
                        <Image src={GithubIconLight} />
                        <Image  w={16} src="https://upload.wikimedia.org/wikipedia/commons/7/71/Earth_icon_2.png"/>
                    </SimpleGrid>
                </Center>
                
            </Stack>
            
            </Box>
        </Center>
            )
        })}
           
        </SimpleGrid>

        
     
    )
    
};



export default Cards;