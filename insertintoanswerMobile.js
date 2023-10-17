async function run() {
    const arr1 = await queries.selectaward.run();
    actions.setVariable("comp_id",arr1.data[0].id);
    actions.setVariable("select_award",arr1.data[0].applied_awards);
    var aray = [];
    var ar_qu = [];
    var que_size = [];
    var login = variables.login_id;
    var arr = arr1.data[0].applied_awards.split(',');
    var peraward = [];
    actions.setVariable('awar',arr);
    var flag = 0;
    const checkexit = await queries.checkinanswerexist.run();  
    if(checkexit.data.length<=0){
        flag = 1;
    }
    for(i=0;i<arr.length;i++){
      //alert(arr[i]);
       actions.setVariable('award',arr[i]);
      const que = await queries.selectquestions.run();
      let j=0;
      for(j=0;j<que.data.length;j++){
        aray.push(que.data[j].question);
       ar_qu.push(que.data[j].question_id);
        que_size.push(que.data[j].minimum_character);
       await actions.setVariable('que_name', que.data[j].question);
       await actions.setVariable('que_id', que.data[j].question_id);
        if(flag===1){
       await queries.insertanswer.run();}
      }
      peraward.push(j);
    }
    actions.setVariable('perawardq',peraward);
    await actions.setVariable('quest',aray);
    await actions.setVariable('que_id',ar_qu);
    await actions.setVariable('que_size',que_size);
    await queries.setIndex.run();
    //await queries.displayquestion.run();
    
  }
  await run();