// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Comment extends APIResource {
  /**
   * Submit a user comment or checkin for a specific charging location
   *
   * @example
   * ```ts
   * const response = await client.comment.submit({
   *   chargePointID: 0,
   *   comment: 'string',
   *   rating: 3,
   *   relatedURL: 'string',
   *   userName: 'string',
   * });
   * ```
   */
  submit(body: CommentSubmitParams, options?: RequestOptions): APIPromise<CommentSubmitResponse> {
    return this._client.post('/comment', { body, ...options });
  }
}

export interface CommentSubmitResponse {
  description: string;

  status: string;
}

export interface CommentSubmitParams {
  /**
   * This must be a valid POI ID
   */
  chargePointID: number;

  /**
   * Optional valid CheckStatusTypeID to indicate overall catgeory and
   * success/failure to use equipment e.g. 10 = Charged Successfully.
   */
  checkinStatusTypeID?: number;

  /**
   * This is an optional comment to describe the charging experience, may include
   * guidance for future users.
   */
  comment?: string;

  /**
   * This must be a valid Comment Type ID as per UserCommentTypes found in Core
   * Reference Data. If left as null then General Comment will be used.
   */
  commentTypeID?: number;

  /**
   * Optional integer rating between 1 = Worst, 5 = Best.
   */
  rating?: number;

  /**
   * Optional website URL for related information
   */
  relatedURL?: string;

  /**
   * This is an optional name to associate with the submission, for authenticated
   * users their profile username is used.
   */
  userName?: string;
}

export declare namespace Comment {
  export {
    type CommentSubmitResponse as CommentSubmitResponse,
    type CommentSubmitParams as CommentSubmitParams,
  };
}
