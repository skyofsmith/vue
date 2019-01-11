'use strict'
const currentPortal = 'default'
const path = require('path')
const utils = require('../build/utils')

const configs = {
  default: {
    desc: '默认',
    srcDir: 'default',
    distDir: 'default',
    publistPath: ''
  },
  company: {
    desc: '一院',
    srcDir: 'company',
    distDir: 'company',
    publistPath: ''
  }
}

const getPropFunc = function (propName) {
  return function () {
    const portal = process.env.PORTAL || currentPortal
    return configs[portal][propName]
  }
}
const portals = Object.keys(configs)

exports.srcDir = getPropFunc('srcDir')
exports.distDir = getPropFunc('distDir')
exports.publistPath = getPropFunc('publistPath')
exports.portals = portals
exports.hasPortal = function hasPortal (portalName) {
  return configs[portalName] !== undefined
}
exports.entrys = ((portals) => {
  const res = {}
  portals.forEach(p => {
    res[p] = './src' + configs[p].srcDir + '/main.js'
  })
  return res
})(portals)
exports.outputs = (portals => {
  const res = {}
  portals.forEach(p => {
    res[p] = {
      path: path.resolve(__dirname, '../dist/' + portals.configs[p].distDir),
      filename: utils.assetsPath('js/[name].[chunkhash].js'),
      chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    }
  })
  return res
})(portals)
