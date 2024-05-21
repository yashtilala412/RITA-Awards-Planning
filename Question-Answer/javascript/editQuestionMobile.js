var award = components.dropdown2.value;
var que = components.textarea2.value;
var charlen = components.textinput2.value;
if(award.length<=0 || que.length<=0){
	alert('please select award or write the question');
}
  else{
	await queries.updatequestionMobile.run();
}