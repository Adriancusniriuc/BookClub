**<h1>Run Development Environment</h1>**

<p>Open two terminals in VS Code</p>
<p>In one do the following:</p>
<p>Open the shell environment: $ pipenv shell</p>
<p>Run the backend server: $ python manage.py runserver</p>
<p>In the other, do this:</p>
<p>Navigate to the frontend folder</p>
<p>Run on localhost: $ yarn start</p>

**<h1>To Do List</h1>**

<h2>Home</h2>
<ul>
  <li>Make the image vh so you can't scroll</li>
</ul>

<h2>Club Index</h2>
<ul>
  <li>What is going on with Postcodes? Developer Only Use</li>
  <li>Use a loading spinner for the map</li>
  <li>How to add aria label to the GL Mapbox search input?</li>
  <li>Create Club button to be visible to all, but redirect to login page if not logged in</li>
  <li>Adjust margins on mobile view (h1, button)</li>
  <li></li>
</ul>

<h2>Club Show</h2>
<ul>
  <li>Add info to show there are no previous books</li>
  <li>Look into improving image resolutions (Lighthouse report)</li>
  <li>If the current book is blank it should redirect to the add book form page, or alert that the club owner needs to add one</li>
  <li></li>
  <li></li>
  <li></li>
</ul>

<h2>Book Show</h2>
<ul>
  <li>Add info to users that they must join the club in order to comment, or only let them go to this page from   Club show if they are members</li>
  <li>Edit & Delete buttons to only be visible to club owners</li>
  <li>Show delete comment button only when you arelogged in and it is your own comment</li>
</ul>

**<h1>User Actions: Result (as at Mar 2021)</h1>**

<p><strong>Register:</strong> </p>
<p><strong>Login as a previously registered user:</strong> Working</p>
<p><strong>Create a new club if logged in:</strong> Test (currently the create club button only appears to logged in users)</p>
<p><strong>Join any club if logged in:</strong> </p>
<p><strong>Join any club if logged out:</strong>Working. Gives correct 403 Forbidden</p>
<p><strong>Edit book if not your club:</strong>Working. Gives 500 (is it correct error?)</p>
<p><strong>Delete book if not your club:</strong>Working. Gives 500 (is it correct error?)</p>
<p><strong>Add a comment to any book if logged in:</strong>Working</p>
<p><strong>Delete your comment if logged in:</strong>Working</p>
<p><strong>Delete any comment if logged out:</strong>Working. Gives correct 403 Forbidden</p>
<p><strong>Add a comment to any book if logged out:</strong>Working. Gives correct 403 Forbidden</p>
<p></p>
<p></p>
<p></p>
<p></p>
