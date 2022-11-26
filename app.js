//Brewery------------------------------------------------------------
const randomButton = document.getElementById(`randomButton`);
const apiResult = document.getElementById(`apiResult`);


function getRandom(){
    axios.request({
        url : "https://api.openbrewerydb.org/breweries/random",
        methhod : "GET"
    }).then(randomSuccess).catch(randomFail)
}

function randomSuccess(response){
    let random = response.data[0]; //[0] because its in an array and you can see it in the debugger
    apiResult.innerHTML = `<h3>${random.name}</h3>`;
    apiResult.innerHTML += `<h5>${random.street}</h5>`;  // += means also display div
}   

function randomFail(response){
    apiResult.innerHTML = `<h2>An error has occured</h2>`
}

randomButton.addEventListener(`click`, getRandom);

//Crypto---------------------------------------------------------------

const cryptoButton = document.getElementById(`cryptoButton`);

function getCrypto(){
    axios.request({
        url : "https://api2.binance.com/api/v3/ticker/24hr",
        method : "GET"
    }).then(cryptoSuccess).catch(cryptoFail)
}

function cryptoSuccess(response){
    let rates = response.data;
    for (rate of rates){
        apiResult.insertAdjacentHTML(`beforeend`, `<p>${rate.symbol} </p>:$${rate.lastPrice}`)
    }
}

function cryptoFail(error){
    randomResult.innerHTML(`<h2>An error has occured</h2>`);
}

 cryptoButton.addEventListener(`click`, getCrypto);

//-----------------------------------------------------------

 //Clears the result
const clearButton = document.getElementById(`clearButton`);

function clearResult(){
    apiResult.innerHTML = "";
}

clearButton.addEventListener(`click`, clearResult);
