### Rudimentary Pay Stripe App

#### Prerequisites
IntelliJ IDEA: Download and install IntelliJ IDEA (Community or Ultimate Edition) from https://www.jetbrains.com/idea/.
Node.js Plugin: IntelliJ IDEA should come with this bundled. If not, you might need to install the Node.js plugin under "Settings" -> "Plugins".

#### Opening the Project
1. Launch IntelliJ IDEA.
2. Import Project:
3. If the welcome screen is open: Click "Open" or "Import Project".
4. If you already have a project open: Go to "File" -> "Open".
5. Navigate to your project directory and select the root folder containing your package.json file.
6. Choose: "Open as Project".

#### Project Configuration (If needed)
Node.js SDK: If not automatically detected, go to "File" -> "Project Structure" -> "Project SDK". Select your installed Node.js version.

#### Routes
All express routes are under routes folder and I recommend keeping one route dedicated to a domain comcept
like:
* products
* customers
* prices
* ....

#### Stripe integration
Stripe integration is within routes. Working sample is in `products.js`.
For the code to work you will need to setup your stripe account and visit your dashboard.
[Stripe Dashboard](https://dashboard.stripe.com/test/dashboard)
This is to copy test-mode credentials, specifically secret key. 
The key would be of format `sk_test_Token`
Substitute the token in the line below in `product.js`
`const stripe = require('stripe')('--Keys Here!--');`

#### How to run the code.
Intellij should detect bin/www. you should either see this in run configuration or on top right hand corner in latest Intellij


