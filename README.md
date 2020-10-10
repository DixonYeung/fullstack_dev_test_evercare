# fullstack_dev_test_evercare

How to replicate my work & explaination of the project:
1. Install node JS
2. Build and turn on http-server
3. Turn on NodeJS server by executing "server.js"
4. Go to http://localhost:8080/adminPage.html to view the front-end of the web APP
5. Front-end communicates with back-end at http://localhost:8081 with different request type ( initialize page, delete item etc.)
6. Back-end responses to front-end according to different request type (access dummyapi.io for initializing)
7. Refreshing front-end page will also reset all data, so as to "initialize" the table. If it doesn't reset, "initialize" only happens at the very first access of the page after server starts, this is not intuitive.