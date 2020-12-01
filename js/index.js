console.log('Checking if this is runnign or not!');


// let body = document.getElementsByTagName('body');
// let rightNav = document.getElementById('rightNav');
// let lefttNav = document.getElementById('leftNav');
// let mainContainer = document.getElementById('mainContainer');
let sortAlgosBtn = document.getElementById('sortAlgosBtn');


sortAlgosBtn.addEventListener('click', openSortAlgosPage);
// let navbar = document.getElementsByClassName('navbar');
// console.log(navbar[0]);

function openSortAlgosPage(){
    rightNav.innerHTML = "";
    leftNav.innerHTML = "";
    console.log("Checking sortAlgosPage!");
    let htmlLeft = `
                <li class="nav-item">
                    <div class="inputSlider">
                            <p>Size of array:</p>
                            <input id="sizeInput" type="range" min=20 max=150 step=1 value=80>
                            <p>Set Speed:</p>
                            <input id="speedInput" type="range" min=1 max=5 step=1 value=4>
                    </div>    
                </li>  `;

    let htmlRight = `
        <li class="nav-item">
            <button class="btn btn-primary" id="generateRandom" style="margin-right: 20px;">Random</button>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sorting Algorithms
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <button class="dropdown-item" href="#">Insertion Sort</button>
                <button class="dropdown-item" href="#">Bubble Sort</button>
                <button class="dropdown-item" href="#">Merge Sort</a>
                <button class="dropdown-item" href="#">Quick Sort</button>
                <button class="dropdown-item" href="#">Heap Sort</button>
                <!-- <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a> -->
            </div>
        </li> `;

    body[0].style.background="rgb(0,0,98)";
    rightNav.innerHTML = htmlRight;
    lefttNav.innerHTML = htmlLeft;
    mainContainer.innerHTML = '';
}