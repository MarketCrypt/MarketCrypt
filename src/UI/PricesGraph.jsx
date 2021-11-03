import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';

export default function PricesGraph(props) {
    const cryptoPrices = props.cryptoPrices;
    console.log('inside PricesGraph  component', cryptoPrices)

    const [displaying] = useState([25,50,35,15,94,10]);
    const svgRef = useRef();

    useEffect(()=>{
        // setting up  svg
        const w = 400;
        const h  = 100;
        const svg = d3.select(svgRef.current)
          .attr('width', w)
          .attr('height', h)
          .style('background', '#d3d3d3')
          .style('margin-top', '50')
          .style('overflow', 'visible'); // need overflow to be  visible, to make sure things outside the container
          // it visible
        // setting up the scaling
        const xScale = d3.scaleLinear() // gives linear scale to plot points
          .domain([0, displaying.length-1]) // set the domain and range for scaleLinear
          // ^^^^^ basically determines how many ticks/plots we have
          .range([0, w]) // width of entire left and  right values????
        const yScale = d3.scaleLinear()
          .domain([0, h]) // determines the  height of  our chart
          .range([h, 0]) // the range is inverted, since we start from the top left, and go downwards
        const generateScaledLine = d3.line()
          .x((d, i) => xScale(i)) // i value is a particular number we are getting from d3
          .y(yScale)
          .curve(d3.curveCardinal); // generate the line  we  want to create, and scale it appropriately
        // setting the axes
        const xAxis  = d3.axisBottom(xScale)
          .ticks(displaying.length)
          .tickFormat(i => i + 1);
        const yAxis = d3.axisLeft(yScale)
          .ticks(5)
        svg.append('g')
          .call(xAxis)
          .attr('transform', `translate(0, ${h})`);
        svg.append('g')
          .call(yAxis)
        // setting up the data for the svg
        svg.selectAll('.line')
          .data([displaying])
          .join('path') // path we created
            .attr('d', d => generateScaledLine(d)) // generate the line we've already created the function for
            // d is  basically the data, and its being passed into generateScaledLine
            .attr('fill', 'none') // by default line willbe colored in from top  to  bottom, want  to be thin  line
            .attr('stroke', 'black')

    }, [displaying])

    return(
        <div>
            <h1>
                hello prices graph
            </h1>
            <svg ref={svgRef}></svg>
        </div>
    )
    
}