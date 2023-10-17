let i=0;
var cname = components.form2.data.inp_cname_mobile.value;
cname = cname.replace(/'/g, '\\')
if(cname.length<1){
    await actions.setVariable('cname',true);
}
else{
  await actions.unSetVariable('cname');
  i++;
}
var cowner = components.form2.data.inp_cowner_mobile.value;
cowner = cowner.replace(/'/g, '\\')
if(cowner.length<1){
  await actions.setVariable('cowner',true);
}else{
  await actions.unSetVariable('cowner');
  i++;
}
var comob = components.form2.data.inp_ownermob_mobile.value;
var phoneno = /^\d{10}$/;
if(!components.form2.data.inp_ownermob_mobile.value.match(phoneno)){
    await actions.setVariable('comob',true);
}else{
  await actions.unSetVariable('comob');
  i++;
}
var caddress = components.form2.data.inp_caddress_mobile.value;
caddress = caddress.replace(/'/g, '\\')
//alert(caddress)
if(caddress.length<1){
  await actions.setVariable('caddress',true);
}else{
  await actions.unSetVariable('caddress');
  i++;
}
var cemail = components.form2.data.inp_cemail_mobile.value;
var validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (!components.form2.data.inp_cemail_mobile.value.match(validRegex)) {
      await actions.setVariable('cemail',true);
}else{
  await actions.unSetVariable('cemail');
  i++;
}
var cweb = components.form2.data.inp_web_mobile.value;
var validregex2=/^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})?(\/\S*)?$/;
if(!cweb.match(validregex2)){
  await actions.setVariable('cweb',true);
}else{
  await actions.unSetVariable('cweb');
  i++;
}
var ctype = components.form2.data.drpdwn_ctype_mobile.value;
if(!ctype || ctype.length<1){
  await actions.showAlert('info','Please select the company type');
}else{
  i++;
  //await actions.showAlert('warning','Please select the company type');
}
var caward  =  components.form2.data.multi_caward_mobile.values;
//alert(caward.length)
if(!caward){
	await actions.showAlert('info','Please Select the award');
}
else if(caward.length>5)
{
  await actions.showAlert('warning','You can apply only for 5 awards');
  await actions.setVariable('caward',true);
}else if(caward.length<1){
  await actions.showAlert('info','Please Select the award');
}else{
  await actions.unSetVariable('caward');
  i++;
}
var cfoundingyear= components.form2.data.inp_foundingyear_mobile.value;
var regexfor = /^([0-9]{4})$/;
if(!regexfor.test(components.form2.data.inp_foundingyear_mobile.value)){
  await actions.setVariable('cfoundingyear',true);
}else{
  await actions.unSetVariable('cfoundingyear');
  i++;
}
var cstrength = components.form2.data.inp_companystrength_mobile.value;
var regexforStrength =  /^(\s*(?:\d{1,5}(?:,\d{5})?|null)(?:\s*-\s*(?:\d{1,5}(?:,\d{5})?|null))?\s*)(,\s*(?:\d{1,5}(?:,\d{5})?|null)(?:\s*-\s*(?:\d{1,5}(?:,\d{5})?|null))?\s*)*$/;
if(!regexforStrength.test(components.form2.data.inp_companystrength_mobile.value) || cstrength.length<1){

  await actions.setVariable('cstrength',true);
}
else{
  await actions.unSetVariable('cstrength');
  i++;
}
var cproof = components.form2.data.dropdown6.value;
if(!cproof || cproof.length<1){
  await actions.showAlert('info','Please Select the Company proof ');
}else{
  //await actions.unSetVariable('cproof');
  i++;
}
var isuploaded= localStorage.getItem("isuploaded");
var fielUp = components.filepicker5.file.length;
if(isuploaded==1){
  i++;
}else if(fielUp>0){
  await actions.showAlert('info','Please click on upload button');
}else{
  await actions.showAlert('info','Please Select the file')
}
if(!variables.login_id){
  var standard = JSON.parse(localStorage.getItem("standard"));;
 // alert(standard[parseInt(standard.length/2)]);
  await actions.setVariable('login_id',standard[parseInt(standard.length/2)]);
}
i=i;
if(i==12){
    await actions.setVariable('companyName',cname);
    await actions.setVariable('ownerName',cowner);
    await actions.setVariable('ownerMobile',comob);
    await actions.setVariable('companyAddress',caddress);
    await actions.setVariable('companyEmail',cemail);
    await actions.setVariable('companyWebsite',cweb);
    await actions.setVariable('companyType',ctype);
    await actions.setVariable('companyAwards',caward);
    await actions.setVariable('companyFoundingYear',cfoundingyear);
    await actions.setVariable('companyStrength',cstrength);
    await actions.setVariable('companyRegistration',cproof);
    update_state = localStorage.getItem('update_state');
    if(!update_state || update_state==0){
      await queries.insertcompany.run();
    await actions.setLocalStorage("update_state",1);
    }else if(update_state==1){
      await actions.runQuery('companyDetailsUpdate');
    }
    await queries.insertintoanswer.run();
    actions.switchPage('form-3');
  await actions.showAlert('success','Register Successfully');
    //await actions.switchPage('form-3');

}