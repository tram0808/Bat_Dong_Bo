// function cong(cb){
//     let a= 5
//     let b
//     setTimeout(() => {
//         b=10
//         cb(a, b)
//     }, 1000);
// }
// cong((a, b) => {
//     console.log(a+b)
// })
// 

const request = require('request');

function getCong(a, b){
    return new Promise((resolve, reject) => {
        const url =`https://pheptinhonline.herokuapp.com/cong/${a}/${b}`
        request(url, {json:true},function (error, response, body) {
        if(error) return reject(error)
        if(!body.success) return reject(body.message)
        return resolve(body.message)
        });
    });
    
}
function getTru(a, b){
    return new Promise((resolve, reject) => {
        const url =`https://pheptinhonline.herokuapp.com/cong/${a}/${b}`
        request(url, {json:true},function (error, response, body) {
        if(error) return reject(error)
        if(!body.success) return reject(body.message)
        return resolve(body.message)
        });
    });
    
}
function getNhan(a, b){
    return new Promise((resolve, reject) => {
        const url =`https://pheptinhonline.herokuapp.com/cong/${a}/${b}`
        request(url, {json:true},function (error, response, body) {
        if(error) return reject(error)
        if(!body.success) return reject(body.message)
        return resolve(body.message)
        });
    });
    
}
function getChia(a, b){
    return new Promise((resolve, reject) => {
        const url =`https://pheptinhonline.herokuapp.com/cong/${a}/${b}`
        request(url, {json:true},function (error, response, body) {
        if(error) return reject(error)
        if(!body.success) return reject(body.message)
        return resolve(body.message)
        });
    });
    
}
getCong(4,'a')
.then(tong => console.log(tong))
.catch(error => console.log("loi " + error))

