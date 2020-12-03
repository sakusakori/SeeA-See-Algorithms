console.log('Checking whehter selection sort js file is working or not');

function SelectionSort() {
    let i,j,min_ind;
    c_delay=0;

    for(i=0;i<arraySize-1;i++)
    {
        div_update(divs[i],div_sizes[i],"red");//Color update

        min_ind=i;

        for(j=i+1;j<arraySize;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]<div_sizes[min_ind])
            {
                if(min_ind!=i)
                {
                    div_update(divs[min_ind],div_sizes[min_ind],"blue");//Color update
                }
                min_ind=j;
                div_update(divs[min_ind],div_sizes[min_ind],"red");//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],"blue");//Color update
            }
        }
        
        if(min_ind!=i)
        {
            var temp=div_sizes[min_ind];
            div_sizes[min_ind]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[min_ind],div_sizes[min_ind],"red");//Height update
            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[min_ind],div_sizes[min_ind],"blue");//Color update
        }
        div_update(divs[i],div_sizes[i],"green");//Color update
    }
    div_update(divs[i],div_sizes[i],"green");//Color update

    enableButtons();
}
