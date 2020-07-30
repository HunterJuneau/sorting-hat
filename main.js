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
                                                 <input type="text" id="name" required>
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

const getHouse = () => {
	return Math.floor(Math.random() * 4);
};

const getName = () => {
	const studentName = document.getElementById('name').value;
	studentNames.push({ name: studentName, house: houses[getHouse()] });
};

const cardBuilder = () => {
	let domString = '';

	for (let i = 0; i < studentNames.length; i++) {
		domString += `<div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${studentNames[i].name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${studentNames[i].house}</h6>
                        <button type="button" class="btn btn-danger" id="${i}">Expel Student</button>
                        </div>
                    </div>`;
	}
	console.log('Hi!');

	printToDom('cards-container', domString);
	expelListener();
};

const expelListener = () => {
	document
		.getElementById('cards-container')
		.addEventListener('click', expelStudent);
};

const expelStudent = (e) => {
    console.log(e)
	const ctype = e.target.type;
	const target = e.target.id;
	if (ctype === 'button') {
		studentNames.splice(target, 1);
		cardBuilder();
	}
};

const init = () => {
	startSorting();
};

init();
