import React from 'react';
import Table from './Table';

function Data() {
    const [cryptoData, setData] = React.useState([]);
    
    React.useEffect(()=>{
        fetchData();
        function fetchData(){
        fetch('http://localhost:3000/getData',{
            method: "GET",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            },
        })
          .then((response)=>response.json())
          .then((response)=> {
              const holdData = [];
              const responseData = response.data;
              responseData.forEach(ele => {
                holdData.push(ele)
              })
              setData(holdData);
          })
          .catch((error) =>{
              console.log('Frontend error in /hello GET request: ', error);
          })
        }}, []);


    return (
        <div>
            <Table cryptoData = {cryptoData}/>
        </div>
    )
    
}
export default Data