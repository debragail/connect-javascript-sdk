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
 * The CatalogQueryText model module.
 * @module model/CatalogQueryText
 * @version 2.5.3
 */

/**
 * Constructs a new <code>CatalogQueryText</code>.
 * 
 * @alias module:model/CatalogQueryText
 * @class
 * @param keywords {Array.<String>} A list of one, two, or three search keywords. Keywords with fewer than three characters are ignored.
 */
var exports = function(keywords) {
  var _this = this;

  _this['keywords'] = keywords;
};

/**
 * Constructs a <code>CatalogQueryText</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogQueryText} obj Optional instance to populate.
 * @return {module:model/CatalogQueryText} The populated <code>CatalogQueryText</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('keywords')) {
      obj['keywords'] = ApiClient.convertToType(data['keywords'], ['String']);
    }
    }
  return obj;
}

/**
 * A list of one, two, or three search keywords. Keywords with fewer than three characters are ignored.
 * @member {Array.<String>} keywords
 */
exports.prototype['keywords'] = undefined;



module.exports = exports;



