//API KEY for Alpha Vantage 
var apiKey = "B9OECF6DTVPVMCKD";
var data = {};

function collectData(ticker){
    var url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + ticker + "&interval=1min&outputsize=full&apikey=" + apiKey;
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url);
}