// where to add...
const placesId = document.getElementById('places-Id');

// what to add 
const li = document.createElement('li');
li.innerText = 'Bandhorban';
//  now append 

placesId.appendChild(li);

// where to add 

const mainContainer = document.getElementById('main-container');

// what to add
const section = document.createElement('section');

const h1 = document.createElement('h1');
h1.innerText = 'I am created this section by javascript .';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Nothing to add.';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Append by add.';
ul.appendChild(li2);

section.appendChild(ul);

mainContainer.appendChild(section);


// setInner HTML directly
const innerSection = document.createElement('section');

innerSection.innerHTML = `
<h1> My dress section </h1>
<ul>
     <li> Tshirt </li>
     <li> shirt </li>
     <li> Panjabi </li>
</ul>

`;
mainContainer.appendChild(innerSection);