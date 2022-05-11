const margin = ({top: 20, right: 35, bottom: 20, left: 40})

fetch("my_runs_20220511.json")
  .then(response => response.json())
  .then(data => {
    runs = data;
    console.log("my_runs_20220511", runs);

    for(x=0; x < length(data); x++ ) {
        var dist_in_mi = data['distance'][x] / 1609;
        data['dist_in_mi'][x] = dist_in_mi;
     };
    
    console.log("dist_in_mi ",data['dist_in_mi'].slice(0,5));

}
)


d3.csv('my_runs_20220511.csv', d3.autoType).then( data => {

    //console.log(data)
    let dist = data.map(d => d.distance)
    console.log(dist)
    let dt = data.map(d => d.start_date)
    console.log(dt)
})


var svg = d3.select('#Viz_area')

/*var d = data['distance'].slice(0,5);
var dt = data['']
   */