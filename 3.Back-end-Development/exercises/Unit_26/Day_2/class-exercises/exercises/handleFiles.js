const fs = require('fs').promises;


const writingAndReadFiles = async ([...files]) => {
  try {
    const createFilesPromises = (
      files.map((file, index) => fs.writeFile(`./file${index + 1}.txt`, file))
    );
  
    await Promise.all(createFilesPromises)
  
    const fileNames = files.map((_file, index) => `file${index + 1}.txt`);
  
    const readFiles = await Promise.all(
      fileNames.map((file) => fs.readFile(`./${file}`, 'utf-8'))
    );
  
    console.log(readFiles.join(' '));

  } catch (error) {
    console.error(error.message);
  }

};

writingAndReadFiles(['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']);