//path module
const path = require("path")
//print out current working directory
const cwd = path.resolve()
console.log(cwd)

//path separator
const separator = path.sep
console.log(separator)

//print out the path extension name
const extension = path.extname("C:\Users\Christabel Light\OneDrive\Documents\NodejsAssignment\path.js")
console.log(extension)


//process module
const process = require("process")
//print out cwd
const pwd = process.cwd()
console.log(pwd)

//print out process id of current running process
const id = process.pid
console.log(id)


//Os module
const operatingSystem = require("os")
//print out user information of the os
const user = operatingSystem.userInfo()
console.log(user)

//print out the platform of an operating system
const platform = operatingSystem.platform()
console.log(platform)


