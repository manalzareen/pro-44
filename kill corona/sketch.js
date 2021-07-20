
var gameState="intro";
var bg1,bg1Img;
var play;
var button ,buttonImg;

function preload(){
   bg1Img=loadImage("Images/bg1.png");
   buttonImg=loadImage("Images/button.png");
}


function setup(){
createCanvas(windowWidth,windowHeight);
intro=createSprite(windowWidth/2,windowHeight/2,width,height);
intro.addImage(bg1Img);
intro.scale=3.5;

button=createSprite(windowWidth/2,windowHeight/2);
button.addImage(buttonImg);

playbg=createSprite(200,200,100,100);


}

function draw(){
 background("grey");
 
 if(gameState=="intro"){
     background("white");
     intro.visible=true;
     button.visible=true;
     playbg.visible=false;
     fill("lightblue");
     textSize(40);
     text("𝓴𝓲𝓵𝓵 𝓬𝓸𝓻𝓸𝓷𝓪",windowWidth/2-150,windowHeight/2-250);
     fill("black");
     text("Click on play ",windowWidth/2-100,windowHeight/2+200);

     if(mousePressedOver(button)){
         gameState="play";
     }
     //image(bg1Img,windowWidth/2,windowHeight/2,width,height);
     }

     if(gameState=="play"){
         background("lightgreen")
        intro.visible=false;
        button.visible=false;
         playbg.visible=true;
     }

     drawSprites();

}







