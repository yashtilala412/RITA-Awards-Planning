var userID = components.table2.selectedRow.id;
await actions.setVariable('userID',userID);
await actions.runQuery('makeAdmin');
await actions.runQuery('selectUserLoginData');