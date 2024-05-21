var ques_id = components.table2.selectedRow.question_id;
await actions.setVariable('ques_id',ques_id);
//await queries.selectawardquestion.run();
const awards = await queries.selectawardquestion.run();
await actions.setVariable('awards',awards);
//await queries.updatequestionsetvariable.run();
await actions.switchPage('edit-question');