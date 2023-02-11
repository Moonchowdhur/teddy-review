document.getElementById("review-btn").addEventListener("click", function(){
    const value1= document.querySelector("textarea").value;
    const div= document.querySelector("#head");
    const h4=document.createElement("h4");
    h4.innerText=value1;
    // how to change position in h3?
    h4.style.textAlign="right";
    h4.style.marginRight="50px";
    h4.classList.add("reviwes");
    h4.style.color="lightblue";
   div.appendChild(h4);
   document.querySelector("textarea").value=" ";
})
