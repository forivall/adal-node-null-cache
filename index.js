'use strict';

exports.NullCache = NullCache;
function NullCache() {}
NullCache.prototype.remove = function (entries, callback) {
  callback();
};
NullCache.prototype.add = function (entries, callback) {
  callback();
};
NullCache.prototype.find = function (query, callback) {
  callback(null, []);
};

var adal;
try {
  // eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
  adal = require('adal-node');
} catch (err) {
  if (err.code !== 'MODULE_NOT_FOUND') {
    throw err;
  }
}

if (adal) {
  var globalCache = new NullCache();

  for (var x in adal) {
    if (Object.prototype.hasOwnProperty.call(adal, x)) {
      exports[x] = adal[x];
    }
  }
  /**
   * Creates a new AuthenticationContext object.  By default the authority will be checked against
   * a list of known Azure Active Directory authorities.  If the authority is not recognized as
   * one of these well known authorities then token acquisition will fail.  This behavior can be
   * turned off via the validateAuthority parameter below.
   * @function
   * @param {string}  authority            A URL that identifies a token authority.
   * @param {bool}    [validateAuthority]  Turns authority validation on or off.  This parameter default to true.
   * @returns {AuthenticationContext}      A new authentication context, using a NullCache.
   */
  exports.createAuthenticationContext = function (authority, validateAuthority) {
    return new adal.AuthenticationContext(authority, validateAuthority, globalCache);
  };
}
