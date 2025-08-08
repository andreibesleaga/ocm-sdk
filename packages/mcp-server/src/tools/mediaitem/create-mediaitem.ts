// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'ocm-mcp/filtering';
import { Metadata, asTextContentResult } from 'ocm-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Ocm from 'ocm-sdk';

export const metadata: Metadata = {
  resource: 'mediaitem',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/mediaitem',
  operationId: 'post-mediaitem',
};

export const tool: Tool = {
  name: 'create_mediaitem',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSubmit a photo for a specific charging location\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    status: {\n      type: 'string',\n      description: 'status code OK'\n    },\n    description: {\n      type: 'string'\n    }\n  },\n  required: [    'status'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      chargePointID: {
        type: 'integer',
        description: 'ID value for the OCM site (POI) this image relates to.',
      },
      imageDataBase64: {
        type: 'string',
        description: 'BASE64 encoded data',
      },
      comment: {
        type: 'string',
        description: 'Optional description of image or context',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['chargePointID', 'imageDataBase64'],
  },
  annotations: {},
};

export const handler = async (client: Ocm, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.mediaitem.create(body)));
};

export default { metadata, tool, handler };
