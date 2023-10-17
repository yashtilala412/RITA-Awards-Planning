await actions.setLocalStorage('c_type',components.form2.data.drpdwn_ctype_mobile.value);
await actions.setLocalStorage('c_proof',components.form2.data.dropdown6.value);
var award = components.form2.data.multi_caward_mobile.values;
await actions.setLocalStorage('c_award',JSON.stringify(award));