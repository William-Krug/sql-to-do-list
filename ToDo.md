# To Do

## Framing, Wiring, & Plumbing

- [ ] Run `npm init` from the terminal
- [ ] Run `npm install express` from the terminal
- [ ] Run `npm install pg` from the terminal
- [ ] Create `.gitignore` file
  - [ ] `node_modules/` needs to be present
  - [ ] `.DS_Store` needs to be present
- [ ] Update `package.json` file with `start` command
  - [ ] Find the `"scripts"` section
  - [ ] Add the following: `"start": "node ./server/server.js"`
- [ ] Create `server` directory
- [ ] Create `server.js` inside of the `server` directory
  - [ ] `const express = require('express')`
  - [ ] `const app = express()`
  - [ ] `const port = 5000`
  - [ ] `app.use(express.static('server/public'))`
  - [] `app.use(express.json())`
  - [ ] `app.use (express.urlencoded({extended: true}))`
  - [ ] `app.listen(port, function() { console.log("I'm listening....", port); })`
- [ ] Create `public` directory inside of the `server` directory
- [ ] Create `index.html` inside of the `public` directory
- [ ] Create `styles` directory inside of the `public` directory
- [ ] Create `style.css` inside of the `styles` directory
  - [ ] `<link>` file to `index.html`
- [ ] Create `scripts` directory inside of the `public` directory
- [ ] Create `client.js` inside of the `scripts` directory
  - [ ] `<script src>` file to `index.html`
- [ ] Create `vendors` directory inside of the `public` director
  - Create `jQuery.js` inside of the `vendors` directory
  - `<script src>` file to `index.html` before `client.js`
- [ ] Create `modules` directory inside of the `server` directory
  - [ ] Create `pool.js` inside of the `modules` director
    - [ ] `const pg = require('pg')`
    - [ ] `const config = { database: 'databasename', host: 'localhost' port: 5432, };`
    - [ ] `const pool = new pg.Pool(config);`
    - [ ] `pool.on("connect", () => {console.log('connected to postgres');});`
    - [ ] `pool.on("error", (error) => {console.log('ERROR: Connecting to postgres', error);});`
    - [ ] `module.exports = pool;`
  - [ ] `const pool = require('filepath to pool.js')` where needed
- [ ] Create `routes` directory inside of the `server` directory

## Base Mode

- [ ] create DB `weekend-to-do-app`
  - [ ] database.sql file
    - [ ] include all scripts
- [ ] create a Task on the front end
  - [ ] refresh to show all tasks that need to be completed (GET)
- [ ] store newly created Task in db (POST)
- [ ] Complete & Delete option per task
- [ ] visually change task on front end when completed (UPDATE)
- [ ] deleting a task should remove it from the db and front end (DELETE)
- [ ] CSS
  - [ ] give background color
  - [ ] font family and siz
  - [ ] text color
  - [ ] background color of each task

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
