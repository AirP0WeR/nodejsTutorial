import fs from "fs";

// create a new file

// fs.writeFile('example.txt', 'This is an example', (err)=> {
//     if (err)
//         console.log('The file was saved!');
//     else {
//         console.log('The file succesfuly saved!');
//         fs.readFile('example.txt', 'utf-8',(err, file)=>{
//             if (err)
//                 console.log(err);
//             else
//                 console.log(file);
//         });
//     }
// });

// fs.rename('example.txt', 'example2.txt', (err)=>{
//     if (err)
//         console.log(err);
//     else 
//         console.log('The file renamed!');
// });

// try {
//     fs.appendFileSync('example2.txt', 'Some data being appended \n');
//     console.log('file added successfully');
//     } catch (err) {
//         console.log(err);
// }



fs.unlink('example2.txt', (err)=>{
    if (err)
        console.log(err);
    else
        console.log('file deleted successfully');
});