import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AvailableToys = () => {
  const [teddy, setTeddy]= useState([])
  const [unicorn, setUnicorn]= useState([])
  const [dinosaur, setDinasour]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/alltoy').then(res=> res.json()).then(data => {
          // console.log(data)
          const loadedTeddy = data.filter(da=>da.category === "Teddy Bear")
          setTeddy(loadedTeddy)

        }
        )
    },[])
    console.log(teddy)
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