let btns=document.querySelectorAll(".container");
let hiddenContent=document.querySelectorAll(".hidden-content");
let i,reset=true,val=true;


const hide=(i)=>{
    if(reset){
        hiddenContent[i].style.display="flex";
        reset=false;
    }
    else{
        hiddenContent[i].style.display="none";
        reset=true;
    }

}



for(let btn of btns){
    btn.addEventListener("click",function open(){
        console.log("clicked");
        
      
        let nodeListArray = Array.from(btns);
        let index = nodeListArray.indexOf(btn);
        hide(index);


        
      
    })
}


