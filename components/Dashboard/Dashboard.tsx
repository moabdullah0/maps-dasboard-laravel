
import React from 'react'
import CardsCount from './Cards/CardsCount';
import Layout from './Layout/Layout';
import BarChart from './Charts/BarCharts';
import ChartGrid from './Charts/pieAndBubble';

const Dashboard = () => {
  return (
    
    <Layout>
       <CardsCount />
          <BarChart />
          {/* <UserTable /> */}
          <ChartGrid />
    </Layout>
    
  
  )
}

export default Dashboard
