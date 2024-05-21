var companyId = components.table1.selectedRow.id;
await actions.setVariable('companyId',companyId);

await queries.checkVerify.run();
//const getemail = await queries.verifiedstep1user.run();
//await actions.setVariable('user_email',getemail.data[0].email_address);
//await actions.setVariable('user_name',getemail.data[0].owner_name);
//await queries.companyVerification03.run();
await queries.select_all.run();
await actions.showAlert('success','Verification Successfull!');
//window.location.href = window.location.pathname + window.location.search;