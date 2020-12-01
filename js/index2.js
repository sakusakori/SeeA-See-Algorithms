console.log('2. Checking whehter it is working or not');


let sizeInput = document.getElementById('sizeInput');
let speedInput = document.getElementById('speedInput');
let generateRandom = document.getElementById('generateRandom');

let dropDownAlgoButtons = document.getElementsByClassName('dropdown-item');
// console.log('Hi');

// console.log(dropDownAlgoButtons);
// disableButtons();


let arraySize=sizeInput.value;
let div_sizes=[];
let divs=[];
let margin_size;
let arrayContainer = document.getElementById('arrayContainer');
// console.log(arrayContainer);
// console.log(document);
arrayContainer.style="flex-direction:row";

// console.log(sizeInput.value);


generateRandom.addEventListener('click', generateRandomArray);
sizeInput.addEventListener('input', changeArraySize);

//Sets arraySize according to slider and then call generateRandomArray
function changeArraySize()
{
    arraySize=sizeInput.value;
    generateRandomArray();
}

function generateRandomArray(){
    arrayContainer.innerHTML="";
    console.log(arraySize);
    
    for(var i=0;i<arraySize;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(sizeInput.max - sizeInput.min) ) + 10;
        divs[i]=document.createElement('div');
        console.log(divs[i]);
        
        arrayContainer.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:white; width:" + (100/arraySize-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%; position: relative;";
    }
}
console.log(arrayContainer);


function disableButtons()
{
    console.log(dropDownAlgoButtons.length);
    
    for(var i=0;i<dropDownAlgoButtons.length;i++)
    {
        // console.log(dropDownAlgoButtons[i]);
        // console.log(dropDownAlgoButtons[i].classList);
        // dropDownAlgoButtons[i].classList=[];
        dropDownAlgoButtons[i].classList.add("butt_locked");
        dropDownAlgoButtons[i].disabled=true;
        sizeInput.disabled=true;
        generateRandom.disabled=true;
        speedInput.disabled=true;
    }
}

function runAlgorithms()
{
    disableButtons();
    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Insertion Sort":Insertion();
                    break;
        case "Bubble Sort":Bubble();
                    break;
        case "Merge Sort":Merge();
                    break;
        case "Quick Sort":Quick();
                    break;
        case "Selection Sort":Selection_sort();
                    break;
        case "Heap Sort":Heap();
                    break;
    }
}