function add()

{

   
 

    rover_imgTag = new Image();

    rover_imgTag.onload = uploadrover;

    rover_imgTag.src = rover_image;

}

 


 

function uploadrover()

{

    

    ctx.drawImage(rover_imgTag, 100, 100,50, 50);

}

 

window.addEventListener("keydown", my_keydown);

 

function my_keydown(e)

{

keyPressed = e.keyCode;

console.log(keyPressed);

  if(keyPreesed =='38')

  {

    up();

    console.log("up");

  }

  if(keyPressed == '40')

  {

      down();

      console.log("down");

  }

  if(keyPressed == '37')

  {

      left();

      console.log("left");

  }

  if(keyPressed == '39')

  {

      right();

      console.log("right");

  }

}

