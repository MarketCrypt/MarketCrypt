import axios from 'axios'
import React, { Component }  from 'react';
import { set } from '../../server/server';


function Prices(props) {
    const [data, setData] = React.useState([]);
    React.useEffect(fetchData, [])

    function fetchData(){
        axios.get('http://localhost:3000/allData')
            .then((response)=>{
                response.json()
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
export default Prices