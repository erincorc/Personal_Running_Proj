
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

d3.csv('my_runs_20220511.csv', d3.autoType).then( data =>{
    console.log(data)
})

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