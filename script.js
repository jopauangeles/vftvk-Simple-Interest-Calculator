
function compute()
{   
     //declare variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var resultText = ""; resultVal = "";

    //check principal
    if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    //create references to the input elements to validate
    resultId = document.getElementById("result");

    //create result text based on data
    resultText = 'If you deposit <span class="yellowHighlight">' + principal + '</span>,<br/>' +
                ' at an interest rate of <span class="yellowHighlight">' + rate + '%.</span><br/>' +
                'You will receive an amount of <span class="yellowHighlight">' + interest + ', </span><br/>' +
                'in the year <span class="yellowHighlight">' + year + '</span><br/>';

    //assign value
    resultId.innerHTML=resultText;

}

function updateRate() 
{
    //show rate from slider
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + '%';
}
        