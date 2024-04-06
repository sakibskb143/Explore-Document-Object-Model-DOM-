const mainContainer = document.getElementById('main-container');

const sections =document.createElement('section');

sections.innerHTML = `
  <h1> Create section by InnerHTMl </h1>
  <p> we are tring to learn more and more about Document object Model </p>

  <ul>
     <li> Document Object Model -1 </li>
     <li> Document Object Model -2</li>
     <li> Document Object Model -3</li>
  </ul>   

`
mainContainer.appendChild(sections);