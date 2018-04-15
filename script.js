// JavaScript Document

// declare global variable for flip image
var checkFlip = 0;
var PushArray = new Array();
var _args = {};
var Step = -1;
var maxsize = 0;	

//zoomin zoomout start
//delare function for onclick button zoomin
function zoomin(){
	    // declare a new variable for myflatz-artimage which to zoomin and get that image by id
        var flatzimage = document.getElementById("myflatz-artimage");
		
		// declare variable for current width and current height of image 
        var imagewidth = flatzimage.offsetWidth;
		var imageheight = flatzimage.offsetHeight;
		
		// check the conditions for maximum level of width and height for image reached
        if((imagewidth == 500) || (imageheight == 500))
		{
			alert("image size is maximum level reached");
        } 
	   else
	   {
		   // else zoomin  the height and width of image by increasing 50 pixel.
		   console.log("width : "+imagewidth);
            flatzimage.style.width = (imagewidth *1.1) + "px";   
			flatzimage.style.height = (imageheight *1.1) + "px";	
       } 
	   Push('zoomin');
    }
	
function zoomout(){
	    // declare a new variable for myflatz-artimage which to zoomout and get that image by id
        var flatzimage = document.getElementById("myflatz-artimage");
		
		// declare variable for current width and current height of image 
        var imagewidth = flatzimage.offsetWidth;
		var imageheight = flatzimage.offsetHeight;
		
		// check the conditions for minimum level of width and height for image is reached
        if((imagewidth == 500) || (imageheight == 500))
		{
			alert("image size is minimum level reached");
        } 
	   else
	   {
		   // else zoomout  the height and width of image by increasing 100 pixel.
            flatzimage.style.width = (imagewidth * 0.9) + "px";   
			flatzimage.style.height = (imageheight * 0.9) + "px";
			
       } 
	   Push('zoomout');
    }
	
//zoomin zoomout end	
	
	//flip image start
	//delare function for onclick button flipvertical
	
	function flipvertical() {
		
		 // declare a new variable for myflatz-artimage and get that image by id
		 
    var flatzimage = document.getElementById('myflatz-artimage');	
	  
	  //now check the condition for vertical flip from global variable checkFlip and tranform the scaleY by -1 and set checkFlip =1
	
	if(checkFlip == 0){
	flatzimage.style.transform="scaleY(-1)";
	checkFlip=1;
	}
	
	//for normal position to set image is scaleY 1 and checkflip =0
	else {
		flatzimage.style.transform="scaleY(1)";
	    checkFlip=0;
	}
		Push('flipvertical');
	}
	

	//delare function for onclick button flipvertical

	function fliphorizental() {

		 // declare a new variable for myflatz-artimage and get that image by id
    var flatzimage = document.getElementById('myflatz-artimage');	

    //now check the condition for vertical flip from global variable checkFlip and tranform the scalex by -1 and set checkFlip =1
	if(checkFlip == 0){

	flatzimage.style.transform="scaleX(-1)";
	checkFlip=1;
	}

	//for normal position to set image is scaleX 1 and checkflip =0
	else {
    flatzimage.style.transform="scaleX(1)";
	checkFlip=0;
	}	
	Push('fliphorizental');
	}
//flip image end


// rotatating image start

 var anglerotate = 0;                     // declare a  global variable for anglerotate= 0

$(document).ready(function() {

   $('#rotateclockwise').click(function() {       //click button for rotate clockwise
	   
	     anglerotate = (anglerotate + 10);                    //evaluate a anglerotate for rotating at every angle
        $('#myflatz-artimage').css ({
            'transform': 'rotate(' + anglerotate + 'deg)',             //tranform to rotate anglerotate at given degree
            '-webkit-transform': 'rotate(' + anglerotate + 'deg)',
               '-moz-transform': 'rotate(' + anglerotate + 'deg)',
                 '-o-transform': 'rotate(' + anglerotate + 'deg)',
                '-ms-transform': 'rotate(' + anglerotate + 'deg)'
            //   rotateclockwise.push({'rotateclockwise'});
        });
    });
});


$(document).ready(function() {


   $('#rotateanticlockwise').click(function() {       //click button for rotate anticlockwise
	   
	     anglerotate = (anglerotate - 10);                    //evaluate a anglerotate for rotating at every angle
        $('#myflatz-artimage').css ({
            'transform': 'rotate(' + anglerotate + 'deg)',             //tranform to rotate anglerotate at given degree
            '-webkit-transform': 'rotate(' + anglerotate + 'deg)',
               '-moz-transform': 'rotate(' + anglerotate + 'deg)',
                 '-o-transform': 'rotate(' + anglerotate + 'deg)',
                '-ms-transform': 'rotate(' + anglerotate + 'deg)'
			//	rotateanticlockwise.push({'rotateanticlockwise'});
        });
    });

});


