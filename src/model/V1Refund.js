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
var V1Money = require('./V1Money');




/**
 * The V1Refund model module.
 * @module model/V1Refund
 * @version 2.5.5
 */

/**
 * Constructs a new <code>V1Refund</code>.
 * @alias module:model/V1Refund
 * @class
 */
var exports = function() {
  var _this = this;








};

/**
 * Constructs a <code>V1Refund</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1Refund} obj Optional instance to populate.
 * @return {module:model/V1Refund} The populated <code>V1Refund</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
      if (data.hasOwnProperty('reason')) {
      obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
    }
      if (data.hasOwnProperty('refunded_money')) {
      obj['refunded_money'] = V1Money.constructFromObject(data['refunded_money']);
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('processed_at')) {
      obj['processed_at'] = ApiClient.convertToType(data['processed_at'], 'String');
    }
      if (data.hasOwnProperty('payment_id')) {
      obj['payment_id'] = ApiClient.convertToType(data['payment_id'], 'String');
    }
      if (data.hasOwnProperty('merchant_id')) {
      obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
    }
    }
  return obj;
}

/**
 * The type of refund
 * @member {module:model/V1Refund.TypeEnum} type
 */
exports.prototype['type'] = undefined;
/**
 * The merchant-specified reason for the refund.
 * @member {String} reason
 */
exports.prototype['reason'] = undefined;
/**
 * The amount of money refunded. This amount is always negative.
 * @member {module:model/V1Money} refunded_money
 */
exports.prototype['refunded_money'] = undefined;
/**
 * The time when the merchant initiated the refund for Square to process, in ISO 8601 format..
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * The time when Square processed the refund on behalf of the merchant, in ISO 8601 format.
 * @member {String} processed_at
 */
exports.prototype['processed_at'] = undefined;
/**
 * The Square-issued ID of the payment the refund is applied to.
 * @member {String} payment_id
 */
exports.prototype['payment_id'] = undefined;
/**
 *
 * @member {String} merchant_id
 */
exports.prototype['merchant_id'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "FULL"
     * @const
     */
    "FULL": "FULL",
    /**
     * value: "PARTIAL"
     * @const
     */
    "PARTIAL": "PARTIAL"  };


module.exports = exports;



