canvas = document.getElementById("myCanvas");

imagearray = ["Race Track.jpg","Race Track1.jpg","Race Track2.jpg"];
random_number = Math.floor(Math.random()*3);
background_image = imagearray [random_number];

var ctx = canvas.getContext("2d");

car_image1 = "Car 1.jpg";
Car_Image2 = "2.jpg";
function add(){
    bgobject = new Image();
    bgobject.onload = uploadbackground ;
    bgobject.src= background_image ;
    carobject = new Image();
    carobject.onload = uploadcar ; 
    carobject.src = car_image1 ;

    carobject1 = new Image();
    carobject1.onload = uploadcar1 ; 
    carobject1.src = Car_Image2 ;
}

function uploadbackground(){
    ctx.drawImage(bgobject,0,0,canvas.width,canvas.height);
}
car_x = 10;
car_y = 10;

car_x1 = 10;
car_y1 = 150;
function uploadcar(){
    ctx.drawImage(carobject,car_x,car_y,100,100);
}
function uploadcar1(){
    ctx.drawImage(carobject1,car_x1,car_y1,100,100);
}


window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);


if(keypressed == "37"){
    left();
    console.log("left is pressed");
}

if(keypressed == "38"){
    up();
    console.log("up is pressed");
}

if(keypressed == "39"){
    right();
    console.log("right is pressed");
}

if(keypressed == "40"){
    down();
    console.log("down is pressed");
}




if(keypressed == "65"){
    left1();
    console.log("left is pressed");
}

if(keypressed == "87"){
    up1();
    console.log("up is pressed");
}

if(keypressed == "68"){
    right1();
    console.log("right is pressed");
}

if(keypressed == "83"){
    down1();
    console.log("down is pressed");
}


}


function right(){
    if(car_x<700){
        car_x = car_x + 10;
        uploadbackground() ;
        uploadcar();
        uploadcar1();
    }
}

function left (){
    if(car_x>0){
        car_x = car_x - 10;
        uploadbackground() ;
        uploadcar();
        uploadcar1();
    }
}

function up (){
    if(car_y>0){
        car_y = car_y - 10;
        uploadbackground() ;
        uploadcar();
        uploadcar1();
    }
}

function down(){
    if(car_y<400){
        car_y = car_y + 10;
        uploadbackground() ;
        uploadcar();
        uploadcar1();
    }
}




function down1(){
    if(car_y1<400){
        car_y1 = car_y1 + 10;
        uploadbackground() ;
        uploadcar1();
        uploadcar();
    }
}

function right1(){
    if(car_x1<700){
        car_x1 = car_x1 + 10;
        uploadbackground() ;
        uploadcar1();
        uploadcar();
    }
}

function left1 (){
    if(car_x1>0){
        car_x1 = car_x1 - 10;
        uploadbackground() ;
        uploadcar1();
        uploadcar();
    }
}

function up1 (){
    if(car_y1>0){
        car_y1 = car_y1 - 10;
        uploadbackground() ;
        uploadcar1();
        uploadcar();
    }
}

