import Head from 'react-helmet';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue,

} from '@chakra-ui/react';

import React from 'react';

import Particles from 'react-tsparticles';
import {loadFull } from "tsparticles";
import { Engine } from 'tsparticles-engine';




export default function Hero() {

  const particlesInit = async (main: Engine) => {
    console.log(main);


    await loadFull(main);
}


  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container maxW={'8xl'}>
      <Particles  
    id="tsparticles2"
    init={particlesInit}
    options= {{
      fullScreen:{
        enable:true
      },
        fpsLimit: 30,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
          }
          
        },
        
        
        background : {
          color:{
            value: "transparent"
          }
        },
        particles :{
          number : {
            density: {
              enable: true,
              area:1000,
            },
            value: 25,
          },
            color:{
                value:"#ffffff"
            },
            links:{
                color: {
                    value: "#ffffff"
                },
                enable:true,
                opacity: 0.5
            },
            move: {
                enable: true,
                speed: 2,
                outModes: {
                   default: "bounce"
      }

            },
            opacity:{
                value:0.5
            },
            size:{
                value:2
            }
        }
    }}
    
    />

        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 18, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '8xl' }}
            lineHeight={'110%'}
            letterSpacing={15}>
           MADHACK 2.0 <br />

          </Heading>
          <Text color={'gray.500'}
          
          fontSize={{ base: '2xl', sm: '4xl', md: '3xl' }}
          
          >
          BATTLE OUT YOUR MOBILE APPLICATION DEVELOPMENT SKILLS IN THE ULTIMATE HACKATHON
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>

<Button
      
        px={10}
        py={6}
        bg={useColorModeValue('#151f21', 'gray.900')}
        colorScheme={'green'}
        bgColor={'green.400'}
        color={'white'}
        rounded={'md'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
          bgColor: 'green.500'
        }}
      >
        <Text fontSize={{ base: '2xl', sm: '4xl', md: '3xl' }}>
            Register Now   
        </Text>  
 </Button>


          
           
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

