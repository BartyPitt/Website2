/*
Javascript code for threejs
*/



function UpdateWindow(){
    var width = window.innerWidth;
    var hight = window.innerHeight;
    renderer.setSize(width,hight);
    Camera.aspect = width/hight;
    Camera.updateProjectionMatrix();

};



var scene = new THREE.Scene();
var Camera = new THREE.PerspectiveCamera(75 , window.innerWidth / window.innerHeight , 0.1 , 1000);
var renderer = new THREE.WebGLRenderer();
var clock = new THREE.Clock();
renderer.setSize(window.innerWidth,window.innerHeight);
UpdateWindow();
document.body.appendChild(renderer.domElement);


window.addEventListener('resize' , UpdateWindow);

var  deltaB = 0.1
//logic
var update = function(){
    const positions = geometry.attributes.position.array;
    delta = clock.getDelta();
    deltaB += delta*0.05;
    deltaB = deltaB

    const GridData = GenerateGrid(GridDimentions,deltaB);
    const faces = GridToMeshMap(GridDimentions);
    const Vectors = GridToVector(GridData,deltaB);
    const FaceArray = GridFlattern(Vectors , faces);
    console.log(deltaB)
    FaceArray.forEach((Point,Index) => {
        if (Index%3 == 0){
        positions[Index] = Point
        }
    });
    geometry.attributes.position.needsUpdate = true; // required after the first render


};
var render = function(){
    renderer.render(scene , Camera);
};

var GameLoop = function()
{
    requestAnimationFrame( GameLoop);
    update();
    render();
};

const GridDimentions = {
    Height: 40,
    Width:40,
};

noise.seed(10);

function GenerateGrid(InputDimentions,z){
    const Output = []
    for (y = 0 ; y< InputDimentions.Height ; y++) {
        Output.push([])
        for(x = 0 ; x < InputDimentions.Width ; x++) {
            var value = noise.simplex3(x/10 , y/10 , z);
            Output[y].push(value*2);
        }
    }
    return Output
}

function GridToVector(InputGrid , scale){
    Output = []
    InputGrid.forEach((Row , Y )=> {
        Row.forEach((Point , X) => {
            var Value = [Point,X * scale , Y * scale ];
            Output.push(Value);
        });
    });
    return Output
}

function GridToMeshMap(InputDimentions){
    const Output = []
    const TotalNumberOfPoints  = InputDimentions.Width * InputDimentions.Height;
    const Endpoint = TotalNumberOfPoints - InputDimentions.Width
    for(i = 0 ; i <Endpoint ; i++){
        if((i+1)%InputDimentions.Width != 0){
            a = i;
            b = i+1;
            c = i+InputDimentions.Width;
            d = i+InputDimentions.Width+1;
            //console.log(a,b,c,d)
            Output.push([a,b,c])
            Output.push([b,c,d])
        }
    }
    return Output
}

function GridFlattern(Points , Faces){
    const output=[]
    Faces.forEach(Face => {
        Face.forEach(Point => {
            output.push.apply(output , Points[Point])
        });  
    });
    return new Float32Array(output)
}


const GridData = GenerateGrid(GridDimentions,4);
const faces = GridToMeshMap(GridDimentions);
const Vectors = GridToVector(GridData,1);
const FaceArray = GridFlattern(Vectors , faces);



console.log(FaceArray)

var geometry = new THREE.BufferGeometry();
geometry.setAttribute( 'position', new THREE.BufferAttribute( FaceArray, 3 ) );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff  , wireframe:true} );
const mesh = new THREE.Mesh( geometry, material );

mesh.rotation.z = Math.PI/2;
mesh.rotation.y = 0;

scene.fog = new THREE.Fog(0x000000, 1, 20);

/*
var points = Vectors.map(Vector => {
        var [a , b, c] = Vector
        console.log(Vector)
        return new THREE.Vector3(a,b,c);
});



const geometry2 = new THREE.BufferGeometry().setFromPoints( points );
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const line = new THREE.Line( geometry2, material );
*/







const geometry2 = new THREE.BoxGeometry( 1, 1, 1 );
const material2 = new THREE.MeshBasicMaterial( {color: 0x000000} );
const cube = new THREE.Mesh( geometry2, material2 );
scene.add( mesh );
Camera.position.z = 20
Camera.position.x = -GridDimentions.Width/2
Camera.position.y = 5
;



GameLoop();