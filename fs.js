const path = require("path")
const fs = require("fs")

//create folder named students
/*const folder = path.join(__dirname , "Students")

fs.mkdir(folder, (err ) => {
if (err) {
    console.log(err)
    return
}
console.log("folder created succesfully")
})
*/

//create the file user.js in Students directory
//const file = path.join(__dirname , 'Students' , 'user.js')
//const content = (`username = "Ogheneochuko Christabel Kagbude"`)

/*fs.writeFile(file, content , (err) => {
if (err) {
    console.log(err)
    return
}
console.log("file created succesfully")
})
*/

//Rename student directory to Names
//const newFolderName = path.join(__dirname, "Names")
/*fs.rename('Students' , 'Names', (err) => {
if (err) {
    console.log((err))
    return
}
console.log("folder renamed succesfully")
})
*/


//update file user.js with age, nationality etc
/*const newFilePath = path.join(__dirname, 'Names', 'user.js')
const updatedFile = (`\nGender = Female\nAge = 20 \nNationality = Nigeria \nphoneNumber = '08147837680'`)

fs.appendFile(newFilePath, updatedFile, (err) =>{
    if (err) {
    console.log((err))
    return
}
console.log("file update succesfull")
})
*/

//Rename users.js
/*const newFileName = path.join(__dirname, 'Names', 'Christabel_Kagbude.js')
fs.rename(user.js, ChristabelKagbude.js , (err) => {
    if (err) {
    console.log((err))
    return
}
console.log("file rename succesfull")
})
*/

//read user.js file
/*const newFilePath = path.join(__dirname, 'Names', 'user.js')
fs.readFile(newFilePath, 'utf8', (err, userFile) => {
if (err) {
    console.log((err))
    return
}
console.log("file read succesfull")
console.log(userFile)
})
*/

//Delete the file user.js
/*const newFilePath = path.join(__dirname, 'Names', 'user.js')
fs.rm(newFilePath, (err) => {
    if (err) {
    console.log((err))
    return
}
console.log("file deleted succesfully")
})
*/

//Delete the directory Names
/*const newFolderName = path.join(__dirname, "Names")
fs.rmdir(newFolderName, (err) => {
    if (err) {
    console.log((err))
    return
}
console.log("folder deleted succesfully")
})
*/


