let h1 = document.getElementById("h1");
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
    button(x){
        return document.querySelectorAll("li")[x];
    }
    eventlist(index,event,foo){
        return this.button(index).addEventListener(event,foo);
    }
}
let myclass = new Myclass;
//Language:

myclass.eventlist(0,"click",function(){
    leng = "arm";
    myclass.pay();
    h3[0].innerHTML = button[0].textContent;
})
myclass.eventlist(1,"click",function(){
    leng = "ang";
    myclass.pay();
    h3[0].innerHTML = button[1].textContent;
})
myclass.eventlist(2,"click",function(){
    leng = "ger";
    myclass.pay();
    h3[0].innerHTML = button[2].textContent;
})
//Level:

myclass.eventlist(3,"click",function(){
    type = beg;
    myclass.pay();
    h3[1].innerHTML = button[3].textContent;
})
myclass.eventlist(4,"click",function(){
    type = ave;
    myclass.pay();
    h3[1].innerHTML = button[4].textContent;
})
myclass.eventlist(5,"click",function(){
    type = adv;
    myclass.pay();
    h3[1].innerHTML = button[5].textContent;
})
// Value:

myclass.eventlist(6,"click",function(){
    myclass.pay();
    h1.innerHTML = amd + "amd";
    val = 'am';
    h3[2].innerHTML = button[6].textContent;
})
myclass.eventlist(7,"click",function(){
    myclass.pay();
    h1.innerHTML = usd;
    val = 'us';
    h3[2].innerHTML = button[7].textContent;
})
myclass.eventlist(8,"click",function(){
    myclass.pay();
    h1.innerHTML = rub;
    val = 'ru';
    h3[2].innerHTML = button[8].textContent;
})


