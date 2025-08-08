// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from 'ocm-sdk/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.split(' ')[0]!;
    const value = req.headers.authorization.slice(scheme.length + 1);
    switch (scheme) {
      case 'Bearer':
        return { bearer: req.headers.authorization.slice('Bearer '.length) };
      default:
        throw new Error(`Unsupported authorization scheme`);
    }
  }

  const apiKey =
    req.headers['x-ocm-api-key'] instanceof Array ?
      req.headers['x-ocm-api-key'][0]
    : req.headers['x-ocm-api-key'];
  const apiKeyHeader =
    req.headers['x-api-key'] instanceof Array ? req.headers['x-api-key'][0] : req.headers['x-api-key'];
  const bearer =
    req.headers['x-ocm-username'] instanceof Array ?
      req.headers['x-ocm-username'][0]
    : req.headers['x-ocm-username'];
  return { apiKey, apiKeyHeader, bearer };
};
