let id = components.table1.selectedRow.id;
await actions.setVariable('user_id',id);
var valu = await queries.selectURL.run();
var url = valu.data[0].url;
await actions.setVariable('web_url',url);
var valuOfDoc = await queries.downloadurl.run();
//var urlOfDoc = valuOfDoc.data[0].url;
//await actions.setVariable('Doc_url',urlOfDoc);
//alert(valuOfDoc.data.url);
//console.log(valuOfDoc.data.url)
window.open(valuOfDoc.data.url);