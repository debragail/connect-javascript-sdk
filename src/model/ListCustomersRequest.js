/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');




/**
 * The ListCustomersRequest model module.
 * @module model/ListCustomersRequest
 * @version 2.5.3
 */

/**
 * Constructs a new <code>ListCustomersRequest</code>.
 * Defines the query parameters that can be provided in a request to the [ListCustomers](#endpoint-listcustomers) endpoint.
 * @alias module:model/ListCustomersRequest
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>ListCustomersRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ListCustomersRequest} obj Optional instance to populate.
 * @return {module:model/ListCustomersRequest} The populated <code>ListCustomersRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
    }
  return obj;
}

/**
 * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;



module.exports = exports;



