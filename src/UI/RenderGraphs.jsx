import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
// import { Chart } from 'chart.js';
import { Chart } from 'react-chartjs-2'


export default function RenderGraphs(props) {
    // const CHART_BTC = document.getElementById('myChart1');
    // const CHART_ETH = document.getElementById('myChart2');
    // const CHART_BNB = document.getElementById('myChart3');

    // const ethObj = props.Ethereum;
    // const bnbObj = props.BinanceCoin;

    // new Chart(CHART_ETH, ethObj);
    // new Chart(CHART_BNB, bnbObj);

    // const CHART_ETH = document.createElement('canvas');
    // CHART_ETH.setAttribute('id', 'myChart2')
    // // const CHART_BNB = document.createElement('canvas');
    // // CHART_BNB.setAttribute('id', 'myChart2')

    // const BODY = document.querySelector('body')
    // BODY.appendChild(CHART_ETH)
    // BODY.appendChild(CHART_BNB)



    // const Ethereum = new Chart(CHART_ETH, {
    //     type: 'line',
    //     data: {
    //       labels: props.displayPoints,
    //       datasets: [
    //         {
    //           label: "Ethereum",
    //           fill: false,
    //           lineTension: 1,
    //           backgroundColor: 'purple',
    //           borderColor: 'purple',
    //           borderCapStyle: 'butt',
    //           borderDash: [],
    //           borderDashOffset: 0.0,
    //           borderJointStyle: 'miter',
    //           pointBorderColor: 'red',
    //           pointBackgroundColor: 'orange',
    //           pointBorderWidth: 1,
    //           pointHoverRadius: 5,
    //           pointHoverBackgroundColor: 'orange',
    //           pointHoverBorderColor: 'white',
    //           pointHoverWidth: '2',
    //           pointRadius: '1',
    //           pointHitRadius: '10',
    //           data: props.displayETH,
    //         },
  
    //       ]
    //     }
    //   })
  
    //   const BinanceCoin = new Chart(CHART_BNB, {
    //     type: 'line',
    //     data: {
    //       labels: displayPoints,
    //       datasets: [
    //         {
    //           label: "Binance Coin",
    //           fill: false,
    //           lineTension: 2,
    //           backgroundColor: 'aqua',
    //           borderColor: 'aqua',
    //           borderCapStyle: 'butt',
    //           borderDash: [],
    //           borderDashOffset: 0.0,
    //           borderJointStyle: 'miter',
    //           pointBorderColor: 'red',
    //           pointBackgroundColor: 'aqua',
    //           pointBorderWidth: 1,
    //           pointHoverRadius: 5,
    //           pointHoverBackgroundColor: 'pink',
    //           pointHoverBorderColor: 'white',
    //           pointHoverWidth: '2',
    //           pointRadius: '1',
    //           pointHitRadius: '10',
    //           data: props.displayBNB,
    //         },
    //       ]
    //     }
    //   })

    return(
        <div>
          {/* <div className="graphBoxy"><canvas id="myChart1"></canvas></div> */}
          {/* <div className="graphBoxy"><canvas id="myChart2"></canvas></div>
          <div className="graphBoxy"><canvas id="myChart3"></canvas></div> */}
        </div>
    )
}