var award = components.dropdown2.value;
var que = components.textarea2.value.replace(/'/g, '\\');
var charlen = components.textinput2.value;
var checkbox = components.checkbox2.value;
if(checkbox == false){
  if(!award || !que || award.length<=0 || que.length<=0 ){
    alert('please select award or write the question');
  }else{
    await actions.setVariable('selected_award',award);
    await actions.setVariable('question_name',que);
    await actions.setVariable('charlen',charlen);
    queries.addquestion.run();
  }
}else if(checkbox==true){
    await actions.setVariable('question_name',que);
    await actions.setVariable('charlen',charlen);
  	var awardLen = components.dropdown2.optionLabels.length;
  	for(k=0;k<awardLen;k++){
    award = components.dropdown2.optionLabels[k];
  	await actions.setVariable('selected_award',award);
    queries.addquestion.run();
  }
    
}