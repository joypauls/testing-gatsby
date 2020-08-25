/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";
import { React, useState, Fragment } from "react";
import { Link } from "gatsby";
import { rhythm, scale } from "../utils/typography";
import { Button, Flex, Text, Box } from "rebass";
import { IoMdStats } from "react-icons/io";

// import { select, selectAll } from 'd3-selection';

// import { scaleLinear } from 'd3-scale';
// import { randomNormal } from "d3-random";

// import { select, selectAll } from 'd3-selection';

import * as d3 from "d3";


function generateNormalSamples(n=10) {

  var gen = d3.randomNormal(0, 1);
  // var sample = gen(n);
  // return sample.map((d) => ({ x: d }));

  let data = [];
  for (let i = 0; i < n; i++) {
    data.push({x: gen()});
  }
  return data;
};

function makeBins(n) {

  // var data = generateUniformSamples(n);
  var data = generateNormalSamples(n);
  
  var ticks = d3.range(-2.7, 2.7, 0.6);
  
  var histogram = d3.histogram()
    .value(function(d) { return d.x; })
    .domain([-2.7, 2.69])
    .thresholds(ticks);
  var bins = histogram(data);
  // console.log(bins);
  var binCounts = bins.map((arr) => arr.length);
  
  return binCounts;
};

const WIDTH = 320;
const HEIGHT = 300;
const INNER_HEIGHT = HEIGHT - 20;
var BAR_WIDTH = 24;
var BAR_GAP = 8;

function preprocess(data) {
  // data = d3.shuffle([...data]);s
  return data.map((d, i) => ({ id: i, value: d }));
}

function y(d, scale) {
  return HEIGHT - scale(d.value);
}

function height(d, scale) {
  return scale(d.value);
}

const sampleSize = 200;
var binCounts = makeBins(sampleSize);
var histData = preprocess(binCounts);

BAR_WIDTH = Math.floor(WIDTH / binCounts.length) - BAR_GAP



class Placeholder extends React.Component {

  constructor(props) {
    super(props);
    
    // initialize array of hexData in state
    this.state = {  };
  }

  componentDidMount() {
      // D3 Code to create the chart
      // using this._rootNode as container

      this.hist = d3.select(this._rootNode).append("svg")
        .attr("width", WIDTH)
        .attr("height", HEIGHT)
        .append("g");

      const t = d3.transition()
        .duration(1000)
        .transition()
        .ease(d3.easeBackInOut);

      const bar = this.hist.selectAll("g").data(histData, d => d.id);
      // EXIT section
      bar.exit().remove();
    
      var scale = d3.scaleLinear().domain([0, d3.max(binCounts)]).range([0, INNER_HEIGHT]);
      
      // UPDATE section
      bar.transition(t).attr(
        "transform", 
        (d, i) => `translate(${i * (BAR_WIDTH + BAR_GAP)},${y(d, scale)})`
      );

      bar.select("rect").transition(t).attr("height", (d) => (height(d, scale)));
      
      // ENTER section
      const barEnter = bar.enter()
        .append("g")
        .attr(
          "transform", 
          (d, i) => `translate(${i * (BAR_WIDTH + BAR_GAP)},${INNER_HEIGHT})`
        );
    
      barEnter
        .transition(t)
        .attr(
          "transform", 
          (d, i) => `translate(${i * (BAR_WIDTH + BAR_GAP)},${y(d, scale)})`
        );
      
      const rect = barEnter.append("rect")
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", BAR_WIDTH)
          .attr("height", 0);
      
      rect.transition(t).attr("height", (d) => (height(d, scale)));
  };

  shouldComponentUpdate() {
      // Prevents component re-rendering
      return false;
  };

  _setRef(componentNode) {
      this._rootNode = componentNode;
  };

  render() {
      <div className="svg-container" ref={this._setRef.bind(this)} />
  };
}

export default Placeholder;
