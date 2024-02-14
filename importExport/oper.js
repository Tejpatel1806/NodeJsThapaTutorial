const add = (a, b) => {
   return a + b;
}
const sub = (a, b) => {
   return a - b;
}

//aama kevu hoy ke aapde module.exports.add=add ane module.exports.sub=sub
//aam lakhie etle te object create kare jema key value tarike add:function add ,
//sub:function sub aa rit no object che te return karse
//etle biji file ke jene aano use karvo hoy e
//const abc=require("oper.js");aam lakhe etle tema object aai jase
//have abc.add ane abc.sub e rite e access kari sakse aa badha function ne

module.exports.add = add;//aano mtlb have add function ne biji file mathi pan access kari saksu
module.exports.sub = sub;

//aa export ne pan short ma niche mujab lakhi sakay
module.exports = { add, sub };