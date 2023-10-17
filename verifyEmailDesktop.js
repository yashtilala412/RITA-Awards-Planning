var userID = components.table1.selectedRow.id;
await actions.setVariable('userID',userID);
await actions.runQuery('verifyEmail');
await actions.runQuery('selectUserLoginData');