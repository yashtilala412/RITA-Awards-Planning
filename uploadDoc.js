if (!variables.login_id) {
    var standard = JSON.parse(localStorage.getItem("standard"));
    // alert(standard[parseInt(standard.length/2)]);
    await actions.setVariable('login_id', standard[parseInt(standard.length/2)]);
  }
  
  var fileleng = components.filepicker4.file.length;
  
  if (fileleng > 0) {
    try {
      if (parseInt(localStorage.getItem('isuploaded')) == 1) {
        var pathForCheck = 'upload-prod/' + variables.login_id + '/' + localStorage.getItem('cName') + '/' + localStorage.getItem('documentfilePath');
        await actions.setVariable('web_url', pathForCheck);
        await queries.deleteObject.run();
      }
    } catch (err) {
      console.log(err.toString());
    }
  
    var cName = components.form1.data.inp_cname.value;
    cName = cName.replace(/'/g, '\\');
  
    var documentfilePath = components.filepicker4.file[0].filePath;
    await actions.setLocalStorage('documentfilePath', documentfilePath);
    await actions.setLocalStorage('cName', cName);
  
    let isuploaded = 1;
    await actions.setLocalStorage('isuploaded', isuploaded);
    await queries.uploadpdf.run();
    await actions.showAlert('success', 'File Uploaded Successfully');
  } else {
    await actions.showAlert('warning', 'Please Select The File');
  }