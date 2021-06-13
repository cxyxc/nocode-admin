'use strict';
const express = require('express');
const router = express.Router();
const Knex = require('knex');
const { formatParamsToWhereAndOthers, formatBodyToData } = require('./utils');
require('dotenv').config()
const IS_DEV = process.env.IS_DEV

let knexPool;
async function getKnexPool() {
  if (!knexPool) {
    knexPool = Knex({
      client: 'pg',
      connection: IS_DEV ? process.env.DEV_PG_CONNECT_STRING : process.env.PG_CONNECT_STRING,
      debug: IS_DEV,
      log: IS_DEV && {
        debug(message) {
          console.log(message.sql);
        },
      }
    });
    return knexPool;
  } else {
    return knexPool;
  }
}

router.get("/:table", async (req, res) => {
  const { table } = req.params;
  const { wheres, offset, limit } = formatParamsToWhereAndOthers(req.query);
  const knex = await getKnexPool();
  const rows = await knex(table).where(wheres).offset(offset).limit(limit)
  res.json({
    code: 0,
    data: rows,
    total: rows.length,
    success: true,
  });
})

router.post("/:table", async (req, res) => {
  const { table } = req.params;
  const knex = await getKnexPool();
  await knex(table)
    .insert(formatBodyToData(req.body))
  res.json({
    code: 0,
    success: true,
  });
})

router.put("/:table/:id", async (req, res) => {
  const { table, id } = req.params;
  const knex = await getKnexPool();
  await knex(table)
    .where({ id: Number(id) })
    .update(formatBodyToData(req.body))
  res.json({
    code: 0,
    success: true,
  });
})

router.delete("/:table/:id", async (req, res) => {
  const { table, id } = req.params;
  const knex = await getKnexPool();
  await knex(table)
    .where({ id: Number(id) })
    .del()
  res.json({
    code: 0,
    success: true,
  });
})

module.exports = router;
