var quesId = components.table2.selectedRow.question_id;
await actions.setVariable('quesId',quesId);
await actions.runQuery('deleteQuestion');
await actions.runQuery('deleteAnswer');
await actions.runQuery('viewquestion');