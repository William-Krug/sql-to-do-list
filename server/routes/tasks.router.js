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

  const sqlScript = 'SELECT * FROM "tasks" ORDER BY "id" ASC;';
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

router.post('/', (req, res) => {
  pool.query().then().catch();
});

router.put('/tasks/inProgress/:id', (req, res) => {
  pool.query().then().catch();
});

router.put('/tasks/completed/:id', (req, res) => {
  pool.query().then().catch();
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

  const sqlScript = 'DELETE FROM "tasks" WHERE "id" = $1;';
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
