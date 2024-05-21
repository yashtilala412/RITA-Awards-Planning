function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }
  
  var pass = components.form1.data.registerPassword.value.replace(/'/g, '\\');
  var emai = components.form1.data.registerEmail.value;
  var passlen = components.form1.data.registerPassword.value.length;
  var confpass = components.form1.data.registerConfirmPassword.value.replace(/'/g, '\\');
  //await queries.loadingstatetrue.run();
  async function run1() {
    await actions.setVariable('userEmail',emai);
    const data1 = await queries.accountexits.run();
    if(data1.data.length<=0){
      await actions.setVariable('user_email',emai);
      await actions.setVariable('user_password',pass);
      const randomString = generateRandomString(10);
          await actions.setVariable('randomString',randomString)
      await queries.insertlogindata.run();
      await actions.runQuery('sendVerificationMail');
      components.form1.resetForm();
          await components.text38.setText('Thank you for nomination please check your email for verification <br> once verification is successfully completed we will proceed to the next step <br> for more details feel free to contact us') ;   
      
    }
    else{
          actions.showAlert('warning','Account already exists please login');
    }
  }
  if(pass===confpass){
    var validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!components.form1.data.registerEmail.value.match(validRegex)) {
          await actions.showAlert('error',"InValid email address!");
      //await actions.setVariable('email',true);
    }
    else if(passlen==0){
      await actions.setVariable('password',true);
          actions.showAlert('warning','Password Required');
    }
    else{
      await actions.unSetVariable('email');
      await actions.unSetVariable('password');
      await actions.unSetVariable('confPass');
      await run1();
    }
  }
  else{
    await actions.setVariable('confPass',true);
      actions.showAlert('error','Password does not match');
  }
  
  //await queries.loadingstatefalse.run();