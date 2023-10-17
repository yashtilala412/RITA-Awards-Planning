const awards = await queries.selectawardquestion.run();
await actions.setVariable('awards',awards);