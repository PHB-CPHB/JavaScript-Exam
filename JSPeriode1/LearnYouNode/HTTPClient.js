let http = require("http");
const url = process.argv[2];

http.get(url, function callback (response){
    response.setEncoding("UTF-8");
    response.on("data", function callback (data){
        console.log(data);
    })
    response.on("error", function callback (error){
        return error;
    })
    response.on("end", function callback (end){
        return end;
    })
})