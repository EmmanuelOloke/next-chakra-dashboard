import React from 'react';
import { Flex } from '@chakra-ui/react';

import Tabs from '@/components/Tabs';
import ChartAndTable from '@/components/ChartAndTable';
import CardDetails from '@/components/CardDetails';

const Dashboard = () => {
  return (
    <Flex
      height={[null, null, '100vh']}
      flexDirection={['column', 'column', 'row']}
      overflow="hidden"
      maxWidth="2000px"
      margin={{ '2xl': '0 auto' }}
    >
      <Tabs />

      <ChartAndTable />

      <CardDetails />
    </Flex>
  );
};

export default Dashboard;
