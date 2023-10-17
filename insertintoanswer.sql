async function run() {
  const arr1 = await queries.selectaward.run();
  actions.setVariable("comp_id",arr1.data[0].id);
  actions.setVariable("select_award",arr1.data[0].applied_awards);
  var aray = [];
  var questionName='';
  var ar_qu = [];
  var que_size = [];
  var arrofAnswers = [];
  var login = variables.login_id;
  var arr = arr1.data[0].applied_awards.split(',');
  var peraward = [];
  actions.setLocalStorage('awar',JSON.stringify(arr));
  var flag = 0;
  for(i=0;i<arr.length;i++){
    //alert(arr[i]);
     actions.setVariable('award',arr[i]);
     const checkexit = await queries.checkinanswerexist.run();  
	  if(checkexit.data.length<=0){
	  	flag = 1;
	  }else{
	  	flag = 0;
	  }
    const que = await queries.selectquestions.run();
    let j=0;
    for(j=0;j<que.data.length;j++){
    	//questionName=
      aray.push(que.data[j].question.replace(/\\/g, "'"));
      //alert(aray[j]);
     ar_qu.push(que.data[j].question_id);
    que_size.push(que.data[j].minimum_character);
     await actions.setVariable('que_name', que.data[j].question);
     await actions.setVariable('que_id', que.data[j].question_id);
      if(flag===1){
     await queries.insertanswer.run();
     arrofAnswers.push('');
 		}
     else{
    	const dataofAnswer = await queries.selectAnswer.run();
      //alert(dataofAnswer.data[0].answer)
       if(dataofAnswer.data[0].answer.length==0){
       	arrofAnswers.push('');
       }else{
    		arrofAnswers.push(dataofAnswer.data[0].answer.replace(/\\/g, "'"));
       }
    }
    }
    peraward.push(j);
  }
  await actions.setLocalStorage('perawardq',JSON.stringify(peraward));
  await actions.setLocalStorage('quest',JSON.stringify(aray));
  await actions.setLocalStorage('que_id',JSON.stringify(ar_qu));
  await actions.setLocalStorage('que_size',JSON.stringify(que_size));
  await actions.setLocalStorage('arrOfAnswer',JSON.stringify(arrofAnswers));
  await queries.setIndex.run();
  //await queries.displayquestion.run();
}
await run();