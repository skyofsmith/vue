const portal = require('../config/portal.config')
const { spawn } = require('child_process')

const portals = portal.portals

portals.forEach(p => {
  const child = spawn('npm.cmd', ['run', 'build', '--', p])
  child.stdout.on('data', msg => {
    console.log(msg.toString())
  })
  child.stdout.on('error', err => {
    console.error(msg.toString())
  })
})
