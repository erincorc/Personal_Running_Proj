
/*const jsonData= require('my_runs_20220511.json'); 
console.log(jsonData); */
/*let runs;

fetch("my_runs_20220511.json")
.then(response => {
   return response.json();
})
.then(data => {
    runs = data;
}) */


/*
var runs = JSON.parse(my_runs_20220501);
window.print(runs);

document.getElementById('data').textContent = JSON.stringify(runs);
fetch("my_runs_20220511.json")
.then(response => response.json())
.then(data => {
    runs = data;
    print(runs);
})*/

fetch("my_runs_20220511.json")
  .then(response => response.json())
  .then(data => {
    attractions = data;
    console.log("my_runs_20220511", attractions);}
)

for(x=0; x < length(data); x++ ) {
    var dist_in_mi = data['distance'][x] / 1609;
    data['dist_in_mi'][x] = dist_in_mi;
 }

console.log(data['dist_in_mi'].slice(0,5))


var svg = d3.select('#Viz_area')

/*var d = data['distance'].slice(0,5);
var dt = data['']
   */