// CommonJS package manager support
//if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  //module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
    //import lbServices from './lb-services';
    // angular.module('app', [lbServices]);
  //
 // module.exports = "lbServices";
//}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "http://tabor-o2o-webapi-internal-dev.azurewebsites.net/api";
  //var urlBase = "http://localhost:1337/api";
//var urlBase = "http://11.11.1.42:10010/api";
//  var authHeader = 'authorization';

  //function getHost(url) {
  //  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  //  return m ? m[1] : null;
  //}

  // need to use the urlBase as the base to handle multiple
  // loopback servers behind a proxy/gateway where the host
  // would be the same.

 // var urlBaseHost = getHost(urlBase) ? urlBase : location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);
/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  
  module.factory(
    "User",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Users/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__findById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__destroyById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__updateById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Users/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__create__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__delete__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__count__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Counts accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#create
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createMany
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Users",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Users/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsertWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Users/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#exists
             * @methodOf lbServices.User
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Users/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Users/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#find
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findOne
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Users/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#updateAll
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Users/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#deleteById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#count
             * @methodOf lbServices.User
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$patchAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Users/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createChangeStream
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Users/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#login
             * @methodOf lbServices.User
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Users/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#logout
             * @methodOf lbServices.User
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string=}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Users/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$verify
             * @methodOf lbServices.User
             *
             * @description
             *
             * Trigger user's identity verification with configured verifyOptions
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `verifyOptions` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$verify": {
              url: urlBase + "/Users/:id/verify",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#confirm
             * @methodOf lbServices.User
             *
             * @description
             *
             * Confirm a user registration with identity verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Users/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#resetPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Users/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#changePassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Change a user's password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `oldPassword` – `{string}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "changePassword": {
              url: urlBase + "/Users/change-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#setPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset user's password via a password-reset token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "setPassword": {
              url: urlBase + "/Users/reset-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getCurrent
             * @methodOf lbServices.User
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Users" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.User#upsert
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.User#updateOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreateWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.User#update
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.User#destroyById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#removeById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$updateAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.User#modelName
        * @propertyOf lbServices.User
        * @description
        * The name of the model represented by this $resource,
        * i.e. `User`.
        */
        R.modelName = "User";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Demo
 * @header lbServices.Demo
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Demo` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Demo",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/demos/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Demo.Children.findById() instead.
            "prototype$__findById__Children": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/demos/:id/Children/:fk",
              method: "GET",
            },

            // INTERNAL. Use Demo.Children.destroyById() instead.
            "prototype$__destroyById__Children": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/demos/:id/Children/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Demo.Children.updateById() instead.
            "prototype$__updateById__Children": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/demos/:id/Children/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Demo.Children() instead.
            "prototype$__get__Children": {
              isArray: true,
              url: urlBase + "/demos/:id/Children",
              method: "GET",
            },

            // INTERNAL. Use Demo.Children.create() instead.
            "prototype$__create__Children": {
              url: urlBase + "/demos/:id/Children",
              method: "POST",
            },

            // INTERNAL. Use Demo.Children.destroyAll() instead.
            "prototype$__delete__Children": {
              url: urlBase + "/demos/:id/Children",
              method: "DELETE",
            },

            // INTERNAL. Use Demo.Children.count() instead.
            "prototype$__count__Children": {
              url: urlBase + "/demos/:id/Children/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demo#create
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demo` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/demos",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demo#createMany
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demo` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/demos",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demo#patchOrCreate
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demo` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/demos",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demo#replaceOrCreate
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demo` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/demos/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demo#upsertWithWhere
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demo` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/demos/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demo#exists
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/demos/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demo#findById
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demo` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/demos/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demo#replaceById
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demo` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/demos/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demo#find
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demo` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/demos",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demo#findOne
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demo` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/demos/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demo#updateAll
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/demos/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demo#deleteById
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demo` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/demos/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demo#count
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/demos/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demo#prototype$patchAttributes
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - demo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demo` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/demos/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demo#createChangeStream
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/demos/change-stream",
              method: "POST",
            },

            // INTERNAL. Use DemoChild.Demo() instead.
            "::get::DemoChild::Demo": {
              url: urlBase + "/DemoChildren/:id/Demo",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Demo#upsert
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demo` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Demo#updateOrCreate
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demo` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Demo#patchOrCreateWithWhere
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demo` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Demo#update
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Demo#destroyById
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demo` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Demo#removeById
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demo` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Demo#prototype$updateAttributes
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - demo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demo` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Demo#modelName
        * @propertyOf lbServices.Demo
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Demo`.
        */
        R.modelName = "Demo";

    /**
     * @ngdoc object
     * @name lbServices.Demo.Children
     * @header lbServices.Demo.Children
     * @object
     * @description
     *
     * The object `Demo.Children` groups methods
     * manipulating `DemoChild` instances related to `Demo`.
     *
     * Call {@link lbServices.Demo#Children Demo.Children()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Demo#Children
             * @methodOf lbServices.Demo
             *
             * @description
             *
             * Queries Children of demo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - demo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
        R.Children = function() {
          var TargetResource = $injector.get("DemoChild");
          var action = TargetResource["::get::Demo::Children"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Demo.Children#count
             * @methodOf lbServices.Demo.Children
             *
             * @description
             *
             * Counts Children of demo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - demo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.Children.count = function() {
          var TargetResource = $injector.get("DemoChild");
          var action = TargetResource["::count::Demo::Children"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Demo.Children#create
             * @methodOf lbServices.Demo.Children
             *
             * @description
             *
             * Creates a new instance in Children of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - demo id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
        R.Children.create = function() {
          var TargetResource = $injector.get("DemoChild");
          var action = TargetResource["::create::Demo::Children"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Demo.Children#createMany
             * @methodOf lbServices.Demo.Children
             *
             * @description
             *
             * Creates a new instance in Children of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - demo id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
        R.Children.createMany = function() {
          var TargetResource = $injector.get("DemoChild");
          var action = TargetResource["::createMany::Demo::Children"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Demo.Children#destroyAll
             * @methodOf lbServices.Demo.Children
             *
             * @description
             *
             * Deletes all Children of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - demo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.Children.destroyAll = function() {
          var TargetResource = $injector.get("DemoChild");
          var action = TargetResource["::delete::Demo::Children"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Demo.Children#destroyById
             * @methodOf lbServices.Demo.Children
             *
             * @description
             *
             * Delete a related item by id for Children.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - demo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for Children
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.Children.destroyById = function() {
          var TargetResource = $injector.get("DemoChild");
          var action = TargetResource["::destroyById::Demo::Children"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Demo.Children#findById
             * @methodOf lbServices.Demo.Children
             *
             * @description
             *
             * Find a related item by id for Children.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - demo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for Children
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
        R.Children.findById = function() {
          var TargetResource = $injector.get("DemoChild");
          var action = TargetResource["::findById::Demo::Children"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Demo.Children#updateById
             * @methodOf lbServices.Demo.Children
             *
             * @description
             *
             * Update a related item by id for Children.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - demo id
             *
             *  - `fk` – `{*}` - Foreign key for Children
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
        R.Children.updateById = function() {
          var TargetResource = $injector.get("DemoChild");
          var action = TargetResource["::updateById::Demo::Children"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.DemoChild
 * @header lbServices.DemoChild
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `DemoChild` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "DemoChild",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/DemoChildren/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use DemoChild.Demo() instead.
            "prototype$__get__Demo": {
              url: urlBase + "/DemoChildren/:id/Demo",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#create
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/DemoChildren",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#createMany
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/DemoChildren",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#patchOrCreate
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/DemoChildren",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#replaceOrCreate
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/DemoChildren/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#upsertWithWhere
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/DemoChildren/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#exists
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/DemoChildren/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#findById
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/DemoChildren/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#replaceById
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/DemoChildren/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#find
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/DemoChildren",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#findOne
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/DemoChildren/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#updateAll
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/DemoChildren/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#deleteById
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/DemoChildren/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#count
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/DemoChildren/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#prototype$patchAttributes
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DemoChild id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/DemoChildren/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#createChangeStream
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/DemoChildren/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Demo.Children.findById() instead.
            "::findById::Demo::Children": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/demos/:id/Children/:fk",
              method: "GET",
            },

            // INTERNAL. Use Demo.Children.destroyById() instead.
            "::destroyById::Demo::Children": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/demos/:id/Children/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Demo.Children.updateById() instead.
            "::updateById::Demo::Children": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/demos/:id/Children/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Demo.Children() instead.
            "::get::Demo::Children": {
              isArray: true,
              url: urlBase + "/demos/:id/Children",
              method: "GET",
            },

            // INTERNAL. Use Demo.Children.create() instead.
            "::create::Demo::Children": {
              url: urlBase + "/demos/:id/Children",
              method: "POST",
            },

            // INTERNAL. Use Demo.Children.createMany() instead.
            "::createMany::Demo::Children": {
              isArray: true,
              url: urlBase + "/demos/:id/Children",
              method: "POST",
            },

            // INTERNAL. Use Demo.Children.destroyAll() instead.
            "::delete::Demo::Children": {
              url: urlBase + "/demos/:id/Children",
              method: "DELETE",
            },

            // INTERNAL. Use Demo.Children.count() instead.
            "::count::Demo::Children": {
              url: urlBase + "/demos/:id/Children/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.DemoChild#upsert
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#updateOrCreate
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#patchOrCreateWithWhere
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#update
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#destroyById
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#removeById
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.DemoChild#prototype$updateAttributes
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DemoChild id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `DemoChild` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.DemoChild#modelName
        * @propertyOf lbServices.DemoChild
        * @description
        * The name of the model represented by this $resource,
        * i.e. `DemoChild`.
        */
        R.modelName = "DemoChild";


            /**
             * @ngdoc method
             * @name lbServices.DemoChild#Demo
             * @methodOf lbServices.DemoChild
             *
             * @description
             *
             * Fetches belongsTo relation Demo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - DemoChild id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demo` object.)
             * </em>
             */
        R.Demo = function() {
          var TargetResource = $injector.get("Demo");
          var action = TargetResource["::get::DemoChild::Demo"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Product
 * @header lbServices.Product
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Product` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Product",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Products/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Product.brand() instead.
            "prototype$__get__brand": {
              url: urlBase + "/Products/:Code/brand",
              method: "GET",
            },

            // INTERNAL. Use Product.OrderDetail.findById() instead.
            "prototype$__findById__OrderDetail": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:Code/OrderDetail/:fk",
              method: "GET",
            },

            // INTERNAL. Use Product.OrderDetail.destroyById() instead.
            "prototype$__destroyById__OrderDetail": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:Code/OrderDetail/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.OrderDetail.updateById() instead.
            "prototype$__updateById__OrderDetail": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:Code/OrderDetail/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.ProductDealer.findById() instead.
            "prototype$__findById__ProductDealer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:Code/ProductDealer/:fk",
              method: "GET",
            },

            // INTERNAL. Use Product.ProductDealer.destroyById() instead.
            "prototype$__destroyById__ProductDealer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:Code/ProductDealer/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.ProductDealer.updateById() instead.
            "prototype$__updateById__ProductDealer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:Code/ProductDealer/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.OrderDetail() instead.
            "prototype$__get__OrderDetail": {
              isArray: true,
              url: urlBase + "/Products/:Code/OrderDetail",
              method: "GET",
            },

            // INTERNAL. Use Product.OrderDetail.create() instead.
            "prototype$__create__OrderDetail": {
              url: urlBase + "/Products/:id/OrderDetail",
              method: "POST",
            },

            // INTERNAL. Use Product.OrderDetail.destroyAll() instead.
            "prototype$__delete__OrderDetail": {
              url: urlBase + "/Products/:Code/OrderDetail",
              method: "DELETE",
            },

            // INTERNAL. Use Product.OrderDetail.count() instead.
            "prototype$__count__OrderDetail": {
              url: urlBase + "/Products/:Code/OrderDetail/count",
              method: "GET",
            },

            // INTERNAL. Use Product.ProductDealer() instead.
            "prototype$__get__ProductDealer": {
              isArray: true,
              url: urlBase + "/Products/:Code/ProductDealer",
              method: "GET",
            },

            // INTERNAL. Use Product.ProductDealer.create() instead.
            "prototype$__create__ProductDealer": {
              url: urlBase + "/Products/:Code/ProductDealer",
              method: "POST",
            },

            // INTERNAL. Use Product.ProductDealer.destroyAll() instead.
            "prototype$__delete__ProductDealer": {
              url: urlBase + "/Products/:Code/ProductDealer",
              method: "DELETE",
            },

            // INTERNAL. Use Product.ProductDealer.count() instead.
            "prototype$__count__ProductDealer": {
              url: urlBase + "/Products/:Code/ProductDealer/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#create
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Products",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#createMany
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Products",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#patchOrCreate
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Products",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#replaceOrCreate
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Products/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#upsertWithWhere
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Products/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#exists
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Products/:Code/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#findById
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Products/:Code",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#replaceById
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Products/:Code/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#find
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Products",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#findOne
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Products/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#updateAll
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Products/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#deleteById
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Products/:Code",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#count
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Products/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#prototype$patchAttributes
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Products/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#createChangeStream
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Products/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Brand.Product.findById() instead.
            "::findById::Brand::Product": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Brands/:Code/Product/:fk",
              method: "GET",
            },

            // INTERNAL. Use Brand.Product.destroyById() instead.
            "::destroyById::Brand::Product": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Brands/:Code/Product/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Brand.Product.updateById() instead.
            "::updateById::Brand::Product": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Brands/:Code/Product/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Brand.Product() instead.
            "::get::Brand::Product": {
              isArray: true,
              url: urlBase + "/Brands/:Code/Product",
              method: "GET",
            },

            // INTERNAL. Use Brand.Product.create() instead.
            "::create::Brand::Product": {
              url: urlBase + "/Brands/:Code/Product",
              method: "POST",
            },

            // INTERNAL. Use Brand.Product.createMany() instead.
            "::createMany::Brand::Product": {
              isArray: true,
              url: urlBase + "/Brands/:Code/Product",
              method: "POST",
            },

            // INTERNAL. Use Brand.Product.destroyAll() instead.
            "::delete::Brand::Product": {
              url: urlBase + "/Brands/:Code/Product",
              method: "DELETE",
            },

            // INTERNAL. Use Brand.Product.count() instead.
            "::count::Brand::Product": {
              url: urlBase + "/Brands/:Code/Product/count",
              method: "GET",
            },

            // INTERNAL. Use OrderDetail.Product() instead.
            "::get::OrderDetail::Product": {
              url: urlBase + "/OrderDetail/:Code/Product",
              method: "GET",
            },

            // INTERNAL. Use ProductDealer.Product() instead.
            "::get::ProductDealer::Product": {
              url: urlBase + "/ProductDealers/:Code/Product",
              method: "GET",
            },

            // INTERNAL. Use CobaBase.Product.findById() instead.
            "::findById::CobaBase::Product": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/CobaBases/:id/Product/:fk",
              method: "GET",
            },

            // INTERNAL. Use CobaBase.Product.destroyById() instead.
            "::destroyById::CobaBase::Product": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/CobaBases/:id/Product/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use CobaBase.Product.updateById() instead.
            "::updateById::CobaBase::Product": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/CobaBases/:id/Product/:fk",
              method: "PUT",
            },

            // INTERNAL. Use CobaBase.Product() instead.
            "::get::CobaBase::Product": {
              isArray: true,
              url: urlBase + "/CobaBases/:id/Product",
              method: "GET",
            },

            // INTERNAL. Use CobaBase.Product.create() instead.
            "::create::CobaBase::Product": {
              url: urlBase + "/CobaBases/:id/Product",
              method: "POST",
            },

            // INTERNAL. Use CobaBase.Product.createMany() instead.
            "::createMany::CobaBase::Product": {
              isArray: true,
              url: urlBase + "/CobaBases/:id/Product",
              method: "POST",
            },

            // INTERNAL. Use CobaBase.Product.destroyAll() instead.
            "::delete::CobaBase::Product": {
              url: urlBase + "/CobaBases/:id/Product",
              method: "DELETE",
            },

            // INTERNAL. Use CobaBase.Product.count() instead.
            "::count::CobaBase::Product": {
              url: urlBase + "/CobaBases/:id/Product/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Product#upsert
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Product#updateOrCreate
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Product#patchOrCreateWithWhere
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Product#update
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Product#destroyById
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Product#removeById
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Product#prototype$updateAttributes
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Product#modelName
        * @propertyOf lbServices.Product
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Product`.
        */
        R.modelName = "Product";


            /**
             * @ngdoc method
             * @name lbServices.Product#brand
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Fetches belongsTo relation brand.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Brand` object.)
             * </em>
             */
        R.brand = function() {
          var TargetResource = $injector.get("Brand");
          var action = TargetResource["::get::Product::brand"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Product.OrderDetail
     * @header lbServices.Product.OrderDetail
     * @object
     * @description
     *
     * The object `Product.OrderDetail` groups methods
     * manipulating `OrderDetail` instances related to `Product`.
     *
     * Call {@link lbServices.Product#OrderDetail Product.OrderDetail()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Product#OrderDetail
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Queries OrderDetail of Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
        R.OrderDetail = function() {
          var TargetResource = $injector.get("OrderDetail");
          var action = TargetResource["::get::Product::OrderDetail"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.OrderDetail#count
             * @methodOf lbServices.Product.OrderDetail
             *
             * @description
             *
             * Counts OrderDetail of Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.OrderDetail.count = function() {
          var TargetResource = $injector.get("OrderDetail");
          var action = TargetResource["::count::Product::OrderDetail"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.OrderDetail#create
             * @methodOf lbServices.Product.OrderDetail
             *
             * @description
             *
             * Creates a new instance in OrderDetail of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
        R.OrderDetail.create = function() {
          var TargetResource = $injector.get("OrderDetail");
          var action = TargetResource["::create::Product::OrderDetail"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.OrderDetail#createMany
             * @methodOf lbServices.Product.OrderDetail
             *
             * @description
             *
             * Creates a new instance in OrderDetail of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
        R.OrderDetail.createMany = function() {
          var TargetResource = $injector.get("OrderDetail");
          var action = TargetResource["::createMany::Product::OrderDetail"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.OrderDetail#destroyAll
             * @methodOf lbServices.Product.OrderDetail
             *
             * @description
             *
             * Deletes all OrderDetail of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.OrderDetail.destroyAll = function() {
          var TargetResource = $injector.get("OrderDetail");
          var action = TargetResource["::delete::Product::OrderDetail"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.OrderDetail#destroyById
             * @methodOf lbServices.Product.OrderDetail
             *
             * @description
             *
             * Delete a related item by id for OrderDetail.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for OrderDetail
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.OrderDetail.destroyById = function() {
          var TargetResource = $injector.get("OrderDetail");
          var action = TargetResource["::destroyById::Product::OrderDetail"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.OrderDetail#findById
             * @methodOf lbServices.Product.OrderDetail
             *
             * @description
             *
             * Find a related item by id for OrderDetail.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for OrderDetail
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
        R.OrderDetail.findById = function() {
          var TargetResource = $injector.get("OrderDetail");
          var action = TargetResource["::findById::Product::OrderDetail"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.OrderDetail#updateById
             * @methodOf lbServices.Product.OrderDetail
             *
             * @description
             *
             * Update a related item by id for OrderDetail.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `fk` – `{*}` - Foreign key for OrderDetail
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
        R.OrderDetail.updateById = function() {
          var TargetResource = $injector.get("OrderDetail");
          var action = TargetResource["::updateById::Product::OrderDetail"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Product.ProductDealer
     * @header lbServices.Product.ProductDealer
     * @object
     * @description
     *
     * The object `Product.ProductDealer` groups methods
     * manipulating `ProductDealer` instances related to `Product`.
     *
     * Call {@link lbServices.Product#ProductDealer Product.ProductDealer()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Product#ProductDealer
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Queries ProductDealer of Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
        R.ProductDealer = function() {
          var TargetResource = $injector.get("ProductDealer");
          var action = TargetResource["::get::Product::ProductDealer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.ProductDealer#count
             * @methodOf lbServices.Product.ProductDealer
             *
             * @description
             *
             * Counts ProductDealer of Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.ProductDealer.count = function() {
          var TargetResource = $injector.get("ProductDealer");
          var action = TargetResource["::count::Product::ProductDealer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.ProductDealer#create
             * @methodOf lbServices.Product.ProductDealer
             *
             * @description
             *
             * Creates a new instance in ProductDealer of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
        R.ProductDealer.create = function() {
          var TargetResource = $injector.get("ProductDealer");
          var action = TargetResource["::create::Product::ProductDealer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.ProductDealer#createMany
             * @methodOf lbServices.Product.ProductDealer
             *
             * @description
             *
             * Creates a new instance in ProductDealer of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
        R.ProductDealer.createMany = function() {
          var TargetResource = $injector.get("ProductDealer");
          var action = TargetResource["::createMany::Product::ProductDealer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.ProductDealer#destroyAll
             * @methodOf lbServices.Product.ProductDealer
             *
             * @description
             *
             * Deletes all ProductDealer of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.ProductDealer.destroyAll = function() {
          var TargetResource = $injector.get("ProductDealer");
          var action = TargetResource["::delete::Product::ProductDealer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.ProductDealer#destroyById
             * @methodOf lbServices.Product.ProductDealer
             *
             * @description
             *
             * Delete a related item by id for ProductDealer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for ProductDealer
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.ProductDealer.destroyById = function() {
          var TargetResource = $injector.get("ProductDealer");
          var action = TargetResource["::destroyById::Product::ProductDealer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.ProductDealer#findById
             * @methodOf lbServices.Product.ProductDealer
             *
             * @description
             *
             * Find a related item by id for ProductDealer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for ProductDealer
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
        R.ProductDealer.findById = function() {
          var TargetResource = $injector.get("ProductDealer");
          var action = TargetResource["::findById::Product::ProductDealer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.ProductDealer#updateById
             * @methodOf lbServices.Product.ProductDealer
             *
             * @description
             *
             * Update a related item by id for ProductDealer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Product id
             *
             *  - `fk` – `{*}` - Foreign key for ProductDealer
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
        R.ProductDealer.updateById = function() {
          var TargetResource = $injector.get("ProductDealer");
          var action = TargetResource["::updateById::Product::ProductDealer"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Brand
 * @header lbServices.Brand
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Brand` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Brand",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Brands/:Code",
          { 'code': '@code' },
          {

            // INTERNAL. Use Brand.Product.findById() instead.
            "prototype$__findById__Product": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Brands/:Code/Product/:fk",
              method: "GET",
            },

            // INTERNAL. Use Brand.Product.destroyById() instead.
            "prototype$__destroyById__Product": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Brands/:Code/Product/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Brand.Product.updateById() instead.
            "prototype$__updateById__Product": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Brands/:Code/Product/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Brand.Product() instead.
            "prototype$__get__Product": {
              isArray: true,
              url: urlBase + "/Brands/:Code/Product",
              method: "GET",
            },

            // INTERNAL. Use Brand.Product.create() instead.
            "prototype$__create__Product": {
              url: urlBase + "/Brands/:Code/Product",
              method: "POST",
            },

            // INTERNAL. Use Brand.Product.destroyAll() instead.
            "prototype$__delete__Product": {
              url: urlBase + "/Brands/:Code/Product",
              method: "DELETE",
            },

            // INTERNAL. Use Brand.Product.count() instead.
            "prototype$__count__Product": {
              url: urlBase + "/Brands/:Code/Product/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Brand#create
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Brand` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Brands",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Brand#createMany
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Brand` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Brands",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Brand#patchOrCreate
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Brand` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Brands",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Brand#replaceOrCreate
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Brand` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Brands/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Brand#upsertWithWhere
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Brand` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Brands/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Brand#exists
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Brands/:Code/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Brand#findById
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Brand` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Brands/:Code",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Brand#replaceById
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Brand` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Brands/:Code/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Brand#find
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Brand` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Brands",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Brand#findOne
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Brand` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Brands/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Brand#updateAll
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Brands/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Brand#deleteById
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Brand` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Brands/:Code",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Brand#count
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Brands/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Brand#prototype$patchAttributes
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Brand id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Brand` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Brands/:Code",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Brand#createChangeStream
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Brands/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Product.brand() instead.
            "::get::Product::brand": {
              url: urlBase + "/Products/:Code/brand",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Brand#upsert
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Brand` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Brand#updateOrCreate
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Brand` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Brand#patchOrCreateWithWhere
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Brand` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Brand#update
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Brand#destroyById
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Brand` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Brand#removeById
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Brand` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Brand#prototype$updateAttributes
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Brand id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Brand` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Brand#modelName
        * @propertyOf lbServices.Brand
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Brand`.
        */
        R.modelName = "Brand";

    /**
     * @ngdoc object
     * @name lbServices.Brand.Product
     * @header lbServices.Brand.Product
     * @object
     * @description
     *
     * The object `Brand.Product` groups methods
     * manipulating `Product` instances related to `Brand`.
     *
     * Call {@link lbServices.Brand#Product Brand.Product()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Brand#Product
             * @methodOf lbServices.Brand
             *
             * @description
             *
             * Queries Product of Brand.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Brand id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.Product = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::get::Brand::Product"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Brand.Product#count
             * @methodOf lbServices.Brand.Product
             *
             * @description
             *
             * Counts Product of Brand.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Brand id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.Product.count = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::count::Brand::Product"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Brand.Product#create
             * @methodOf lbServices.Brand.Product
             *
             * @description
             *
             * Creates a new instance in Product of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Brand id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.Product.create = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::create::Brand::Product"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Brand.Product#createMany
             * @methodOf lbServices.Brand.Product
             *
             * @description
             *
             * Creates a new instance in Product of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Brand id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.Product.createMany = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::createMany::Brand::Product"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Brand.Product#destroyAll
             * @methodOf lbServices.Brand.Product
             *
             * @description
             *
             * Deletes all Product of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Brand id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.Product.destroyAll = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::delete::Brand::Product"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Brand.Product#destroyById
             * @methodOf lbServices.Brand.Product
             *
             * @description
             *
             * Delete a related item by id for Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Brand id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for Product
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.Product.destroyById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::destroyById::Brand::Product"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Brand.Product#findById
             * @methodOf lbServices.Brand.Product
             *
             * @description
             *
             * Find a related item by id for Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Brand id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for Product
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.Product.findById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::findById::Brand::Product"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Brand.Product#updateById
             * @methodOf lbServices.Brand.Product
             *
             * @description
             *
             * Update a related item by id for Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Brand id
             *
             *  - `fk` – `{*}` - Foreign key for Product
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.Product.updateById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::updateById::Brand::Product"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Dealer
 * @header lbServices.Dealer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Dealer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Dealer",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Dealers/:Code",
          { 'id': '@id' },
          {

            // INTERNAL. Use Dealer.Order.findById() instead.
            "prototype$__findById__Order": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dealers/:Code/Order/:fk",
              method: "GET",
            },

            // INTERNAL. Use Dealer.Order.destroyById() instead.
            "prototype$__destroyById__Order": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dealers/:Code/Order/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dealer.Order.updateById() instead.
            "prototype$__updateById__Order": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dealers/:Code/Order/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dealer.ProductDealer.findById() instead.
            "prototype$__findById__ProductDealer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dealers/:Code/ProductDealer/:fk",
              method: "GET",
            },

            // INTERNAL. Use Dealer.ProductDealer.destroyById() instead.
            "prototype$__destroyById__ProductDealer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dealers/:Code/ProductDealer/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dealer.ProductDealer.updateById() instead.
            "prototype$__updateById__ProductDealer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dealers/:Code/ProductDealer/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dealer.Order() instead.
            "prototype$__get__Order": {
              isArray: true,
              url: urlBase + "/Dealers/:Code/Order",
              method: "GET",
            },

            // INTERNAL. Use Dealer.Order.create() instead.
            "prototype$__create__Order": {
              url: urlBase + "/Dealers/:Code/Order",
              method: "POST",
            },

            // INTERNAL. Use Dealer.Order.destroyAll() instead.
            "prototype$__delete__Order": {
              url: urlBase + "/Dealers/:Code/Order",
              method: "DELETE",
            },

            // INTERNAL. Use Dealer.Order.count() instead.
            "prototype$__count__Order": {
              url: urlBase + "/Dealers/:Code/Order/count",
              method: "GET",
            },

            // INTERNAL. Use Dealer.ProductDealer() instead.
            "prototype$__get__ProductDealer": {
              isArray: true,
              url: urlBase + "/Dealers/:Code/ProductDealer",
              method: "GET",
            },

            // INTERNAL. Use Dealer.ProductDealer.create() instead.
            "prototype$__create__ProductDealer": {
              url: urlBase + "/Dealers/:Code/ProductDealer",
              method: "POST",
            },

            // INTERNAL. Use Dealer.ProductDealer.destroyAll() instead.
            "prototype$__delete__ProductDealer": {
              url: urlBase + "/Dealers/:Code/ProductDealer",
              method: "DELETE",
            },

            // INTERNAL. Use Dealer.ProductDealer.count() instead.
            "prototype$__count__ProductDealer": {
              url: urlBase + "/Dealers/:Code/ProductDealer/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dealer#create
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Dealers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dealer#createMany
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Dealers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dealer#patchOrCreate
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Dealers",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dealer#replaceOrCreate
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Dealers/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dealer#upsertWithWhere
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Dealers/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dealer#exists
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Dealers/:Code/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dealer#findById
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Dealers/:Code",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dealer#replaceById
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Dealers/:Code/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dealer#find
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Dealers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dealer#findOne
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Dealers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dealer#updateAll
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Dealers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dealer#deleteById
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Dealers/:Code",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dealer#count
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Dealers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dealer#prototype$patchAttributes
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dealer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Dealers/:Code",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Dealer#createChangeStream
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Dealers/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Order.dealer() instead.
            "::get::Order::dealer": {
              url: urlBase + "/Order/:Code/dealer",
              method: "GET",
            },

            // INTERNAL. Use ProductDealer.Dealer() instead.
            "::get::ProductDealer::Dealer": {
              url: urlBase + "/ProductDealers/:ProductCode/Dealer",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Dealer#upsert
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Dealer#updateOrCreate
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Dealer#patchOrCreateWithWhere
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Dealer#update
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Dealer#destroyById
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Dealer#removeById
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Dealer#prototype$updateAttributes
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dealer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Dealer#modelName
        * @propertyOf lbServices.Dealer
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Dealer`.
        */
        R.modelName = "Dealer";

    /**
     * @ngdoc object
     * @name lbServices.Dealer.Order
     * @header lbServices.Dealer.Order
     * @object
     * @description
     *
     * The object `Dealer.Order` groups methods
     * manipulating `Order` instances related to `Dealer`.
     *
     * Call {@link lbServices.Dealer#Order Dealer.Order()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Dealer#Order
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Queries Order of Dealer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dealer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.Order = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::Dealer::Order"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dealer.Order#count
             * @methodOf lbServices.Dealer.Order
             *
             * @description
             *
             * Counts Order of Dealer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dealer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.Order.count = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::count::Dealer::Order"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dealer.Order#create
             * @methodOf lbServices.Dealer.Order
             *
             * @description
             *
             * Creates a new instance in Order of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dealer id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.Order.create = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::create::Dealer::Order"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dealer.Order#createMany
             * @methodOf lbServices.Dealer.Order
             *
             * @description
             *
             * Creates a new instance in Order of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dealer id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.Order.createMany = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::createMany::Dealer::Order"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dealer.Order#destroyAll
             * @methodOf lbServices.Dealer.Order
             *
             * @description
             *
             * Deletes all Order of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dealer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.Order.destroyAll = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::delete::Dealer::Order"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dealer.Order#destroyById
             * @methodOf lbServices.Dealer.Order
             *
             * @description
             *
             * Delete a related item by id for Order.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dealer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for Order
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.Order.destroyById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::destroyById::Dealer::Order"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dealer.Order#findById
             * @methodOf lbServices.Dealer.Order
             *
             * @description
             *
             * Find a related item by id for Order.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dealer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for Order
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.Order.findById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::findById::Dealer::Order"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dealer.Order#updateById
             * @methodOf lbServices.Dealer.Order
             *
             * @description
             *
             * Update a related item by id for Order.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dealer id
             *
             *  - `fk` – `{*}` - Foreign key for Order
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.Order.updateById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::updateById::Dealer::Order"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Dealer.ProductDealer
     * @header lbServices.Dealer.ProductDealer
     * @object
     * @description
     *
     * The object `Dealer.ProductDealer` groups methods
     * manipulating `ProductDealer` instances related to `Dealer`.
     *
     * Call {@link lbServices.Dealer#ProductDealer Dealer.ProductDealer()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Dealer#ProductDealer
             * @methodOf lbServices.Dealer
             *
             * @description
             *
             * Queries ProductDealer of Dealer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dealer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
        R.ProductDealer = function() {
          var TargetResource = $injector.get("ProductDealer");
          var action = TargetResource["::get::Dealer::ProductDealer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dealer.ProductDealer#count
             * @methodOf lbServices.Dealer.ProductDealer
             *
             * @description
             *
             * Counts ProductDealer of Dealer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dealer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.ProductDealer.count = function() {
          var TargetResource = $injector.get("ProductDealer");
          var action = TargetResource["::count::Dealer::ProductDealer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dealer.ProductDealer#create
             * @methodOf lbServices.Dealer.ProductDealer
             *
             * @description
             *
             * Creates a new instance in ProductDealer of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dealer id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
        R.ProductDealer.create = function() {
          var TargetResource = $injector.get("ProductDealer");
          var action = TargetResource["::create::Dealer::ProductDealer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dealer.ProductDealer#createMany
             * @methodOf lbServices.Dealer.ProductDealer
             *
             * @description
             *
             * Creates a new instance in ProductDealer of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dealer id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
        R.ProductDealer.createMany = function() {
          var TargetResource = $injector.get("ProductDealer");
          var action = TargetResource["::createMany::Dealer::ProductDealer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dealer.ProductDealer#destroyAll
             * @methodOf lbServices.Dealer.ProductDealer
             *
             * @description
             *
             * Deletes all ProductDealer of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dealer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.ProductDealer.destroyAll = function() {
          var TargetResource = $injector.get("ProductDealer");
          var action = TargetResource["::delete::Dealer::ProductDealer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dealer.ProductDealer#destroyById
             * @methodOf lbServices.Dealer.ProductDealer
             *
             * @description
             *
             * Delete a related item by id for ProductDealer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dealer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for ProductDealer
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.ProductDealer.destroyById = function() {
          var TargetResource = $injector.get("ProductDealer");
          var action = TargetResource["::destroyById::Dealer::ProductDealer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dealer.ProductDealer#findById
             * @methodOf lbServices.Dealer.ProductDealer
             *
             * @description
             *
             * Find a related item by id for ProductDealer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dealer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for ProductDealer
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
        R.ProductDealer.findById = function() {
          var TargetResource = $injector.get("ProductDealer");
          var action = TargetResource["::findById::Dealer::ProductDealer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Dealer.ProductDealer#updateById
             * @methodOf lbServices.Dealer.ProductDealer
             *
             * @description
             *
             * Update a related item by id for ProductDealer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Dealer id
             *
             *  - `fk` – `{*}` - Foreign key for ProductDealer
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
        R.ProductDealer.updateById = function() {
          var TargetResource = $injector.get("ProductDealer");
          var action = TargetResource["::updateById::Dealer::ProductDealer"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Order
 * @header lbServices.Order
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Order` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
 module.factory(
    "Order",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Order/:Code",
          { 'id': '@id' },
          {

            // INTERNAL. Use Order.Dealer() instead.
            "prototype$__get__Dealer": {
              url: urlBase + "/Order/:Code/Dealer",
              method: "GET",
            },

            // INTERNAL. Use Order.OrderDetail.findById() instead.
            "prototype$__findById__OrderDetail": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Order/:Code/OrderDetail/:fk",
              method: "GET",
            },

            // INTERNAL. Use Order.OrderDetail.destroyById() instead.
            "prototype$__destroyById__OrderDetail": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Order/:Code/OrderDetail/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Order.OrderDetail.updateById() instead.
            "prototype$__updateById__OrderDetail": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Order/:Code/OrderDetail/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Order.Kiosk() instead.
            "prototype$__get__Kiosk": {
              url: urlBase + "/Order/:Code/Kiosk",
              method: "GET",
            },

            // INTERNAL. Use Order.OrderDetail() instead.
            "prototype$__get__OrderDetail": {
              isArray: true,
              url: urlBase + "/Order/:Code/OrderDetail",
              method: "GET",
            },

            // INTERNAL. Use Order.OrderDetail.create() instead.
            "prototype$__create__OrderDetail": {
              url: urlBase + "/Order/:Code/OrderDetail",
              method: "POST",
            },

            // INTERNAL. Use Order.OrderDetail.destroyAll() instead.
            "prototype$__delete__OrderDetail": {
              url: urlBase + "/Order/:Code/OrderDetail",
              method: "DELETE",
            },

            // INTERNAL. Use Order.OrderDetail.count() instead.
            "prototype$__count__OrderDetail": {
              url: urlBase + "/Order/:Code/OrderDetail/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#create
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Order",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#createMany
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Order",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#patchOrCreate
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Order",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#replaceOrCreate
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Order/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#upsertWithWhere
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Order/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#exists
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Order/:Code/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#findById
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Order/:Code",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#replaceById
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Order/:Code/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#find
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Order",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#findOne
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Order/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#updateAll
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Order/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#deleteById
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Order/:Code",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#count
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Order/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#prototype$patchAttributes
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Order id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Order/:Code",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#createChangeStream
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Order/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Dealer.Order.findById() instead.
            "::findById::Dealer::Order": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dealers/:Code/Order/:fk",
              method: "GET",
            },

            // INTERNAL. Use Dealer.Order.destroyById() instead.
            "::destroyById::Dealer::Order": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dealers/:Code/Order/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dealer.Order.updateById() instead.
            "::updateById::Dealer::Order": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dealers/:Code/Order/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dealer.Order() instead.
            "::get::Dealer::Order": {
              isArray: true,
              url: urlBase + "/Dealers/:Code/Order",
              method: "GET",
            },

            // INTERNAL. Use Dealer.Order.create() instead.
            "::create::Dealer::Order": {
              url: urlBase + "/Dealers/:Code/Order",
              method: "POST",
            },

            // INTERNAL. Use Dealer.Order.createMany() instead.
            "::createMany::Dealer::Order": {
              isArray: true,
              url: urlBase + "/Dealers/:Code/Order",
              method: "POST",
            },

            // INTERNAL. Use Dealer.Order.destroyAll() instead.
            "::delete::Dealer::Order": {
              url: urlBase + "/Dealers/:Code/Order",
              method: "DELETE",
            },

            // INTERNAL. Use Dealer.Order.count() instead.
            "::count::Dealer::Order": {
              url: urlBase + "/Dealers/:Code/Order/count",
              method: "GET",
            },

            // INTERNAL. Use OrderDetail.Order() instead.
            "::get::OrderDetail::Order": {
              url: urlBase + "/OrderDetail/:Code/Order",
              method: "GET",
            },

            // INTERNAL. Use Kiosk.Order.findById() instead.
            "::findById::Kiosk::Order": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Kiosks/:Code/Order/:fk",
              method: "GET",
            },

            // INTERNAL. Use Kiosk.Order.destroyById() instead.
            "::destroyById::Kiosk::Order": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Kiosks/:Code/Order/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Kiosk.Order.updateById() instead.
            "::updateById::Kiosk::Order": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Kiosks/:Code/Order/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Kiosk.Order() instead.
            "::get::Kiosk::Order": {
              isArray: true,
              url: urlBase + "/Kiosks/:Code/Order",
              method: "GET",
            },

            // INTERNAL. Use Kiosk.Order.create() instead.
            "::create::Kiosk::Order": {
              url: urlBase + "/Kiosks/:Code/Order",
              method: "POST",
            },

            // INTERNAL. Use Kiosk.Order.createMany() instead.
            "::createMany::Kiosk::Order": {
              isArray: true,
              url: urlBase + "/Kiosks/:Code/Order",
              method: "POST",
            },

            // INTERNAL. Use Kiosk.Order.destroyAll() instead.
            "::delete::Kiosk::Order": {
              url: urlBase + "/Kiosks/:Code/Order",
              method: "DELETE",
            },

            // INTERNAL. Use Kiosk.Order.count() instead.
            "::count::Kiosk::Order": {
              url: urlBase + "/Kiosks/:Code/Order/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Order#upsert
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Order#updateOrCreate
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Order#patchOrCreateWithWhere
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Order#update
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Order#destroyById
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Order#removeById
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Order#prototype$updateAttributes
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Order id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Order#modelName
        * @propertyOf lbServices.Order
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Order`.
        */
        R.modelName = "Order";


            /**
             * @ngdoc method
             * @name lbServices.Order#Dealer
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Fetches belongsTo relation Dealer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Order id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
        R.Dealer = function() {
          var TargetResource = $injector.get("Dealer");
          var action = TargetResource["::get::Order::Dealer"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Order.OrderDetail
     * @header lbServices.Order.OrderDetail
     * @object
     * @description
     *
     * The object `Order.OrderDetail` groups methods
     * manipulating `OrderDetail` instances related to `Order`.
     *
     * Call {@link lbServices.Order#OrderDetail Order.OrderDetail()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Order#OrderDetail
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Queries OrderDetail of Order.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Order id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
        R.OrderDetail = function() {
          var TargetResource = $injector.get("OrderDetail");
          var action = TargetResource["::get::Order::OrderDetail"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.OrderDetail#count
             * @methodOf lbServices.Order.OrderDetail
             *
             * @description
             *
             * Counts OrderDetail of Order.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Order id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.OrderDetail.count = function() {
          var TargetResource = $injector.get("OrderDetail");
          var action = TargetResource["::count::Order::OrderDetail"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.OrderDetail#create
             * @methodOf lbServices.Order.OrderDetail
             *
             * @description
             *
             * Creates a new instance in OrderDetail of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Order id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
        R.OrderDetail.create = function() {
          var TargetResource = $injector.get("OrderDetail");
          var action = TargetResource["::create::Order::OrderDetail"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.OrderDetail#createMany
             * @methodOf lbServices.Order.OrderDetail
             *
             * @description
             *
             * Creates a new instance in OrderDetail of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Order id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
        R.OrderDetail.createMany = function() {
          var TargetResource = $injector.get("OrderDetail");
          var action = TargetResource["::createMany::Order::OrderDetail"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.OrderDetail#destroyAll
             * @methodOf lbServices.Order.OrderDetail
             *
             * @description
             *
             * Deletes all OrderDetail of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Order id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.OrderDetail.destroyAll = function() {
          var TargetResource = $injector.get("OrderDetail");
          var action = TargetResource["::delete::Order::OrderDetail"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.OrderDetail#destroyById
             * @methodOf lbServices.Order.OrderDetail
             *
             * @description
             *
             * Delete a related item by id for OrderDetail.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Order id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for OrderDetail
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.OrderDetail.destroyById = function() {
          var TargetResource = $injector.get("OrderDetail");
          var action = TargetResource["::destroyById::Order::OrderDetail"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.OrderDetail#findById
             * @methodOf lbServices.Order.OrderDetail
             *
             * @description
             *
             * Find a related item by id for OrderDetail.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Order id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for OrderDetail
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
        R.OrderDetail.findById = function() {
          var TargetResource = $injector.get("OrderDetail");
          var action = TargetResource["::findById::Order::OrderDetail"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.OrderDetail#updateById
             * @methodOf lbServices.Order.OrderDetail
             *
             * @description
             *
             * Update a related item by id for OrderDetail.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Order id
             *
             *  - `fk` – `{*}` - Foreign key for OrderDetail
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
        R.OrderDetail.updateById = function() {
          var TargetResource = $injector.get("OrderDetail");
          var action = TargetResource["::updateById::Order::OrderDetail"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order#Kiosk
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Fetches belongsTo relation Kiosk.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Order id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Kiosk` object.)
             * </em>
             */
        R.Kiosk = function() {
          var TargetResource = $injector.get("Kiosk");
          var action = TargetResource["::get::Order::Kiosk"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.OrderDetail
 * @header lbServices.OrderDetail
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `OrderDetail` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "OrderDetail",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/OrderDetail/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use OrderDetail.Order() instead.
            "prototype$__get__Order": {
              url: urlBase + "/OrderDetail/:id/Order",
              method: "GET",
            },

            // INTERNAL. Use OrderDetail.Product() instead.
            "prototype$__get__Product": {
              url: urlBase + "/OrderDetail/:id/Product",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#create
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/OrderDetail",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#createMany
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/OrderDetail",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#patchOrCreate
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/OrderDetail",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#replaceOrCreate
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/OrderDetail/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#upsertWithWhere
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/OrderDetail/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#exists
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/OrderDetail/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#findById
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/OrderDetail/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#replaceById
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/OrderDetail/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#find
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/OrderDetail",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#findOne
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/OrderDetail/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#updateAll
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/OrderDetail/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#deleteById
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/OrderDetail/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#count
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/OrderDetail/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#prototype$patchAttributes
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - OrderDetail id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/OrderDetail/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#createChangeStream
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/OrderDetail/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Product.OrderDetail.findById() instead.
            "::findById::Product::OrderDetail": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:id/OrderDetail/:fk",
              method: "GET",
            },

            // INTERNAL. Use Product.OrderDetail.destroyById() instead.
            "::destroyById::Product::OrderDetail": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:id/OrderDetail/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.OrderDetail.updateById() instead.
            "::updateById::Product::OrderDetail": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:id/OrderDetail/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.OrderDetail() instead.
            "::get::Product::OrderDetail": {
              isArray: true,
              url: urlBase + "/Products/:id/OrderDetail",
              method: "GET",
            },

            // INTERNAL. Use Product.OrderDetail.create() instead.
            "::create::Product::OrderDetail": {
              url: urlBase + "/Products/:id/OrderDetail",
              method: "POST",
            },

            // INTERNAL. Use Product.OrderDetail.createMany() instead.
            "::createMany::Product::OrderDetail": {
              isArray: true,
              url: urlBase + "/Products/:id/OrderDetail",
              method: "POST",
            },

            // INTERNAL. Use Product.OrderDetail.destroyAll() instead.
            "::delete::Product::OrderDetail": {
              url: urlBase + "/Products/:id/OrderDetail",
              method: "DELETE",
            },

            // INTERNAL. Use Product.OrderDetail.count() instead.
            "::count::Product::OrderDetail": {
              url: urlBase + "/Products/:id/OrderDetail/count",
              method: "GET",
            },

            // INTERNAL. Use Order.OrderDetail.findById() instead.
            "::findById::Order::OrderDetail": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Order/:id/OrderDetail/:fk",
              method: "GET",
            },

            // INTERNAL. Use Order.OrderDetail.destroyById() instead.
            "::destroyById::Order::OrderDetail": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Order/:id/OrderDetail/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Order.OrderDetail.updateById() instead.
            "::updateById::Order::OrderDetail": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Order/:id/OrderDetail/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Order.OrderDetail() instead.
            "::get::Order::OrderDetail": {
              isArray: true,
              url: urlBase + "/Order/:id/OrderDetail",
              method: "GET",
            },

            // INTERNAL. Use Order.OrderDetail.create() instead.
            "::create::Order::OrderDetail": {
              url: urlBase + "/Order/:id/OrderDetail",
              method: "POST",
            },

            // INTERNAL. Use Order.OrderDetail.createMany() instead.
            "::createMany::Order::OrderDetail": {
              isArray: true,
              url: urlBase + "/Order/:id/OrderDetail",
              method: "POST",
            },

            // INTERNAL. Use Order.OrderDetail.destroyAll() instead.
            "::delete::Order::OrderDetail": {
              url: urlBase + "/Order/:id/OrderDetail",
              method: "DELETE",
            },

            // INTERNAL. Use Order.OrderDetail.count() instead.
            "::count::Order::OrderDetail": {
              url: urlBase + "/Order/:id/OrderDetail/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#upsert
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#updateOrCreate
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#patchOrCreateWithWhere
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#update
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#destroyById
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#removeById
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#prototype$updateAttributes
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - OrderDetail id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `OrderDetail` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.OrderDetail#modelName
        * @propertyOf lbServices.OrderDetail
        * @description
        * The name of the model represented by this $resource,
        * i.e. `OrderDetail`.
        */
        R.modelName = "OrderDetail";


            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#Order
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Fetches belongsTo relation Order.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - OrderDetail id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.Order = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::OrderDetail::Order"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.OrderDetail#Product
             * @methodOf lbServices.OrderDetail
             *
             * @description
             *
             * Fetches belongsTo relation Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - OrderDetail id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.Product = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::get::OrderDetail::Product"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.ProductDealer
 * @header lbServices.ProductDealer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ProductDealer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "ProductDealer",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/ProductDealers/:Id",
          { 'id': '@id' },
          {

            // INTERNAL. Use ProductDealer.Dealer() instead.
            "prototype$__get__Dealer": {
              url: urlBase + "/ProductDealers/:Id/Dealer",
              method: "GET",
            },

            // INTERNAL. Use ProductDealer.Product() instead.
            "prototype$__get__Product": {
              url: urlBase + "/ProductDealers/:Id/Product",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#create
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/ProductDealers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#createMany
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/ProductDealers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#patchOrCreate
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/ProductDealers",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#replaceOrCreate
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/ProductDealers/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#upsertWithWhere
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/ProductDealers/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#exists
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/ProductDealers/:Id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#findById
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/ProductDealers/:Id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#replaceById
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/ProductDealers/:Id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#find
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/ProductDealers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#findOne
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/ProductDealers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#updateAll
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/ProductDealers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#deleteById
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/ProductDealers/:Id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#count
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/ProductDealers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#prototype$patchAttributes
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ProductDealer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/ProductDealers/:Id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#createChangeStream
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/ProductDealers/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Product.ProductDealer.findById() instead.
            "::findById::Product::ProductDealer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:Code/ProductDealer/:fk",
              method: "GET",
            },

            // INTERNAL. Use Product.ProductDealer.destroyById() instead.
            "::destroyById::Product::ProductDealer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:Code/ProductDealer/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.ProductDealer.updateById() instead.
            "::updateById::Product::ProductDealer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:Code/ProductDealer/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.ProductDealer() instead.
            "::get::Product::ProductDealer": {
              isArray: true,
              url: urlBase + "/Products/:Code/ProductDealer",
              method: "GET",
            },

            // INTERNAL. Use Product.ProductDealer.create() instead.
            "::create::Product::ProductDealer": {
              url: urlBase + "/Products/:Code/ProductDealer",
              method: "POST",
            },

            // INTERNAL. Use Product.ProductDealer.createMany() instead.
            "::createMany::Product::ProductDealer": {
              isArray: true,
              url: urlBase + "/Products/:Code/ProductDealer",
              method: "POST",
            },

            // INTERNAL. Use Product.ProductDealer.destroyAll() instead.
            "::delete::Product::ProductDealer": {
              url: urlBase + "/Products/:Code/ProductDealer",
              method: "DELETE",
            },

            // INTERNAL. Use Product.ProductDealer.count() instead.
            "::count::Product::ProductDealer": {
              url: urlBase + "/Products/:Code/ProductDealer/count",
              method: "GET",
            },

            // INTERNAL. Use Dealer.ProductDealer.findById() instead.
            "::findById::Dealer::ProductDealer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dealers/:Code/ProductDealer/:fk",
              method: "GET",
            },

            // INTERNAL. Use Dealer.ProductDealer.destroyById() instead.
            "::destroyById::Dealer::ProductDealer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dealers/:Code/ProductDealer/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Dealer.ProductDealer.updateById() instead.
            "::updateById::Dealer::ProductDealer": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Dealers/:Code/ProductDealer/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Dealer.ProductDealer() instead.
            "::get::Dealer::ProductDealer": {
              isArray: true,
              url: urlBase + "/Dealers/:Code/ProductDealer",
              method: "GET",
            },

            // INTERNAL. Use Dealer.ProductDealer.create() instead.
            "::create::Dealer::ProductDealer": {
              url: urlBase + "/Dealers/:Code/ProductDealer",
              method: "POST",
            },

            // INTERNAL. Use Dealer.ProductDealer.createMany() instead.
            "::createMany::Dealer::ProductDealer": {
              isArray: true,
              url: urlBase + "/Dealers/:Code/ProductDealer",
              method: "POST",
            },

            // INTERNAL. Use Dealer.ProductDealer.destroyAll() instead.
            "::delete::Dealer::ProductDealer": {
              url: urlBase + "/Dealers/:Code/ProductDealer",
              method: "DELETE",
            },

            // INTERNAL. Use Dealer.ProductDealer.count() instead.
            "::count::Dealer::ProductDealer": {
              url: urlBase + "/Dealers/:Code/ProductDealer/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#upsert
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#updateOrCreate
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#patchOrCreateWithWhere
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#update
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#destroyById
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#removeById
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#prototype$updateAttributes
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ProductDealer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductDealer` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.ProductDealer#modelName
        * @propertyOf lbServices.ProductDealer
        * @description
        * The name of the model represented by this $resource,
        * i.e. `ProductDealer`.
        */
        R.modelName = "ProductDealer";


            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#Dealer
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Fetches belongsTo relation Dealer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ProductDealer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
        R.Dealer = function() {
          var TargetResource = $injector.get("Dealer");
          var action = TargetResource["::get::ProductDealer::Dealer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductDealer#Product
             * @methodOf lbServices.ProductDealer
             *
             * @description
             *
             * Fetches belongsTo relation Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ProductDealer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.Product = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::get::ProductDealer::Product"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

module.factory(
  "ProductCategory",
  [
    'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
    function(LoopBackResource, LoopBackAuth, $injector, $q) {
      var R = LoopBackResource(
      urlBase + "/ProductCategories/:Id",
        { 'id': '@id' },
        {

         

          // INTERNAL. Use ProductCategorie.Product() instead.
          "prototype$__get__Product": {
            url: urlBase + "/ProductCategories/:Id/Product",
            method: "GET",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#create
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "create": {
            url: urlBase + "/ProductCategories",
            method: "POST",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#createMany
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "createMany": {
            isArray: true,
            url: urlBase + "/ProductCategories",
            method: "POST",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#patchOrCreate
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Patch an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "patchOrCreate": {
            url: urlBase + "/ProductCategories",
            method: "PATCH",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#replaceOrCreate
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Replace an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "replaceOrCreate": {
            url: urlBase + "/ProductCategories/replaceOrCreate",
            method: "POST",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#upsertWithWhere
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source based on the where criteria.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - An object of model property name/value pairs
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "upsertWithWhere": {
            url: urlBase + "/ProductCategories/upsertWithWhere",
            method: "POST",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#exists
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` -
           */
          "exists": {
            url: urlBase + "/ProductCategories/:Code/exists",
            method: "GET",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#findById
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Find a model instance by {{id}} from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "findById": {
            url: urlBase + "/ProductCategories/:Code",
            method: "GET",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#replaceById
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Replace attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "replaceById": {
            url: urlBase + "/ProductCategories/:Code/replace",
            method: "POST",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#find
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "find": {
            isArray: true,
            url: urlBase + "/ProductCategories",
            method: "GET",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#findOne
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "findOne": {
            url: urlBase + "/ProductCategories/findOne",
            method: "GET",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#updateAll
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Update instances of the model matched by {{where}} from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - An object of model property name/value pairs
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Information related to the outcome of the operation
           */
          "updateAll": {
            url: urlBase + "/ProductCategories/update",
            method: "POST",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#deleteById
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Delete a model instance by {{id}} from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "deleteById": {
            url: urlBase + "/ProductCategories/:Code",
            method: "DELETE",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#count
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` -
           */
          "count": {
            url: urlBase + "/ProductCategories/count",
            method: "GET",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#prototype$patchAttributes
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Patch attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - ProductCategorie id
           *
           *  - `options` – `{object=}` -
           *
           *  - `data` – `{object=}` - An object of model property name/value pairs
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "prototype$patchAttributes": {
            url: urlBase + "/ProductCategories/:Code",
            method: "PATCH",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#createChangeStream
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Create a change stream.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `changes` – `{ReadableStream=}` -
           */
          "createChangeStream": {
            url: urlBase + "/ProductCategories/change-stream",
            method: "POST",
          },
        }
      );



          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#upsert
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Patch an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
      R["upsert"] = R["patchOrCreate"];

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#updateOrCreate
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Patch an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
      R["updateOrCreate"] = R["patchOrCreate"];

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#patchOrCreateWithWhere
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source based on the where criteria.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - An object of model property name/value pairs
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
      R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#update
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Update instances of the model matched by {{where}} from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - An object of model property name/value pairs
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Information related to the outcome of the operation
           */
      R["update"] = R["updateAll"];

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#destroyById
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Delete a model instance by {{id}} from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
      R["destroyById"] = R["deleteById"];

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#removeById
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Delete a model instance by {{id}} from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
      R["removeById"] = R["deleteById"];

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#prototype$updateAttributes
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Patch attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - ProductCategorie id
           *
           *  - `options` – `{object=}` -
           *
           *  - `data` – `{object=}` - An object of model property name/value pairs
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
      R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


      /**
      * @ngdoc property
      * @name lbServices.ProductCategorie#modelName
      * @propertyOf lbServices.ProductCategorie
      * @description
      * The name of the model represented by this $resource,
      * i.e. `ProductCategorie`.
      */
      R.modelName = "ProductCategory";


          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#Dealer
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Fetches belongsTo relation Dealer.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - ProductCategorie id
           *
           *  - `options` – `{object=}` -
           *
           *  - `refresh` – `{boolean=}` -
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Dealer` object.)
           * </em>
           */
      


      return R;
    }]);

module.factory(
  "Product_productCategory",
  [
    'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
    function(LoopBackResource, LoopBackAuth, $injector, $q) {
      var R = LoopBackResource(
      urlBase + "/Product_productCategories/:Id",
        { 'id': '@id' },
        {

          

          // INTERNAL. Use ProductCategorie.Product() instead.
          "prototype$__get__Product": {
            url: urlBase + "/Product_productCategories/:Id/Product",
            method: "GET",
          },

          "prototype$__get__Product": {
            url: urlBase + "/Product_productCategories/:Id/ProductCategory",
            method: "GET",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#create
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "create": {
            url: urlBase + "/Product_productCategories",
            method: "POST",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#createMany
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Create a new instance of the model and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "createMany": {
            isArray: true,
            url: urlBase + "/Product_productCategories",
            method: "POST",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#patchOrCreate
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Patch an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "patchOrCreate": {
            url: urlBase + "/Product_productCategories",
            method: "PATCH",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#replaceOrCreate
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Replace an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "replaceOrCreate": {
            url: urlBase + "/Product_productCategories/replaceOrCreate",
            method: "POST",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#upsertWithWhere
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source based on the where criteria.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - An object of model property name/value pairs
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "upsertWithWhere": {
            url: urlBase + "/Product_productCategories/upsertWithWhere",
            method: "POST",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#exists
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Check whether a model instance exists in the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `exists` – `{boolean=}` -
           */
          "exists": {
            url: urlBase + "/Product_productCategories/:Id/exists",
            method: "GET",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#findById
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Find a model instance by {{id}} from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "findById": {
            url: urlBase + "/Product_productCategories/:Id",
            method: "GET",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#replaceById
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Replace attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "replaceById": {
            url: urlBase + "/Product_productCategories/:Id/replace",
            method: "POST",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#find
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Find all instances of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Array.<Object>,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Array.<Object>} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "find": {
            isArray: true,
            url: urlBase + "/Product_productCategories",
            method: "GET",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#findOne
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Find first instance of the model matched by filter from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "findOne": {
            url: urlBase + "/Product_productCategories/findOne",
            method: "GET",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#updateAll
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Update instances of the model matched by {{where}} from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - An object of model property name/value pairs
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Information related to the outcome of the operation
           */
          "updateAll": {
            url: urlBase + "/Product_productCategories/update",
            method: "POST",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#deleteById
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Delete a model instance by {{id}} from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "deleteById": {
            url: urlBase + "/Product_productCategories/:Id",
            method: "DELETE",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#count
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Count instances of the model matched by where from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `count` – `{number=}` -
           */
          "count": {
            url: urlBase + "/Product_productCategories/count",
            method: "GET",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#prototype$patchAttributes
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Patch attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - ProductCategorie id
           *
           *  - `options` – `{object=}` -
           *
           *  - `data` – `{object=}` - An object of model property name/value pairs
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
          "prototype$patchAttributes": {
            url: urlBase + "/Product_productCategories/:Id",
            method: "PATCH",
          },

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#createChangeStream
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Create a change stream.
           *
           * @param {Object=} parameters Request parameters.
           *
           *   This method does not accept any parameters.
           *   Supply an empty object or omit this argument altogether.
           *
           * @param {Object} postData Request data.
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Data properties:
           *
           *  - `changes` – `{ReadableStream=}` -
           */
          "createChangeStream": {
            url: urlBase + "/Product_productCategories/change-stream",
            method: "POST",
          },
        }
      );



          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#upsert
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Patch an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
      R["upsert"] = R["patchOrCreate"];

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#updateOrCreate
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Patch an existing model instance or insert a new one into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `data` – `{object=}` - Model instance data
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
      R["updateOrCreate"] = R["patchOrCreate"];

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#patchOrCreateWithWhere
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Update an existing model instance or insert a new one into the data source based on the where criteria.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - An object of model property name/value pairs
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
      R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#update
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Update instances of the model matched by {{where}} from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `where` – `{object=}` - Criteria to match model instances
           *
           * @param {Object} postData Request data.
           *
           *  - `data` – `{object=}` - An object of model property name/value pairs
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * Information related to the outcome of the operation
           */
      R["update"] = R["updateAll"];

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#destroyById
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Delete a model instance by {{id}} from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
      R["destroyById"] = R["deleteById"];

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#removeById
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Delete a model instance by {{id}} from the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - Model id
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
      R["removeById"] = R["deleteById"];

          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#prototype$updateAttributes
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Patch attributes for a model instance and persist it into the data source.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - ProductCategorie id
           *
           *  - `options` – `{object=}` -
           *
           *  - `data` – `{object=}` - An object of model property name/value pairs
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `ProductCategorie` object.)
           * </em>
           */
      R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


      /**
      * @ngdoc property
      * @name lbServices.ProductCategorie#modelName
      * @propertyOf lbServices.ProductCategorie
      * @description
      * The name of the model represented by this $resource,
      * i.e. `ProductCategorie`.
      */
      R.modelName = "Product_productCategory";


          /**
           * @ngdoc method
           * @name lbServices.ProductCategorie#Dealer
           * @methodOf lbServices.ProductCategorie
           *
           * @description
           *
           * Fetches belongsTo relation Dealer.
           *
           * @param {Object=} parameters Request parameters.
           *
           *  - `id` – `{*}` - ProductCategorie id
           *
           *  - `options` – `{object=}` -
           *
           *  - `refresh` – `{boolean=}` -
           *
           *  - `options` – `{object=}` -
           *
           * @param {function(Object,Object)=} successCb
           *   Success callback with two arguments: `value`, `responseHeaders`.
           *
           * @param {function(Object)=} errorCb Error callback with one argument:
           *   `httpResponse`.
           *
           * @returns {Object} An empty reference that will be
           *   populated with the actual data once the response is returned
           *   from the server.
           *
           * <em>
           * (The remote method definition does not provide any description.
           * This usually means the response is a `Dealer` object.)
           * </em>
           */
      


      return R;
    }]);

      module.factory(
        "KioskProductDealer",
        [
          'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
          function(LoopBackResource, LoopBackAuth, $injector, $q) {
            var R = LoopBackResource(
            urlBase + "/KioskProductDealers/:Id",
              { 'id': '@id' },
              {
    
                
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#create
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *   This method does not accept any parameters.
                 *   Supply an empty object or omit this argument altogether.
                 *
                 * @param {Object} postData Request data.
                 *
                 *  - `data` – `{object=}` - Model instance data
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `KioskProductDealer` object.)
                 * </em>
                 */
                "create": {
                  url: urlBase + "/KioskProductDealers",
                  method: "POST",
                },
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#createMany
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Create a new instance of the model and persist it into the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *   This method does not accept any parameters.
                 *   Supply an empty object or omit this argument altogether.
                 *
                 * @param {Object} postData Request data.
                 *
                 *  - `data` – `{object=}` - Model instance data
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Array.<Object>,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Array.<Object>} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `KioskProductDealer` object.)
                 * </em>
                 */
                "createMany": {
                  isArray: true,
                  url: urlBase + "/KioskProductDealers",
                  method: "POST",
                },
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#patchOrCreate
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Patch an existing model instance or insert a new one into the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `data` – `{object=}` - Model instance data
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `KioskProductDealer` object.)
                 * </em>
                 */
                "patchOrCreate": {
                  url: urlBase + "/KioskProductDealers",
                  method: "PATCH",
                },
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#replaceOrCreate
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Replace an existing model instance or insert a new one into the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *   This method does not accept any parameters.
                 *   Supply an empty object or omit this argument altogether.
                 *
                 * @param {Object} postData Request data.
                 *
                 *  - `data` – `{object=}` - Model instance data
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `KioskProductDealer` object.)
                 * </em>
                 */
                "replaceOrCreate": {
                  url: urlBase + "/KioskProductDealers/replaceOrCreate",
                  method: "POST",
                },
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#upsertWithWhere
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Update an existing model instance or insert a new one into the data source based on the where criteria.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `where` – `{object=}` - Criteria to match model instances
                 *
                 * @param {Object} postData Request data.
                 *
                 *  - `data` – `{object=}` - An object of model property name/value pairs
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `KioskProductDealer` object.)
                 * </em>
                 */
                "upsertWithWhere": {
                  url: urlBase + "/KioskProductDealers/upsertWithWhere",
                  method: "POST",
                },
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#exists
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Check whether a model instance exists in the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - Model id
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `exists` – `{boolean=}` -
                 */
                "exists": {
                  url: urlBase + "/KioskProductDealers/:Id/exists",
                  method: "GET",
                },
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#findById
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Find a model instance by {{id}} from the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - Model id
                 *
                 *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `KioskProductDealer` object.)
                 * </em>
                 */
                "findById": {
                  url: urlBase + "/KioskProductDealers/:Id",
                  method: "GET",
                },
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#replaceById
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Replace attributes for a model instance and persist it into the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - Model id
                 *
                 * @param {Object} postData Request data.
                 *
                 *  - `data` – `{object=}` - Model instance data
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `KioskProductDealer` object.)
                 * </em>
                 */
                "replaceById": {
                  url: urlBase + "/KioskProductDealers/:Id/replace",
                  method: "POST",
                },
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#find
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Find all instances of the model matched by filter from the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Array.<Object>,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Array.<Object>} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `KioskProductDealer` object.)
                 * </em>
                 */
                "find": {
                  isArray: true,
                  url: urlBase + "/KioskProductDealers",
                  method: "GET",
                },
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#findOne
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Find first instance of the model matched by filter from the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `KioskProductDealer` object.)
                 * </em>
                 */
                "findOne": {
                  url: urlBase + "/KioskProductDealers/findOne",
                  method: "GET",
                },
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#updateAll
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Update instances of the model matched by {{where}} from the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `where` – `{object=}` - Criteria to match model instances
                 *
                 * @param {Object} postData Request data.
                 *
                 *  - `data` – `{object=}` - An object of model property name/value pairs
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Information related to the outcome of the operation
                 */
                "updateAll": {
                  url: urlBase + "/KioskProductDealers/update",
                  method: "POST",
                },
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#deleteById
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Delete a model instance by {{id}} from the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - Model id
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `KioskProductDealer` object.)
                 * </em>
                 */
                "deleteById": {
                  url: urlBase + "/KioskProductDealers/:Id",
                  method: "DELETE",
                },
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#count
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Count instances of the model matched by where from the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `where` – `{object=}` - Criteria to match model instances
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `count` – `{number=}` -
                 */
                "count": {
                  url: urlBase + "/KioskProductDealers/count",
                  method: "GET",
                },
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#prototype$patchAttributes
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Patch attributes for a model instance and persist it into the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - KioskProductDealer id
                 *
                 *  - `options` – `{object=}` -
                 *
                 *  - `data` – `{object=}` - An object of model property name/value pairs
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `KioskProductDealer` object.)
                 * </em>
                 */
                "prototype$patchAttributes": {
                  url: urlBase + "/KioskProductDealers/:Id",
                  method: "PATCH",
                },
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#createChangeStream
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Create a change stream.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *   This method does not accept any parameters.
                 *   Supply an empty object or omit this argument altogether.
                 *
                 * @param {Object} postData Request data.
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Data properties:
                 *
                 *  - `changes` – `{ReadableStream=}` -
                 */
                "createChangeStream": {
                  url: urlBase + "/KioskProductDealers/change-stream",
                  method: "POST",
                },            
              }
            );
    
    
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#upsert
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Patch an existing model instance or insert a new one into the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `data` – `{object=}` - Model instance data
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `KioskProductDealer` object.)
                 * </em>
                 */
            R["upsert"] = R["patchOrCreate"];
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#updateOrCreate
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Patch an existing model instance or insert a new one into the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `data` – `{object=}` - Model instance data
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `KioskProductDealer` object.)
                 * </em>
                 */
            R["updateOrCreate"] = R["patchOrCreate"];
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#patchOrCreateWithWhere
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Update an existing model instance or insert a new one into the data source based on the where criteria.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `where` – `{object=}` - Criteria to match model instances
                 *
                 * @param {Object} postData Request data.
                 *
                 *  - `data` – `{object=}` - An object of model property name/value pairs
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `KioskProductDealer` object.)
                 * </em>
                 */
            R["patchOrCreateWithWhere"] = R["upsertWithWhere"];
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#update
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Update instances of the model matched by {{where}} from the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `where` – `{object=}` - Criteria to match model instances
                 *
                 * @param {Object} postData Request data.
                 *
                 *  - `data` – `{object=}` - An object of model property name/value pairs
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * Information related to the outcome of the operation
                 */
            R["update"] = R["updateAll"];
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#destroyById
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Delete a model instance by {{id}} from the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - Model id
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `KioskProductDealer` object.)
                 * </em>
                 */
            R["destroyById"] = R["deleteById"];
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#removeById
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Delete a model instance by {{id}} from the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - Model id
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `KioskProductDealer` object.)
                 * </em>
                 */
            R["removeById"] = R["deleteById"];
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#prototype$updateAttributes
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Patch attributes for a model instance and persist it into the data source.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - KioskProductDealer id
                 *
                 *  - `options` – `{object=}` -
                 *
                 *  - `data` – `{object=}` - An object of model property name/value pairs
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `KioskProductDealer` object.)
                 * </em>
                 */
            R["prototype$updateAttributes"] = R["prototype$patchAttributes"];
    
    
            /**
            * @ngdoc property
            * @name lbServices.KioskProductDealer#modelName
            * @propertyOf lbServices.KioskProductDealer
            * @description
            * The name of the model represented by this $resource,
            * i.e. `KioskProductDealer`.
            */
            R.modelName = "KioskProductDealer";
    
    
                /**
                 * @ngdoc method
                 * @name lbServices.KioskProductDealer#Dealer
                 * @methodOf lbServices.KioskProductDealer
                 *
                 * @description
                 *
                 * Fetches belongsTo relation Dealer.
                 *
                 * @param {Object=} parameters Request parameters.
                 *
                 *  - `id` – `{*}` - KioskProductDealer id
                 *
                 *  - `options` – `{object=}` -
                 *
                 *  - `refresh` – `{boolean=}` -
                 *
                 *  - `options` – `{object=}` -
                 *
                 * @param {function(Object,Object)=} successCb
                 *   Success callback with two arguments: `value`, `responseHeaders`.
                 *
                 * @param {function(Object)=} errorCb Error callback with one argument:
                 *   `httpResponse`.
                 *
                 * @returns {Object} An empty reference that will be
                 *   populated with the actual data once the response is returned
                 *   from the server.
                 *
                 * <em>
                 * (The remote method definition does not provide any description.
                 * This usually means the response is a `Dealer` object.)
                 * </em>
                 */
    
            return R;
          }]);

/**
 * @ngdoc object
 * @name lbServices.Test
 * @header lbServices.Test
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Test` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Test",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/tests/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Test#create
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/tests",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#createMany
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/tests",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#patchOrCreate
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/tests",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#replaceOrCreate
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/tests/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#upsertWithWhere
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/tests/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#exists
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/tests/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#findById
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/tests/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#replaceById
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/tests/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#find
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/tests",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#findOne
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/tests/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#updateAll
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/tests/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#deleteById
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/tests/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#count
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/tests/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#prototype$patchAttributes
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - test id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/tests/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Test#createChangeStream
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/tests/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Test#upsert
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Test#updateOrCreate
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Test#patchOrCreateWithWhere
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Test#update
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Test#destroyById
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Test#removeById
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Test#prototype$updateAttributes
             * @methodOf lbServices.Test
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - test id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Test` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Test#modelName
        * @propertyOf lbServices.Test
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Test`.
        */
        R.modelName = "Test";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.CobaBase
 * @header lbServices.CobaBase
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CobaBase` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "CobaBase",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/CobaBases/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use CobaBase.Product.findById() instead.
            "prototype$__findById__Product": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/CobaBases/:id/Product/:fk",
              method: "GET",
            },

            // INTERNAL. Use CobaBase.Product.destroyById() instead.
            "prototype$__destroyById__Product": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/CobaBases/:id/Product/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use CobaBase.Product.updateById() instead.
            "prototype$__updateById__Product": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/CobaBases/:id/Product/:fk",
              method: "PUT",
            },

            // INTERNAL. Use CobaBase.Product() instead.
            "prototype$__get__Product": {
              isArray: true,
              url: urlBase + "/CobaBases/:id/Product",
              method: "GET",
            },

            // INTERNAL. Use CobaBase.Product.create() instead.
            "prototype$__create__Product": {
              url: urlBase + "/CobaBases/:id/Product",
              method: "POST",
            },

            // INTERNAL. Use CobaBase.Product.destroyAll() instead.
            "prototype$__delete__Product": {
              url: urlBase + "/CobaBases/:id/Product",
              method: "DELETE",
            },

            // INTERNAL. Use CobaBase.Product.count() instead.
            "prototype$__count__Product": {
              url: urlBase + "/CobaBases/:id/Product/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#create
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CobaBase` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/CobaBases",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#createMany
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CobaBase` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/CobaBases",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#patchOrCreate
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CobaBase` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/CobaBases",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#replaceOrCreate
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CobaBase` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/CobaBases/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#upsertWithWhere
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CobaBase` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/CobaBases/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#exists
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/CobaBases/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#findById
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CobaBase` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/CobaBases/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#replaceById
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CobaBase` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/CobaBases/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#find
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CobaBase` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/CobaBases",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#findOne
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CobaBase` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/CobaBases/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#updateAll
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/CobaBases/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#deleteById
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CobaBase` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/CobaBases/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#count
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/CobaBases/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#prototype$patchAttributes
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CobaBase id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CobaBase` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/CobaBases/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#createChangeStream
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/CobaBases/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.CobaBase#upsert
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CobaBase` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#updateOrCreate
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CobaBase` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#patchOrCreateWithWhere
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CobaBase` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#update
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#destroyById
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CobaBase` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#removeById
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CobaBase` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.CobaBase#prototype$updateAttributes
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CobaBase id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CobaBase` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.CobaBase#modelName
        * @propertyOf lbServices.CobaBase
        * @description
        * The name of the model represented by this $resource,
        * i.e. `CobaBase`.
        */
        R.modelName = "CobaBase";

    /**
     * @ngdoc object
     * @name lbServices.CobaBase.Product
     * @header lbServices.CobaBase.Product
     * @object
     * @description
     *
     * The object `CobaBase.Product` groups methods
     * manipulating `Product` instances related to `CobaBase`.
     *
     * Call {@link lbServices.CobaBase#Product CobaBase.Product()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.CobaBase#Product
             * @methodOf lbServices.CobaBase
             *
             * @description
             *
             * Queries Product of CobaBase.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CobaBase id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.Product = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::get::CobaBase::Product"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CobaBase.Product#count
             * @methodOf lbServices.CobaBase.Product
             *
             * @description
             *
             * Counts Product of CobaBase.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CobaBase id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.Product.count = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::count::CobaBase::Product"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CobaBase.Product#create
             * @methodOf lbServices.CobaBase.Product
             *
             * @description
             *
             * Creates a new instance in Product of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CobaBase id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.Product.create = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::create::CobaBase::Product"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CobaBase.Product#createMany
             * @methodOf lbServices.CobaBase.Product
             *
             * @description
             *
             * Creates a new instance in Product of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CobaBase id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.Product.createMany = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::createMany::CobaBase::Product"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CobaBase.Product#destroyAll
             * @methodOf lbServices.CobaBase.Product
             *
             * @description
             *
             * Deletes all Product of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CobaBase id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.Product.destroyAll = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::delete::CobaBase::Product"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CobaBase.Product#destroyById
             * @methodOf lbServices.CobaBase.Product
             *
             * @description
             *
             * Delete a related item by id for Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CobaBase id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for Product
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.Product.destroyById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::destroyById::CobaBase::Product"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CobaBase.Product#findById
             * @methodOf lbServices.CobaBase.Product
             *
             * @description
             *
             * Find a related item by id for Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CobaBase id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for Product
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.Product.findById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::findById::CobaBase::Product"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CobaBase.Product#updateById
             * @methodOf lbServices.CobaBase.Product
             *
             * @description
             *
             * Update a related item by id for Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CobaBase id
             *
             *  - `fk` – `{*}` - Foreign key for Product
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.Product.updateById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::updateById::CobaBase::Product"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

 module.factory(
    "Kiosk",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Kiosks/:Code",
          { 'id': '@id' },
          {

            // INTERNAL. Use Kiosk.Order.findById() instead.
            "prototype$__findById__Order": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Kiosks/:Code/Order/:fk",
              method: "GET",
            },

            // INTERNAL. Use Kiosk.Order.destroyById() instead.
            "prototype$__destroyById__Order": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Kiosks/:Code/Order/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Kiosk.Order.updateById() instead.
            "prototype$__updateById__Order": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Kiosks/:Code/Order/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Kiosk.Order() instead.
            "prototype$__get__Order": {
              isArray: true,
              url: urlBase + "/Kiosks/:Code/Order",
              method: "GET",
            },

            // INTERNAL. Use Kiosk.Order.create() instead.
            "prototype$__create__Order": {
              url: urlBase + "/Kiosks/:Code/Order",
              method: "POST",
            },

            // INTERNAL. Use Kiosk.Order.destroyAll() instead.
            "prototype$__delete__Order": {
              url: urlBase + "/Kiosks/:Code/Order",
              method: "DELETE",
            },

            // INTERNAL. Use Kiosk.Order.count() instead.
            "prototype$__count__Order": {
              url: urlBase + "/Kiosks/:Code/Order/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#create
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Kiosk` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Kiosks",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#createMany
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Kiosk` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Kiosks",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#patchOrCreate
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Kiosk` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Kiosks",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#replaceOrCreate
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Kiosk` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Kiosks/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#upsertWithWhere
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Kiosk` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Kiosks/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#exists
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Kiosks/:Code/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#findById
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Kiosk` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Kiosks/:Code",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#replaceById
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Kiosk` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Kiosks/:Code/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#find
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Kiosk` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Kiosks",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#findOne
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Kiosk` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Kiosks/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#updateAll
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Kiosks/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#deleteById
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Kiosk` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Kiosks/:Code",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#count
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Kiosks/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#prototype$patchAttributes
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Kiosk id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Kiosk` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Kiosks/:Code",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#createChangeStream
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Kiosks/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Order.Kiosk() instead.
            "::get::Order::Kiosk": {
              url: urlBase + "/Order/:Code/Kiosk",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Kiosk#upsert
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Kiosk` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#updateOrCreate
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Kiosk` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#patchOrCreateWithWhere
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Kiosk` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#update
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#destroyById
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Kiosk` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#removeById
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Kiosk` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Kiosk#prototype$updateAttributes
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Kiosk id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Kiosk` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Kiosk#modelName
        * @propertyOf lbServices.Kiosk
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Kiosk`.
        */
        R.modelName = "Kiosk";

    /**
     * @ngdoc object
     * @name lbServices.Kiosk.Order
     * @header lbServices.Kiosk.Order
     * @object
     * @description
     *
     * The object `Kiosk.Order` groups methods
     * manipulating `Order` instances related to `Kiosk`.
     *
     * Call {@link lbServices.Kiosk#Order Kiosk.Order()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Kiosk#Order
             * @methodOf lbServices.Kiosk
             *
             * @description
             *
             * Queries Order of Kiosk.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Kiosk id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.Order = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::Kiosk::Order"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Kiosk.Order#count
             * @methodOf lbServices.Kiosk.Order
             *
             * @description
             *
             * Counts Order of Kiosk.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Kiosk id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.Order.count = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::count::Kiosk::Order"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Kiosk.Order#create
             * @methodOf lbServices.Kiosk.Order
             *
             * @description
             *
             * Creates a new instance in Order of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Kiosk id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.Order.create = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::create::Kiosk::Order"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Kiosk.Order#createMany
             * @methodOf lbServices.Kiosk.Order
             *
             * @description
             *
             * Creates a new instance in Order of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Kiosk id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.Order.createMany = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::createMany::Kiosk::Order"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Kiosk.Order#destroyAll
             * @methodOf lbServices.Kiosk.Order
             *
             * @description
             *
             * Deletes all Order of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Kiosk id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.Order.destroyAll = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::delete::Kiosk::Order"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Kiosk.Order#destroyById
             * @methodOf lbServices.Kiosk.Order
             *
             * @description
             *
             * Delete a related item by id for Order.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Kiosk id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for Order
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.Order.destroyById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::destroyById::Kiosk::Order"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Kiosk.Order#findById
             * @methodOf lbServices.Kiosk.Order
             *
             * @description
             *
             * Find a related item by id for Order.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Kiosk id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for Order
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.Order.findById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::findById::Kiosk::Order"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Kiosk.Order#updateById
             * @methodOf lbServices.Kiosk.Order
             *
             * @description
             *
             * Update a related item by id for Order.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Kiosk id
             *
             *  - `fk` – `{*}` - Foreign key for Order
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.Order.updateById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::updateById::Kiosk::Order"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

    module.factory(
    "VProductDealer",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/VProductDealers/:Id",
          { 'id': '@id' },
          {



            /**
             * @ngdoc method
             * @name lbServices.VProductDealer#findById
             * @methodOf lbServices.VProductDealer
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VProductDealer` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/VProductDealers/:Id",
              method: "GET",
            },

            
            /**
             * @ngdoc method
             * @name lbServices.VProductDealer#find
             * @methodOf lbServices.VProductDealer
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VProductDealer` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/VProductDealers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VProductDealer#findOne
             * @methodOf lbServices.VProductDealer
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VProductDealer` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/VProductDealers/findOne",
              method: "GET",
            },

           

            /**
             * @ngdoc method
             * @name lbServices.VProductDealer#count
             * @methodOf lbServices.VProductDealer
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/VProductDealers/count",
              method: "GET",
            },

           
          }
        );



        /**
        * @ngdoc property
        * @name lbServices.VProductDealer#modelName
        * @propertyOf lbServices.VProductDealer
        * @description
        * The name of the model represented by this $resource,
        * i.e. `VProductDealer`.
        */
        R.modelName = "VProductDealer";


            /**
             * @ngdoc method
             * @name lbServices.VProductDealer#Dealer
             * @methodOf lbServices.VProductDealer
             *
             * @description
             *
             * Fetches belongsTo relation Dealer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - VProductDealer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
        R.VProductDealer = function() {
          var TargetResource = $injector.get("VProductDealer");
          var action = TargetResource["::get::VProductDealer::Dealer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VProductDealer#Product
             * @methodOf lbServices.VProductDealer
             *
             * @description
             *
             * Fetches belongsTo relation Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - VProductDealer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
       


        return R;
      }]);
  module.factory(
    "VKioskProductDealer",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/VKioskProductDealers/:Id",
          { 'id': '@id' },
          {



            /**
             * @ngdoc method
             * @name lbServices.VKioskProductDealer#findById
             * @methodOf lbServices.VKioskProductDealer
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VKioskProductDealer` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/VKioskProductDealers/:Id",
              method: "GET",
            },

            
            /**
             * @ngdoc method
             * @name lbServices.VKioskProductDealer#find
             * @methodOf lbServices.VKioskProductDealer
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VKioskProductDealer` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/VKioskProductDealers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VKioskProductDealer#findOne
             * @methodOf lbServices.VKioskProductDealer
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VKioskProductDealer` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/VKioskProductDealers/findOne",
              method: "GET",
            },

            

            /**
             * @ngdoc method
             * @name lbServices.VKioskProductDealer#count
             * @methodOf lbServices.VKioskProductDealer
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/VKioskProductDealers/count",
              method: "GET",
            },

            
          }
        );



        /**
        * @ngdoc property
        * @name lbServices.VKioskProductDealer#modelName
        * @propertyOf lbServices.VKioskProductDealer
        * @description
        * The name of the model represented by this $resource,
        * i.e. `VKioskProductDealer`.
        */
        R.modelName = "VKioskProductDealer";


            /**
             * @ngdoc method
             * @name lbServices.VKioskProductDealer#Dealer
             * @methodOf lbServices.VKioskProductDealer
             *
             * @description
             *
             * Fetches belongsTo relation Dealer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - VKioskProductDealer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Dealer` object.)
             * </em>
             */
        R.VKioskProductDealer = function() {
          var TargetResource = $injector.get("VKioskProductDealer");
          var action = TargetResource["::get::VKioskProductDealer::Dealer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VKioskProductDealer#Product
             * @methodOf lbServices.VKioskProductDealer
             *
             * @description
             *
             * Fetches belongsTo relation Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - VKioskProductDealer id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        


        return R;
      }]);



module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = '$LoopBack$' + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = '$LoopBack$' + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          if (LoopBackAuth.accessTokenId) {
            config.headers.authorization = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])
  .factory('LoopBackResource', [ '$resource', function($resource) {
    return function(url, params, actions) {
      var resource = $resource(url, params, actions);

      // Angular always calls POST on $save()
      // This hack is based on
      // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
      resource.prototype.$save = function(success, error) {
        // Fortunately, LoopBack provides a convenient `upsert` method
        // that exactly fits our needs.
        var result = resource.upsert.call(this, {}, this, success, error);
        return result.$promise || result;
      }

      return resource;
    };
  }]);

})(window, window.angular);