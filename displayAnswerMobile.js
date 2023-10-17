var answerData = components.table2.selectedRow.id;
await actions.setVariable('answerData',answerData)
actions.switchPage('seeanswer');