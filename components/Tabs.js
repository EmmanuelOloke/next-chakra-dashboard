import { Flex, Heading, Image, Link, Icon, Text, Avatar } from '@chakra-ui/react';
import React from 'react';
import { FiBox, FiDollarSign, FiHome, FiPieChart } from 'react-icons/fi';

const Tabs = () => {
  return (
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
  );
};

export default Tabs;
