'use strict'
const currentPortal = 'default'

const configs = {
  default: {
    path: 'default',
    desc: '默认'
  },
  yuan1: {
    path: 'yuan1',
    desc: '一院'
  }
}

module.exports = configs[currentPortal].path
