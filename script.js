var xhttp = new XMLHttpRequest();
document.getElementById("myBtn").addEventListener("click", function(){
   var demo= document.getElementById("demo")
   demo.innerHTML="";
    var select = document.getElementById("categories");
    var value = select.options[select.selectedIndex].value;
      console.log(value);
      var quantity = document.getElementById("quantity");
      var number = quantity.value;
      console.log(number);
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
      // document.getElementById("demo").innerHTML ;
       var Janswer= xhttp.responseText;
       console.log(Janswer);
      var answer= JSON.parse(Janswer);
       for(var i=0; i<answer.length;i++){
        const para = document.createElement("li");
        para.setAttribute("id", "desc")
       
        var excuse= answer[i].excuse; 
        if(excuse==undefined){
            excuse= answer[i].death
        }
        para.innerText =excuse       
        demo.appendChild(para);
       }
    }
};
// will edit API
if(value=="any"){
    if(number){
        xhttp.open("GET", "https://excuser.herokuapp.com/v1/excuse/"+number);  
    }else{
xhttp.open("GET", "https://excuser.herokuapp.com/v1/excuse");
    }

}
else
{
    if(number){
        xhttp.open("GET", "https://excuser.herokuapp.com/v1/excuse/"+value+"/"+number);  
    }else{
    xhttp.open("GET", "https://excuser.herokuapp.com/v1/excuse/"+value);
    }
    
}

xhttp.send();

});
