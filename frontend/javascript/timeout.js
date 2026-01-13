setTimeout(() => {
    console.log("printing after the timeout time ie 3s");
    let div=document.createElement("div");
    div.innerHTML="<div>this is added after 3 seconds</div>";
    div.style.backgroundColor="lightblue";
    document.body.append(div);
}, 3000);