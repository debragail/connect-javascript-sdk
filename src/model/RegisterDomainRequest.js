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
 * The RegisterDomainRequest model module.
 * @module model/RegisterDomainRequest
 * @version 2.5.5
 */

/**
 * Constructs a new <code>RegisterDomainRequest</code>.
 * Defines the parameters that can be included in the body of a request to the [RegisterDomain](#endpoint-registerdomain) endpoint.
 * @alias module:model/RegisterDomainRequest
 * @class
 * @param domainName {String} A domain name as described in RFC-1034 that will be registered with ApplePay
 */
var exports = function(domainName) {
  var _this = this;

  _this['domain_name'] = domainName;
};

/**
 * Constructs a <code>RegisterDomainRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/RegisterDomainRequest} obj Optional instance to populate.
 * @return {module:model/RegisterDomainRequest} The populated <code>RegisterDomainRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('domain_name')) {
      obj['domain_name'] = ApiClient.convertToType(data['domain_name'], 'String');
    }
    }
  return obj;
}

/**
 * A domain name as described in RFC-1034 that will be registered with ApplePay
 * @member {String} domain_name
 */
exports.prototype['domain_name'] = undefined;



module.exports = exports;



