$(function(){
 
  // sunBurst({name: "NYCHA Repair Violations", children: gon.sunburst_data});
  zoomBurst(gon.man_sunburst_data, ".man-burst");
  zoomBurst(gon.bx_sunburst_data, ".bx-burst");
  zoomBurst(gon.bk_sunburst_data, ".bk-burst");

})

function zoomBurst(root_data, boro) {
 var root = {"name": "NYCHA Repair Violations",
 "children": root_data}
 // debugger;

  //  var root = {
  //  "name": "flare",
  //  "children": [
  //   {
  //    "name": "analytics",
  //    "children": [
  //     {
  //      "name": "cluster",
  //      "children": [
  //       {"name": "AgglomerativeCluster", "size": 3938},
  //       {"name": "CommunityStructure", "size": 3812},
  //       {"name": "MergeEdge", "size": 743}
  //      ]
  //     },
  //     {
  //      "name": "graph",
  //      "children": [
  //       {"name": "BetweennessCentrality", "size": 3534},
  //       {"name": "LinkDistance", "size": 5731}
  //      ]
  //     }
  //    ]
  //   }
  //  ]
  // }


  var width = 960,
    height = 700,
    radius = Math.min(width, height) / 2;

var x = d3.scale.linear()
    .range([0, 2 * Math.PI]);

var y = d3.scale.linear()
    .range([0, radius]);

var color = d3.scale.category20c();

var svg = d3.select(boro).append("svg").attr("class", "col-md-offset-1")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + (height / 2 ) + ")");

var partition = d3.layout.partition(root)
    .value(function(d) { return d.count; });

var arc = d3.svg.arc()
    .startAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x))); })
    .endAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx))); })
    .innerRadius(function(d) { return Math.max(0, y(d.y)); })
    .outerRadius(function(d) { return Math.max(0, y(d.y + d.dy)); });


  var g = svg.selectAll("g")
      .data(partition.nodes(root))
    .enter().append("g");

  var path = g.append("path")
    .attr("d", arc)
    .style("fill", function(d) { return color((d.children ? d : d.parent).name); })
    .on("click", click);

  var text = g.append("text")
    .attr("transform", function(d) { return "rotate(" + computeTextRotation(d) + ")"; })
    .attr("x", function(d) { return y(d.y); })
    .attr("dx", "6") // margin
    .attr("dy", ".35em") // vertical-align
    .text(function(d) { return d.name; });

  function click(d) {
    // fade out all text elements
    text.transition().attr("opacity", 0);

    path.transition()
      .duration(750)
      .attrTween("d", arcTween(d))
      .each("end", function(e, i) {
          // check if the animated element's data e lies within the visible angle span given in d
          if (e.x >= d.x && e.x < (d.x + d.dx)) {
            // get a selection of the associated text element
            var arcText = d3.select(this.parentNode).select("text");
            // fade in the text element and recalculate positions
            arcText.transition().duration(750)
              .attr("opacity", 1)
              .attr("transform", function() { return "rotate(" + computeTextRotation(e) + ")" })
              .attr("x", function(d) { return y(d.y); });
          }
      });
  }


d3.select(self.frameElement).style("height", height + "px");

// Interpolate the scales!
function arcTween(d) {
  var xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
      yd = d3.interpolate(y.domain(), [d.y, 1]),
      yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius]);
  return function(d, i) {
    return i
        ? function(t) { return arc(d); }
        : function(t) { x.domain(xd(t)); y.domain(yd(t)).range(yr(t)); return arc(d); };
  };
}

function computeTextRotation(d) {
  return (x(d.x + d.dx / 2) - Math.PI / 2) / Math.PI * 180;
}
}
function sunBurst(jsonObject){
  // var jsonObject = {
  //  "name": "flare",
  //  "children": [
  //   {
  //    "name": "analytics",
  //    "children": [
  //     {
  //      "name": "cluster",
  //      "children": [
  //       {"name": "AgglomerativeCluster", "size": 3938},
  //       {"name": "CommunityStructure", "size": 3812},
  //       {"name": "MergeEdge", "size": 743}
  //      ]
  //     },
  //     {
  //      "name": "graph",
  //      "children": [
  //       {"name": "BetweennessCentrality", "size": 3534},
  //       {"name": "LinkDistance", "size": 5731}
  //      ]
  //     }
  //    ]
  //   }
  //  ]
  // }


  var width = 960/2,
    height = 700,
    radius = Math.min(width, height) / 2,
    color = d3.scale.category20c();

var svg = d3.select(".sunburst").append("svg").attr("class", "center-sun")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height * .52 + ")");

var partition = d3.layout.partition()
    .sort(null)
    .size([2 * Math.PI, radius * radius])
    .value(function(d) { return 1; });

var arc = d3.svg.arc()
    .startAngle(function(d) { return d.x; })
    .endAngle(function(d) { return d.x + d.dx; })
    .innerRadius(function(d) { return Math.sqrt(d.y); })
    .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });


  var path = svg.datum(jsonObject).selectAll("path")
      .data(partition.nodes)
    .enter().append("path")
      .attr("display", function(d) { return d.depth ? null : "none"; }) // hide inner ring
      .attr("d", arc)
      .style("stroke", "#fff")
      .style("fill", function(d) { return color((d.children ? d : d.parent).name); })
      .style("fill-rule", "evenodd")
      .each(stash);

  d3.selectAll("input").on("change", function change() {
    var value = this.value === "count"
        ? function() { return 1; }
        : function(d) { return d.size; };

    path
        .data(partition.value(value).nodes)
      .transition()
        .duration(1500)
        .attrTween("d", arcTween);
  });


// Stash the old values for transition.
function stash(d) {
  d.x0 = d.x;
  d.dx0 = d.dx;
}

// Interpolate the arcs in data space.
function arcTween(a) {
  var i = d3.interpolate({x: a.x0, dx: a.dx0}, a);
  return function(t) {
    var b = i(t);
    a.x0 = b.x;
    a.dx0 = b.dx;
    return arc(b);
  };
}

d3.select(self.frameElement).style("height", height + "px");

};