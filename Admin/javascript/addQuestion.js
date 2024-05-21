var award = components.dropdown3.value;
var que = components.textarea3.value.replace(/'/g, '\\');
var charlen = components.textinput3.value;
var checkbox = components.checkbox1.value;
if(checkbox == false){
  if(award.length<=0 || que.length<=0){
    alert('please select award or write the question');
  }else{
    await actions.setVariable('selected_award',award);
    await actions.setVariable('question_name',que);
    await actions.setVariable('charlen',charlen);
    await queries.addquestion.run();
    await actions.showAlert('success','Question Added Successfully')
  }
}else if(checkbox==true){
    await actions.setVariable('question_name',que);
    await actions.setVariable('charlen',charlen);
  	var awardLen = components.dropdown3.optionLabels.length;
  	for(k=0;k<awardLen;k++){
    award = components.dropdown3.optionLabels[k];
  	await actions.setVariable('selected_award',award);
    await queries.addquestion.run();
  }
    await actions.showAlert('success','Question Added Successfully');
    
}