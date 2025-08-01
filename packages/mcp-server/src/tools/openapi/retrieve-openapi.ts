// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'ocm-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Ocm from 'ocm-sdk';

export const metadata: Metadata = {
  resource: 'openapi',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/openapi',
  operationId: 'get-openapi',
};

export const tool: Tool = {
  name: 'retrieve_openapi',
  description:
    'Retrieve the current OpenAPI format (YAML) definition for this API. This is useful for documentation tools, mocking, testing and client generation.',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Ocm, args: Record<string, unknown> | undefined) => {
  return asTextContentResult((await client.openAPI.retrieve()) as object);
};

export default { metadata, tool, handler };
