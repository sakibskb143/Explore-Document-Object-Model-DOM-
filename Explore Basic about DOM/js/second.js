console.log('Second Javascript file..')

const appendList = document.getElementById('list-id');

const createli = document.createElement('li');
createli.innerText = 'New list by DOM.';
appendList.appendChild(createli);