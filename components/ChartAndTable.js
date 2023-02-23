import {
  Avatar,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FiCalendar, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import LineChart from './LineChart';

const ChartAndTable = () => {
  const [displayMore, changeDisplayMore] = useState('hide');
  const [tab, setTab] = useState('month');
  return (
    <Flex
      width={{ sm: '100%', md: '50%', lg: '70%', xl: '70%', '2xl': '70%' }}
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

        <Flex
          gap={3}
          fontWeight="medium"
          fontSize="5px"
          display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', '2xl': 'flex' }}
        >
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
  );
};

export default ChartAndTable;
