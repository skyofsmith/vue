'use strict'
const currentPortal = 'default'

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

exports.srcDir = getPropFunc('srcDir')
exports.distDir = getPropFunc('distDir')
exports.publistPath = getPropFunc('publistPath')
exports.portals = Object.keys(configs)
exports.hasPortal = function hasPortal (portalName) {
  return configs[portalName] !== undefined
}
