let btns=document.querySelectorAll(".container");
let hiddenContent=document.querySelectorAll(".hidden-content");
let crossSign=document.querySelector("svg");
let i,reset=true,val=true;


const hide=(i)=>{
    if(reset){
        hiddenContent[i].style.display="flex";      
        btns[i].childNodes[3].style.display="flex";
        btns[i].childNodes[1].style.display="none";
        reset=false;
    }
    else{
        hiddenContent[i].style.display="none";  
        btns[i].childNodes[3].style.display="none";
        btns[i].childNodes[1].style.display="flex";
        reset=true;
     }

}



for(let btn of btns){
    btn.addEventListener("click",function open(){
        let nodeListArray = Array.from(btns);
        let index = nodeListArray.indexOf(btn);
        hide(index);
    })
}




