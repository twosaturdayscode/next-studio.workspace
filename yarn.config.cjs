/** @type {import('@yarnpkg/types')} */
const { defineConfig } = require('@yarnpkg/types')

module.exports = defineConfig({
  async constraints({ Yarn }) {
    for (const dep of Yarn.dependencies({ ident: 'react' })) {
      dep.update(`18.2.0`)
    }
  },
})
