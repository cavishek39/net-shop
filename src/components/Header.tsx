import React from 'react'
import {
  Box,
  Button,
  Grid,
  Text,
  IconButton,
  VStack,
  Link,
} from '@chakra-ui/react'
import { BsCart4 } from 'react-icons/bs'
import { Link as ReactLink } from 'react-router-dom'

const Header = () => {
  return (
    <Grid
      templateColumns='repeat(2, 1fr)'
      alignItems={'center'}
      backgroundColor='aliceblue'>
      <Text padding='2' fontWeight={'bold'} fontSize={'x-large'}>
        NET SHOP
      </Text>

      <Grid templateColumns='repeat(6, 1fr)' padding={2} alignItems='center'>
        <Link fontSize={'md'} as={ReactLink} to='/'>
          HOME
        </Link>
        <Link fontSize={'md'} as={ReactLink} to='/about'>
          ABOUT
        </Link>
        <Link fontSize={'md'} as={ReactLink} to='/products'>
          PRODUCTS
        </Link>
        <Link fontSize={'md'} as={ReactLink} to='/contact'>
          CONTACT
        </Link>
        <Button padding={2} width={16} as={ReactLink} to='/'>
          Login
        </Button>
        <IconButton
          width={16}
          aria-label='Search database'
          icon={<BsCart4 size={20} />}
        />
      </Grid>
    </Grid>
  )
}

export default Header
