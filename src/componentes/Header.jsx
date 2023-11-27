// src/components/Header.js
// import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image, Box } from '@chakra-ui/react'


const Header = () => {
  return (

    <>
    <Box boxSize='bg'>
    <ButtonGroup gap='4'>
      {/* <Button colorScheme='whiteAlpha'>WhiteAlpha</Button> */}
      <Button colorScheme='blackAlpha'>Lugares Turisticos</Button>
    </ButtonGroup>
    
    <Image src="./src/img/imagen.jpeg" alt='cascada' width={800} height={300} /> 
    
    <br />
    
    <h1>Playa</h1>
    <Image src="./src/img/Honduras-turismo.jpeg" alt='playa' boxSize={300} width={400} /> 
   
    
    </Box>
  </>
     
  );
};

export default Header;