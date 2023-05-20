import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AvailableToys = () => {
  return (
    <div className=' mt-16 flex justify-center'>
      <Tabs>
        <TabList>
          <Tab>Category 1</Tab>
          <Tab>Category 2</Tab>
          <Tab>Category 3</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div >
  );

};



export default AvailableToys;