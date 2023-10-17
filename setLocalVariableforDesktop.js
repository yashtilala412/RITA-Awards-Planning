await actions.setLocalStorage('c_type',components.form1.data.drpdown_ctype.value);
await actions.setLocalStorage('c_proof',components.form1.data.drpdwn_cproof.value);
var award = components.form1.data.multi_caward.values;
await actions.setLocalStorage('c_award',JSON.stringify(award));