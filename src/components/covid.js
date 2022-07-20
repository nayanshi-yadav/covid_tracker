import React, { useEffect, useState } from 'react'
import './covid.css'
const Covid = () => {

  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch('https://data.covid19india.org/data.json');
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0])
    }
    catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <section>
        <div className='main_heading'>
          <h2 >  <span className='icon'>.</span> Live <b>COVID_19 CORONA VIRUS TRACKER </b></h2>
        </div>

        <ul className='list_ul'>
          <li className='card list_li' >
            <div className='card_main' style={{ backgroundColor: '052C65' }} >
              <div className='card_inner'>
                <p className='card_name'> <span>OUR</span> COUNTRY</p>
                <p className='card_total card_small'> INDIA</p>
              </div>
            </div>
          </li>
          <li className='card list_li'>
            <div className='card_main' style={{
              backgroundColor: 'C04141'
            }}>
              <div className='card_inner'>
                <p className='card_name'> <span>TOTAL</span> RECOVERED</p>
                <p className='card_total card_small'> {data.recovered}</p>
              </div>
            </div>
          </li>
          <li className='card list_li'>
            <div className='card_main' style={{ backgroundColor: '052C65' }}>
              <div className='card_inner'>
                <p className='card_name'> <span>TOTAL</span> CASES</p>
                <p className='card_total card_small'>  {data.confirmed}</p>
              </div>
            </div>
          </li>
          <li className='card list_li'>
            <div className='card_main' style={{ backgroundColor: '0F5132' }}>
              <div className='card_inner'>
                <p className='card_name'> <span>TOTAL</span> ACTIVE</p>
                <p className='card_total card_small'>  {data.active}</p>
              </div>
            </div>
          </li>

          <li className='card list_li'>
            <div className='card_main' style={{ backgroundColor: 'FD7E14' }}>
              <div className='card_inner'>
                <p className='card_name'> <span>LAST</span> UPDATED</p>
                <p className='card_total card_small'>  {data.lastupdatedtime}</p>
              </div>
            </div>
          </li>
          <li className='card list_li'>
            <div className='card_main' style={{ backgroundColor: '055160' }}>
              <div className='card_inner'>
                <p className='card_name'> <span>TOTAL</span> DEATHS</p>
                <p className='card_total card_small'> {data.deaths} </p>
              </div>
            </div>
          </li>

        </ul>

      </section>
    </>
  )
}
export default Covid