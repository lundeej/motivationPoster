// Get Kanye API 

function getApit(){
    var requestQuote = 'https://kanye.rest/'

    fetch(requestQuote, {
        mode: "cors",
        headers: {
            'Access-Control-Allow-Origin': "*"
        }
    })
        .then(function (response) {
            return response.json(); 
        })
        .then(function (data) {
            console.log(data)
        }); 
}
getApit(); 