'use strict';

const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
let studentNames = [];

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
	document.getElementById('sort').addEventListener('click', buildCard);
};

const startSorting = () => {
	document.getElementById('start-sorting').addEventListener('click', openForm);
};

const getName = () => {
	const name = namedocument.getElementById('name').value;
	return studentNames.push(name);
};

const init = () => {
	startSorting();
};

init();
