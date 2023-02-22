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
  FiSearch,
  FiBell,
} from 'react-icons/fi';
import LineChart from '@/components/LineChart';

const Dashboard = () => {
  const [displayMore, changeDisplayMore] = useState('hide');
  return (
    <Flex height="100vh" flexDirection="row" overflow="hidden" maxWidth="2000px">
      {/* Tile and Tabs Column */}
      <Flex
        width="15%"
        flexDirection="column"
        alignItems="center"
        backgroundColor="#020202"
        color="#FFFFFF"
      >
        <Flex flexDirection="column" justifyContent="space-between" height="100vh">
          <Flex flexDirection="column" as="nav">
            <Heading mt={50} mb={100} fontSize="4xl" alignSelf="center" letterSpacing="tight">
              Payday.
            </Heading>

            <Flex flexDirection="column" align="flex-start" justifyContent="center">
              <Flex className="sidebar-items">
                <Link>
                  <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                </Link>
                <Link _hover={{ textDecoration: 'none' }}>
                  <Text className="active">Home</Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items">
                <Link>
                  <Icon as={FiPieChart} fontSize="2xl" />
                </Link>
                <Link _hover={{ textDecoration: 'none' }}>
                  <Text>Credit</Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items">
                <Link>
                  <Icon as={FiDollarSign} fontSize="2xl" />
                </Link>
                <Link _hover={{ textDecoration: 'none' }}>
                  <Text>Wallet</Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items">
                <Link>
                  <Icon as={FiBox} fontSize="2xl" />
                </Link>
                <Link _hover={{ textDecoration: 'none' }}>
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
      <Flex width="55%" padding="3%" flexDirection="column" overflow="auto" minHeight="100vh">
        <Heading fontWeight="normal" mb={4} letterSpacing="tight">
          Welcome Back,{' '}
          <Flex fontWeight="bold" display="inline-flex">
            Favour
          </Flex>
        </Heading>
        <Text color="gray" fontSize="sm">
          My Balance
        </Text>
        <Text fontWeight="bold" fontSize="2xl">
          $5,750.20
        </Text>
        <LineChart />
        <Flex justifyContent="space-between" mt={8}>
          <Flex alignItems="flex-end">
            <Heading as="h2" size="lg" letterSpacing="tight">
              Transactions
            </Heading>
            <Text fontSize="sm" color="gray" ml={4}>
              Apr 2021
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
                          Apr 24, 2021 at 1:40pm
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
                          Apr 22, 2021 at 2:43pm
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
                          Apr 13, 2021 at 11:23am
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
                              Apr 24, 2021 at 1:40pm
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
                              Apr 22, 2021 at 2:43pm
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
                              Apr 13, 2021 at 11:23am
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
        width="30%"
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
      </Flex>
    </Flex>
  );
};

export default Dashboard;
