const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  pool.query().then().catch();
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
 * DELETE endpoint
 * /todoList/tasks/3
 */
router.delete('/tasks/:id', (req, res) => {
  console.log('(*** in DELETE /tasks/:id ***');

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
