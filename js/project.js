function ContentCreator(DataIn) {
    Title = document.getElementById("MainTitle");
    Title.textContent = DataIn.title;
    SubText = document.getElementById("Subtext")
    SubText.textContent = DataIn.description;
    BulletList = document.getElementById("BulletPoints")

    HeroSpot = document.getElementById("ImageContent");
    if (DataIn.Hero) {
        HeroSpot.innerHTML = DataIn.Hero
    }
    else {
        ImagePath = DataIn.image[0]
        TempImage = new Image();
        TempImage.src = ImagePath;
        HeroSpot.appendChild(TempImage);
    }
    DataIn.Body.forEach(ListItem => {
        bullet = document.createElement("li");
        bullet.textContent = ListItem;
        BulletList.appendChild(bullet);
    });
    ImageZone = document.getElementById("ImageContent");
    if (DataIn.image) {
        DataIn.image.forEach(ImagePath => {
            TempImage = new Image();
            TempImage.src = ImagePath;
            ImageZone.appendChild(TempImage);
        });
    }
};

function GoToMenu(){
    var currentUrl = window.location.host;
    window.location.href = "/portfolio.html"
}
function GoToNext(){
    const NextNumber = (PageNumber+ 1)% Object.keys(Data).length;
    window.location.href = `project.html?id=${NextNumber}`
}

let params = (new URL(document.location)).searchParams;
const PageNumber = parseInt(params.get('id')); // is the string "Jonathan Smith".
ContentCreator(Data[PageNumber]);