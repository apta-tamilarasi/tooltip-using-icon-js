var question=document.querySelectorAll(".ques");
console.log(question);


question.forEach(function(e){
    console.log(e);
    e.addEventListener("click",function(){
        if(e.nextElementSibling.classList.contains("tool")){
          e.nextElementSibling.classList.remove("tool");
         
                      
        }


        else{
            e.nextElementSibling.classList.add("tool");          
                      
           
        }

 //console.log(e.nextElementSibling.firstElementChild);



    })
})

var icons=document.querySelectorAll(".icon");
icons.forEach(function(icon){
    icon.addEventListener("click",function(e){
        e.target.parentNode.classList.remove("tool");
    })
})




