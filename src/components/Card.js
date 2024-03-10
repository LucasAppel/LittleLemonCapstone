// @ts-ignore
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import deliverIcon from '../icons_assets/Basket.svg'


const Card = ({ title, price, description, imageSrc }) => {
  return (
      <Box bg="rgb(237,239,238)" borderTopRadius="16px" borderBottomRadius={0} pb={5} color="black" fontSize="sm" fontWeight="medium" w="250px">
        <Image src={imageSrc} borderTopRadius="16px" borderBottomRadius={0} objectFit="cover" w="100%" maxHeight="150px" alt="food"></Image>
        <VStack spacing={2} pl={15} pr={15} align="left">
        <Box display="inline-flex" alignItems="center" justifyContent="space-between"><h3>{title}</h3> <Text fontWeight="bold" color="rgb(238,153,114)">$ {price}</Text></Box>
        <p>{description}</p>
        <Box display="inline-flex" alignItems="center"><Text fontWeight="bold">Order a delivery</Text><Image src={deliverIcon} boxSize="20px" w={20}  alt="deliveryIcon"></Image></Box>
        </VStack>
      </Box>
  )
};

export default Card;
