var companyId = components.table2.selectedRow.id;
await actions.setVariable('companyId',companyId);
await queries.checkVerify.run();
await actions.showAlert('success','Verification Successfull!');
await actions.runQuery('select_all');