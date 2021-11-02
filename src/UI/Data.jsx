import React, { Component }  from 'react';

function Data() {
    const [data, setData] = React.useState([]);
    React.useEffect(fetchData, [])

    function fetchData(){
          fetch('http://localhost:3000/allData', {
              method: "GET",
              headers: {
                  'Content-Type': 'application/json'
              }
          })
            .then((response)=>{
                response.json()
                console.log('response first then: ', response)
            })
            .then((response)=>{
                response.forEach((ele) => {
                    data.push(ele);
                })
                setData(data);
            })
            .catch((error) =>{
                console.log('Frontend error in /allData GET request: ', error);
            })
    }

    const display = [];
    for(let i = 0; i < 5; i++){
        console.log('data[i]', data[i])
        display.push(<div><h1>{data[i]}</h1></div>)
    }

    return (
        <div>asdf
            {display}
        </div>
    )
    
}
export default Data