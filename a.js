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
        if(error) {
            throw Error('Lỗi do cong')
            return 
        } 
        if(!body.success) return reject(body.message)
        return resolve(body.message)
        });
    });
    
}
function getTru(a, b){
    return new Promise((resolve, reject) => {
        const url =`https://pheptinhonline.herokuapp.com/tru/${a}/${b}`
        request(url, {json:true},function (error, response, body) {
        if(error) return reject(error)
        if(!body.success) return reject(body.message)
        return resolve(body.message)
        });
    });
    
}
function getNhan(a, b){
    return new Promise((resolve, reject) => {
        const url =`https://pheptinhonline.herokuapp.com/nhan/${a}/${b}`
        request(url, {json:true},function (error, response, body) {
        if(error) return reject(error)
        if(!body.success) return reject(body.message)
        return resolve(body.message)
        });
    });
    
}
function getChia(a, b){
    return new Promise((resolve, reject) => {
        const url =`https://pheptinhonline.herokuapp.com/chia/${a}/${b}`
        request(url, {json:true},function (error, response, body) {
        if(error) return reject(error)
        if(!body.success) return reject(body.message)
        return resolve(body.message)
        });
    });
    
}

// function dthcn(d, r) {
//     getNhan(d, r)
//     .then(nhan => console.log(nhan))
//     .catch(error => console.log(error))

// }
// dthcn(10, 3)

// 

async function chuvihcn(d, r) { 
    try {
        let tong= await getCong(d, r)
        let kq = await getNhan(tong, 2)
        console.log(kq)
    } catch (error) {
        console.log(tong)
    }
    
    
}
chuvihcn(10, 5)