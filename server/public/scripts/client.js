

console.log('client.js is sourced!');

function getCalcs(){
    axios({
        method:'GET',
        url: '/calculations'
    }).then((response) => {
        let calcFromServer = response.data;
        console.log(calcFromServer);
    })
}
getCalcs()