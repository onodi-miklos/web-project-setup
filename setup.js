const {writeFileSync, mkdirSync} = require('fs');

function setup(path, project){
  mkdirSync(`${path}/${project}`, { recursive: true })
  mkdirSync(`${path}/${project}/java`, { recursive: true })
  mkdirSync(`${path}/${project}/backend`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/public`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/dist`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/src`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/routes`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/controllers`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/frontend`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/frontend/dist`, { recursive: true })
  mkdirSync(`${path}/${project}/backend/frontend/src`, { recursive: true })
  

  writeFileSync(`${path}/${project}/README.md`, `
    npm install
    `)
  writeFileSync(`${path}/${project}/package.json`, 
    `{
      "name": "empty",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "type": "module",
      "scripts": {
            "build:backend": "tsc -p backend",
            "build:frontend": "tsc -p backend/frontend",
            "build": "npm run build:backend && npm run build:frontend",
            "start": "nodemon backend/dist/app.js"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
            "@types/node": "^25.0.3",
            "nodemon": "^3.1.11",
            "typescript": "^5.9.3"
      },
      "dependencies": {
            "axios": "^1.13.4",
            "bcrypt": "^6.0.0",
            "bootstrap": "^5.3.8",
            "dotenv": "^17.2.3",
            "express": "^5.2.1",
            "jsonwebtoken": "^9.0.3",
            "mongoose": "^9.0.2",
            "morgan": "^1.10.0",
            "mysql2": "^3.16.0",
            "tailwind": "^4.0.0"
      }
} 
    `)
    
  writeFileSync(`${path}/${project}/.gitignore`, `
    node_modules
    dist
    .env
    log.txt
    `)
  writeFileSync(`${path}/${project}/backend/src/app.ts`, `
    const express = require('express')
    const app = express()

    app.use([express.json(), express.urlencoded({ extended: true }), express.static(path.join(__dirname, './public'))])


    app.listen(5000, () => {
    console.log('Server listening on port 5000....')
    })
    `)
  writeFileSync(`${path}/${project}/backend/tsconfig.json`, `
    // BACKEND
    {
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",

    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ES2020",

    "lib": ["ES2020"],
    "types": ["node"],

    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,

    "isolatedModules": true,
    "verbatimModuleSyntax": true,
    "skipLibCheck": true,

    "noEmitOnError": true,
    "removeComments": true
  },
  "include": ["src/**/*"]
}
    `)
  writeFileSync(`${path}/${project}/backend/frontend/tsconfig.json`, `
    // FRONTEND
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",

    "target": "ES2020",
    "module": "ESNext",

    "lib": ["DOM", "ES2020"],

    "jsx": "react-jsx",

    "sourceMap": true,

    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,

    "isolatedModules": true,
    "skipLibCheck": true,

    "noEmitOnError": true,
    "removeComments": true
  },
  "include": ["src/**/*"]
}
    `)
  writeFileSync(`${path}/${project}/backend/frontend/style.css`, `
:root{}
body{
  margin: none;
  box-sizing: border-box
}
    `)
  writeFileSync(`${path}/${project}/backend/frontend/index.html`, `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
    <script src="./dist/index.js" defer></script>
</head>
<body>
    
</body>
</html>
    `)
  writeFileSync(`${path}/${project}/backend/frontend/src/index.ts`, ``)
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('loc: ', (loc) => {
  rl.question('name: ', (name) => {
    setup(loc.trim(), name.trim());
    rl.close();
  });
});







