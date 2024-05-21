if(!variables.login_id){
	var standard = JSON.parse(localStorage.getItem("standard"));;
 // alert(standard[parseInt(standard.length/2)]);
  await actions.setVariable('login_id',standard[parseInt(standard.length/2)]);
}
await queries.submitQues.run();
var award = await JSON.parse(localStorage.getItem("awar"));
for(i=0;i<award.length;i++){
	await actions.setVariable('awardName',award[i]);
  await actions.runQuery('setConfirmation');
}
await actions.runQuery('deleteUnwantedAnswer');
await actions.runQuery('logoutQuery');
await actions.setLocalStorage('greeting',1);
actions.switchPage('greeting');