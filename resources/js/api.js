/* Utility to make api request */
import axios from 'axios';
import endpoints from './route/endpoints';

const API_URL = import.meta.env.BASE_URL;

class Api {
  /**
   * Using axios to perform ajax
   *
   * @param {string} method Http methods.
   * @param {string} endpoint Key on endpoint.js file.
   * @param {object} params Includes { path: Object, query: Object data: Object } request parameters.
   * @param {object|null} additionalheaders Other endpoint requierd headers.
   *
   * @return {promise}
   */
  static async dispatch(method, endpoint, params = {}, additionalheaders = null) {
    const headers = this.buildHeaders(additionalheaders);
    const url = this.buildEndpoint(
      endpoint,
      params.path || null
    );

    return await axios({
      url,
      method,
      headers,
      params: params.query || null,
      data: params.data
    })
    .then(({ data }) => data)
    .catch(({ response }) => response.data);
  }

  /**
   * Build api endpoint url
   *
   * @param {string} endpoint Vuex context keys
   * @param {string|array|null} params endpoint query parameters needed
   *
   * @return {string}
   */
  static buildEndpoint(endpoint, params = null) {
    endpoint = API_URL + 'api/' + endpoints[endpoint] || endpoint;

    if (params) {
      for (const key of Object.keys(params)) {
        endpoint = endpoint.replace(`{${key}}`, params[key]);
      }
    }

    return endpoint;
  }

  /**
   * Build api endpoint headers
   *
   * @param {object} additional Must be added on the existing preset headers
   *
   * @return {object}
   */
   static buildHeaders(additional = null) {
    return {
      Accept: 'application/json',
      ...additional
    };
  }
}

export default Api;