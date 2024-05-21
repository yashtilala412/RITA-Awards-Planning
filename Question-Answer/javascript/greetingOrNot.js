var greeting = localStorage.getItem('greeting');
if(!greeting){
	await actions.switchPage('form');
}