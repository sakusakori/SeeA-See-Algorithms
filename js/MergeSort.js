console.log('Checking whehter merge sort js file is working or not');


function MergeSort() {
    console.log('MergeSort function is called');
    mergeSort(0,arraySize-1);
    enableButtons();
}

function merge(start,mid,end)
{
    let start1=start,start2=mid+1,dum;
    let dumAr=[],start3=0;
    
    for(var i=start; i<=end; i++)
    {
        if(start1>mid)
        {
            dumAr[start3++]=div_sizes[start2++];
            div_update(divs[start2-1],div_sizes[start2-1],"red");//Color update
        }
        else if(start2>end)
        {
            dumAr[start3++]=div_sizes[start1++];
            div_update(divs[start1-1],div_sizes[start1-1],"red");//Color update
        }
        else if(div_sizes[start1]<div_sizes[start2])
        {
            dumAr[start3++]=div_sizes[start1++];
            div_update(divs[start1-1],div_sizes[start1-1],"red");//Color update
        }
        else
        {
            dumAr[start3++]=div_sizes[start2++];
            div_update(divs[start2-1],div_sizes[start2-1],"red");//Color update
        }
    }

    for(dum=0;dum<start3;dum++)
    {
        div_sizes[start++]=dumAr[dum];
        div_update(divs[start-1],div_sizes[start-1],"green");//Color update
    }
}

function mergeSort(start,end)
{
    if(start < end)
    {
        console.log('mergeSort function');    
        let mid=Math.floor((start + end) / 2);//in order to avoid overflow!
        div_update(divs[mid],div_sizes[mid],"yellow");//Color update

        mergeSort(start,mid); //calling mergeSort for left side
        mergeSort(mid+1,end); //calling mergeSort for right side
        merge(start,mid,end); //merging both left side and right side
    }
}


