const userService = require('../services/userService');

getUsers = function () {
    console.log("getUsers Controller")
    result = userService.listUsers()
}

updateUser = function () {
    console.log("updateUser Controller")
}

createUser = function () {
    console.log("createUser Controller")
}

deleteUser = function () {
    console.log("deleteUser Controller")
}

module.exports = { getUsers, createUser, updateUser, deleteUser }