// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'ocm-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Ocm from 'ocm-sdk';

export const metadata: Metadata = {
  resource: 'poi',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/poi',
  operationId: 'get-poi',
};

export const tool: Tool = {
  name: 'list_poi',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUsed to fetch a list of POIs (sites) within a geographic boundary or near a specific latitude/longitude. This is the primary method for most applications and services to consume data from Open Charge Map.",
  inputSchema: {
    type: 'object',
    properties: {
      boundingbox: {
        type: 'array',
        description:
          'Filter results to a given bounding box. specify top left and bottom right box corners as: (lat,lng),(lat2,lng2)',
        items: {
          type: 'object',
        },
      },
      camelcase: {
        type: 'boolean',
        description: 'Set to true to get a property names in camelCase format.',
      },
      chargepointid: {
        type: 'string',
        description: 'Exact match on a given OCM POI ID (comma separated list)',
      },
      client: {
        type: 'string',
        description:
          'String to identify your client application. Optional but recommended to distinguish your client from other bots/crawlers',
      },
      compact: {
        type: 'boolean',
        description:
          'Set to true to remove reference data objects from output (just returns IDs for common reference data such as DataProvider etc).',
      },
      connectiontypeid: {
        type: 'array',
        description: 'Exact match on a given connection type id (comma separated list)',
        items: {
          type: 'object',
        },
      },
      countrycode: {
        type: 'string',
        description: '2-character ISO Country code to filter to one specific country',
      },
      countryid: {
        type: 'array',
        description: 'Exact match on a given numeric country id (comma separated list)',
        items: {
          type: 'string',
        },
      },
      dataproviderid: {
        type: 'array',
        description: 'Exact match on a given data provider id id (comma separated list). ',
        items: {
          type: 'object',
        },
      },
      distance: {
        type: 'number',
        description: 'Optionally filter results by a max distance from the given latitude/longitude',
      },
      distanceunit: {
        type: 'string',
        description: '`miles` or `km` distance unit',
      },
      greaterthanid: {
        type: 'string',
        description: 'Filter to items with ID greater than given value',
      },
      includecomments: {
        type: 'boolean',
        description: 'If true, user comments and media items will be include in result set',
      },
      latitude: {
        type: 'integer',
        description: 'Latitude for distance calculation and filtering',
      },
      levelid: {
        type: 'array',
        description: 'Exact match on a given charging level (1-3) id (comma separated list)',
        items: {
          type: 'object',
        },
      },
      longitude: {
        type: 'number',
        description: 'Longitude for distance calculation and filtering',
      },
      maxresults: {
        type: 'integer',
        description: 'Limit on max number of results returned',
      },
      modifiedsince: {
        type: 'string',
        description: 'Filter to results modified after the given date',
      },
      opendata: {
        type: 'boolean',
        description: 'Use opendata=true for only OCM provided ("Open") data.',
      },
      operatorid: {
        type: 'array',
        description: 'Exact match on a given EVSE operator id (comma separated list)',
        items: {
          type: 'object',
        },
      },
      output: {
        type: 'string',
        description:
          'Optional output format `json`,`geojson`,`xml`,`csv`, JSON is the default and recommended as the highest fidelity.',
      },
      polygon: {
        type: 'string',
        description:
          'Filter results within a given Polygon. Specify an encoded polyline for the polygon shape. Polygon will be automatically closed from the last point to the first point.',
      },
      polyline: {
        type: 'string',
        description:
          'Filter results along an encoded polyline, use with distance param to increase search distance along line. Polyline is expanded into a polygon to cover the search distance.',
      },
      sortby: {
        type: 'string',
        description:
          'Default sort order is based on spatial index but you can optionally sort by  `modified_asc` for results in order of modification (oldest to newest), or ` id_asc` for results in order of ID',
      },
      statustypeid: {
        type: 'array',
        description: 'Exact match on a given status type id (comma separated list)',
        items: {
          type: 'object',
        },
      },
      usagetypeid: {
        type: 'array',
        description: 'Exact match on a given usage type id (comma separated list)',
        items: {
          type: 'object',
        },
      },
      verbose: {
        type: 'boolean',
        description: 'Set to false to get a smaller result set with null items removed.',
      },
    },
    required: [],
  },
};

export const handler = async (client: Ocm, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.poi.list(body));
};

export default { metadata, tool, handler };
