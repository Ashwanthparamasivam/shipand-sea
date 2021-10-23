var weight=[44,55,30,28,60]
function avg(){
var tot=weight[0]+weight[1]+weight[2]+weight[3]+weight[4];
var arg = tot / weight.length
console.log(arg)
}
function setup() 
{
  createCanvas(400,400);
  avg();
}

function draw() 
{
background(51);

}

