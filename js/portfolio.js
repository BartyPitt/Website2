/*
Written by Barty Pitt
29/03/2020
The reality I probably have no clue what half this stuff does but yolo.
Very roughly it takes the mouse position and them updates the position of the divs according to it.
I have not figured what to do after that.
*/






function UpdateTheDivs(){
    var AbsoluteScrollPos = window.scrollY/window.innerHeight + 0.25;
    var PagePosition = ((0.5-AbsoluteScrollPos%1)* 200).toFixed(0) + "%"
    var PageNumber = Math.floor(AbsoluteScrollPos)

    var MovingDivs = document.getElementsByClassName('Sliders');

    console.log(MovingDivs);
    for (var index = 0; index < MovingDivs.length;index++){
        var element = MovingDivs.item(index)
        if(index == PageNumber){
            console.log(index ,PagePosition );
            element.style.visibility = 'visible';
            element.style.left = PagePosition;
        }
        else{
            element.style.visibility = 'hidden'
        }
    }    

}

document.addEventListener('scroll',  UpdateTheDivs)