/*global define*/
define(['../Core/DeveloperError'
        ], function(
                DeveloperError) {
    "use strict";

    function throwInstantiationError() {
        throw new DeveloperError('This type should not be instantiated directly.');
    }

    /**
     * The base class for all properties, which represent a value that can optionally
     * vary over time.
     * This type defines an interface and cannot be instantiated directly.
     *
     * @alias Property
     * @constructor
     *
     * @see CompositeProperty
     * @see ConstantProperty
     * @see PositionProperty
     * @see RefereenceProperty
     * @see SampledProperty
     * @see TimeIntervalCollectionProperty
     */
    var Property = throwInstantiationError;

    /**
     * If the property varies with simulation time, this function returns true.  If the property
     * is constant or changes in ways not related to simulation time, this function returns false.
     *
     * @memberof Property
     * @returns {Boolean} True if the property varies with simulation time, false otherwise.
     */
    Property.prototype.getIsTimeVarying = throwInstantiationError;

    /**
     * Returns the value of the property at the specified simulation time.
     * @memberof Property
     *
     * @param {JulianDate} time The simulation time for which to retrieve the value.
     * @param {Object} [result] The object to store the value into, if omitted, a new instance is created and returned.
     * @returns {Object} The modified result parameter or a new instance if the result parameter was not supplied.
     *
     * @exception {DeveloperError} time is required.
     */
    Property.prototype.getValue = throwInstantiationError;

    return Property;
});