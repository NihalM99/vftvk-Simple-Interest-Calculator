function compute()
{
var principal = document.getElementById("principal").value;
var rate=document.getElementById("rate") .value;
var years=document.getElementById("years").value;
var interest=principal*years*rate/100;
var year=new Date().getFullYear()+parseInt(years);
var amount = principal+interest;
   document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>";
if(principal<=0)
{
    alert("Enter a Value Greater Than 0");
}

}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    var output=document.getElementById("rate_val");
    output.innerText= rateval;
    
   
    
}

    
      

        