// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from 'ocm-sdk';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.split(' ')[0]!;
    const value = req.headers.authorization.slice(scheme.length + 1);
    switch (scheme) {
      case 'Bearer':
        return { bearer: req.headers.authorization.slice('Bearer '.length) };
      default:
        throw new Error(
          'Unsupported authorization scheme. Expected the "Authorization" header to be a supported scheme (Bearer).',
        );
    }
  }

  const apiKey =
    Array.isArray(req.headers['x-ocm-api-key']) ?
      req.headers['x-ocm-api-key'][0]
    : req.headers['x-ocm-api-key'];
  const apiKeyHeader =
    Array.isArray(req.headers['x-api-key']) ? req.headers['x-api-key'][0] : req.headers['x-api-key'];
  const bearer =
    Array.isArray(req.headers['x-ocm-username']) ?
      req.headers['x-ocm-username'][0]
    : req.headers['x-ocm-username'];
  return { apiKey, apiKeyHeader, bearer };
};
