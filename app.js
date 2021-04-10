var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var form = document.getElementById("form");

const validateForm=()=>{
    if(age.value==""  || height.value==""|| weight.value==""){
        alert("all feilds are required!");
        document.getElementById("submit").removeEventListener("click",countBmi);
    }else{
countBmi();
    }
}

document.getElementById("submit").addEventListener("click",validateForm);

const countBmi=()=>{
    var p=[age.value, height.value, weight.value];
    form.reset();

    var bmi = Number(p[2])/(Number(p[1])/100*Number([1])/100);

    var result='';

    if(bmi<18.5){
        result='oops!You are underweight. you gotta a pounds helthfully';
    }else if  (18.5<=bmi&&bmi<=24.9){
        result='yay! You are healthy. you can eat a pizza or two';
    }else if (25<=bmi&&bmi<=29.9){
        result='you gotta cut down on your unhealthy stuff & you will be perfectly healthy';
}else if (30<=bmi&&bmi<=34.9){
    result='oops! It is high time you train your brain to hate junk food';
}else if (35<=bmi){
    result='obesity alert !!! no more junk i say';
}

var h1=document.createElement("h1");
var pr=document.createElement("p");

var t =document.createTextNode(result);

var b =document.createTextNode('BMI');

var r =document.createTextNode(parseFlote(bmi).toFixed(2));

h1.appendChild(b);

history.appendChild(r);

pr.appendChild(t);

document.body.appendChild(h1);

document.body.appendChild(pr);

document.getElementById("submit").removeEventListener("click", countBmi);

document.getElementById("submit").removeEventListener("click", validateForm);

document.getElementById("submit").addEventListener("click", countBmi)



}

