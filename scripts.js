const upperSet = "ASDFGHJKLZXCVBNMQWERTYUIOP";
const lowerSet = "asdfghjklqwertyuiopzxcvbnm";
const symbolSet = "!@#$%^&*()_-+={}[]:;',\.<>/?|";
const numberSet = "1234567890";

const passwordBox = document.getElementById("pass-box");
const totalLength = document.getElementById("total-char");
const upperchar = document.getElementById("upper-case");
const lowerchar=document.getElementById("lower-case");
const numberchar=document.getElementById("number");
const symbolchar=document.getElementById("symbols");


/* it will give the randome char for password */

function getRandomData(dataset)
{
    return dataset[Math.floor(Math.random()*dataset.length)];
}




/* this function generate password when user click on generate password */

const generatePassword=(password= ' ') =>{
    console.log("password");
    if(upperchar.checked && password.length<totalLength.value){
        password+=getRandomData(upperSet);
    }
    if(lowerchar.checked && password.length<totalLength.value){
        password+=getRandomData(lowerSet);
    }
    if(symbolchar.checked && password.length<totalLength.value)
    {
        password+=getRandomData(symbolSet);
    }
    if(numberchar.checked && password.length<totalLength.value)
    {
        password+=getRandomData(numberSet);
    }

    if(password.length<totalLength.value)
    {
        return generatePassword(password);
    }

    passwordBox.innerText=password

}


document.getElementById("btn").addEventListener("click",
function(){
    // var password="";
    generatePassword();
});