//await queries.insertintoanswer.run();
await actions.runQuery('backButtonForQuestionAnswer');
await actions.setVariable('confirmNo',1);
await actions.switchPage('form-3');