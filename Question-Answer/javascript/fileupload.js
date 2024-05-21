await queries.loadingstatetrue.run();

var isupload = components.filepicker2.file.length;
if(isupload==0){
	alert('Please Select The File ');
}
else{
  await queries.uploadpdf.run();
	actions.setVariable('isuploaded',1);
  await queries.download.run();
  actions.showAlert('success','File Uploaded Successfully!');
}
queries.loadingstatefalse.run();