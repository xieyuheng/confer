'use strict'

const express = require('express')

const pkg = require('../../package.json')
const env = require('../env.js')

let router = express.Router()

router.route('/')
  .get((req, res) => {
    let rrdb = req.app.get('rrdb')
    let record_id = rrdb.record_create()
    console.log(`create record_id: ${record_id}`)
    let self_url = `${req.protocol}://${req.hostname}:${env.port}`
    res.render('index', {
      self_url, pkg, record_id,
    })
  })

module.exports = router
