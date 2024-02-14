const path = require('path');

//aa niche na method thi eni directory nu name suh che e khabr padse
console.log(path.dirname('E:/NODEJSTHAPA/Pathmodule.js'));

//aa niche na method thi file nu extension suh che e khabar padse
console.log(path.extname("E:/NODEJSTHAPA/Pathmodule.js"));

//aa niche na method thi aapn ne filenu name khabar padse
console.log(path.basename("E:/NODEJSTHAPA/Pathmodule.js"));

//aa niche na command thi ek object return karse ane te object ma root,
//directory name ,file name badhu access kari saksu 
//filename aapde name property thi access kari saksu
const path1 = path.parse("E:/NODEJSTHAPA/Pathmodule.js");
console.log(path1.name);
