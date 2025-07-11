// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'ocm-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Ocm from 'ocm';

export const metadata: Metadata = {
  resource: 'referencedata',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/referencedata',
  operationId: 'get-referencedata',
};

export const tool: Tool = {
  name: 'retrieve_referencedata',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the core reference data used for looking up IDs such as Connection Types, Operators, Countries etc. \n\nThis information is useful for UIs such as editing systems or for fetching results in the lighter non-verbose mode, then hydrating POI results back into complex objects.",
  inputSchema: {
    type: 'object',
    properties: {
      countryid: {
        type: 'array',
        description:
          'Optional filter on countryid, exact match on a given numeric country id (comma separated list)',
        items: {
          type: 'object',
        },
      },
    },
  },
};

export const handler = async (client: Ocm, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.referencedata.retrieve(body));
};

export default { metadata, tool, handler };
