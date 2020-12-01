console.log('Checking whehter is is working or not!');


let currSpeed = 1000; //As we set default value of input speed to 4 and at 4 we have speed 1000;
speedInput.addEventListener('input', getSpeed);

function getSpeed(){
    let varSpeed = speedInput.value;
    switch(parseInt(varSpeed)){
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    delay_time=10000/(Math.floor(arraySize/10)*currSpeed);      
}

var delay_time=10000/(Math.floor(arraySize/10)*currSpeed);    
var c_delay=0;

function div_update(arrayContainer,height,color)
{
    setTimeout(function(){
        arrayContainer.style=" margin:0% " + margin_size + "%; width:" + (100/arraySize-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}

function enableButtons()
{
    setTimeout(function(){
        for(var i=0;i<dropDownAlgoButtons.length;i++)
        {
            // console.log(dropDownAlgoButtons[i]);
            // console.log(dropDownAlgoButtons[i].classList);
            // dropDownAlgoButtons[i].classList=[];
            dropDownAlgoButtons[i].classList.add("butt_unselected");
            dropDownAlgoButtons[i].disabled=false;
            sizeInput.disabled=false;
            generateRandom.disabled=false;
            speedInput.disabled=false;
        }
    },c_delay+=delay_time);
}
