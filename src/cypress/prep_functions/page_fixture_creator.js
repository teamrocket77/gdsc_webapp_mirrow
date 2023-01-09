const fs = require('node:fs');
const readdir_module = fs.promises.readdir;

async function get_files(){
	var fileList = [];
	try {
		const files = await readdir_module('./pages/', {"withFileTypes" : true});
		for (var file of files){
			if (file.name.startsWith("_") || !file.name.endsWith("js")) continue;
			if (!file.name.localeCompare("index.js")) continue;
			// this is only the case when we don't have credientials
			if (!file.name.localeCompare("events.js")) continue;
			//get file name 
			fileList.push(file.name.slice(0, -3));
		}
	} catch (err) {
		console.error(err);
	}
	const pages = fileList.reduce((map, page) => {
		map.pages.push( page );
		return map;
	}, {pages: []})
	console.log(pages);
	fs.writeFileSync("./cypress/fixtures/pages.json", JSON.stringify(pages));
}

get_files()

