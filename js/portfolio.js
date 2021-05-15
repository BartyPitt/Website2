/*
Written by Barty Pitt
29/03/2020
The reality I probably have no clue what half this stuff does but yolo.
Very roughly it takes the mouse position and them updates the position of the divs according to it.
I have not figured what to do after that.
*/


/*
<div class=Info>
    <div>
        <h2>
            Aura Smart Lamp
        </h2>
    </div>
    <img src = 'Images\portfolio\AuraLamp.png'>
</div>
 the target thing to create */
 

PortfolioSection = document.getElementById("Portfolio")
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