// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'ocm-mcp/filtering';
import { asTextContentResult } from 'ocm-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Ocm from 'ocm';

export const metadata: Metadata = {
  resource: 'comment',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/comment',
  operationId: 'post-comment',
};

export const tool: Tool = {
  name: 'submit_comment',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSubmit a user comment or checkin for a specific charging location\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    description: {\n      type: 'string'\n    },\n    status: {\n      type: 'string'\n    }\n  },\n  required: [    'description',\n    'status'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      chargePointID: {
        type: 'integer',
        description: 'This must be a valid POI ID',
      },
      checkinStatusTypeID: {
        type: 'integer',
        description:
          'Optional valid CheckStatusTypeID to indicate overall catgeory and success/failure to use equipment e.g. 10 = Charged Successfully.',
      },
      comment: {
        type: 'string',
        description:
          'This is an optional comment to describe the charging experience, may include guidance for future users.',
      },
      commentTypeID: {
        type: 'integer',
        description:
          'This must be a valid Comment Type ID as per UserCommentTypes found in Core Reference Data. If left as null then General Comment will be used.',
      },
      rating: {
        type: 'integer',
        description: 'Optional integer rating between 1 = Worst, 5 = Best.',
      },
      relatedURL: {
        type: 'string',
        description: 'Optional website URL for related information',
      },
      userName: {
        type: 'string',
        description:
          'This is an optional name to associate with the submission, for authenticated users their profile username is used.',
      },
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.comment.submit(body)));
};

export default { metadata, tool, handler };
