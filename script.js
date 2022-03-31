var xhttp = new XMLHttpRequest();
document.getElementById("myBtn").addEventListener("click", function(){
   var demo= document.getElementById("demo")
   demo.innerHTML="";
    var language = document.getElementById("language");
    var lValue = language.options[language.selectedIndex].value;
    lValue=lValue.toLowerCase();
      console.log(lValue);
    
    var category = document.getElementById("category");
    var cValue = category.options[category.selectedIndex].value;
    cValue = cValue.toLowerCase();
      console.log(cValue);


xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       
       var Janswer= xhttp.responseText;
       console.log(Janswer);
     var answer= JSON.parse(Janswer);
     console.log(answer.text);
       const para = document.createElement("p");
        para.setAttribute("id", "desc")
        para.innerText =answer.text      
        demo.appendChild(para);
       
    }
};
if(lValue==="english"){
    console.log("hello english");
    xhttp.open("GET", "https://uselessfacts.jsph.pl/"+ cValue+ ".json?language=en");
}else{
if(lValue==="german"){
    xhttp.open("GET", "https://uselessfacts.jsph.pl/"+ cValue+ ".json?language=de");
}
else{
    xhttp.open("GET", "https://uselessfacts.jsph.pl/"+ cValue+ ".json");
}
}


xhttp.send();

});
