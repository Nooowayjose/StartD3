var dataArray = [20, 40, 60, 80, 100];
var width = 500;
var height = 500;

var widthScale = d3.scale.linear()
                    .domain([0, d3.max(dataArray)])
                    .range([0, width]);

var color = d3.scale.linear()
                    .domain([0, d3.max(dataArray)])
                    .range(["orange", "teal"]);

var axis = d3.svg.axis()
                    .scale(widthScale)
                    .ticks(5)

//Canvas
var canvas = d3.select("body")
                    .append("svg")
                    .attr("width", width)
                    .attr("height", height)
                    .append("g")
                    .attr("transform", "translate(20, 0)");


var bars = canvas.selectAll("rect")
                    .data(dataArray)
                    .enter()  //Returns empty placeholders for each dataArray element
                      .append("rect") //Add a rectangle
                        .attr("height", 40)
                        .attr("fill", function(data){
                          return color(data)
                        })
                        .attr("width", function(data){
                          return widthScale(data)
                        })
                        .attr("y", function(data, index){
                          return index * 70
                        })

canvas.append("g")
        .attr("transform", "translate(0, 400)")
        .call(axis);

//End of bar chart. Notice where you place your semi-colons or the code wont execute
