if (!variables.login_id) {
    var standard = JSON.parse(localStorage.getItem("standard"));
    // alert(standard[parseInt(standard.length/2)]);
    await actions.setVariable('login_id', standard[parseInt(standard.length/2)]);
  }
  var pathForCheck = 'upload-prod/' + variables.login_id + '/'+  localStorage.getItem('cName')   + '/'+ localStorage.getItem('documentfilePath')
  await actions.setVariable('web_url',pathForCheck);
  var valuOfDoc = await queries.downloadurl.run();
  //var urlOfDoc = valuOfDoc.data[0].url;
  //await actions.setVariable('Doc_url',urlOfDoc);
  //alert(valuOfDoc.data.url);
  //console.log(valuOfDoc.data.url)
  window.open(valuOfDoc.data.url);