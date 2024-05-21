async function run1() {
    var arrofAnswer = await localStorage.getItem("arrOfAnswer");
    arrofAnswer = JSON.parse(arrofAnswer);
    var qa = await localStorage.getItem("quest");
    qa = JSON.parse(qa);
    var que_sie = await localStorage.getItem("que_size");
    que_sie = JSON.parse(que_sie);
    var ids = await localStorage.getItem("que_id");
    ids = JSON.parse(ids);
    var award = await localStorage.getItem("awar");
    award = JSON.parse(award)
    var peraward = await localStorage.getItem("perawardq");
    peraward = JSON.parse(peraward);
    var max = qa.length;
    var aw = parseInt(localStorage.getItem("awa"));
    let k = parseInt(localStorage.getItem("k"))-1;
    let j = parseInt(localStorage.getItem("i"))-1;
    let tok = parseInt(localStorage.getItem("token"))-1;
    let confirmNo = localStorage.getItem("confirmNo");
    if(tok==0){
      tok = peraward[aw-1];
        await actions.setLocalStorage('award_name',award[aw-1]);
      await actions.setLocalStorage('awa',aw-1);
    }
    if(confirmNo==1){
            var answer = components.form2.data.inp_answer_mobile.value; 
            await actions.setVariable('answe',answer);
            await actions.runQuery('saveAnswerInArray');
    }
    await actions.setLocalStorage('minimum_cha',que_sie[j]);
    await actions.setLocalStorage('qa',qa[j-1]);
    await actions.setLocalStorage('i',j);
    await actions.setLocalStorage('k',j);
    await actions.setLocalStorage('answerofQuestion',arrofAnswer[j-1]);
    await actions.setVariable('q_id',ids[j-1]);
    await actions.setLocalStorage('token',tok);
    components.form2.resetForm();
    //await actions.runQuery('selectAnswerForBackButton');
    
    }
    await run1();