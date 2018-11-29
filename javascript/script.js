let h1 = document.getElementById("h1");
let button = document.querySelectorAll("li");
let h3 = document.querySelectorAll("h3");
let amd, usd, rub;
let beg = 20000;
let ave = 30000;
let adv = 40000;
let type = beg;
h1.innerHTML = type + "amd";
let val = 'am';
let leng = "arm";
class Myclass{
    pay(){
        if(val=='ru'){
            this.sum();
            h1.innerHTML = rub;
        }else if(val=='us'){
            this.sum();
            h1.innerHTML = usd;
        }else{
            this.sum();
            h1.innerHTML = amd + "amd";
        }
    }
    sum(){
       if(leng=="ang"){
            usd = Math.round(1.5*(type / 470)) +"usd";
            rub = Math.round(1.5*(type / 8)) + "rub";
            amd = type * 1.5;
        }else if(leng=="ger"){
            usd = Math.round(2*(type / 470)) +"usd";
            rub = Math.round(2*(type / 8)) + "rub";
            amd = type * 2;
        }else{
            usd = Math.round(type / 470) +"usd";
            rub = Math.round(type / 8) + "rub";
            amd = type;
        }
    }
}
let myclass1 = new Myclass;
button[0].addEventListener("click",function(){
    leng = "arm";
    myclass1.pay();
    h3[0].innerHTML = button[0].textContent;
})
button[1].addEventListener("click",function(){
    leng = "ang";
    myclass1.pay();
    h3[0].innerHTML = button[1].textContent;
})
button[2].addEventListener("click",function(){
    leng = "ger";
    myclass1.pay();
    h3[0].innerHTML = button[2].textContent;
})
button[3].addEventListener("click",function(){
    type = beg;
    myclass1.pay();
    h3[1].innerHTML = button[3].textContent;
})
button[4].addEventListener("click",function(){
    type = ave;
    myclass1.pay();
    h3[1].innerHTML = button[4].textContent;
})
button[5].addEventListener("click",function(){
    type = adv;
    myclass1.pay();
    h3[1].innerHTML = button[5].textContent;
})
button[6].addEventListener("click",function(){
    myclass1.pay();
    h1.innerHTML = amd + "amd";
    val = 'am';
    h3[2].innerHTML = button[6].textContent;
})
button[7].addEventListener("click",function(){
    myclass1.pay();
    h1.innerHTML = usd;
    val = 'us';
    h3[2].innerHTML = button[7].textContent;
})
button[8].addEventListener("click",function(){
    myclass1.pay();
    h1.innerHTML = rub;
    val = 'ru';
    h3[2].innerHTML = button[8].textContent;
})


