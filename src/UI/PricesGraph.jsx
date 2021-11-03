import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
// import { Chart } from 'chart.js';
import { Chart } from 'react-chartjs-2'
import RenderGraphs from './RenderGraphs';

export default function PricesGraph(props) {
    const cryptoPrices = props.cryptoPrices;
    console.log('inside PricesGraph  component', cryptoPrices)

    const displayBTC = [];
    const displayETH = [];
    const displayBNB = [];
    const displayPoints = [];

    for(let i = 0; i < cryptoPrices.length; i++){
      displayPoints.push(cryptoPrices[i].time)
      displayBTC.push(cryptoPrices[i].btc)
      displayETH.push(cryptoPrices[i].eth)
      displayBNB.push(cryptoPrices[i].bnb)
    }

    const CHART_BTC = document.getElementById('myChart1');
    // const CHART_ETH = document.getElementById('myChart2');
    // const CHART_BNB = document.getElementById('myChart3');

    // const CHART_ETH = document.createElement('canvas');
    // CHART_ETH.setAttribute('id', 'myChart2')
    // const CHART_BNB = document.createElement('canvas');
    // CHART_BNB.setAttribute('id', 'myChart2')
    

    const Bitcoin = new Chart(CHART_BTC, {
      type: 'line',
      data: {
        labels: displayPoints,
        datasets: [
          {
            label: "Bitcoin",
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'yellow',
            borderColor: 'yellow',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJointStyle: 'miter',
            pointBorderColor: 'orange',
            pointBackgroundColor: 'yellow',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'pink',
            pointHoverBorderColor: 'white',
            pointHoverWidth: '2',
            pointRadius: '1',
            pointHitRadius: '6',
            data: displayBTC,
          },
          {
                    label: "Ethereum",
                    fill: false,
                    lineTension: 1,
                    backgroundColor: 'purple',
                    borderColor: 'purple',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJointStyle: 'miter',
                    pointBorderColor: 'orange',
                    pointBackgroundColor: 'purple',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'pink',
                    pointHoverBorderColor: 'white',
                    pointHoverWidth: '2',
                    pointRadius: '1',
                    pointHitRadius: '6',
                    data: displayETH,
                  },
          {
                    label: "Binance Coin",
                    fill: false,
                    lineTension: 2,
                    backgroundColor: 'green',
                    borderColor: 'green',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJointStyle: 'miter',
                    pointBorderColor: 'orange',
                    pointBackgroundColor: 'green',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'pink',
                    pointHoverBorderColor: 'white',
                    pointHoverWidth: '2',
                    pointRadius: '1',
                    pointHitRadius: '6',
                    data: displayBNB,
                  },
        ]
      }
    })

//     if(displayBTC !== []){
//     useEffect( async ()=>{
    // const Ethereum = new Chart(CHART_ETH, {
    //   type: 'line',
    //   data: {
    //     labels: displayPoints,
    //     datasets: [
    //       {
    //         label: "Ethereum",
    //         fill: false,
    //         lineTension: 1,
    //         backgroundColor: 'purple',
    //         borderColor: 'purple',
    //         borderCapStyle: 'butt',
    //         borderDash: [],
    //         borderDashOffset: 0.0,
    //         borderJointStyle: 'miter',
    //         pointBorderColor: 'red',
    //         pointBackgroundColor: 'orange',
    //         pointBorderWidth: 1,
    //         pointHoverRadius: 5,
    //         pointHoverBackgroundColor: 'orange',
    //         pointHoverBorderColor: 'white',
    //         pointHoverWidth: '2',
    //         pointRadius: '1',
    //         pointHitRadius: '10',
    //         data: displayETH,
    //       },
    //     ]
    //   }
    // })


    // const BinanceCoin = new Chart(CHART_BNB, {
    //   type: 'line',
    //   data: {
    //     labels: displayPoints,
    //     datasets: [
    //       {
    //         label: "Binance Coin",
    //         fill: false,
    //         lineTension: 2,
    //         backgroundColor: 'aqua',
    //         borderColor: 'aqua',
    //         borderCapStyle: 'butt',
    //         borderDash: [],
    //         borderDashOffset: 0.0,
    //         borderJointStyle: 'miter',
    //         pointBorderColor: 'red',
    //         pointBackgroundColor: 'aqua',
    //         pointBorderWidth: 1,
    //         pointHoverRadius: 5,
    //         pointHoverBackgroundColor: 'pink',
    //         pointHoverBorderColor: 'white',
    //         pointHoverWidth: '2',
    //         pointRadius: '1',
    //         pointHitRadius: '10',
    //         data: displayBNB,
    //       },
    //     ]
    //   }
    // })



    // const Ethereum = {
    //   type: 'line',
    //   data: {
    //     labels: displayPoints,
    //     datasets: [
    //       {
    //         label: "Ethereum",
    //         fill: false,
    //         lineTension: 1,
    //         backgroundColor: 'purple',
    //         borderColor: 'purple',
    //         borderCapStyle: 'butt',
    //         borderDash: [],
    //         borderDashOffset: 0.0,
    //         borderJointStyle: 'miter',
    //         pointBorderColor: 'red',
    //         pointBackgroundColor: 'orange',
    //         pointBorderWidth: 1,
    //         pointHoverRadius: 5,
    //         pointHoverBackgroundColor: 'orange',
    //         pointHoverBorderColor: 'white',
    //         pointHoverWidth: '2',
    //         pointRadius: '1',
    //         pointHitRadius: '10',
    //         data: displayETH,
    //       },

    //     ]
    //   }
    // }

    // const BinanceCoin = {
    //   type: 'line',
    //   data: {
    //     labels: displayPoints,
    //     datasets: [
    //       {
    //         label: "Binance Coin",
    //         fill: false,
    //         lineTension: 2,
    //         backgroundColor: 'aqua',
    //         borderColor: 'aqua',
    //         borderCapStyle: 'butt',
    //         borderDash: [],
    //         borderDashOffset: 0.0,
    //         borderJointStyle: 'miter',
    //         pointBorderColor: 'red',
    //         pointBackgroundColor: 'aqua',
    //         pointBorderWidth: 1,
    //         pointHoverRadius: 5,
    //         pointHoverBackgroundColor: 'pink',
    //         pointHoverBorderColor: 'white',
    //         pointHoverWidth: '2',
    //         pointRadius: '1',
    //         pointHitRadius: '10',
    //         data: displayBNB,
    //       },
    //     ]
    //   }
    // };

    // BODY.appendChild(CHART_BNB)
    // BODY.appendChild(CHART_ETH)
    return (
        <div>
          <div className="graphBoxy"><canvas id="myChart1"></canvas></div> 
        </div>
    ) 
      // <RenderGraphs displayPoints={displayPoints} displayETH={displayETH} displayBNB={displayBNB} />
    
}