import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';

import img1 from '../../assests/images/prizes/1.png'
import img2 from '../../assests/images/prizes/2.png'
import img3 from '../../assests/images/prizes/3.png'


function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function Prizes() {
  return (
    <div id='prizes'>
    <Box py={12}>
      <VStack spacing={2} pt={10} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Prizes
        </Heading>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={10}           boxShadow='dark-lg'
>
            <Text fontWeight="600" fontSize="3xl">
              Third Place
            </Text>

            <Box
          rounded={'lg'}
          pos={'relative'}
          height={'320px'}
          alignItems={'center'}
          alignContent={"center"}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={300}
            width={202}
            objectFit={'cover'}
            src={img3}
          />
        </Box>

<HStack justifyContent="center">   <Text fontSize="2xl" fontWeight="600">
            A cash prize of
              </Text></HStack>
            <HStack justifyContent="center">
         
              
              <Text fontSize="3xl" fontWeight="600">
                Rs
              </Text>
              <Text fontSize="5xl" fontWeight="900">
              25,000
              </Text>

            </HStack>
            <HStack justifyContent="center">   <Text fontSize="2xl" fontWeight="600">
            + swag + certificates 
              </Text></HStack>
          </Box>


        </PriceWrapper>

        <PriceWrapper>
        <Box py={6} px={16}           boxShadow='dark-lg'
>
            <Text fontWeight="600" fontSize="4xl">
              First Place
            </Text>

            <Box
          rounded={'lg'}
          pos={'relative'}
          height={'340px'}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={310}
            width={222}
            objectFit={'cover'}
            src={img1}
          />
        </Box>

<HStack justifyContent="center">   <Text fontSize="2xl" fontWeight="600">
            A cash prize of
              </Text></HStack>
            <HStack justifyContent="center">
         
              
              <Text fontSize="3xl" fontWeight="600">
                Rs
              </Text>
              <Text fontSize="5xl" fontWeight="900">
              100,000
              </Text>

            </HStack>
            <HStack justifyContent="center">   <Text fontSize="2xl" fontWeight="600">
            + swag + certificates 
              </Text></HStack>
          </Box>
        </PriceWrapper>



        <PriceWrapper>
 <Box py={4} px={10}           boxShadow='dark-lg'
>
            <Text fontWeight="600" fontSize="3xl">
              Second Place
            </Text>
              
            <Box
          rounded={'lg'}
          pos={'relative'}
          height={'320px'}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={300}
            width={202}
            objectFit={'cover'}
            src={img2}
          />
        </Box>

<HStack justifyContent="center">   <Text fontSize="2xl" fontWeight="600">
            A cash prize of
              </Text></HStack>
            <HStack justifyContent="center">
         
              
              <Text fontSize="3xl" fontWeight="600">
                Rs
              </Text>
              <Text fontSize="5xl" fontWeight="900">
              50,000
              </Text>

            </HStack>
            <HStack justifyContent="center">   <Text fontSize="2xl" fontWeight="600">
            + swag + certificates 
              </Text></HStack>
          </Box>
        </PriceWrapper>
      </Stack>
    </Box>
    </div>
  );
}