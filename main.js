'use strict';

const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
let studentNames = [];

const printToDom = (divId, string) => {
	document.getElementById(divId).innerHTML = string;
};

const openForm = () => {
	document.getElementById('form').innerHTML = `<div class="card">
                                                 <form class="card-body">
                                                 <h1>Enter First Year's Name</h1>
                                                 <label for="name">Student:</label>
                                                 <input type="text" id="name">
                                                 <button type="button" class="btn btn-secondary" id="sort">Sort!</button>
                                                 </form>
                                                 </div>`;
	sortListener();
};

const sortListener = () => {
    document.getElementById('sort').addEventListener('click', getName);
    document.getElementById('sort').addEventListener('click', cardBuilder);
};

const startSorting = () => {
	document.getElementById('start-sorting').addEventListener('click', openForm);
};

const getName = () => {
	const name = document.getElementById('name').value;
	return studentNames.push(name);
};

const cardBuilder = () => {
	let domString = '';

	for (let i = 0; i < studentNames.length; i++) {
        let housePicker = Math.floor(Math.random() * 4)
		domString += `<div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${studentNames[i]}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${houses[housePicker]}</h6>
                        </div>
                    </div>`;
	}
	console.log('Hi!');

	printToDom('cards-container', domString);
};

const init = () => {
	startSorting();
};

init();
