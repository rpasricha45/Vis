<h1 align="center">Welcome to Vis π</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

> Vis is a application that allows Team leaders to have better insights on their team's mental wellbeing with surveys. The Team Leaders can then see the average of the overall Teamβs mental wellbeing score keeping users anonymous.  Users can see their own past historical data as well , helping them continue to grow. Please note that this app is not  HIPAA compliant and this is a prototype 

### π  [VIS Homepage](https://still-ravine-46486.herokuapp.com)


## Authors

π€ **Vrushali Koli**
* Github: [@Vrushali](https://github.com/vkoli)
* LinkedIn: [@Vrushali](https://www.linkedin.com/in/vk801/)

π€ **Brandon Rodriguez**
* Github: [@Brandon](https://github.com/brandonRodriguez24)
* LinkedIn: [@Brandon](https://www.linkedin.com/in/brandon-rodriguez-5a2274201/)

π€ **Ronak Pasricha**
* Github: [@Ronak](https://github.com/rpasricha45)
* LinkedIn: [@Ronak](https://www.linkedin.com/in/ronak-pasricha/)

π€ **Anshul Mistry**
* Github: [@ammist07](https://github.com/ammist07)
* LinkedIn: [@anshulmistry](https://linkedin.com/in/anshulmistry)

## Documentation Links
* Flask: [@Flask](https://flask.palletsprojects.com/en/1.1.x/api/)
* Hasura: [@Hasura](https://hasura.io/docs/1.0/graphql/core/index.html)
* Heroku: [@Heroku](https://devcenter.heroku.com/categories/reference)
* Firebase: [@Firebase](https://firebase.google.com/?gclid=Cj0KCQiA5bz-BRD-ARIsABjT4njI9dq7z4jlUh2PmOfhRvgbUAg34I1UE9ioHimnHi-azTR8xpbGGkUaAk86EALw_wcB)
* Socket Io-Flask: [@Socket Io-Flask](https://flask-socketio.readthedocs.io/en/latest/)
* React: [@React](https://reactjs.org/docs/getting-started.html)
* Material UI: [@Material-UI](https://material-ui.com)

## Install
Step 1
```sh
git clone https://github.com/VIS490/VIS-490-Sprint2.git
```
Step 2
```sh
pip3 install -r requirements.txt
```
This will download all the requirements for you Flask-Socketio-Python Backend Application

Step 3
```sh
yarn or npm install
```
This will download all the requirements for you React-Socketio Frontend Application
Step 4
```sh
touch .env
```
Run the Command above, to make a env file, in your root project directory

Step 5
```sh
REACT_APP_FIREBASE_API_KEY=*****
REACT_APP_FIREBASE_AUTH_DOMAIN=*****
REACT_APP_FIREBASE_DATABASE_URL=*****
REACT_APP_FIREBASE_PROJECT_ID=*****
REACT_APP_FIREBASE_STORAGE_BUCKET=*****
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=*****
REACT_APP_FIREBASE_APP_ID=*****
REACT_APP_MEASUREMENT_ID=*****
REACT_APP_HASURA_ADMIN_SECRET=*****
```
This is your env file
- All you keys will be in this .env file
- All firebase, hasura keys will in here

## Setting Up Firebase
- Start by going to ``Firebase`` site and create a project
- Make and account and click ``Get Started``, then click ``Add project``
- Give you app a Name, select ``Default Account for Firebase``, finally click Create Project!
- On the Home Page select, the option ``Web App``, give you app a name
- Firebase will give the ``Firebase SDK`` take the values of the variables and add them to the ``.env`` file exactly
- After this, your app will be connected to Firebase
- Enable Google Auth and Sign in with Email/Password in the Firebase
## Setting Up Hasura
- Create a New Project, pick a region closest to you, and give it a name
- Next Step is to set up a db, now you have to Sign Up with Heroku and create project with a Postgress DB, I have linked the Heroku docs above
- Input put the DB URL, which you get with Heroku and create the app
```sh
HASURA_GRAPHQL_JWT_SECRET = {
    "type":"RS256",
    "jwk_url": "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com",
    "audience": "<firebase-project-id>",
    "issuer": "https://securetoken.google.com/<firebase-project-id>"
}
HASURA_GRAPHQL_ADMIN_SECRET = youradminsecret
```
- You need add these variables in the ``Config Vars in Heroku``
- These will enable you to make Hasura GraphQL Queries and Mutations
- The next is to make your DB tables in Hasura
- ``schema.json`` this a file with all the Tables which can be used to make the Database
- Use the GraphQL playground with this file.  

## Run the App
- Open the App in VSCODE or any other editor
- Run Commands
```sh
npm run dev 
```
```sh
python app.py
```
## Issues (Obstacles)
- Firebase Integration:  
  - Our app is using email/password and google oauth from Firebase to authenticate users. Because this was private information we wanted to make sure that placing this functionality on the front-end wouldn't cause any major security concerns. We found a solution to use React env variables. 
- Hasura Query and Mutations:  
  - The queries and mutations for our DB had to be formatted in a spceific manner to allow time for loading ad error handling. Essentially, our pages all need to make the queries/mutations set-up first, and then render ui components.
- UI Styling for Components:  
  - We wanted to update the over all UI to have a sleek look. Material UI recieves and processes CSS rules as a javascript function. We had to read up several examples and the official documention to ensure consistenty throughout the components. 
- Datbase Schema connections between tables:  
  - In order save the survey results with the user information, we needed to change the foreign-key relationships in the DB.
- Signup bugs:  
    - Fixing edge cases related to the Firebase API failing and ensuring that the User was notified of errors.  

## Issues Still Persist
- Did not calculate  the average of scores via Hasura  

## Work Done by each Engineer
- Ronak Pasricha
  - Designed the landing page and deployed it and connected it to our application.
  - Created and styled the team members page.
  - Took care of the admin functionality to remove users from an admin team.
- Vrushali Koli
  - Took care of the user functionality to add an admin.
  - Update overall UI for all major components.
  - Added persistence of quiz scores to the database.
  - Designed the conditional sign up for admin users.
- Anshul Mistry
  - Added functionality and UI for Google Oauth with firebase.
  - Handled all the routing for the admin pages.
  - Handled the conditional rendering for admin and user components. 
  - Styled the quiz UI.
- Brandon Rodriguez
  - Reformatted the dashboard code to retrieve and display database information.
  - Created UI for admin dashboard.
  - Retrieved database information to display on the admin dashboard.  
  
## Show your support

Give a β­οΈ if this project helped you!

***
_This README was generated with β€οΈ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
