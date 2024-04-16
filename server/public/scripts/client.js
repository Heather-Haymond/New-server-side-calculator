

console.log('client.js is sourced!');

function getCalcs(){
    axios({
        method:'GET',
        url: '/calculations'
    })
}
getCalcs()