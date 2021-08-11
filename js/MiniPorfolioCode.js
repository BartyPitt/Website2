/*
This is the section of the code design to handle the mini porfolio section.
The base idea is that it creates a small icon for each of the items in the portfolio.
At some point this and the main portfolio code should be merged
*/

CurrentlyPressedButtons = new Set()

PortfolioSection = document.getElementById("Portfolio")

function UpdatePortfolio(){
    Data.forEach((page , itterator) => {
        // ok so for each tag in page in sees if it is a currently pressed button.Returns true if possible else should return false.
        ShouldBeDisplayed = [page.tags].reduce((accumulator , currentValue) =>{
            accumulator || CurrentlyPressedButtons.has(currentValue)
        },
        false) 
        //pages wont always be in the same order. There maybe a better way to do this.
        if (document.contains(document.getElementById(page.title))){
            if (!ShouldBeDisplayed){
                document.getElementsById(page.title).remove();
            }
        }else{
            if (ShouldBeDisplayed){
                CreateEntry(page , PortfolioSection)
            }
        }
    });
    /*
    This function should be using some form of caching for efficency but is not.
    */
}

function CreateEntry(Page , location){
    //Add in the part where this actually does something.
}

function toggle(button , id){
    if (button.value == "OFF"){
        button.value = "ON";
        CurrentlyPressedButtons.add(id);
    }else{
        button.value = "ON";
        button.value = "OFF";
        CurrentlyPressedButtons.delete(id);

    }
    UpdatePortfolio()

}