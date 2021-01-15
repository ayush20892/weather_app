var btndata = document.querySelector("#btn-data");
var txtinput = document.querySelector("#txt-input");
var output = document.querySelector("#output");

var serverURL ="https://api.openweathermap.org/data/2.5/weather?appid=10ec6923de1a815bc337ad1124aa4994&units=metric&q="

function getURL(text)
{
  return serverURL + text
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time")
}


function clickEvetHandler()
{
  var inputText = txtinput.value; // taking input

  // calling server for processing
  fetch(getURL(inputText))
      .then(response => response.json())
      .then(json => {
          var translatedText = json.main.temp;
          output.innerText = translatedText; // output
         })
      .catch(errorHandler)
};

btndata.addEventListener("click", clickEvetHandler);