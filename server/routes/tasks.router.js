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

router.delete('/tasks/:id', (req, res) => {
  pool.query().then().catch();
});
