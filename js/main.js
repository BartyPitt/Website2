/*

Javascript code for threejs
*/


function UpdateWindow() {
    var width = window.innerWidth;
    var hight = window.innerHeight;
    renderer.setSize(width, hight);
    Camera.aspect = width / hight;
    Camera.updateProjectionMatrix();

};



//logic

var ScrollFunctions = {
    TitlePage(CurrentValue) {
        BackgroundInfomation.CameraY = 2 + CurrentValue * 3;
        BackgroundInfomation.CameraZ = 14 + CurrentValue * 3;
        BackgroundInfomation.Amplitude = CurrentValue * 3;
        BackgroundInfomation.deltaConstant = CurrentValue;
        return
    },
    Pageone(CurrentValue) {
        BackgroundInfomation.backgroundSatuation = CurrentValue * 0.1;
        BackgroundInfomation.meshSaturation = 1 - CurrentValue * 0.5;
        return

    },
    
}

function PageScrollOffset() {
    let PagePositions = [0];

    const MainOffset = document.getElementById("MainContent").offsetTop;

    var Sections = document.getElementById('MainContent').children;
    if (Sections < 0) {
    }
    else {
        /*This is acting weirdly and I dont know why.

        */
        for (var index = 0; index < Sections.length; index++) {
            var element = Sections.item(index);
            PagePositions.push(element.offsetTop);
            //console.log(element.textContent , element.offsetTop)
        }
    }
    PagePositions.push(document.body.clientHeight)
    return PagePositions

}

function CalculateCurrentPage(value, array) {
    var PageNumber;
    var PageOffset;
    array.forEach(function (PageStart, index) {
        if (value > PageStart) {
            PageNumber = index;
        }
    });
    if (value == 0){
        PageNumber = 0;
        PageOffset = 0;
    }
    else if (PageNumber != array.length ){
        PageOffset = (value - array[PageNumber]) / (array[PageNumber + 1] - array[PageNumber])
    }
    else {
        PageOffset = 1
    }
    return{
        PageNumber: PageNumber,
        PageOffset :PageOffset,
    }

}


function ScrollHandler() {
    const ElementPositions = PageScrollOffset();
    const PositionInfo  = CalculateCurrentPage(window.scrollY , ElementPositions)
    var Position = window.scrollY / window.innerHeight;
    var PageNumber = PositionInfo.PageNumber;
    var PageOffset = PositionInfo.PageOffset;
   // console.log(PositionInfo)
    //Move this into window Resize.
    switch (PageNumber) {
        case 0:
            ScrollFunctions.TitlePage(PageOffset);
            ScrollFunctions.Pageone(0);
            break;
        case 1:
            ScrollFunctions.Pageone(PageOffset);
            ScrollFunctions.TitlePage(1);
            break;
        default:
            ScrollFunctions.Pageone(1);
            ScrollFunctions.TitlePage(1);
    }

}


window.addEventListener('scroll', ScrollHandler);



var BackgroundInfomation = {
    speed: 0.5,
    CameraY: 3,
    CameraZ: 15,
    Amplitude: 0,
    BGColour: 0x000000,
    BGMeshColour: 0xffffff,
    currentDelta: 0,
    deltaConstant: 0.1,
    backgroundSatuation: 0,
    meshSaturation: 1

}

function BackgroundUpdater() {
    const positions = geometry.attributes.position.array;
    delta = clock.getDelta();
    BackgroundInfomation.currentDelta += delta * BackgroundInfomation.deltaConstant;
    FinalisedDelta = BackgroundInfomation.currentDelta + 1;

    Camera.position.y = BackgroundInfomation.CameraY;
    Camera.position.z = BackgroundInfomation.CameraZ;

    const GridData = GenerateGrid(GridDimentions, FinalisedDelta);
    const faces = GridToMeshMap(GridDimentions);
    const Vectors = GridToVector(GridData, BackgroundInfomation.Amplitude);
    const FaceArray = GridFlattern(Vectors, faces);

    FaceArray.forEach((Point, Index) => {
        if (Index % 3 == 0) {
            positions[Index] = Point;
        }
    });

    scene.fog = new THREE.Fog(BackgroundInfomation.BGColour, 1, 20); // check if you need to reinstance
    //301934
    scene.background.setHSL(0.8, 0.35, BackgroundInfomation.backgroundSatuation);
    mesh.material.color.setHSL(0.92, 73, BackgroundInfomation.meshSaturation);
    geometry.attributes.position.needsUpdate = true;
    material.needsUpdate = true;


}



var update = function () {
    BackgroundUpdater();
};


var render = function () {
    renderer.render(scene, Camera);
};

var GameLoop = function () {
    requestAnimationFrame(GameLoop);
    update();
    render();
};

const GridDimentions = {
    Height: 40,
    Width: 40,
};

noise.seed(10);

function GenerateGrid(InputDimentions, z) {
    const Output = []
    for (y = 0; y < InputDimentions.Height; y++) {
        Output.push([])
        for (x = 0; x < InputDimentions.Width; x++) {
            var value = noise.simplex3(x / 10, y / 10, z);
            Output[y].push(value * 2);
        }
    }
    return Output
}

function GridToVector(InputGrid, scale) {
    Output = []
    InputGrid.forEach((Row, Y) => {
        Row.forEach((Point, X) => {
            var Value = [Point * scale, X, Y];
            Output.push(Value);
        });
    });
    return Output
}

function GridToMeshMap(InputDimentions) {
    const Output = []
    const TotalNumberOfPoints = InputDimentions.Width * InputDimentions.Height;
    const Endpoint = TotalNumberOfPoints - InputDimentions.Width
    for (i = 0; i < Endpoint; i++) {
        if ((i + 1) % InputDimentions.Width != 0) {
            a = i;
            b = i + 1;
            c = i + InputDimentions.Width;
            d = i + InputDimentions.Width + 1;
            //console.log(a,b,c,d)
            Output.push([a, b, c])
            //Output.push([b,c,d])
        }
    }
    return Output
}

function GridFlattern(Points, Faces) {
    const output = []
    Faces.forEach(Face => {
        Face.forEach(Point => {
            output.push.apply(output, Points[Point])
        });
    });
    return new Float32Array(output)
}

const canvas = document.querySelector("#BackGroundCanvas");
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x301934);
var Camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ canvas });
var clock = new THREE.Clock();
renderer.setSize(window.innerWidth, window.innerHeight);
UpdateWindow();
document.body.appendChild(renderer.domElement);


window.addEventListener('resize', UpdateWindow);




const GridData = GenerateGrid(GridDimentions, 4);
const faces = GridToMeshMap(GridDimentions);
const Vectors = GridToVector(GridData, 0);
const FaceArray = GridFlattern(Vectors, faces);




var geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(FaceArray, 3));
var material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const mesh = new THREE.Mesh(geometry, material);

mesh.rotation.z = Math.PI / 2;
mesh.rotation.y = 0;

scene.fog = new THREE.Fog(0x301934, 1, 20);
scene.add(mesh);
Camera.position.z = 15
Camera.position.x = -GridDimentions.Width / 2
Camera.position.y = 4
    ;

GameLoop();