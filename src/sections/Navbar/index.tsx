import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import Logo from '../../assests/images/logo.png'

const Links = [['TIMELINE','#timeline'],['PRIZES','#prizes'],['FAQ','#faq'],['TEST','#test']];

const NavLink = ({ href,children }: { children: ReactNode,href: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'green.500'),
    }}
    href={href}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    
      <Flex as="header"
    bg="blackAlpha.700"
    position="fixed"
    width={'100%'}
    zIndex={1}
   >
      <Box bg={useColorModeValue('blackAlpha.700', 'blackAlpha.700')} px={4} width={'100%'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
          <IconButton
            alignItems={'flex-end'}
            position={'relative'}
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image src={Logo}  width={150} /> 
            </Box>
            <HStack  alignContent="end"
             as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
                <Box display="flex"  alignContent="right">
              {Links.map((link) => (
                <NavLink href={link[1]} key={link[0]}>{link[0]} </NavLink>
              ))}
              </Box>
            </HStack>
          </HStack>
         
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} position="static">
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink href={link[1]} key={link[0]}>{link[0]}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      </Flex>
      
    </>
  );
}