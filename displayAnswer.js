var answerData = components.table1.selectedRow.id;
await actions.setVariable('answerData',answerData)
actions.switchPage('seeanswer');