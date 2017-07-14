//API KEY for Alpha Vantage 
var apiKey = "B9OECF6DTVPVMCKD";
var data = {};

function callback(d) {
    data = d
    console.log(data);
}

function collectData(ticker){
    var url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + ticker + "&interval=1min&outputsize=full&apikey=" + apiKey;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.status == 200) {
            callback(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}