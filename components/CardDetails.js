import {
  Box,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Icon,
  Image,
  Button,
  AvatarGroup,
  Avatar,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FiBell, FiCreditCard, FiDollarSign, FiPlus, FiSearch, FiWifi } from 'react-icons/fi';

const CartDetails = () => {
  const [slideNumber, changeSlideNumber] = useState(1);
  return (
    <Flex
      width={{ sm: '100%', md: '40%', lg: '33%', xl: '33%', '2xl': '35%' }}
      minWidth={{ sm: null, md: null, lg: '300px', xl: '300px', '2xl': '400px' }}
      backgroundColor="#F5F5F5"
      padding="3%"
      flexDirection="column"
      overflow="auto"
    >
      <Flex alignContent="center">
        <InputGroup
          backgroundColor="#FFF"
          mb={4}
          border="none"
          borderColor="#FFF"
          borderRadius="10px"
          mr={2}
        >
          <InputLeftElement pointerEvents="none">
            <FiSearch color="gray" />
          </InputLeftElement>
          <Input type="number" placeholder="Search" borderRadius="10px" />
        </InputGroup>
        <IconButton icon={<FiBell />} fontSize="sm" bgColor="#FFF" borderRadius="50%" p="10px" />
        <Flex
          width={30}
          height={25}
          backgroundColor="#B57295"
          borderRadius="50%"
          color="#FFF"
          alignItems="center"
          justifyContent="center"
          ml={-3}
          mt={-2}
          fontSize="xs"
          zIndex={100}
        >
          2
        </Flex>
      </Flex>
      <Heading letterSpacing="tight">My Cards</Heading>

      {slideNumber === 1 && (
        <Box
          borderRadius="25px"
          mt={4}
          width="100%"
          height="200px"
          bgGradient="linear(to-t, #B57295, #292598)"
        >
          <Flex
            padding="1em"
            color="#FFF"
            flexDir="column"
            height="100%"
            justifyContent="space-between"
          >
            <Flex justifyContent="space-between" width="100%" alignItems="flex-start">
              <Flex flexDirection="column">
                <Text color="gray.400">Current Balance</Text>
                <Text fontWeight="bold" fontSize="xl">
                  $5,750.20
                </Text>
              </Flex>

              <Flex alignItems="center">
                <Icon as={FiWifi} mr={2} transform="rotate(90deg)" fontSize="2xl" />
                <Text>Payday</Text>
              </Flex>
            </Flex>

            <Text mb={4}>**** **** **** 1289</Text>

            <Flex alignItems="flex-end" justifyContent="space-between">
              <Flex>
                <Flex flexDirection="column" mr={4}>
                  <Text transform="uppercase" fontSize="xs">
                    Valid Through
                  </Text>
                  <Text fontSize="lg">12/23</Text>
                </Flex>

                <Flex flexDirection="column">
                  <Text transform="uppercase" fontSize="xs">
                    CVV
                  </Text>
                  <Text fontSize="lg">***</Text>
                </Flex>
              </Flex>

              <Image src="mastercard.png" alt="mastercard logo" width="70px" height="50px" />
            </Flex>
          </Flex>
        </Box>
      )}

      {slideNumber === 2 && (
        <Box
          borderRadius="25px"
          mt={4}
          width="100%"
          height="200px"
          bgGradient="linear(to-t, yellow.300, blue.500)"
        >
          <Flex
            padding="1em"
            color="#FFF"
            flexDir="column"
            height="100%"
            justifyContent="space-between"
          >
            <Flex justifyContent="space-between" width="100%" alignItems="flex-start">
              <Flex flexDirection="column">
                <Text color="gray.400">Current Balance</Text>
                <Text fontWeight="bold" fontSize="xl">
                  $350.00
                </Text>
              </Flex>

              <Flex alignItems="center">
                <Icon as={FiWifi} mr={2} transform="rotate(90deg)" fontSize="2xl" />
                <Text>Payday</Text>
              </Flex>
            </Flex>

            <Text mb={4}>**** **** **** 8956</Text>

            <Flex alignItems="flex-end" justifyContent="space-between">
              <Flex>
                <Flex flexDirection="column" mr={4}>
                  <Text transform="uppercase" fontSize="xs">
                    Valid Through
                  </Text>
                  <Text fontSize="lg">9/24</Text>
                </Flex>

                <Flex flexDirection="column">
                  <Text transform="uppercase" fontSize="xs">
                    CVV
                  </Text>
                  <Text fontSize="lg">***</Text>
                </Flex>
              </Flex>

              <Image src="visa.png" alt="mastercard logo" width="70px" height="30px" />
            </Flex>
          </Flex>
        </Box>
      )}

      {slideNumber === 3 && (
        <Box
          borderRadius="25px"
          mt={4}
          width="100%"
          height="200px"
          bgGradient="linear(to-t, orange.300, pink.600)"
        >
          <Flex
            padding="1em"
            color="#FFF"
            flexDir="column"
            height="100%"
            justifyContent="space-between"
          >
            <Flex justifyContent="space-between" width="100%" alignItems="flex-start">
              <Flex flexDirection="column">
                <Text color="gray.400">Current Balance</Text>
                <Text fontWeight="bold" fontSize="xl">
                  $10,000.00
                </Text>
              </Flex>

              <Flex alignItems="center">
                <Icon as={FiWifi} mr={2} transform="rotate(90deg)" fontSize="2xl" />
                <Text>Payday</Text>
              </Flex>
            </Flex>

            <Text mb={4}>**** **** **** 2424</Text>

            <Flex alignItems="flex-end" justifyContent="space-between">
              <Flex>
                <Flex flexDirection="column" mr={4}>
                  <Text transform="uppercase" fontSize="xs">
                    Valid Through
                  </Text>
                  <Text fontSize="lg">4/25</Text>
                </Flex>

                <Flex flexDirection="column">
                  <Text transform="uppercase" fontSize="xs">
                    CVV
                  </Text>
                  <Text fontSize="lg">***</Text>
                </Flex>
              </Flex>

              <Image src="stripe.png" alt="mastercard logo" width="70px" height="40px" />
            </Flex>
          </Flex>
        </Box>
      )}

      <Flex justifyContent="center" mt={2}>
        <Button
          rounded="2xl"
          bgColor={slideNumber === 1 ? 'gray.600' : 'gray.400'}
          onClick={() => changeSlideNumber(1)}
          size="xs"
          mx={1}
        />
        <Button
          rounded="2xl"
          bgColor={slideNumber === 2 ? 'gray.600' : 'gray.400'}
          onClick={() => changeSlideNumber(2)}
          size="xs"
          mx={1}
        />
        <Button
          rounded="2xl"
          bgColor={slideNumber === 3 ? 'gray.600' : 'gray.400'}
          onClick={() => changeSlideNumber(3)}
          size="xs"
          mx={1}
        />
      </Flex>

      <Flex flexDirection="column" my={4}>
        <Flex justifyContent="space-between" mb={2}>
          <Text>Balance</Text>
          <Text fontWeight="bold">$140.42</Text>
        </Flex>
        <Flex justifyContent="space-between" mb={2}>
          <Text>Credit Limit</Text>
          <Text fontWeight="bold">$150.00</Text>
        </Flex>
      </Flex>

      <Heading letterSpacing="tight" size="md" my={4}>
        Send money to
      </Heading>

      <Flex>
        <AvatarGroup size="md" max={3}>
          <Avatar src="avatar-2.jpg" />
          <Avatar src="avatar-3.jpg" />
          <Avatar src="avatar-4.jpg" />
          <Avatar src="avatar-4.jpg" />
          <Avatar src="avatar-4.jpg" />
        </AvatarGroup>

        <Avatar icon={<FiPlus />} ml={2} color="#FFF" bgColor="gray.300" />
      </Flex>

      <Text color="gray" mt={10} mb={2}>
        Card Number
      </Text>

      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={FiCreditCard} color="gray.700" />
        </InputLeftElement>
        <Input type="number" placeholder="xxxx xxxx xxxx xxxx" />
      </InputGroup>

      <Text color="gray" mt={10} mb={2}>
        Sum
      </Text>

      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={FiDollarSign} color="gray.700" />
        </InputLeftElement>
        <Input type="number" placeholder="130.00" />
      </InputGroup>

      <Button
        mt={4}
        bgColor="blackAlpha.900"
        color="#FFF"
        padding="7"
        borderRadius={15}
        _hover={{ bgColor: 'blackAlpha.800' }}
      >
        Send Money
      </Button>
    </Flex>
  );
};

export default CartDetails;
