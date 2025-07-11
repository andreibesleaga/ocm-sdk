// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'ocm-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Ocm from 'ocm';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve the current OpenAPI format (YAML) definition for this API. This is useful for documentation tools, mocking, testing and client generation.\n\n# Response Schema\n```json\n{\n  type: 'object'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Ocm, args: Record<string, unknown> | undefined) => {
  return asTextContentResult((await client.openAPI.retrieve()) as object);
};

export default { metadata, tool, handler };
