const path = require("path");

module.exports = 
{
    mode: "development",
    devtool: "eval-source-map",
    entry : 
    {
        index : "./src/index.js",
        login: "./src/loginScreen.js",
        signUp: "./src/signUpScreen.js"
    },  
    output: 
    {
        path: path.resolve(__dirname, "dist"),
    }
}