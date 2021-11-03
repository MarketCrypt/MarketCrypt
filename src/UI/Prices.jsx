import React, { useState, useEffect } from 'react';
import PricesGraph from './PricesGraph';

function Prices() {
    const [cryptoPrices, setPrices] = useState([]);
    
    useEffect(()=>{
        console.log('inside useEffect')
        fetchPrices();
        function fetchPrices(){
        fetch('http://localhost:3000/getPrices',{
            method: "GET",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            },
        })
          .then((response)=>response.json())
          .then((response)=> {
              console.log('response: ', response)
              const holdData = [];
              const responseData = response;
              responseData.forEach(ele => {
                holdData.push(ele)
              })
              setPrices(holdData);
              console.log('cryptoPrices',cryptoPrices)
          })
          .catch((error) =>{
              console.log('Frontend error in /getPrices GET request: ', error);
          })
        }}, []);


    return (
        <div>
            <PricesGraph cryptoPrices = {cryptoPrices}/>
            {/* <Ethe cryptoPrices = {cryptoPrices}/> */}
            
        </div>
    )
    
}
export default Prices