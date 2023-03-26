console.log("hello world");

let inp = document.querySelector("[type= 'text']");
let c = document.querySelector(".child");
let parDiv= document.querySelector(".parent");
let tit = document.getElementsByTagName("h3")[0];
let remDiv= document.createElement("div");
remDiv.className = "remove";
parDiv.append(remDiv);

let btnOne = document.getElementById("btn-1");




inp.onfocus = function(){
    inp.style.outline = "5px solid #802bb1";
}

inp.onblur=function(){
    inp.style.outline = "none";
}

let myp = document.createElement("p");
let mypTxt = document.createTextNode("Your List Is Empty");
myp.appendChild(mypTxt);


tit.style.display = "none";
  remDiv.appendChild(myp);


let j = 0;
btnOne.onclick = function(){
tit.style.display = "block";

  myp.remove();

  j++;
  if(inp.value.trim() !== "") {


    let chDiv = document.createElement("div");
    chDiv.className=`same child-${j}`;
    
    let chP = document.createElement("p");
    chP.className = "first";
    chP.innerHTML= inp.value;
    chDiv.appendChild(chP);
    
    
    let bt = document.createElement("button");
    bt.id = "btn-2";
    
    let ic = document.createElement("i");
    ic.className = "fa-solid fa-minus fa-beat";
    bt.appendChild(ic);
    chDiv.appendChild(bt);
    
    
    remDiv.appendChild(chDiv);




    bt.onclick = function(){
      bt.parentElement.remove();
   
      console.log(remDiv.children.length);
      if(remDiv.children.length === 0){
       tit.style.display = "none";
  
        remDiv.append(myp);
        }


    };

    
  }

};







