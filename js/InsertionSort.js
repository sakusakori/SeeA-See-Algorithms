console.log('Insertion Sort Checking whether it is running or not');


function InsertionSort() {
    
    let i,j,key,dum;
    console.log('Calling insertion sort');    

    
    for(j=1;j<arraySize;j++)
    {
        div_update(divs[j],div_sizes[j],"yellow");//Color update

        key= div_sizes[j];
        i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"red");//Color update
            div_update(divs[i+1],div_sizes[i+1],"red");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[i+1],div_sizes[i+1],"red");//Height update
    
            div_update(divs[i],div_sizes[i],"blue");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"yellow");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"blue");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;
        // div_update(divs[t],div_sizes[t],"green");//Color update
        for(dum=0;dum<j;dum++)
        {
            div_update(divs[dum],div_sizes[dum],"green");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"green");//Color update

    enableButtons();
}