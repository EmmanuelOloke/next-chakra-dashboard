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
import Chart from '@/components/Chart';

const Dashboard = () => {
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
      <Flex></Flex>
      {/* Card Column */}
      <Flex></Flex>
    </Flex>
  );
};

export default Dashboard;
