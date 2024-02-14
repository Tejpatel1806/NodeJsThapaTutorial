const fs=require("fs");
const data=fs.readFileSync("tej1.txt","utf-8");
console.log(data);
console.log("after the data");//synchronous means jya sudhi data read nai thai jay tya sudhi after the data print nai thay
//means jo ene file mathi data leta 10sec lagse to e wait karse 10 sec pachi j e ena pachi na statement execute karse


fs.readFile("tej1.txt","utf-8",(err,data)=>{
    console.log(data);
})
console.log("after the data");
//asynchoronus ma output ma first after the data aavse ane pachi data print thase
//means e wait nai kare data ne read karvama time lage tya sydhi etla ma e ena niche na bija statememnt execute karse
