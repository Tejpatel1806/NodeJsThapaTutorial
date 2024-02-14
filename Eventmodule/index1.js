//Event module
//aapde nodejs ma jovu hoy ke jyare koi button par click kare tyare game te event fire
//thavi joie tyare aapde event module use karie chie
//node js has a built in module called event
//where you can create,fire or listen your own events.

const EventEmitter = require('events');
const event = new EventEmitter();

//ahi je che e aapde event ne listen karie chie ane tema aapde
//first parameter tarike event name ,second parameter tarike
//callback function lese ke aa event thai to suh thavu joie em 
//aama multiple event pan aa rite fire kari sakay 
//means say your name event emit thay tyare 2 callback function call thay em
event.on("say your name", () => {
    console.log("tej patel");
})
event.on("say your name", (hello, hello1) => {
    console.log("tej patel s", hello, hello1);
})

//aa niche ni line no matlab evo thay ke aapde ek event create kari jenu name che
//say your name have e event ne uper listen karvani che 
event.emit("say your name", 200, "OK");
//200 ane ok che te parameter che je aapde callback function ma jase