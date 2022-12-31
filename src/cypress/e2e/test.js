const readdir_module = require ('node:fs/promises').readdir;

async function get_files(){
  var fileList = [];
  try {
    const files = await readdir_module('../../../src/pages/', {"withFileTypes" : true});
    for (var file of files){
      if (file.name.startsWith("_") || !file.name.endsWith("js")) continue;
      if (!file.name.localeCompare("index.js")) continue;
      // this is only the case when we don't have credientials
      if (!file.name.localeCompare("events.js")) continue;
      //get file name 
      fileList.push(file);
    }
  } catch (err) {
    console.error(err);
  }
  if (fileList) return fileList;

}

async function tester(){
  const files = get_files();
  files.then((fileList) => {
    for (var file in fileList){
      console.log(fileList[file]);
    }
  })
};

tester()
