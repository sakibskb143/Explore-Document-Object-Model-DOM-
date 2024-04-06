const sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
    // console.log(section);
    section.style.border = '2px solid green';
    section.style.borderRadius = '10px';
    section.style.marginBottom = '5px';
    section.style.paddingLeft  = '10px';
    section.style.backgroundColor = 'gray';
    section.style.fontSize = '20px'; 

}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow';

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('yellow-bg');
placesContainer.classList.remove('text-size');


//  here create element 

const placeUl = document.querySelector('#places-container ul');

const li_2 = document.createElement('li');
li_2.innerText = 'Here we goooooooooooo';
placeUl.appendChild(li_2);
