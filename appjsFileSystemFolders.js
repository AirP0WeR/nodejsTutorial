import fs from 'fs';
import { resolve } from 'path';

// make directory
function makeDirectory() {

    return new Promise((resolve, reject) => {
        fs.mkdir('tutorial', (err) => {
            if (err) {
                console.log(err);
                reject();
            }
            else {
                fs.writeFile('./tutorial/newfile.txt', 'special text \n', (err) => {
                    if (err) {
                        console.log(err);
                        reject();
                    }
                    else
                        console.log('file written');
                    resolve();
                });
            }

        })
    })
};

// remove directory
function removeDirectory() {
    return new Promise((resolve, reject) => {
        fs.rm('./tutorial', { recursive: true }, (err) => {
            if (err) {
                console.log(err);
                reject();
            }


            else
                console.log('tutorial folder deleted');
                resolve();
        })
    })
};

async function createTutorial() {
    await makeDirectory();
    await removeDirectory();
};

createTutorial();
