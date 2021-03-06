# To Do

## Framing, Wiring, & Plumbing

- [x] Run `npm init` from the terminal
- [x] Run `npm install express` from the terminal
- [x] Run `npm install pg` from the terminal
- [x] Create `.gitignore` file
  - [x] `node_modules/` needs to be present
  - [x] `.DS_Store` needs to be present
- [x] Update `package.json` file with `start` command
  - [x] Find the `"scripts"` section
  - [x] Add the following: `"start": "node ./server/server.js"`
- [x] Create `server` directory
- [x] Create `server.js` inside of the `server` directory
  - [x] `const express = require('express')`
  - [x] `const app = express()`
  - [x] `const port = 5000`
  - [x] `app.use(express.static('server/public'))`
  - [x] `app.use(express.json())`
  - [x] `app.use (express.urlencoded({extended: true}))`
  - [x] `app.listen(port, function() { console.log("I'm listening....", port); })`
- [x] Create `public` directory inside of the `server` directory
- [x] Create `index.html` inside of the `public` directory
- [x] Create `styles` directory inside of the `public` directory
- [x] Create `style.css` inside of the `styles` directory
  - [x] `<link>` file to `index.html`
- [x] Create `scripts` directory inside of the `public` directory
- [x] Create `client.js` inside of the `scripts` directory
  - [x] `<script src>` file to `index.html`
- [x] Create `vendors` directory inside of the `public` director
- [x] Create `jQuery.js` inside of the `vendors` directory
  - [x] `<script src>` file to `index.html` before `client.js`
- [x] Create `modules` directory inside of the `server` directory
- [x] Create `pool.js` inside of the `modules` director
  - [x] `const pg = require('pg')`
  - [x] `const config = { database: 'databasename', host: 'localhost' port: 5432, };`
  - [x] `const pool = new pg.Pool(config);`
  - [x] `pool.on("connect", () => {console.log('connected to postgres');});`
  - [x] `pool.on("error", (error) => {console.log('ERROR: Connecting to postgres', error);});`
  - [x] `module.exports = pool;`
- [x] `const pool = require('filepath to pool.js')` where needed
- [x] Create `routes` directory inside of the `server` directory

## Base Mode

- [x] create DB `weekend-to-do-app`
  - [x] database.sql file
    - [x] include all scripts
- [x] static html setup
  - [x] create a Task on the front end (form)
  - [x] sections for "todo" "inprogress" "complete"
- [x] add task button listener
- [x] add task button handler
- [x] task.router.js
  - [x] GET all tasks
  - [x] PUT new task
  - [x] UPDATE task to in progress
  - [x] UPDATE task to complete
  - [x] DELETE task
- [x] AJAX
  - [x] GET all tasks
  - [x] POST new task all tasks
  - [x] UPDATE task to in progress
  - [x] UPDATE task to complete
  - [x] DELETE task
- [x] refresh to show all tasks that need to be completed (GET)
- [x] store newly created Task in db (POST)
- [x] Complete & Delete option per task
  - [x] complete button listener
  - [x] complete button handler
  - [x] delete button listener
  - [x] delete button handler
- [x] visually change task on front end when completed (UPDATE)
- [x] deleting a task should remove it from the db and front end (DELETE)
- [x] CSS
  - [x] give background color
  - [x] font family and size
  - [x] background color of each task
- [ ] README creation

## Stretch Goals

- `feature-styling-bootstrap`

  - [ ] Add Bootstrap to the front end and style it up!
    - Buttons -- make the creation buttons and completion buttons green and the delete red.
    - Inputs -- make your text inputs styled in the bootstrap way
    - Responsive -- make your app responsive to different screen sizes -- check out the [Layout](https://getbootstrap.com/docs/4.1/layout/overview/) section

- `feature-confirm-delete`

  - [ ] In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task.
    - Some styled options are [Bootstrap Modal](https://getbootstrap.com/docs/4.0/components/modal/) or [Sweet Alerts](https://sweetalert.js.org/guides/): Use the CDN option.

- `feature-ordering-task-query`

  - [ ] Research [Query Params](https://expressjs.com/en/api.html#req.query) to have the request reverse the order of the returned todos.

- `feature-time-completed`

  - [ ] Add the ability to record when a task was completed. Show the completed date on the frontend in a pretty format.
