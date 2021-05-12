function ContentCreator(DataIn){
    console.log(DataIn);
    Title = document.getElementById("MainTitle");
    Title.textContent = DataIn.title;
    SubText = document.getElementById("Subtext")
    SubText.textContent = DataIn.description;
    BulletList = document.getElementById("BulletPoints");
    DataIn.Body.forEach(ListItem => {
        bullet = document.createElement("li");
        bullet.textContent = ListItem;
        console.log(ListItem);
        BulletList.appendChild(bullet);
    });
    ImageZone = document.getElementById("main");
    Data.image.forEach(ImagePath => { 
        TempImage = new Image(500 , 300);
        TempImage.src = ImagePath;
        ImageZone.appendChild(TempImage);
    });
}

ContentCreator(Data);