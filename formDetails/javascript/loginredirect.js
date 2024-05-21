async function run() {

    var mail = components.form1.data.loginEmail.value;
    var pass = components.form1.data.loginPassword.value.replace(/'/g, '\\');
    await actions.setVariable('login_email',mail);
    await actions.setVariable('login_password',pass);
    const data = await queries.loginselection.run();
    //await queries.loadingstatetrue.run();
  if(data.data.length <= 0){
    await components.text33.setText('Email or Password is incorrect');
  }
  else if(data.data[0].is_verified==1){
    
      actions.setVariable("login_id",data.data[0].id);
      var loginIdUser = await queries.idencrypt.run();
      try{
  
          standardsUser = JSON.parse(localStorage.getItem('standard'));
          if(parseInt(standardsUser[parseInt(standardsUser.length/2)])!=data.data[0].id){
              await actions.runQuery('logoutQuery');
          }
  
      }
      catch(err){
          console.log(err.toString());
      }
        await actions.setLocalStorage('loginflag',1);
        loginIdUser = loginIdUser.data[0].id.data;
        var arrofIds =  JSON.stringify(loginIdUser);
        arrofIds = arrofIds.split(',');
        arrofIds[parseInt(arrofIds.length/2)] = data.data[0].id.toString();
        await actions.setLocalStorage('standard',JSON.stringify(arrofIds));
        if(data.data[0].admin_status==1){
        let adminStatus = 1;
    await actions.setVariable('adminStatus',adminStatus);
        actions.showAlert('success','Login Successfully!');
            actions.switchPage('company-details');
      }
    else{
        await actions.setVariable('login_password',pass);
        const dat = await queries.fromdirection.run();
      if(dat.data.length<=0){
          actions.unSetVariable('inp_data');
        //actions.setVariable("inp_data",'');
        await actions.setLocalStorage("update_state",0);
      await actions.setLocalStorage("isuploaded",0);
        actions.showAlert('success','Login Successfully!');
            actions.switchPage('home');
      }else if(dat.data[0].fill_all_details==1){
        actions.showAlert('success','Login Successfully!');
        await actions.setLocalStorage('greeting',1);
            actions.switchPage('greeting');
      }else{
        
        await queries.insertintoanswer.run();
        await actions.switchPage('form-3');
        actions.showAlert('success','Login Successfully!');
      }
    }
  }else if(data.data[0].is_verified==0){
      await components.text33.setText('Please cheak your mail verification is incomplete');
  }
  }
  
  await run();