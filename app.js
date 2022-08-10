//we shall be using d3.selectAll to select all the elements in the DOM
//we shall be using d3.select to select a single element in the DOM
//we shall be using d3.append to append an element to the DOM
//we shall be using d3.attr to set an attribute to an element in the DOM
//we shall be using d3.text to set the text of an element in the DOM
//we shall be using d3.html to set the html of an element in the DOM

d3.select("h1").style("color", "blue");
d3.select("h1").style("font-size", "2em");
d3.select("h1").style("font-weight", "bold");
d3.select("h1").style("text-decoration", "none");
d3.select("h1").style("text-align", "center");

d3.select("body").append("h3").text("Heading 3");
d3.select("body").append("h3").text("Heading 3");
d3.select("body").append("h3").text("Heading 3");
d3.select("body").append("h3").text("Heading 3");

d3.selectAll("h3").style("color", "red");
d3.selectAll("h3").style("font-size", "1.5em");
d3.selectAll("h3").style("font-weight", "bold");
d3.selectAll("h3").style("text-decoration", "none");
d3.selectAll("h3").style("text-align", "center");

d3.select("body").append("p").text("Lecture 2");
d3.select("p").style("color", "blue");
d3.select("p").style("font-size", "1.5em");
d3.select("p").style("font-weight", "bold");
d3.select("p").style("text-decoration", "none");
d3.select("p").style("text-align", "center");

let dataset = [1, 2, 3, 4, 5, 6, 7];
/*
d3.select("body")
    .selectAll("h6")
    .data(dataset)
    .enter()
    .append("h6")
    .text("H6 is here");
*/
d3.select("body")
    .selectAll("h6")
    .data(dataset)
    .enter()
    .append("h6")
    .text(function(d) {
        return d;
    });