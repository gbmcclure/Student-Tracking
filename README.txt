STUDENT TRACKING - DOCUMENTATION

9/8/18 - Google Login Authentication through Firebase successfully implemented.
9/10/18 - Database through Firebase successfully implemented with rules established — allow access to documents as long as user is successfully authenticated through the log-in.
10/1/18 - Spent HOURS trying to get my CSS to center my image logo with text.
10/2/18 - Finally got that logo and text in the header to work.
10/10/18 - User interface for index/log-in and home pages completed.
10/12/18 - Web application interface completed — index, home, submit, and query pages.
Data visualization page/implementation coming soon — researching best methods to seamlessly integrate with the Firebase database.
10/13/18 - Database tested on web application successfully — able to send data from form fields into the Firebase database.
Problems encountered: Alumni society says that students can not access their database. (That’s fine! We’ll create our own data — there’s a section on the site to submit data into the database). They said we may be able to meet and “figure something out”. Per Dr. Stout: this only really affects undergraduates, as graduate cohorts are part of a smaller group and therefore easier to contact. And the MVP covers graduate alumni; undergraduates are a bonus.
10/23/18 - Expanded form submission page and decided on data visualization tools (Plotly). Improved web application formatting with CSS and margin padding.
10/31/18 - Completed expansion of form submission page. Discovered that Firebase Realtime Database does not allow for multiple “where” clauses in the querying. This means that I have two options with my query page: (1) limit querying to one where clause per query, which would still satisfy the MVP but limit the scope and diversity of data that can be read and displayed at one time, OR (2) completely remake my database (and parts of my HTML pages) from scratch to incorporate a MySQL database and basically change all of my code to PHP. 
11/3/18 - Began the formatting of the query page, completed overall “skeleton” of hidden menus and data table. Tested from database, and it works.
11/4/18 - Completed expansion of query page, now incorporating all of the relevant submission form options on the submission page
This means that I am currently working with the first option from my aforementioned Firebase issue (see 10/31/18 note). Completely remaking most of my code is not impossible, but would take time away from completing the data visualization portion of the application.
11/5/18 - Began work on the data visualization page and testing of simple data to create a basic chart. This is the final portion of my MVP.
