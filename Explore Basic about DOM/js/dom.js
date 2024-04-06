// console.log("we are connect js file with html file by extranal file.");
// console.log(document);
const student = {
    name: 'sakib',
    roll: 19 ,
    study: function(time){
        // console.log(time, 'dhore portase akno...');
    }
}
// option-1: getElementsByTagName
const litag = document.getElementsByTagName('li');
// console.log(litag);
for(const list of litag){
//     console.log(list.innerText);
}

const headinglist = document.getElementsByTagName('h1');
for(const h1 of headinglist){
    // console.log(h1.innerText);
}
// Option-2: getElementById
const hosts = document.getElementById('hosts-title');

hosts.innerText = 'Hosts Name was change by javascript.';

// Option-3: getElementsByClassName

const website = document.getElementsByClassName('important-classes');
for(const cp of website ){
    // console.log(cp.innerText);
}

// option-4: querySelector 
// option-5: querySelectorAll
const someli = document.querySelectorAll('.fruits-container li');
// console.log(someli);
for(const qry of someli){
    // console.log(qry.innerText);
}