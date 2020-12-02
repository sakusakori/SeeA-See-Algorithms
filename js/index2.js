console.log('2. Checking whehter it is working or not');


let sizeInput = document.getElementById('sizeInput');
let speedInput = document.getElementById('speedInput');
let generateRandom = document.getElementById('generateRandom');

let dropDownAlgoButtons = document.getElementsByClassName('dropdown-item');
// console.log('Hi');

// console.log(dropDownAlgoButtons);
// disableButtons();

let barHead = document.getElementById('barHeading');
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


generateRandomArray();
//Sets arraySize according to slider and then call generateRandomArray
function changeArraySize()
{
    arraySize=sizeInput.value;
    generateRandomArray();
}

function generateRandomArray(){
    barHead.innerHTML = 'Bars'
    arrayContainer.innerHTML="";

    console.log(arraySize);
    
    for(var i=0;i<arraySize;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(sizeInput.max - sizeInput.min) ) + 10;
        divs[i]=document.createElement('div');
        // console.log(divs[i]);
        
        arrayContainer.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:white; width:" + (100/arraySize-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%; position: relative;";
    }
}
// console.log(arrayContainer);


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
for(var i=0;i<dropDownAlgoButtons.length;i++)
{
    dropDownAlgoButtons[i].addEventListener('click', runAlgorithms);
}

function runAlgorithms()
{
    disableButtons();
    this.classList.add("butt_selected");
    console.log(this.innerHTML);
    barHead.innerHTML = `Bars: ${this.innerHTML}`;
    
    switch(this.innerHTML)
    {
        case "Insertion Sort":InsertionSort();
                    break;
        case "Bubble Sort":BubbleSort();
                    break;
        case "Merge Sort":MergeSort();
                    break;
        case "Quick Sort":QuickSort();
                    break;
        case "Selection Sort":SelectionSort();
                    break;
        case "Heap Sort":HeapSort();
                    break;
    }
}