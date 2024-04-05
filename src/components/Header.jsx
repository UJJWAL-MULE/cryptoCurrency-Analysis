import React from 'react'
import { Button, HStack } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
  <>
  <div>
  <HStack p={5} shadow={'base'} className='bg-secondary' >
      <Button variant={"unstyled"} color={"white"}>
        <NavLink to='/'>Home</NavLink>
      </Button>

      <Button variant={"unstyled"} color={"white"}>
        <NavLink to='/exchanges'>Exchanges</NavLink>
      </Button>

      <Button variant={"unstyled"} color={"white"}>
        <NavLink to='/coins'>Coins</NavLink>
      </Button>
    </HStack>
  </div>
  </>
  )
}

export default Header
