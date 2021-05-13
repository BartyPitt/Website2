function ContentCreator(DataIn){
    console.log(DataIn);
    Title = document.getElementById("MainTitle");
    Title.textContent = DataIn.title;
    SubText = document.getElementById("Subtext")
    SubText.textContent = DataIn.description;
    BulletList = document.getElementById("BulletPoints")

    HeroSpot = document.getElementById("HeroContent");
    if (DataIn.Hero){
        HeroSpot.innerHTML = DataIn.Hero
        //HeroSpot.innerHTML(DataIn.Hero)
    }
    else{
        ImagePath = DataIn.image[0]
        TempImage = new Image(500 , 300);
        TempImage.src = ImagePath;
        console.log()
        HeroSpot.appendChild(TempImage);
    }
    DataIn.Body.forEach(ListItem => {
        bullet = document.createElement("li");
        bullet.textContent = ListItem;
        console.log(ListItem);
        BulletList.appendChild(bullet);
    });
    ImageZone = document.getElementById("main");
    if(DataIn.image){
    DataIn.image.forEach(ImagePath => { 
        TempImage = new Image(500 , 300);
        TempImage.src = ImagePath;
        ImageZone.appendChild(TempImage);
    });
}
};

let params = (new URL(document.location)).searchParams;
let PageNumber =  parseInt(params.get('id')); // is the string "Jonathan Smith".
ContentCreator(Data[PageNumber]);