# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

(View Raw will give you the markdown that you can copy to your repos!)

![MIT LICENSE](https://img.shields.io/github/license/William-Krug/sql-to-do-list.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/William-Krug/sql-to-do-list.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/William-Krug/sql-to-do-list.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/William-Krug/sql-to-do-list.svg?style=social)

# SQL To Do List

## Simple Kanban To Do List Board

_Duration: 1 Weekend_

This project was an exercise in utilizing the full stack to create a To Do List. The front end was rendered with HTML, CSS, JavaScript, and jQuery for form input and task rendering. Node and Express were used to ping the server and request task display, creation, updates, and deletes. Postgress and Postico were used to set up the server and store the tasks until they were no longer needed.

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

### Base Mode

![Empty List]()

![Populated List]()

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)
- [Postico](https://eggerapps.at/postico/)

## Installation

1. Create a database named `weekend-to-do-app`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an `npm install`
4. Run `npm start` in your terminal
5. Run `open index.html` in your terminal
6. The `open index.html` command will open up a new browser tab for you!

## Usage

How does someone use this application? Tell a user story here.

1. Upon page load, all current tasks will be displayed in their current state (**To Do**, **In Progress**, or **Completed**)
2. To add a new task, fill out the Task Name and Task Notes fields in the form and click _Add Task!_
3. The newly created task will be added to the **To Do** section
4. To move a task to the **In Progress** section, click the _In Progress_ button at the bottom of the desired task
5. The task background color will change to blue while in the **In Progress** section
6. To move a task to the **Completed** section, click the _Completed_ button at the bottom of the desired task
7. The task background color will change to green while in the **Completed** section
8. To remove a task from the kanban board, click the _Delete_ button at the bottom of the desired task
9. Deleted tasks will be removed from teh application and the database

## Built With

- HTML
- CSS
- JavaScript
- jQuery
- Node
- Postgres
- Postico

## License

[MIT](https://choosealicense.com/licenses/mit/)

_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support

If you have suggestions or issues, please email me at [william.p.krug@gmail.com](william.p.krug@gmail.com)
