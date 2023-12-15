What is flex?(in css)
flex is used to create layouts
we can build a complete website using flex
flex is really easy to use
say bye to floats
flex is one dimentional

What is node js? (It is a js runtime environment)
 [It is build on chrome v8 engine.
 single threaded
 Non blocking i/o bound
 async]
 
 It is basically js in the server
 Easy to learn for js developers
 Extremely fast



***install dependency
npm init
****for easy installation
npm init -y
****for running
node filename eg: node script or node script.js
****automate running install nodemon
npm i nodemon

***some commands
npm update
npm install packagename@latest
or
npm install packagename@2.0.3  etc
npm outdated

***nodemon setup
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  
  changed to 
  
 "scripts": {
    "start": "node script",
    "dev":"nodemon script"
  },
  
  for running the above use "npm run dev"
  
  *****express******
  npm install express
  when working with express first
  1. remove nodemon using "npm uninstall nodemon"
  2. re-install nodemon using "npm i nodemon -D"
  
  [in package.json the code inside the devDependencies cannot undergo build while we run "npm run build"] 
  
  for running use "npm run dev" because there exist the nodemon
  
 ***express is the framework for nodesjs

***install cors for fetch api
npm i cors