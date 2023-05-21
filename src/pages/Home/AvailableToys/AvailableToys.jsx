import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AvailableToys = () => {
  const [teddy, setTeddy] = useState([])
  const [unicorn, setUnicorn] = useState([])
  const [dinosaur, setDinasour] = useState([])
  useEffect(() => {
    fetch('https://assignment-11-server-six-plum.vercel.app/alltoy').then(res => res.json()).then(data => {
      // console.log(data)
      const loadedTeddy = data.filter(da => da.category === "Teddy Bear")
      setTeddy(loadedTeddy)
      const loadedDinosaur = data.filter(da => da.category === "Dinosaur")
      setDinasour(loadedDinosaur)
      const loadedUnicorn = data.filter(da => da.category === "Unicorn")
      setUnicorn(loadedUnicorn)

    }
    )
  }, [])
  return (
    <div>
      <h3 className='text-4xl font-bold text-center my-16'>Catego<span className='text-orange-500'>ries</span></h3>
      <div className=' mt-16 flex justify-center'>
        <Tabs>
          <TabList>
            <Tab>Teddy Bear</Tab>
            <Tab>Dinosaur</Tab>
            <Tab>Unicorn</Tab>
          </TabList>

          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
              {
                teddy?.map(t =>
                  <div className="card w-96 bg-base-100 shadow-xl" key={t._id}>
                    <figure className="px-10 pt-10">
                      <img src={t.photo} className="rounded-xl w-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{t.name}</h2>
                      <p>Price: {t.price}</p>
                      <p>Rating: {t.rating}</p>
                      <div className="card-actions">
                        <Link to={`/singletoy/${t._id}`}><button className="btn bg-orange-600 border-0">View Details</button></Link>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
              {
                dinosaur?.map(d =>
                  <div className="card w-96 bg-base-100 shadow-xl" key={d._id}>
                    <figure className="px-10 pt-10">
                      <img src={d.photo} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{d.name}</h2>
                      <p>Price: {d.price}</p>
                      <p>Ratinng: {d.rating}</p>
                      <div className="card-actions">
                        <button className="btn bg-orange-600 border-0">View Details</button>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
              {
                unicorn?.map(u =>
                  <div className="card w-96 bg-base-100 shadow-xl" key={u._id}>
                    <figure className="px-10 pt-10">
                      <img src={u.photo} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{u.name}</h2>
                      <p>Price: ${u.price}</p>
                      <p>Ratings: {u.rating}</p>
                      <div className="card-actions">
                        <button className="btn bg-orange-600 border-0">View Details</button>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </TabPanel>
        </Tabs>
      </div >
    </div>
  );

};



export default AvailableToys;