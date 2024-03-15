#### Project Setup

Create a folder: Make a new project folder (e.g., stripe-api-demo)

##### Initialize
Open a terminal in this folder and run:

`npm init -y`
Note: this creates/initialize a package.json file.

Install Dependencies: Install the necessary packages with this command:

`
npm install stripe --save
npm install express --save
`


Note: 
when you init it creates package.json <br>
when you install stripe and express it adds the libraries with latest version to your project

#### Create Your Node.js Script (e.g., test.js)
create file test.js under your project folder add following code to the file
[test.js](test/test.js)

##### Replace Keys
* replace your test keys at line 6:<br>
`const stripeClient = stripe("------Keys Here----");`

#### Run the Script
`Bash
node index.js`