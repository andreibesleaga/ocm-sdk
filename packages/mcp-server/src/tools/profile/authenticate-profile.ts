// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'ocm-mcp/filtering';
import { Metadata, asTextContentResult } from 'ocm-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Ocm from 'ocm-sdk';

export const metadata: Metadata = {
  resource: 'profile',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/profile/authenticate',
  operationId: 'post-authenticate',
};

export const tool: Tool = {
  name: 'authenticate_profile',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPerform user authentication, returning a model which includes the users profile and a JWT auth token to re-use in subsequent requests.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    Data: {\n      type: 'object',\n      properties: {\n        access_token: {\n          type: 'string',\n          description: 'JWT Bearer Token to use in subsequent authenticated requests'\n        },\n        UserProfile: {\n          type: 'object',\n          description: 'Full user profile, including non-public fields such as Email Address',\n          properties: {\n            DateCreated: {\n              type: 'string'\n            },\n            ID: {\n              type: 'number'\n            },\n            IsProfilePublic: {\n              type: 'boolean'\n            },\n            Username: {\n              type: 'string'\n            },\n            DateLastLogin: {\n              type: 'string'\n            },\n            EmailAddress: {\n              type: 'string'\n            },\n            Latitude: {\n              type: 'number'\n            },\n            Location: {\n              type: 'string'\n            },\n            Longitude: {\n              type: 'number'\n            },\n            Permissions: {\n              type: 'string'\n            },\n            Profile: {\n              type: 'string'\n            },\n            ProfileImageURL: {\n              type: 'string'\n            },\n            ReputationPoints: {\n              type: 'number'\n            },\n            WebsiteURL: {\n              type: 'string'\n            }\n          },\n          required: [            'DateCreated',\n            'ID',\n            'IsProfilePublic',\n            'Username'\n          ]\n        }\n      },\n      required: [        'access_token',\n        'UserProfile'\n      ]\n    },\n    Metadata: {\n      type: 'object',\n      properties: {\n        StatusCode: {\n          type: 'integer'\n        }\n      },\n      required: [        'StatusCode'\n      ]\n    }\n  },\n  required: [    'Data',\n    'Metadata'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      emailaddress: {
        type: 'string',
      },
      password: {
        type: 'string',
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
  return asTextContentResult(await maybeFilter(args, await client.profile.authenticate(body)));
};

export default { metadata, tool, handler };
