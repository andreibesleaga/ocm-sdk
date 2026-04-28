// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Profile extends APIResource {
  /**
   * Perform user authentication, returning a model which includes the users profile
   * and a JWT auth token to re-use in subsequent requests.
   *
   * @example
   * ```ts
   * const response = await client.profile.authenticate({
   *   emailaddress: 'string',
   *   password: 'string',
   * });
   * ```
   */
  authenticate(
    body: ProfileAuthenticateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProfileAuthenticateResponse> {
    return this._client.post('/profile/authenticate', { body, ...options });
  }
}

export interface ProfileAuthenticateResponse {
  Data: ProfileAuthenticateResponse.Data;

  Metadata: ProfileAuthenticateResponse.Metadata;
}

export namespace ProfileAuthenticateResponse {
  export interface Data {
    /**
     * JWT Bearer Token to use in subsequent authenticated requests
     */
    access_token: string;

    /**
     * Full user profile, including non-public fields such as Email Address
     */
    UserProfile: Data.UserProfile;
  }

  export namespace Data {
    /**
     * Full user profile, including non-public fields such as Email Address
     */
    export interface UserProfile {
      DateCreated: string;

      ID: number;

      IsProfilePublic: boolean;

      Username: string;

      DateLastLogin?: string;

      EmailAddress?: string;

      Latitude?: number;

      Location?: string;

      Longitude?: number;

      Permissions?: string;

      Profile?: string;

      ProfileImageURL?: string;

      ReputationPoints?: number;

      WebsiteURL?: string;
    }
  }

  export interface Metadata {
    StatusCode: number;
  }
}

export interface ProfileAuthenticateParams {
  emailaddress?: string;

  password?: string;
}

export declare namespace Profile {
  export {
    type ProfileAuthenticateResponse as ProfileAuthenticateResponse,
    type ProfileAuthenticateParams as ProfileAuthenticateParams,
  };
}
