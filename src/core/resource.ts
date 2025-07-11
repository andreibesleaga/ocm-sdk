// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Ocm } from '../client';

export abstract class APIResource {
  protected _client: Ocm;

  constructor(client: Ocm) {
    this._client = client;
  }
}
