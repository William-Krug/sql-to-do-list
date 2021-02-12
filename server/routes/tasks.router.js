const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

/**
 * GET endpoint for /todoList
 *
 * Returns the entire database
 */
router.get('/', (req, res) => {
  console.log('*** in GET /todoList ***');

  const sqlScript = `
    SELECT * FROM "tasks"
    ORDER BY "id" ASC;
    `;
  console.log('sqlScript:', sqlScript);

  pool
    .query(sqlScript)
    .then((dbResponse) => {
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      console.log(
        `*** ERROR making database GET query ${sqlScript} ***`,
        error
      );
      res.sendStatus(500);
    });
});

/**
 * POST endpoint for /todoList
 *
 * Request body looks like:
 * {
 *  name: 'Groceries',
 *  notes: 'Milk, Eggs, Bread'
 * }
 */
router.post('/', (req, res) => {
  console.log('*** in POST /todoList ***');

  const sqlScript = `
    INSERT INTO "tasks"
      ("name", "notes")
    VALUES
      ($1, $2)
    `;
  console.log('sqlScript:', sqlScript);
  const queryArguments = [
    req.body.name, // $1
    req.body.notes, // $2
  ];
  console.log('queryArguments:', queryArguments);

  pool
    .query(sqlScript, queryArguments)
    .then((dbResponse) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(
        `*** ERROR making database POST query ${sqlScript} ***`,
        error
      );
      res.sendStatus(500);
    });
});

/**
 * PUT /todoList/tasks/inProgress/2
 *
 * The requested task will have it's toDo value set to FALSE
 * and it's inProgress value set to TRUE
 */
router.put('/tasks/inProgress/:id', (req, res) => {
  console.log('*** in PUT /todoList/tasks/inprogress/:id ***');

  const inProgresssID = req.params.id;
  console.log('inProgressID:', inProgresssID);

  const inProgress = req.body.inProgress;
  console.log('inProgress:', inProgress);
  let sqlScript = '';

  if (inProgress === 'TRUE') {
    sqlScript = `
      UPDATE "tasks"
      SET "toDo" = FALSE
      , "inProgress" = TRUE
      WHERE "id" = $1;
    `;
  } else {
    res.sendStatus(500);
    return;
  }

  pool
    .query(sqlScript, [inProgresssID])
    .then((dbResponse) => {
      console.log('dbResponse:', dbResponse);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(
        `*** ERROR making database PUT query ${sqlScript} ***`,
        error
      );
      res.sendStatus(500);
    });
});

/**
 * PUT /todoList/tasks/completed/2
 *
 * The requested task will have it's toDo value set to FALSE
 * it's inProgress value set to FALSE and
 * it's completed value set to TRUE
 */
router.put('/tasks/completed/:id', (req, res) => {
  console.log('*** in PUT /todoList/tasks/inprogress/:id ***');

  const completedID = req.params.id;
  console.log('completedID:', completedID);

  const completed = req.body.inProgress;
  console.log('completed:', completed);
  let sqlScript = '';

  if (completed === 'TRUE') {
    sqlScript = `
      UPDATE "tasks"
      SET "toDo" = FALSE
      , "inProgress" = FALSE
      , "completed" = TRUE
      WHERE "id" = $1;
    `;
  } else {
    res.sendStatus(500);
    return;
  }

  pool
    .query(sqlScript, [completedID])
    .then((dbResponse) => {
      console.log('dbResponse:', dbResponse);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(
        `*** ERROR making database PUT query ${sqlScript} ***`,
        error
      );
      res.sendStatus(500);
    });
});

/**
 * DELETE endpoint for /todoList/tasks/3
 *
 * Deletes a single task (row) form the database
 */
router.delete('/tasks/:id', (req, res) => {
  console.log('(*** in DELETE /todoLists/tasks/:id ***');

  let deleteID = req.params.id;
  console.log('deleteID:', deleteID);

  const sqlScript = `
    DELETE FROM "tasks"
    WHERE "id" = $1;`;
  console.log('sqlCript:', sqlScript);

  pool
    .query(sqlScript, [deleteID])
    .then((dbResponse) => {
      console.log('Task Deleted');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(
        `*** ERROR making database DELETE query ${sqlScript} ***`,
        error
      );
      res.sendStatus(500);
    });
});

module.exports = router;
