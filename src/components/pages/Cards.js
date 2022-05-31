import React, { useState, useEffect } from "react";
import "./cards.css"
import githubIcon from "../images/GitHub-Mark-64px.png"
import githubIconLight from "../images/GitHub-Mark-Light-64px.png"
import { Button, Text, Heading, Center, Box, useColorModeValue, Image, Stack, Avatar, Grid, SimpleGrid } from "@chakra-ui/react";
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
                
                <Text color={'gray.500'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum.
                </Text>
            </Stack>
            
            </Box>
        </Center>
            )
        })}
           
        </SimpleGrid>

        
     
    )
    
};




// 1
function githubIcon1 () {window.open("https://github.com/rubbertoe64/note-taker", "_blank") ;}

function worldIcon1 () {window.open("https://note-taker-api-online.herokuapp.com/", "_blank") ;}




export default Cards;