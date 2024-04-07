// option-1: directly set on the HTML elements
//<button onclick="document.body.style.backgroundColor='blue'">Make Blue</button>

//Option-2 :add onclick function on HTML elements
//<button onclick="makeYellow()">Make yellow</button>
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

//Option-3 : onlick by id 
const getId = document.getElementById('get-Id');
getId.onclick = makeRed;

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//Option-3 another way : onclick by ID with direct function
const purple = document.getElementById('makepurple');
purple.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// Option-4 :addEventListener
const makePinkbtn = document.getElementById('makepink');
makePinkbtn.addEventListener('click',makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';

}

// option -4 :
const makegreenbtn = document.getElementById('makegreen');
makegreenbtn.addEventListener('click',function MakeGreen(){
  document.body.style.backgroundColor = 'green';
})

//  option-5 : final 

document.getElementById('maketomato').addEventListener('click',function makeTomato(){document.body.style.backgroundColor='tomato'});
     