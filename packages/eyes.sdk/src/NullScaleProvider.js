(function () {
    'use strict';

    var FixedScaleProvider = require('./FixedScaleProvider').FixedScaleProvider;

    /**
     * A scale provider which does nothing.
     *
     * @constructor
     * @augments FixedScaleProvider
     **/
    function NullScaleProvider() {
        FixedScaleProvider.call(this, 1);
    }

    NullScaleProvider.prototype = Object.create(FixedScaleProvider.prototype);
    NullScaleProvider.prototype.constructor = NullScaleProvider;

    exports.FixedScaleProvider = NullScaleProvider;
}());
