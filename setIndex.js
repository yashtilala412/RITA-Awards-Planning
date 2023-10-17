var i=0;
var aw=0;
await actions.setLocalStorage('i',1);
await actions.setLocalStorage('awa',0);
await actions.setLocalStorage('token',1);
let arrOfAnswer = JSON.parse(localStorage.getItem('arrOfAnswer'));
//await actions.setLocalStorage('arrOfAnswer',JSON.stringify(arrOfAnswer));
//await queries.displayquestion.run();
async function run1() {
var qa = await localStorage.getItem("quest");
qa = JSON.parse(qa);
var que_sie = await localStorage.getItem("que_size");
que_sie =  JSON.parse(que_sie);
var ids = await localStorage.getItem("que_id");
ids = JSON.parse(ids);
var award = await localStorage.getItem("awar");
award = JSON.parse(award);
var peraward = await localStorage.getItem("perawardq");
peraward = JSON.parse(peraward);
var max = qa.length;
await actions.setLocalStorage('minimum_cha',que_sie[0]);
await actions.setLocalStorage('award_name',award[aw]);
await actions.setLocalStorage('qa',qa[i]);
await actions.setLocalStorage('k',1);
await actions.setLocalStorage('max',max);
await actions.setVariable('q_id',ids[i]);
await actions.setLocalStorage('confirmNo',1);
await actions.setLocalStorage('answerofQuestion',arrOfAnswer[0])
}
await run1();