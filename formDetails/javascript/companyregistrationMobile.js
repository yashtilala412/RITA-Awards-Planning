var updatestate=variables.update_state;
let adminCompany = variables.adminCompany;
if(updatestate==1){
 await queries.registerQueryForMobile.run();
}else if(adminCompany==1){
	var cemail = components.form1.data.inp_cemail.value;
  var cname = components.form1.data.inp_cname.value;
  await queries.loadingstatetrue.run();
  await actions.setVariable('user_email',cemail);
  await actions.setVariable('user_password',cemail);
  const newid = await queries.signupandregister.run();
  await actions.setVariable('login_id',newid.data[0].login_id);
  await queries.insertlogindata.run();
  await queries.loadingstatefalse.run();
  await queries.registerquery.run();
  
}
else{
  await queries.registerQueryForMobile.run();
  //await queries.insertintoanswer.run();
  //await actions.switchPage('form-3');
	//await queries.registerquery.run();
}