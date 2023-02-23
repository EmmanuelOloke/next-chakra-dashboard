import React, { useState } from 'react';
import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
} from '@chakra-ui/react';
import {
  FiHome,
  FiPieChart,
  FiDollarSign,
  FiBox,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiCreditCard,
  FiWifi,
  FiSearch,
  FiBell,
} from 'react-icons/fi';
import LineChart from '@/components/LineChart';

const Dashboard = () => {
  const [displayMore, changeDisplayMore] = useState('hide');
  const [slideNumber, changeSlideNumber] = useState(1);
  const [tab, setTab] = useState('day');

  return (
    <Flex
      height={[null, null, '100vh']}
      flexDirection={['column', 'column', 'row']}
      overflow="hidden"
      maxWidth="2000px"
      margin={{ '2xl': '0 auto' }}
    >
      {/* Tile and Tabs Column */}
      <Flex
        width={{ sm: '100%', md: '15%', lg: '10%', xl: '15%', '2xl': '15%' }}
        flexDirection="column"
        alignItems="center"
        backgroundColor="#020202"
        color="#FFFFFF"
      >
        <Flex flexDirection="column" justifyContent="space-between" height={[null, null, '100vh']}>
          <Flex flexDirection="column" as="nav" alignItems="center">
            <Flex mt={50} mb={[25, 50, 100]} ml={{ lg: 0, xl: -5, '2xl': -5 }}>
              <Image src="payday.jpeg" alt="payday logo" width="50px" height="60px" />
              <Heading
                display={{ sm: 'flex', md: 'none', lg: 'none', xl: 'flex', '2xl': 'flex' }}
                fontSize={{ sm: 'xl', md: 'xl', lg: '2xl', xl: '2xl', '2xl': '2xl' }}
                alignSelf="center"
                letterSpacing="tight"
              >
                Payday
              </Heading>
            </Flex>

            <Flex
              flexDirection={{
                sm: 'row',
                md: 'column',
                lg: 'column',
                xl: 'column',
                '2xl': 'column',
              }}
              align={{
                sm: 'center',
                md: 'center',
                lg: 'center',
                xl: 'flex-start',
                '2xl': 'flex-start',
              }}
              justifyContent="center"
            >
              <Flex className="sidebar-items">
                <Link
                  display={{
                    sm: 'center',
                    md: 'center',
                    lg: 'center',
                    xl: 'flex-start',
                    '2xl': 'flex-start',
                  }}
                >
                  <Icon
                    display={{
                      base: 'none',
                      sm: 'none',
                      md: 'flex',
                      lg: 'flex',
                      xl: 'flex',
                      '2xl': 'flex',
                    }}
                    as={FiHome}
                    fontSize="2xl"
                    className="active-icon"
                  />
                </Link>
                <Link
                  _hover={{ textDecoration: 'none' }}
                  display={{ sm: 'flex', md: 'none', lg: 'none', xl: 'flex', '2xl': 'flex' }}
                >
                  <Text className="active">Home</Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items">
                <Link
                  display={{
                    sm: 'center',
                    md: 'center',
                    lg: 'center',
                    xl: 'flex-start',
                    '2xl': 'flex-start',
                  }}
                >
                  <Icon
                    display={{
                      base: 'none',
                      sm: 'none',
                      md: 'flex',
                      lg: 'flex',
                      xl: 'flex',
                      '2xl': 'flex',
                    }}
                    as={FiPieChart}
                    fontSize="2xl"
                  />
                </Link>
                <Link
                  _hover={{ textDecoration: 'none' }}
                  display={{ sm: 'flex', md: 'none', lg: 'none', xl: 'flex', '2xl': 'flex' }}
                >
                  <Text>Credit</Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items">
                <Link
                  display={{
                    base: 'none',
                    sm: 'center',
                    md: 'center',
                    lg: 'center',
                    xl: 'flex-start',
                    '2xl': 'flex-start',
                  }}
                >
                  <Icon
                    display={{ sm: 'none', md: 'flex', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
                    as={FiDollarSign}
                    fontSize="2xl"
                  />
                </Link>
                <Link
                  _hover={{ textDecoration: 'none' }}
                  display={{ sm: 'flex', md: 'none', lg: 'none', xl: 'flex', '2xl': 'flex' }}
                >
                  <Text>Wallet</Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items">
                <Link
                  display={{
                    base: 'none',
                    sm: 'center',
                    md: 'center',
                    lg: 'center',
                    xl: 'flex-start',
                    '2xl': 'flex-start',
                  }}
                >
                  <Icon
                    display={{ sm: 'none', md: 'flex', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
                    as={FiBox}
                    fontSize="2xl"
                  />
                </Link>
                <Link
                  _hover={{ textDecoration: 'none' }}
                  display={{ sm: 'flex', md: 'none', lg: 'none', xl: 'flex', '2xl': 'flex' }}
                >
                  <Text>Services</Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>

          <Flex flexDirection="column" alignItems="center" mb={10} mt={5}>
            <Avatar my={2} src="favour-avatar.jpeg" />
            <Text textAlign="center">Favour Ori</Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Chart Column */}
      <Flex
        width={{ sm: '100%', md: '50%', lg: '60%', xl: '60%', '2xl': '70%' }}
        padding="3%"
        flexDirection="column"
        overflow="auto"
        minHeight="100vh"
      >
        <Heading fontWeight="normal" mb={4} letterSpacing="tight">
          Welcome Back,{' '}
          <Flex fontWeight="bold" display="inline-flex">
            Favour
          </Flex>
        </Heading>

        <Flex justifyContent="space-between" align="center">
          <Flex flexDirection="column">
            <Text color="gray" fontSize="sm">
              My Balance
            </Text>
            <Text fontWeight="bold" fontSize="2xl">
              $16,100.20
            </Text>
          </Flex>

          <Flex gap={3} fontWeight="medium" fontSize="5px">
            <Button
              fontSize="sm"
              onClick={() => setTab('day')}
              borderRadius="lg"
              bgColor={tab === 'day' ? '#000' : 'gray.100'}
              color={tab === 'day' ? '#FFF' : '#000'}
              _hover={tab === 'day' ? { color: 'gray.100' } : { color: '#000' }}
            >
              Day
            </Button>
            <Button
              fontSize="sm"
              onClick={() => setTab('week')}
              borderRadius="lg"
              bgColor={tab === 'week' ? '#000' : 'gray.100'}
              color={tab === 'week' ? '#FFF' : '#000'}
              _hover={tab === 'week' ? { color: 'gray.100' } : { color: '#000' }}
            >
              Week
            </Button>
            <Button
              fontSize="sm"
              onClick={() => setTab('month')}
              borderRadius="lg"
              bgColor={tab === 'month' ? '#000' : 'gray.100'}
              color={tab === 'month' ? '#FFF' : '#000'}
              _hover={tab === 'month' ? { color: 'gray.100' } : { color: '#000' }}
            >
              Month
            </Button>
            <Button
              fontSize="sm"
              onClick={() => setTab('year')}
              borderRadius="lg"
              bgColor={tab === 'year' ? '#000' : 'gray.100'}
              color={tab === 'year' ? '#FFF' : '#000'}
              _hover={tab === 'year' ? { color: 'gray.100' } : { color: '#000' }}
            >
              Year
            </Button>
          </Flex>
        </Flex>

        <LineChart />

        <Flex justifyContent="space-between" mt={8}>
          <Flex alignItems="flex-end">
            <Heading as="h2" size="lg" letterSpacing="tight">
              Transactions
            </Heading>
            <Text fontSize="sm" color="gray" ml={4}>
              Apr 2022
            </Text>
          </Flex>
          <IconButton icon={<FiCalendar />} />
        </Flex>

        <Flex flexDirection="column">
          <Flex overflow="auto">
            <Table variant="unstyled" mt={4}>
              <Thead>
                <Tr color="gray">
                  <Th>Name of transaction</Th>
                  <Th>Category</Th>
                  <Th isNumeric>Cashback</Th>
                  <Th isNumeric>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Flex alignItems="center">
                      <Avatar name="amazon icon" size="sm" mr={2} src="amazon.jpeg" />
                      <Flex flexDirection="column">
                        <Heading size="sm" letterSpacing="tight">
                          Amazon
                        </Heading>
                        <Text fontSize="sm" color="gray">
                          Apr 24, 2022 at 1:40pm
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Electronic Devices</Td>
                  <Td isNumeric>+$2</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      -$242
                    </Text>
                    .00
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Flex alignItems="center">
                      <Avatar name="amazon icon" size="sm" mr={2} src="starbucks.png" />
                      <Flex flexDirection="column">
                        <Heading size="sm" letterSpacing="tight">
                          Starbucks
                        </Heading>
                        <Text fontSize="sm" color="gray">
                          Apr 22, 2022 at 2:43pm
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Cafe and restaurants</Td>
                  <Td isNumeric>+$23</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      -$32
                    </Text>
                    .00
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    <Flex alignItems="center">
                      <Avatar name="amazon icon" size="sm" mr={2} src="youtube.png" />
                      <Flex flexDirection="column">
                        <Heading size="sm" letterSpacing="tight">
                          Youtube
                        </Heading>
                        <Text fontSize="sm" color="gray">
                          Apr 13, 2022 at 11:23am
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Social media</Td>
                  <Td isNumeric>+$4</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      -$112
                    </Text>
                    .00
                  </Td>
                </Tr>

                {displayMore === 'show' && (
                  <>
                    <Tr>
                      <Td>
                        <Flex alignItems="center">
                          <Avatar name="amazon icon" size="sm" mr={2} src="amazon.jpeg" />
                          <Flex flexDirection="column">
                            <Heading size="sm" letterSpacing="tight">
                              Amazon
                            </Heading>
                            <Text fontSize="sm" color="gray">
                              Apr 24, 2022 at 1:40pm
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Electronic Devices</Td>
                      <Td isNumeric>+$2</Td>
                      <Td isNumeric>
                        <Text fontWeight="bold" display="inline-table">
                          -$242
                        </Text>
                        .00
                      </Td>
                    </Tr>

                    <Tr>
                      <Td>
                        <Flex alignItems="center">
                          <Avatar name="amazon icon" size="sm" mr={2} src="starbucks.png" />
                          <Flex flexDirection="column">
                            <Heading size="sm" letterSpacing="tight">
                              Starbucks
                            </Heading>
                            <Text fontSize="sm" color="gray">
                              Apr 22, 2022 at 2:43pm
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Cafe and restaurants</Td>
                      <Td isNumeric>+$23</Td>
                      <Td isNumeric>
                        <Text fontWeight="bold" display="inline-table">
                          -$32
                        </Text>
                        .00
                      </Td>
                    </Tr>

                    <Tr>
                      <Td>
                        <Flex alignItems="center">
                          <Avatar name="amazon icon" size="sm" mr={2} src="youtube.png" />
                          <Flex flexDirection="column">
                            <Heading size="sm" letterSpacing="tight">
                              Youtube
                            </Heading>
                            <Text fontSize="sm" color="gray">
                              Apr 13, 2022 at 11:23am
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Social media</Td>
                      <Td isNumeric>+$4</Td>
                      <Td isNumeric>
                        <Text fontWeight="bold" display="inline-table">
                          -$112
                        </Text>
                        .00
                      </Td>
                    </Tr>
                  </>
                )}
              </Tbody>
            </Table>
          </Flex>

          <Flex alignItems="center">
            <Divider />
            <IconButton
              icon={displayMore === 'show' ? <FiChevronUp /> : <FiChevronDown />}
              onClick={() => {
                displayMore === 'hide' ? changeDisplayMore('show') : changeDisplayMore('hide');
              }}
            />
            <Divider />
          </Flex>
        </Flex>
      </Flex>

      {/* Card Column */}
      <Flex
        width={{ sm: '100%', md: '40%', '2xl': '35%' }}
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
    </Flex>
  );
};

export default Dashboard;
