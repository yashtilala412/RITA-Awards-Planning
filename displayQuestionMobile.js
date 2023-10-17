async function run1() {
    var arrofAnswer = await localStorage.getItem("arrOfAnswer");
    arrofAnswer = JSON.parse(arrofAnswer);
    var qa =  await localStorage.getItem("quest");
    qa = JSON.parse(qa);
    var que_sie = await localStorage.getItem("que_size");
    que_sie = JSON.parse(que_sie);
    var ids = await localStorage.getItem("que_id");
    ids = JSON.parse(ids);
    var award = await localStorage.getItem("awar");
    award = JSON.parse(award);
    var peraward = await localStorage.getItem("perawardq");
    peraward = JSON.parse(peraward);
    var max = qa.length;
    var aw =  parseInt(localStorage.getItem("awa"));
    let j = parseInt(localStorage.getItem("i"));
    let tokn = parseInt(localStorage.getItem("token"));
    var anslength = components.form2.data.inp_answer_mobile.value;
  	
    if(anslength.length<que_sie[j-1] || !anslength){
    actions.showAlert('info','Plese enter minimum '+que_sie[j-1]+' Character');
    }else{
        if(j>=max){
    //await queries.submitQues.run();
        await actions.setLocalStorage('confirmNo',0);
        
        await actions.switchPage('confirmation-page');   
        }else if(tokn>=peraward[aw]){
        tokn = 0 ;
        await actions.setLocalStorage('awa',aw+1);
        aw = aw +1;
        }
      	if(!variables.login_id){
	var standard = JSON.parse(localStorage.getItem("standard"));;
 // alert(standard[parseInt(standard.length/2)]);
  await actions.setVariable('login_id',standard[parseInt(standard.length/2)]);
}   
        await actions.setVariable('answe',anslength);
        await actions.runQuery('saveAnswerInArray');
        anslength = anslength.replace(/'/g, '\\');
        await actions.setVariable('answe',anslength);
        await queries.updateans.run();
        
    await actions.setLocalStorage('minimum_cha',que_sie[j]);
    await actions.setLocalStorage('award_name',award[aw]);
    await actions.setLocalStorage('qa',qa[j]);
    await actions.setLocalStorage('i',j+1);
    await actions.setLocalStorage('k',j+1);
    await actions.setLocalStorage('max',max);
    await actions.setVariable('q_id',ids[j]);
    //await localStorage.getItem.token = localStorage.getItem.token+1;
    await actions.setLocalStorage('token',tokn+1);
    await actions.setLocalStorage('answerofQuestion',arrofAnswer[j]);
    components.form2.resetForm();
    }
    }
    await run1();