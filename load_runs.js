const margin = ({top: 20, right: 35, bottom: 20, left: 40})
const width = 600;
const height = 450;

fetch("my_runs_20220511.json")
  .then(response => response.json())
  .then(data => {
    runs = data;
    console.log("my_runs_20220511", runs);

    for(x=0; x < data.length; x++ ) {
        var dist_in_mi = data['distance'][x] / 1609;
        data['dist_in_mi'][x] = dist_in_mi;
     };
    
    console.log("dist_in_mi ",data['dist_in_mi'].slice(0,5));

}
)


d3.csv('my_runs_20220511.csv', d3.autoType).then( data => {

    //console.log(data)
    let dist = data.map(d => d.distance)
    let five_dist = dist.slice(0,5)
   // console.log(dist)
    console.log('short dist ', five_dist);
    let dt = data.map(d => d.start_date)
    let five_dt = dt.slice(0,5)
    console.log('short dt ', five_dt);
   // console.log(dt)

    const svg = d3.select('.chart').append('svg')
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    // CREATE SCALES
    const xScale = d3.scaleTime()
        .domain(d3.extent(five_dt)).nice()
        .range([0, width])

    const yScale = d3.scaleLinear()
        .domain(d3.extent(five_dist)).nice()
        .range([height, 0])

    const xAxis = d3.axisBottom()
        .scale(xScale)
        .ticks(5)

    const yAxis = d3.axisLeft()
        .scale(yScale)
        .ticks(5)

})


var svg = d3.select('#Viz_area')

/*var d = data['distance'].slice(0,5);
var dt = data['']
   */