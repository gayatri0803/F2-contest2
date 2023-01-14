var entry = document.getElementsByClassName("entry");
entry.addEventListener("click " ,displayDetails);

var row=1;

function displayDetails(){
    var name =document.getElementById(name).value;
    var profession =document.getElementById(profession).value;
    var age=document.getElementById(age).value;

    if(!name || !profession || !age)
    {
        alert("Error : Please Make sure All the fields are filled before adding in an employee !")
        return; 
    }    
}