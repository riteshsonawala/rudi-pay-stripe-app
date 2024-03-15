#### Project Setup

Create a folder: Make a new project folder (e.g., stripe-api-demo)

##### Initialize
Open a terminal in this folder and run npm init -y to initialize a package.json file.

Install Dependencies: Install the necessary packages with this command:
`Bash
npm init -y
npm install stripe --save`

Note: when you init it creates package.json, when you install stripe it adds the library version of stripe client

#### Create Your Node.js Script (e.g., test.js)
create file test.js under your project folder add following code to the file
[test.js](test/test.js)

##### Replace Keys
* replace your test keys at line 6:<br>
`const stripeClient = stripe("------Keys Here----");`

#### Run the Script
`Bash
node index.js`