/* eslint-env node */

'use strict'

const {setSvgConfiguration} = require('ember-frost-core/utils/frost-icon-svg')

module.exports = {
  name: 'ember-frost-fields',

  included: function () {
    this.app = this._findHost.call(this) // eslint-disable-line no-useless-call

    // Set ember-cli-svgstore options so that consuming applications don't have to
    setSvgConfiguration.call(this, 'frost-fields')

    this._super.included.apply(this, arguments)
  }
}
