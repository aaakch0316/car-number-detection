


let envFile;

if (process.env.NODE_ENV === "production") {
    envFile = ".env.production"
} else if (process.env.NODE_ENV === "local") {
    envFile = ".env.local"
} 

require("dotenv").config({ path: envFile });

console.log('test')
console.log(process.env.NODE_ENV)
console.log(process.env.ENV_NAME)

