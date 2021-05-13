function ContentCreator(DataIn){
    console.log(DataIn);
    Title = document.getElementById("MainTitle");
    Title.textContent = DataIn.title;
    SubText = document.getElementById("Subtext")
    SubText.textContent = DataIn.description;
    BulletList = document.getElementById("BulletPoints");
    if (DataIn.Hero){
        HeroSpot = document.getElementById("main");
        HeroSpot.prepend(DataIn.Hero);
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
}

ContentCreator(Data[2]);