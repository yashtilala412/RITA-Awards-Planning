const loginId = await queries.postgresql30.run();
let arrofId = loginId.data[0].id.data;

await actions.setLocalStorage('loginDataForUser',arrofId);
alert(arrofId);
//console.log(typeof loginId);