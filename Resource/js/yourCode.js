
function Show(){
    if(document.getElementById('myform').style.display === "none"){
        document.getElementById('myform').style.display = "block";
        document.getElementById('mytext').innerHTML = "Hide Register Form";
    }else{
        document.getElementById('myform').style.display = "none";
        document.getElementById('mytext').innerHTML = "Show Register Form";
    }
}
function checkForm(){
    var check1 = document.getElementById('t1').value;
    var check2 = document.getElementById('t2').value;
    if(check1 === "" || check2 === ""){
        alert("Please input again!!!");
    }else{
        alert("Thank you!!!");
    }
}	
