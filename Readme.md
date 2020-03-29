**<h1>Book Club</h1>**
 
A full-stack React and Python web app that helps users create and search for book clubs around the United Kingdom.

**<h2>Software Engineering Immersive – Project 04</h2>**
 
This was our last project of the Software Engineering Immersive course – week 11.
 
**<h2>Team members:</h2>**
 
<p>Adrian Cusniriuc https://github.com/Adriancusniriuc</p>
<p>Clare Robertson https://github.com/flare222</p>
 
**<h2>The application was built with:</h2>**
 
<ol>
<li>HTML5</li>
<li>CSS/SCSS</li>
<li>
  Javascript
  <ul>
       <li>ECMAScript6</li>
       <li>React.js</li>
  </ul>
</li>
<li>Python</li>
<li>mySQL
   <ul>
   <li>PostgreSQL</li>
   </ul>
</li>
<li>Mapbox</li>
<li>GitHub</li>
</ol>
 
 
**<h2>Deployment</h2>**
 
The project is deployed on Heroku and can be found here: https://sei45-bookclub.herokuapp.com/
 
 
**<h2>Set Up</h2>**
 
After cloning the repo to your local machine, you can run the app with these commands:
 
- To install JavaScript Packages:
$ yarn install
- To install Python packages:
$ pipenv install
- Then to seed the database:
$ pipenv run python seeds.py
- Run the frontend in your localhost:
$ yarn start
- Run the backend in your localhost:
$ python manage.py runserver
 
 
**<h1>User Experience</h1>**
 
**<h2>Homepage </h2>**
 
The homepage is the first page the user will see when they navigate to the URL. It shows minimal content, such as logo, background image and the nav bar.
 
<img src="https://i.imgur.com/MBPDOKp.png" width= 600px height= 400px>
 
 
**<h2> Login & Register </h2>**
 
The user is required to register if they intend to make any posts to any of our database models. For example, creating a reading club, a book or making a comment is only permitted if the user is logged in. The register function also determines whether the email address is of valid format and will prompt the user in the case that they have entered an email address incorrectly.
 
<img src="https://i.imgur.com/FBJJuJ5.png" width= 400px height= 400px>
 
 
**<h2>Posting/editing/deleting a new club</h2>**
 
The user can post, edit and delete a club once they are logged in. Moreover, in order to be able to delete or edit a club, the user must also be the creator of that club. The new club form will show the fields necessary for the user to fill in in order to create a new club. In case of editing, the forms will be pre-populated with the existing information.
 
<img src="https://i.imgur.com/vNivxp8.png" width= 400px height= 400px>
 
 
 
**<h2>Posting/editing/deleting a new book</h2>**
 
The user can post, edit and delete a book once they are logged in. The user can add, edit or delete a book only if he is the owner of the club. Once the user has created its own club, the options of adding, editing and deleting the book will appear in the form of a button which will direct the user to the corresponding form.
In case of editing, the forms will be pre-populated with the existing information.
 
<img src="https://i.imgur.com/3BH5uNJ.png" width= 400px height= 400px>
 
 
**<h2>Joining a club</h2>**
 
Once the user has logged in, it will have the option of joining any of the clubs available. The members schema is nested within the club model, as each members array belongs to a specific club. A user can join multiple clubs and can choose to join or leave a club multiple times.
 
<img src="https://i.imgur.com/YpIWSbW.png" width= 1000px height= 500px>
 
 
**<h2>Club Show Page</h2>**
 
The Club Show page is one of the pillars of this website as it encompases functions as: adding a book, the member index, editing and deleting a club if the user is the owner. Moreover it displays the book that is currently read and also the books that have previously been read.
Once a new book is added, it automatically goes into the "Current Book" section and the previous book is being pushed into the "Previous Books" section.
 
 
<img src="https://i.imgur.com/STp11Bf.png" width= 600px height= 600px>
 
**<h2>MapBox</h2>**
 
Having some previous experience, setting up the map was not a challenge. What has proved to be a more challenging process was turning the postcodes of the clubs into actual coordinates on the map. We used an Axios post request to send the postcode of the location of each club to the postcodes.io API which returns the coordinates. We then posted the coordinates on to the map and used the map method to post each item on to its postcode. Each club can then be clicked to take the user to its show page.
 
<img src="https://i.imgur.com/RnQk1uF.png" width= 800px height= 300px>
 
 
<img src="https://i.imgur.com/7ScainB.png" width= 700px height= 500px>
 
**<h2>Planning</h2>**
 
-- Backend --
 
The backend of the app was developed using Python and Django. This was necessary in order for the functions to operate correctly and render properly on the frontend. A first structure of the backend was primarily developed, and slight changes were made throughout the duration of the project in response to issues that needed addressing and when functionality was added.
 
Deciding from the very beginning what will be the relationships between the different models and how they interact with each other was of utmost importance. Therefore we have spent a good amount of time planning the one to many and many to many relationships. This has definitely helped us avoid having further problems throughout the project.
 
In order to plan our backend models we used a entity relationship diagram:
 
<img src="https://i.imgur.com/QiYrsRp.png" width= 700px height= 500px>
 
-- FRONTEND --
 
The frontend was developed using React.js and Axios for communication with the backend. Once the backend was almost completed we have started building the components of the front end. This process started at the end of day two.<br>
 
This section is separated into five separate directories, all located within the 'components' directory which is located in 'src'. Each folder and nested files have been named to reflect the functionality of the file. For example, 'auth' contains files necessary for the correct execution of the login and register functions, and for the protection of access to certain member-only features within the site.
 
 
 
**<h2>Challenges and future improvements</h2>**
 
-- Challenges --
 
First of all, knowing the importance of having a good plan from the very beginning, we spent extra time on understanding the relationships between the models. This has been slightly challenging to start with but once we had a clear image of how things communicate with each other, we were able to move on.
 
Second of all and probably most important, was our continuous struggle with the 403 Error! This error has persisted for a few days but once we have understood the root of the problem, we were able to tackle it. The 403 error is related to the Authorization the user has in order to access certain functions of the website. The solution came when we discovered that we were asking for a token and CSRF token in places we were not supposed to do so. The problem was solved in a matter of minutes once we knew where to make the changes. This was one of the times when we had to make changes to our models.

<img src="https://i.imgur.com/1k2DtCP.png" width= 1000px height= 500px>
 
Lastly, we would like to point out a problem that needs addressing. We are currently experiencing a bug while joining a club. Once you log in and access the member index page, unless you refresh the page, when you press the join club button it actually pushes the first member into the array multyple times. I believe this problem can be solved by trying to tweak the logic of this functionality.

<img src="https://i.imgur.com/lciJGFp.png" width= 1000px height= 400px>
 
--Improvements--

In the future, we want to build automated tests as we've only tested the app manually through Insomnia and the browser.
Moreover, the ability to represent the rating of the book in a stylish manner and create an image carousel for the "Previous books" section will definitely boost up the user experience and the design of our website.
 
Other improvements we have considered were the addition of a more social feature to our website, such as a direct message functionality or the ability to import the GoodReads ratings for each book.
 
**<h2>Wins</h2>**
I would like to point out that this project, apart from being a challenge in itself, it has also been an attempt of pair coding which has proved to be a total success. We have managed to create a fantastic working flow, coding together all the time using VS Share. On top of this, using our communication skills has helped us tackle different challenges and our idea generating process was based on building on top of each other's ideas. Besides being a steep learning curve for both of us, the joy of working together and being supportive of each other was the biggest win.
