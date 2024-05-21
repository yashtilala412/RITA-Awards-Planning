var award = components.dropdown1.value;
var que = components.textarea1.value;
var charlen = components.textinput1.value;
if(award.length<=0 || que.length<=0){
	alert('please select award or write the question');
}
  else{
	await queries.updatequestion.run();
}