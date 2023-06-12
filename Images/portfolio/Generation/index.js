DifferentShapes = ["Circle", "QuarterC", "Triangle"]

const PSRG = {
    HashArray: [],
    CurrentHashPointer: 0,

    CreateFromByteArray: async (Data) => {
        const HashBuffer = await crypto.subtle.digest("SHA-512", Data)
        this.CurrentHashPointer = 0;
        return new Uint8Array(HashBuffer);
    },

    CreateFromString: async (InputString) => {
        const Encoder = new TextEncoder()
        const Data = Encoder.encode(InputString)
        this.HashArray = await PSRG.CreateFromByteArray(Data)

        for (var i = 0; i < 5; i++) {
            var NextArray = await PSRG.CreateFromByteArray(this.HashArray)
            this.HashArray = new Uint8Array([...this.HashArray, ...NextArray]);//I challange you to do this in a worse way.
        }
    },
    //THIS IS NOT SECURE TO NOT USE THIS IN CRYPTO.
    //Also works only with 2^x ints as a max ALSO THERE IS NO OVERFLOW
    GenerateRandomInt: (Max) => {
        const NumberOfBitsRequired = Math.log2(Max);
        const NumberOfBytes = Math.ceil(NumberOfBitsRequired / 256);
        var Output = 0
        for (var i = 0; i < NumberOfBytes; i++) {
            Output = Output * 256 + this.HashArray[CurrentHashPointer]
            this.CurrentHashPointer += 1;
        }
        return Output % Max
    },
}


window.addEventListener("load", async () => {
    GenerateSVG("Testing")
    const Input = document.getElementById("input");
    Input.addEventListener("change", (event) => {
        GenerateSVG(event.target.value);
    });
})

async function GenerateSVG(InputString) {
    await PSRG.CreateFromString(InputString)
    const Canvas = document.getElementById("canvas");
    Canvas.innerText = "";
    //CreateRectangle(50,50,10,"blue",Canvas);
    Colours = [ColourGenerator(), ColourGenerator(), ColourGenerator()]
    //CreateObject(80,80,30,180,ColourGenerator(),Canvas,"Square");
    for (var a = 0; a < 5; a++) {
        for (var b = 0; b < 5; b++) {
            CreateBlock(a, b, 1, 1, (PSRG.GenerateRandomInt(8) % 3) + 1, (PSRG.GenerateRandomInt(8) % 3), Canvas)
        }
    }
}
//Pesudo Random number generator


function CreateObject(x, y, Width, Rotate, color, Target, Name) {
    Name = "#" + Name;
    const Group = document.createElementNS('http://www.w3.org/2000/svg', "g");
    const BaseShape = document.createElementNS('http://www.w3.org/2000/svg', "use");
    Group.setAttribute("transform", "translate( " + x + " " + y + " )" + "scale( " + Width + " " + Width + ")" + "rotate( " + Rotate + ")");
    Group.setAttribute("fill", color);
    Group.setAttribute("stroke-width", 0);
    Group.setAttribute("stroke", color);
    BaseShape.setAttribute("href", Name);
    Group.appendChild(BaseShape)
    Target.appendChild(Group);
}//centreBased.

function ColourGenerator() {
    const PossibleText = "0123456789abcdef"
    var name = "#"
    for (var i = 0; i < 6; i++) {
        var NextValue = PSRG.GenerateRandomInt(16)
        name += PossibleText[NextValue]
    }
    return name
}

function CreateMatrixFunction(Width) {
    Output = []
    factor = 1 / (Width);
    for (ii = 0; ii < Width; ii++) {
        for (jj = 0; jj < Width; jj++) {
            Output.push([(ii) / Width + factor, (jj) / Width + factor, PSRG.GenerateRandomInt(4) * 90]);
        }
    }
    return Output;
}



function CreateBlock(XIndex, YIndex, width, height, Width, color1, Target) {
    CreateObject((XIndex + 0.5) * width, (YIndex + 0.5) * height, width, 0, Colours[color1], Target, "Square");
    Scale = 1 / (Width);
    InputMatrix = CreateMatrixFunction(Width);
    InputMatrix.forEach((element) => {
        block = PSRG.GenerateRandomInt(3)
        CreateObject((XIndex) * width + element[0] - Scale / 2, (YIndex) * height + element[1] - Scale / 2, Scale, element[2], Colours[(color1 + 1) % 3], Target, DifferentShapes[block]);
    });
}