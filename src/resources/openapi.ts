// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class OpenAPI extends APIResource {
  /**
   * Retrieve the current OpenAPI format (YAML) definition for this API. This is
   * useful for documentation tools, mocking, testing and client generation.
   */
  retrieve(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/openapi', {
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export type OpenAPIRetrieveResponse = unknown;

export declare namespace OpenAPI {
  export { type OpenAPIRetrieveResponse as OpenAPIRetrieveResponse };
}
