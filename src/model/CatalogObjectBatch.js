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
var CatalogObject = require('./CatalogObject');




/**
 * The CatalogObjectBatch model module.
 * @module model/CatalogObjectBatch
 * @version 2.5.3
 */

/**
 * Constructs a new <code>CatalogObjectBatch</code>.
 * A batch of [CatalogObject](#type-catalogobject)s.
 * @alias module:model/CatalogObjectBatch
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>CatalogObjectBatch</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogObjectBatch} obj Optional instance to populate.
 * @return {module:model/CatalogObjectBatch} The populated <code>CatalogObjectBatch</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('objects')) {
      obj['objects'] = ApiClient.convertToType(data['objects'], [CatalogObject]);
    }
    }
  return obj;
}

/**
 * A list of [CatalogObject](#type-catalogobject)s belonging to this batch.
 * @member {Array.<module:model/CatalogObject>} objects
 */
exports.prototype['objects'] = undefined;



module.exports = exports;



