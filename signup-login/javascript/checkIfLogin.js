let loginId = localStorage.getItem("loginflag");
if(!loginId){
	await actions.switchPage('form');
}