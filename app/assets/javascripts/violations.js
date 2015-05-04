$(function(){
 
  renderChart(gon.data);

})




function renderChart(data){
  var data = data
  var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

  var y = d3.scale.linear()
    .range([height, 0]);

  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    
    

  var svg = d3.select("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  x.domain(data.map(function(d) { return d.keyword; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -35)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("No. of Violations");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.keyword); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });

};















//    var margin = {top: 20, right: 30, bottom: 30, left: 40},
//     width = 960 - margin.left - margin.right,
//     height = 500 - margin.top - margin.bottom;

// var x = d3.scale.ordinal()
//     .rangeRoundBands([0, width], .1);

// var y = d3.scale.linear()
//     .range([height, 0]);

// var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient("bottom");

// var yAxis = d3.svg.axis()
//     .scale(y)
//     .orient("left")
//     .ticks(10, "%"); 
 
//   var data = data; 

//   // var width = 960,
//   //   height = 500;

  

//   var chart = d3.select(".chart")
//       .attr("width", width)
//       .attr("height", height);

//   y.domain([0, d3.max(data, function(d) { return d.value; })]);

//   var barWidth = width / data.length;

//   var bar = chart.selectAll("g")
//       .data(data)
//     .enter().append("g")
//       .attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)"; });

//   bar.append("rect")
//       .attr("y", function(d) { return y(d.value); })
//       .attr("height", function(d) { return height - y(d.value); })
//       .attr("width", barWidth - 1);

//   bar.append("text")
//       .attr("x", barWidth / 2)
//       .attr("y", function(d) { return y(d.value) + 3; })
//       .attr("dy", ".75em")
//       .text(function(d) { return d.keyword; });
  
  

//   chart.append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(0," + height + ")")
//       .call(xAxis);

//   chart.append("g")
//       .attr("class", "y axis")
//       .call(yAxis).append("text").attr("transform", "rotate(-90)").attr("y", -10)
//       .attr("dy", ".71em").style("text-anchor", "end")
//       .text("No. of Violations");
// };
  // var data = data
  // var width = 420,
  //     barHeight = 20;

  // var x = d3.scale.linear().domain([0, data.length]).range([0, width]);

  // var chart = d3.select(".chart")
  //     .attr("width", width)
  //     .attr("height", barHeight * data.length);
  
  // x.domain([0, d3.max(data, function(d) { return d.value; })]);


  // var bar = chart.selectAll("g")
  //     .data(data)
  //   .enter().append("g")
  //     .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });
  // bar.append("rect")
  //     .attr("width", function(d) { return x(d.value); })
  //     .attr("height", barHeight - 1);


  // bar.append("text")
  //     .attr("x", function(d) { return x(d.value) - 3; })
  //     .attr("y", barHeight / 2)
  //     .attr("dy", ".35em")
  //     .text(function(d) { return d.keyword; });






