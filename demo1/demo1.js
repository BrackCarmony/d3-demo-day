
d3.select("body").style('background-color', 'lightblue');

var colorScale = d3.scaleLinear().domain([0,25,50,75,100])
  .interpolate(d3.interpolateHcl)
  .range(['yellow','red','yellow','lavender','mintcream']);



// d3.selectAll("div")
//   .data([0,10,20,30,40,50,60,70,80,90,100])
//   .enter()
//   .append('div')
//   .style('height','40px')
//   .style('border','1px solid black')
//   .style('margin','2px')
//   .style('background-color', function(d){
//     console.log(arguments);
//     console.log(d);
//     return colorScale(d);
//   })
//   .style('width',(d,i) => i*10 + Math.random()*20 +'px' );

var cards = d3.selectAll('.pokemon')
  .data(pokemon)
  .enter()
  .append('div')
  .classed('pokemon', true)

cards.append('img')
  .attr('src',d=>d.pic)
  .style('height', '50px')
  .style('width', '50px')

cards.append('div')
  .style('height', '50px')
  .style('width', d=>100*d.awesome+'px')
  .style('border','1px solid black')
  .style('display', 'inline-block')
  .style('background-color', function(d,i){
      return colorScale(i*20);
  })
