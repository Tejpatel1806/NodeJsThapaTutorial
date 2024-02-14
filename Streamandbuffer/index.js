//streams are object that let you read data from source and write data to a
//destination in continuous fashion
//stream matlab eksathe badho data lavani jarur nathi youtube ma kem hoy che tem
//you tube par video jota jav ane e load thatu jase e rite aama pan streaming no
//matlab evo j thay che
//Readable:-Stream which is used for read operation
//Writable:-Stream which is used for Write operation
//Duplex:-Stream that can be used for both read and write operations
//Transform:-one type of Duplex

//each type of stream is eventemitter instance.and throws several events at different
//instances of time.some of the commanly used events are
//1>data:-this event is fired when there is data available to read
//2>end:-this event is fired when there is no data avilable to read
//3>error:-this event is fired when there is an error while receving or writing data
//4>finish:-this event is fired when all the data are flushed

//aa concept ma theroy ma khbar padi gai che code bau jaldi samjato nathi
const http = require("http");
const fs = require("fs");
const server = http.createServer();
server.on("request", (req, res) => {

    // fs.readFile("input.txt", (err, data) => {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     res.end(data.toString());
    // })
    const rsstream = fs.createReadStream("inputs.txt");
    rsstream.on('data', (chunkdata) => {
        res.write(chunkdata);
    })
    rsstream.on('end', () => {
        res.end();
    })
    rsstream.on('error', () => {
        res.end("no such file or directory");
    })

})
server.listen(8000, "127.0.0.1", () => {
    console.log("listing from port number 8000");
});