// rotatating image end


//color-picker background start

//declare default variable for color
var color = "#0000ff";

//load the color window box and create function
window.addEventListener("load", colorBox, false);
function colorBox() {
 var colorpicker = document.getElementById("color-picker");   //get input color-picker by Id 
  colorpicker.value = color;                                  //set color value equal to color-picker
  colorpicker.addEventListener("input", updateColor, false);  //set event on input color-picker 
  colorpicker.select();
}
function updateColor(event) {
  var container = document.getElementById("myflatz-artimage"); //get element by id on which object is to change the color

  if (container) {                                       
    container.style.backgroundColor = event.target.value;  //now background color is set on that object
  }
//  push('color-picker');
}
//color-picker background end




//undo  start button 


function Push(Args) {
    Step++;
	maxsize++;
	_args = Args;
  PushArray.push(_args);
}


function undo() {
	
    if (Step > 0) {
		
 		var currentOperation = PushArray[Step];
		
		 if(currentOperation.trim() == 'zoomin')
		{
			  var flatzimage = document.getElementById("myflatz-artimage");
			  var imagewidth = flatzimage.offsetWidth;
		      var imageheight = flatzimage.offsetHeight;
			  flatzimage.style.width = (imagewidth * 0.9) + "px";   
			  flatzimage.style.height = (imageheight * 0.9) + "px";
		}
		else if(currentOperation.trim() == 'zoomout')
		{
			  var flatzimage = document.getElementById("myflatz-artimage");
			  var imagewidth = flatzimage.offsetWidth;
		      var imageheight = flatzimage.offsetHeight;
			  flatzimage.style.width = (imagewidth * 1.1 ) + "px";   
			  flatzimage.style.height = (imageheight * 1.1 ) + "px";
		}
		
		else if(currentOperation.trim() == 'flipvertical')
		{
			 var flatzimage = document.getElementById("myflatz-artimage");
			if(checkFlip == 0){
	        flatzimage.style.transform="scaleY(-1)";
	        checkFlip=1;
	     }
	     else {
         flatzimage.style.transform="scaleY(1)";
	     checkFlip=0;
	     }
	}

		
	   else if(currentOperation.trim() == 'fliphorizental')
		{
			 var flatzimage = document.getElementById("myflatz-artimage");
			 if(checkFlip == 0){
	         flatzimage.style.transform="scaleX(-1)";
	         checkFlip=1;
	}
	   else {
       flatzimage.style.transform="scaleX(1)";
	   checkFlip=0;
	   }	
		}

		   Step--;
		}
    

	else
	{
		console.log('out of heap');
	}
}
//undo end button


//redo start button
function redo() {

    if ((Step-1) > 0) {
     //  Step++;
		var currentOperation = PushArray[Step-1];
		console.log('Curr Op : '+currentOperation);
      
	
	   if(currentOperation.trim() == 'zoomin')
		{
			  var flatzimage = document.getElementById("myflatz-artimage");
			  var imagewidth = flatzimage.offsetWidth;
		      var imageheight = flatzimage.offsetHeight;
			  flatzimage.style.width = (imagewidth * 1.1) + "px";   
			  flatzimage.style.height = (imageheight * 1.1) + "px";
		}
	//	alert('zoomin');
		if(currentOperation.trim() == 'zoomout')
		{
			  var flatzimage = document.getElementById("myflatz-artimage");
			  var imagewidth = flatzimage.offsetWidth;
		      var imageheight = flatzimage.offsetHeight;
			  flatzimage.style.width = (imagewidth * 0.9) + "px";   
			  flatzimage.style.height = (imageheight * 0.9) + "px";
		}
		
		
		if(currentOperation.trim() == 'flipvertical')
		{
			 var flatzimage = document.getElementById("myflatz-artimage");
			 flatzimage.style.transform="scaleY(1)";
			  checkFlip=1; 
			 // alert('flipvertical');
		}
		
	       if(currentOperation.trim() == 'fliphorizental')
		{
			 var flatzimage = document.getElementById("myflatz-artimage");
			 flatzimage.style.transform="scaleX(-1)";
			  checkFlip=0; 
		}
		
		Step++;
    }
	else
	{
		console.log('out of heap');
	}
}

// redo end
