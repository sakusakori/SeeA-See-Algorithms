console.log('Checking whehter quick sort js file is working or not!');

function QuickSort() {

    console.log('Calling quick sort function');
    c_delay = 0;
    quickSort(0,arraySize-1);
    enableButtons();
}

function partition(start,end) {
    let temp;

    console.log('Calling partition function');
    let pivot = div_sizes[end];
    let i = start - 1;

    div_update(divs[end],div_sizes[end],"yellow");//Color update

    for(let j=start;j<=end-1;j++) {

        if(div_sizes[j]<pivot){
            
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            i+=1;

            div_update(divs[i],div_sizes[i],"red");//Color update
            div_update(divs[j],div_sizes[j],"red");//Color update
            
            temp = div_sizes[i];
            div_sizes[i] = div_sizes[j];
            div_sizes[j] = temp;

            div_update(divs[i],div_sizes[i],"red");//Color update
            div_update(divs[j],div_sizes[j],"red");//Color update

            div_update(divs[i],div_sizes[i],"blue");
            div_update(divs[j],div_sizes[j],"blue");
        }
    }

    div_update(divs[end],div_sizes[end],"red");//Color update
    div_update(divs[i+1],div_sizes[i+1],"red");//Color update

    temp = div_sizes[i+1];
    div_sizes[i+1] = div_sizes[end];
    div_sizes[end] = temp;

    div_update(divs[end],div_sizes[end],"red");//Color update
    div_update(divs[i+1],div_sizes[i+1],"red");//Color update

    for(var t=start;t<=i;t++)
    {
        div_update(divs[t],div_sizes[t],"green");//Color update
    }
    div_update(divs[i+1],div_sizes[i+1],"green");//Color update
    
    return i+1;
}

function quickSort(start,end) {

    console.log('Calling quickSort function!');
    if(start<end){
        let pivot = partition(start,end);
        quickSort(start,pivot-1);
        quickSort(pivot+1,end);
    }
}