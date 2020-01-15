import './style.css';
import template from './template.hbs';
import gwiazda from './gwiazda.jpg';
import koleda from './koledowanie.jpg';
import siano from './sianko.jpg';

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://localhost:3000/data');
ourRequest.onload = function () {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
        var data = JSON.parse(ourRequest.responseText);
        createHTML(data).then(()=>{
            
component1();
component2();
component3();
        });
        
    } else {
        console.log("We connected to the server, but it returned an error.");
    }
};

ourRequest.onerror = function () {
    console.log("Connection error");
};

ourRequest.send();

async function createHTML(data) {
    var element = document.getElementById('container');

    element.innerHTML = template(data);

}


function component1() {
    const element = document.getElementById("siano");

    const mysiano = new Image();
    mysiano.src = siano;

    element.appendChild(mysiano);

    return element;
}
function component2() {

    const element = document.getElementById("gwiazda");

    const mygwiazda = new Image();
    mygwiazda.src = gwiazda;

    element.appendChild(mygwiazda);

    return element;
}
function component3() {
    const element = document.getElementById("koleda");

    const mykoleda = new Image();
    mykoleda.src = koleda;
    element.appendChild(mykoleda);

    return element;
}

