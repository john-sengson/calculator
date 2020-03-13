//reverse pseudocode base on simple calc 

//HTML
// make the contents of the calculator that has calc name, input box fir results, rows for buttons

//css
//use the HTML and make a calcultor design using the HTML file created

//JS
// start making functions that will make the calc work     
//copied the js below and read and undertstand. use a different method and take off unknown code yet
// unknown codes are $ 

function display(val){
    document.getElementById("calculator-screen").value += val
}

function results(){
    var x = document.getElementById("calculator-screen").value
    var y = eval(x)
    document.getElementById("calculator-screen").value = y
}

function clearDisplay(){
    document.getElementById("calculator-screen").value = ""
}
