'use strict';

const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

const openForm = () => {
	document.getElementById('form').innerHTML = `<div class="card">
                                                 <form class="card-body">
                                                 <h1>Enter First Year's Name</h1>
                                                 <label for="name">Student:</label>
                                                 <input type="text" id="name">
                                                 <button type="button" class="btn btn-secondary">Sort!</button>
                                                 </form>
                                                 </div>`;
};

const startSorting = () => {
	document.getElementById('start-sorting').addEventListener('click', openForm);
};

const init = () => {
	startSorting();
};

init();
