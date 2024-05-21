let adminStatus = variables.adminStatus;
if(adminStatus!=1){
	await actions.switchPage('form');
}