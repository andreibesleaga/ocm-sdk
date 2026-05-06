// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Mediaitem extends APIResource {
  /**
   * Submit a photo for a specific charging location
   *
   * @example
   * ```ts
   * const mediaitem = await client.mediaitem.create({
   *   chargePointID: 1234,
   *   imageDataBase64:
   *     'data:image/jpeg;base64,<BASE64_ENCODED_DATA>',
   *   comment: 'An example comment',
   * });
   * ```
   */
  create(body: MediaitemCreateParams, options?: RequestOptions): APIPromise<MediaitemCreateResponse> {
    return this._client.post('/mediaitem', { body, ...options });
  }
}

export interface MediaitemCreateResponse {
  /**
   * status code OK
   */
  status: string;

  description?: string;
}

export interface MediaitemCreateParams {
  /**
   * ID value for the OCM site (POI) this image relates to.
   */
  chargePointID: number;

  /**
   * BASE64 encoded data
   */
  imageDataBase64: string;

  /**
   * Optional description of image or context
   */
  comment?: string;
}

export declare namespace Mediaitem {
  export {
    type MediaitemCreateResponse as MediaitemCreateResponse,
    type MediaitemCreateParams as MediaitemCreateParams,
  };
}
