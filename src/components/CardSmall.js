// @ts-ignore
import { Box, Avatar, VStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import fullStar from '../icons_assets/star_full.png'
import emptyStar from '../icons_assets/star_empty.png'


const CardSmall = ({ name, rating, review, imageSrc }) => {
  const maxRating = Math.min(rating, 5);
  return (
      <Box bg="rgb(237,239,238)" pt={7} pb={5} pl={4} pr={4} color="black" fontSize="sm" fontWeight="medium" boxSize ='xxxs' w="300px">        
        <VStack spacing={2} pl={15} pr={15} align="left">
        <Box pb={3} display="inline-flex" alignItems="center" justifyContent="flex-start" gap="8px"> 
          {[...Array(maxRating)].map((_, id)=>(
            <Image key={id} src={fullStar} alt="rating start full" />
          ))}
          {[...Array(5-maxRating)].map((_, id)=>(
            <Image key={id} src={emptyStar} alt="rating start empty" />
          ))}
        </Box>
        <Box  display="inline-flex" alignItems="center" justifyContent="flex-start" gap="20px"> <Avatar size="md" name={name} src={imageSrc}></Avatar><h3>{name}</h3></Box>
        <Text textAlign="left" className="ellipsis" maxHeight="75px">{review}</Text>        
        </VStack>
      </Box>
  )
};

export default CardSmall;
