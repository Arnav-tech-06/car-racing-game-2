canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
car1_width = 100;
car1_height = 90;
car2_width = 100;
car2_height = 90;
background_image = "racing.png";
car1_image = "car1.png";
car2_image = "car2.png";

car1_x = 10;
car1_y = 10;
car2_x = 10;
car2_y = 120;
function add(){
    background_img=new Image();
    background_img.onload = upload;
    background_img.src = background_image;
    car1_img=new Image();
    car2_img=new Image();

    car1_img.onload = upload_car1;

car2_img.onload = upload_car2;
car1_img.src =car1_image ;
car2_img.src =car2_image ;

}
function upload(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);

}
function upload_car2(){
   
    ctx.drawImage(car2_img, car2_x, car2_y, car2_width, car2_height );

}
function upload_car1(){
    ctx.drawImage(car1_img, car1_x, car1_y, car1_width, car1_height );
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    if(keyPressed == '38')
    {
        car1_up();
        console.log("up arrow key");
    }
    if(keyPressed == '40')
    {
        car1_down();
        console.log("down arrow key");
    }
    if(keyPressed == '37')
    {
        car1_left();
        console.log("left arrow key");
    }
    if(keyPressed == '39')
    {
        car1_right();
        console.log("right arrow key");
    }
    if(keyPressed == '87')
    {
        car2_up();
        console.log("key w");
    }
    if(keyPressed == '83')
    {
        car2_down();
        console.log("key s");
    }
    if(keyPressed == '65')
    {
        car2_left();
        console.log("key a");
    }
    if(keyPressed == '68')
    {
        car2_right();
        console.log("key d");
    }
    if(car1_x > 700){
        console.log("car1 Won");
        document.getElementById('game').innerHTML = "Car 1 Won!!";
    }
    if(car2_x > 700){
        console.log("car2 Won");
        document.getElementById('game').innerHTML = "Car 2 Won!!";
    }
}

function car1_up(){
    if(car1_y >= 0){
        car1_y -=10;
        console.log("when up arrow is pressed,x="+ car1_x + ",y="+ car1_y);
        upload();
        upload_car1();
        upload_car2();
    }
}
function car1_down(){
    if(car1_y <= 500){
        car1_y +=10;
        console.log("when down arrow is pressed,x="+ car1_x + ",y="+ car1_y);
        upload();
        upload_car1();
        upload_car2();
    }
}
function car1_left(){
    if(car1_x >= 0){
        car1_x -=10;
        console.log("when left arrow is pressed,x="+ car1_x + ",y="+ car1_y);
        upload();
        upload_car1();
       upload_car2();
    }
}
function car1_right(){
    if(car1_x <=700 ){
        car1_x +=10;
        console.log("when d is pressed,x="+ car1_x + ",y="+ car1_y);
        upload();
        upload_car1();
        upload_car2();
    }
}
function car2_up(){
    if(car2_y >= 0){
        car2_y -=10;
        console.log("when w is pressed,x="+ car2_x + ",y="+ car2_y);
        upload();
        upload_car1();
        upload_car2();
    }
}
function car2_right(){
    if(car2_x <=700 ){
        car2_x +=10;
        console.log("when d is pressed,x="+ car2_x + ",y="+ car2_y);
        upload();
        upload_car1();
        upload_car2();
    }
}
function car2_down(){
    if(car2_y <= 500){
        car2_y +=10;
        console.log("when s  is pressed,x="+ car2_x + ",y="+ car2_y);
        upload();
        upload_car1();
        upload_car2();
    }
}
function car2_left(){
    if(car2_x >= 0){
        car2_x -=10;
        console.log("when a  is pressed,x="+ car2_x + ",y="+ car2_y);
        upload();
        upload_car1();
       upload_car2();
    }
}
