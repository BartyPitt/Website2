
/*
<a class=Info>
    <div>
        <h2>
            Aura Smart Lamp
        </h2>
    </div>
    <img src = 'Images\portfolio\AuraLamp.png'>
</a>
the target thing to create 
 */


PortfolioSection = document.getElementById("ImageSelection")
console.log(PortfolioSection);

Data.forEach((page , itterator) => {
    if(page.image){
        InfoDiv = document.createElement("a");
        InfoDiv.setAttribute("Class" , "Info");
        mainText = document.createElement("h2");
        mainText.textContent = page.title;
        TempImage = new Image();
        TempImage.src = page.image[0];
        MinorDiv = document.createElement("div");
        MinorDiv.appendChild(mainText);
        InfoDiv.appendChild(MinorDiv);
        InfoDiv.appendChild(TempImage);
        InfoDiv.href = "http:/bartypitt.com/project.html?id=" +itterator;
        console.log(InfoDiv.href);
        PortfolioSection.appendChild(InfoDiv)
    }
    else{
        console.log(page.title);
    }
});