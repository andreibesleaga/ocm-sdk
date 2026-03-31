// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'list',
    endpoint: '/poi',
    httpMethod: 'get',
    summary: 'Retrieve POI list (sites)',
    description:
      'Used to fetch a list of POIs (sites) within a geographic boundary or near a specific latitude/longitude. This is the primary method for most applications and services to consume data from Open Charge Map.',
    stainlessPath: '(resource) poi > (method) list',
    qualified: 'client.poi.list',
    params: [
      'boundingbox?: object[];',
      'camelcase?: boolean;',
      'chargepointid?: string;',
      'client?: string;',
      'compact?: boolean;',
      'connectiontypeid?: object[];',
      'countrycode?: string;',
      'countryid?: string[];',
      'dataproviderid?: object[];',
      'distance?: number;',
      'distanceunit?: string;',
      'greaterthanid?: string;',
      'includecomments?: boolean;',
      'latitude?: number;',
      'levelid?: object[];',
      'longitude?: number;',
      'maxresults?: number;',
      'modifiedsince?: string;',
      'opendata?: boolean;',
      'operatorid?: object[];',
      'output?: string;',
      'polygon?: string;',
      'polyline?: string;',
      'sortby?: string;',
      'statustypeid?: object[];',
      'usagetypeid?: object[];',
      'verbose?: boolean;',
    ],
    response:
      '{ AddressInfo?: object; Connections?: object[]; DataProvider?: object; DataProviderID?: number; DataProvidersReference?: string; DataQualityLevel?: number; DateCreated?: string; DateLastConfirmed?: string; DateLastStatusUpdate?: string; DateLastVerified?: string; DatePlanned?: string; GeneralComments?: string; ID?: number; IsRecentlyVerified?: boolean; MediaItems?: object[]; MetadataValues?: object[]; NumberOfPoints?: number; OperatorID?: number; OperatorInfo?: object; OperatorsReference?: string; ParentChargePointID?: number; StatusType?: object; StatusTypeID?: number; SubmissionStatus?: object; SubmissionStatusTypeID?: number; UsageCost?: string; UsageType?: object; UsageTypeID?: number; UserComments?: object[]; UUID?: string; }[]',
    markdown:
      '## list\n\n`client.poi.list(boundingbox?: object[], camelcase?: boolean, chargepointid?: string, client?: string, compact?: boolean, connectiontypeid?: object[], countrycode?: string, countryid?: string[], dataproviderid?: object[], distance?: number, distanceunit?: string, greaterthanid?: string, includecomments?: boolean, latitude?: number, levelid?: object[], longitude?: number, maxresults?: number, modifiedsince?: string, opendata?: boolean, operatorid?: object[], output?: string, polygon?: string, polyline?: string, sortby?: string, statustypeid?: object[], usagetypeid?: object[], verbose?: boolean): { AddressInfo?: object; Connections?: object[]; DataProvider?: object; DataProviderID?: number; DataProvidersReference?: string; DataQualityLevel?: number; DateCreated?: string; DateLastConfirmed?: string; DateLastStatusUpdate?: string; DateLastVerified?: string; DatePlanned?: string; GeneralComments?: string; ID?: number; IsRecentlyVerified?: boolean; MediaItems?: object[]; MetadataValues?: object[]; NumberOfPoints?: number; OperatorID?: number; OperatorInfo?: object; OperatorsReference?: string; ParentChargePointID?: number; StatusType?: object; StatusTypeID?: number; SubmissionStatus?: object; SubmissionStatusTypeID?: number; UsageCost?: string; UsageType?: object; UsageTypeID?: number; UserComments?: object[]; UUID?: string; }[]`\n\n**get** `/poi`\n\nUsed to fetch a list of POIs (sites) within a geographic boundary or near a specific latitude/longitude. This is the primary method for most applications and services to consume data from Open Charge Map.\n\n### Parameters\n\n- `boundingbox?: object[]`\n  Filter results to a given bounding box. specify top left and bottom right box corners as: (lat,lng),(lat2,lng2)\n\n- `camelcase?: boolean`\n  Set to true to get a property names in camelCase format.\n\n- `chargepointid?: string`\n  Exact match on a given OCM POI ID (comma separated list)\n\n- `client?: string`\n  String to identify your client application. Optional but recommended to distinguish your client from other bots/crawlers\n\n- `compact?: boolean`\n  Set to true to remove reference data objects from output (just returns IDs for common reference data such as DataProvider etc).\n\n- `connectiontypeid?: object[]`\n  Exact match on a given connection type id (comma separated list)\n\n- `countrycode?: string`\n  2-character ISO Country code to filter to one specific country\n\n- `countryid?: string[]`\n  Exact match on a given numeric country id (comma separated list)\n\n- `dataproviderid?: object[]`\n  Exact match on a given data provider id id (comma separated list). \n\n- `distance?: number`\n  Optionally filter results by a max distance from the given latitude/longitude\n\n- `distanceunit?: string`\n  `miles` or `km` distance unit\n\n- `greaterthanid?: string`\n  Filter to items with ID greater than given value\n\n- `includecomments?: boolean`\n  If true, user comments and media items will be include in result set\n\n- `latitude?: number`\n  Latitude for distance calculation and filtering\n\n- `levelid?: object[]`\n  Exact match on a given charging level (1-3) id (comma separated list)\n\n- `longitude?: number`\n  Longitude for distance calculation and filtering\n\n- `maxresults?: number`\n  Limit on max number of results returned\n\n- `modifiedsince?: string`\n  Filter to results modified after the given date\n\n- `opendata?: boolean`\n  Use opendata=true for only OCM provided ("Open") data.\n\n- `operatorid?: object[]`\n  Exact match on a given EVSE operator id (comma separated list)\n\n- `output?: string`\n  Optional output format `json`,`geojson`,`xml`,`csv`, JSON is the default and recommended as the highest fidelity.\n\n- `polygon?: string`\n  Filter results within a given Polygon. Specify an encoded polyline for the polygon shape. Polygon will be automatically closed from the last point to the first point.\n\n- `polyline?: string`\n  Filter results along an encoded polyline, use with distance param to increase search distance along line. Polyline is expanded into a polygon to cover the search distance.\n\n- `sortby?: string`\n  Default sort order is based on spatial index but you can optionally sort by  `modified_asc` for results in order of modification (oldest to newest), or ` id_asc` for results in order of ID\n\n- `statustypeid?: object[]`\n  Exact match on a given status type id (comma separated list)\n\n- `usagetypeid?: object[]`\n  Exact match on a given usage type id (comma separated list)\n\n- `verbose?: boolean`\n  Set to false to get a smaller result set with null items removed.\n\n### Returns\n\n- `{ AddressInfo?: { CountryID: number; ID: number; Latitude: number; Longitude: number; AccessComments?: string; AddressLine1?: string; AddressLine2?: string; ContactEmail?: string; ContactTelephone1?: string; ContactTelephone2?: string; Country?: object; Distance?: number; DistanceUnit?: number; Postcode?: string; RelatedURL?: string; StateOrProvince?: string; Title?: string; Town?: string; }; Connections?: { Amps?: number; Comments?: string; ConnectionType?: { FormalName?: string; ID?: number; IsDiscontinued?: boolean; IsObsolete?: boolean; Title?: string; }; ConnectionTypeID?: number; CurrentType?: { ID: number; Title?: string; }; CurrentTypeID?: number; ID?: number; Level?: { Comments: string; ID: number; IsFastChargeCapable: boolean; Title?: string; }; LevelID?: number; PowerKW?: number; Quantity?: number; Reference?: string; StatusType?: { ID: number; IsOperational: boolean; IsUserSelectable: boolean; Title?: string; }; StatusTypeID?: number; Voltage?: number; }[]; DataProvider?: { ID: number; IsRestrictedEdit: boolean; Comments?: string; DataProviderStatusType?: { ID: number; IsProviderEnabled: boolean; description?: string; }; DateLastImported?: string; IsApprovedImport?: boolean; IsOpenDataLicensed?: boolean; License?: string; Title?: string; WebsiteURL?: string; }; DataProviderID?: number; DataProvidersReference?: string; DataQualityLevel?: number; DateCreated?: string; DateLastConfirmed?: string; DateLastStatusUpdate?: string; DateLastVerified?: string; DatePlanned?: string; GeneralComments?: string; ID?: number; IsRecentlyVerified?: boolean; MediaItems?: { ChargePointID?: string; Comment?: string; DateCreated?: string; ID?: string; IsEnabled?: boolean; IsExternalResource?: boolean; IsFeaturedItem?: boolean; IsVideo?: boolean; ItemThumbnailURL?: string; ItemURL?: string; User?: { ID?: number; ProfileImageURL?: string; ReputationPoints?: number; Username?: string; }; }[]; MetadataValues?: object[]; NumberOfPoints?: number; OperatorID?: number; OperatorInfo?: { ID: number; AddressInfo?: { CountryID: number; ID: number; Latitude: number; Longitude: number; AccessComments?: string; AddressLine1?: string; AddressLine2?: string; ContactEmail?: string; ContactTelephone1?: string; ContactTelephone2?: string; Country?: country; Distance?: number; DistanceUnit?: number; Postcode?: string; RelatedURL?: string; StateOrProvince?: string; Title?: string; Town?: string; }; BookingURL?: string; Comments?: string; ContactEmail?: string; FaultReportEmail?: string; IsPrivateIndividual?: boolean; IsRestrictedEdit?: boolean; PhonePrimaryContact?: string; PhoneSecondaryContact?: string; Title?: string; WebsiteURL?: string; }; OperatorsReference?: string; ParentChargePointID?: number; StatusType?: { ID: number; IsOperational: boolean; IsUserSelectable: boolean; Title?: string; }; StatusTypeID?: number; SubmissionStatus?: { ID: number; IsLive: boolean; Title?: string; }; SubmissionStatusTypeID?: number; UsageCost?: string; UsageType?: { ID: number; IsAccessKeyRequired: boolean; IsMembershipRequired: boolean; IsPayAtLocation: boolean; Title?: string; }; UsageTypeID?: number; UserComments?: { ChargePointID?: number; CheckinStatusType?: { ID: number; IsAutomatedCheckin: boolean; IsPositive?: boolean; Title?: string; }; CheckinStatusTypeID?: number; Comment?: string; CommentType?: { ID?: number; Title?: string; }; CommentTypeID?: number; DateCreated?: string; ID?: string; RelatedURL?: string; User?: { ID?: number; ProfileImageURL?: string; ReputationPoints?: number; Username?: string; }; UserName?: string; }[]; UUID?: string; }[]`\n\n### Example\n\n```typescript\nimport Ocm from \'ocm-sdk\';\n\nconst client = new Ocm();\n\nconst pois = await client.poi.list();\n\nconsole.log(pois);\n```',
  },
  {
    name: 'retrieve',
    endpoint: '/referencedata',
    httpMethod: 'get',
    summary: 'Core Reference Data',
    description:
      'Returns the core reference data used for looking up IDs such as Connection Types, Operators, Countries etc. \n\nThis information is useful for UIs such as editing systems or for fetching results in the lighter non-verbose mode, then hydrating POI results back into complex objects.',
    stainlessPath: '(resource) referencedata > (method) retrieve',
    qualified: 'client.referencedata.retrieve',
    params: ['countryid?: object[];'],
    response:
      '{ ChargerTypes?: object[]; CheckinStatusTypes?: object[]; ConnectionTypes?: object[]; Countries?: country[]; CurrentTypes?: object[]; DataProviders?: object[]; DataTypes?: object; MetadataGroups?: string; Operators?: object[]; StatusTypes?: object[]; SubmissionStatusTypes?: object[]; UsageTypes?: object[]; UserCommentTypes?: object[]; }',
    markdown:
      "## retrieve\n\n`client.referencedata.retrieve(countryid?: object[]): { ChargerTypes?: object[]; CheckinStatusTypes?: object[]; ConnectionTypes?: object[]; Countries?: country[]; CurrentTypes?: object[]; DataProviders?: object[]; DataTypes?: object; MetadataGroups?: string; Operators?: object[]; StatusTypes?: object[]; SubmissionStatusTypes?: object[]; UsageTypes?: object[]; UserCommentTypes?: object[]; }`\n\n**get** `/referencedata`\n\nReturns the core reference data used for looking up IDs such as Connection Types, Operators, Countries etc. \n\nThis information is useful for UIs such as editing systems or for fetching results in the lighter non-verbose mode, then hydrating POI results back into complex objects.\n\n### Parameters\n\n- `countryid?: object[]`\n  Optional filter on countryid, exact match on a given numeric country id (comma separated list)\n\n### Returns\n\n- `{ ChargerTypes?: { Comments: string; ID: number; IsFastChargeCapable: boolean; Title?: string; }[]; CheckinStatusTypes?: { ID: number; IsAutomatedCheckin: boolean; IsPositive?: boolean; Title?: string; }[]; ConnectionTypes?: { FormalName?: string; ID?: number; IsDiscontinued?: boolean; IsObsolete?: boolean; Title?: string; }[]; Countries?: { ContinentCode: string; ID: number; ISOCode: string; Title?: string; }[]; CurrentTypes?: { ID: number; Title?: string; }[]; DataProviders?: { ID: number; IsRestrictedEdit: boolean; Comments?: string; DataProviderStatusType?: { ID: number; IsProviderEnabled: boolean; description?: string; }; DateLastImported?: string; IsApprovedImport?: boolean; IsOpenDataLicensed?: boolean; License?: string; Title?: string; WebsiteURL?: string; }[]; DataTypes?: object; MetadataGroups?: string; Operators?: { ID: number; AddressInfo?: { CountryID: number; ID: number; Latitude: number; Longitude: number; AccessComments?: string; AddressLine1?: string; AddressLine2?: string; ContactEmail?: string; ContactTelephone1?: string; ContactTelephone2?: string; Country?: country; Distance?: number; DistanceUnit?: number; Postcode?: string; RelatedURL?: string; StateOrProvince?: string; Title?: string; Town?: string; }; BookingURL?: string; Comments?: string; ContactEmail?: string; FaultReportEmail?: string; IsPrivateIndividual?: boolean; IsRestrictedEdit?: boolean; PhonePrimaryContact?: string; PhoneSecondaryContact?: string; Title?: string; WebsiteURL?: string; }[]; StatusTypes?: { ID: number; IsOperational: boolean; IsUserSelectable: boolean; Title?: string; }[]; SubmissionStatusTypes?: { ID: number; IsLive: boolean; Title?: string; }[]; UsageTypes?: { ID: number; IsAccessKeyRequired: boolean; IsMembershipRequired: boolean; IsPayAtLocation: boolean; Title?: string; }[]; UserCommentTypes?: { ID?: number; Title?: string; }[]; }`\n  Set of core reference data used for other API results and UI\n\n  - `ChargerTypes?: { Comments: string; ID: number; IsFastChargeCapable: boolean; Title?: string; }[]`\n  - `CheckinStatusTypes?: { ID: number; IsAutomatedCheckin: boolean; IsPositive?: boolean; Title?: string; }[]`\n  - `ConnectionTypes?: { FormalName?: string; ID?: number; IsDiscontinued?: boolean; IsObsolete?: boolean; Title?: string; }[]`\n  - `Countries?: { ContinentCode: string; ID: number; ISOCode: string; Title?: string; }[]`\n  - `CurrentTypes?: { ID: number; Title?: string; }[]`\n  - `DataProviders?: { ID: number; IsRestrictedEdit: boolean; Comments?: string; DataProviderStatusType?: { ID: number; IsProviderEnabled: boolean; description?: string; }; DateLastImported?: string; IsApprovedImport?: boolean; IsOpenDataLicensed?: boolean; License?: string; Title?: string; WebsiteURL?: string; }[]`\n  - `DataTypes?: object`\n  - `MetadataGroups?: string`\n  - `Operators?: { ID: number; AddressInfo?: { CountryID: number; ID: number; Latitude: number; Longitude: number; AccessComments?: string; AddressLine1?: string; AddressLine2?: string; ContactEmail?: string; ContactTelephone1?: string; ContactTelephone2?: string; Country?: { ContinentCode: string; ID: number; ISOCode: string; Title?: string; }; Distance?: number; DistanceUnit?: number; Postcode?: string; RelatedURL?: string; StateOrProvince?: string; Title?: string; Town?: string; }; BookingURL?: string; Comments?: string; ContactEmail?: string; FaultReportEmail?: string; IsPrivateIndividual?: boolean; IsRestrictedEdit?: boolean; PhonePrimaryContact?: string; PhoneSecondaryContact?: string; Title?: string; WebsiteURL?: string; }[]`\n  - `StatusTypes?: { ID: number; IsOperational: boolean; IsUserSelectable: boolean; Title?: string; }[]`\n  - `SubmissionStatusTypes?: { ID: number; IsLive: boolean; Title?: string; }[]`\n  - `UsageTypes?: { ID: number; IsAccessKeyRequired: boolean; IsMembershipRequired: boolean; IsPayAtLocation: boolean; Title?: string; }[]`\n  - `UserCommentTypes?: { ID?: number; Title?: string; }[]`\n\n### Example\n\n```typescript\nimport Ocm from 'ocm-sdk';\n\nconst client = new Ocm();\n\nconst referencedata = await client.referencedata.retrieve();\n\nconsole.log(referencedata);\n```",
  },
  {
    name: 'authenticate',
    endpoint: '/profile/authenticate',
    httpMethod: 'post',
    summary: 'Authenticate User',
    description:
      'Perform user authentication, returning a model which includes the users profile and a JWT auth token to re-use in subsequent requests.',
    stainlessPath: '(resource) profile > (method) authenticate',
    qualified: 'client.profile.authenticate',
    params: ['emailaddress?: string;', 'password?: string;'],
    response:
      '{ Data: { access_token: string; UserProfile: { DateCreated: string; ID: number; IsProfilePublic: boolean; Username: string; DateLastLogin?: string; EmailAddress?: string; Latitude?: number; Location?: string; Longitude?: number; Permissions?: string; Profile?: string; ProfileImageURL?: string; ReputationPoints?: number; WebsiteURL?: string; }; }; Metadata: { StatusCode: number; }; }',
    markdown:
      "## authenticate\n\n`client.profile.authenticate(emailaddress?: string, password?: string): { Data: object; Metadata: object; }`\n\n**post** `/profile/authenticate`\n\nPerform user authentication, returning a model which includes the users profile and a JWT auth token to re-use in subsequent requests.\n\n### Parameters\n\n- `emailaddress?: string`\n\n- `password?: string`\n\n### Returns\n\n- `{ Data: { access_token: string; UserProfile: { DateCreated: string; ID: number; IsProfilePublic: boolean; Username: string; DateLastLogin?: string; EmailAddress?: string; Latitude?: number; Location?: string; Longitude?: number; Permissions?: string; Profile?: string; ProfileImageURL?: string; ReputationPoints?: number; WebsiteURL?: string; }; }; Metadata: { StatusCode: number; }; }`\n\n  - `Data: { access_token: string; UserProfile: { DateCreated: string; ID: number; IsProfilePublic: boolean; Username: string; DateLastLogin?: string; EmailAddress?: string; Latitude?: number; Location?: string; Longitude?: number; Permissions?: string; Profile?: string; ProfileImageURL?: string; ReputationPoints?: number; WebsiteURL?: string; }; }`\n  - `Metadata: { StatusCode: number; }`\n\n### Example\n\n```typescript\nimport Ocm from 'ocm-sdk';\n\nconst client = new Ocm();\n\nconst response = await client.profile.authenticate();\n\nconsole.log(response);\n```",
  },
  {
    name: 'submit',
    endpoint: '/comment',
    httpMethod: 'post',
    summary: 'Submit Comment or Checkin',
    description: 'Submit a user comment or checkin for a specific charging location',
    stainlessPath: '(resource) comment > (method) submit',
    qualified: 'client.comment.submit',
    params: [
      'chargePointID: number;',
      'checkinStatusTypeID?: number;',
      'comment?: string;',
      'commentTypeID?: number;',
      'rating?: number;',
      'relatedURL?: string;',
      'userName?: string;',
    ],
    response: '{ description: string; status: string; }',
    markdown:
      "## submit\n\n`client.comment.submit(chargePointID: number, checkinStatusTypeID?: number, comment?: string, commentTypeID?: number, rating?: number, relatedURL?: string, userName?: string): { description: string; status: string; }`\n\n**post** `/comment`\n\nSubmit a user comment or checkin for a specific charging location\n\n### Parameters\n\n- `chargePointID: number`\n  This must be a valid POI ID\n\n- `checkinStatusTypeID?: number`\n  Optional valid CheckStatusTypeID to indicate overall catgeory and success/failure to use equipment e.g. 10 = Charged Successfully.\n\n- `comment?: string`\n  This is an optional comment to describe the charging experience, may include guidance for future users.\n\n- `commentTypeID?: number`\n  This must be a valid Comment Type ID as per UserCommentTypes found in Core Reference Data. If left as null then General Comment will be used.\n\n- `rating?: number`\n  Optional integer rating between 1 = Worst, 5 = Best.\n\n- `relatedURL?: string`\n  Optional website URL for related information\n\n- `userName?: string`\n  This is an optional name to associate with the submission, for authenticated users their profile username is used.\n\n### Returns\n\n- `{ description: string; status: string; }`\n\n  - `description: string`\n  - `status: string`\n\n### Example\n\n```typescript\nimport Ocm from 'ocm-sdk';\n\nconst client = new Ocm();\n\nconst response = await client.comment.submit({ chargePointID: 0 });\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/mediaitem',
    httpMethod: 'post',
    summary: 'Add Media Item (Photo)',
    description: 'Submit a photo for a specific charging location',
    stainlessPath: '(resource) mediaitem > (method) create',
    qualified: 'client.mediaitem.create',
    params: ['chargePointID: number;', 'imageDataBase64: string;', 'comment?: string;'],
    response: '{ status: string; description?: string; }',
    markdown:
      "## create\n\n`client.mediaitem.create(chargePointID: number, imageDataBase64: string, comment?: string): { status: string; description?: string; }`\n\n**post** `/mediaitem`\n\nSubmit a photo for a specific charging location\n\n### Parameters\n\n- `chargePointID: number`\n  ID value for the OCM site (POI) this image relates to.\n\n- `imageDataBase64: string`\n  BASE64 encoded data\n\n- `comment?: string`\n  Optional description of image or context\n\n### Returns\n\n- `{ status: string; description?: string; }`\n\n  - `status: string`\n  - `description?: string`\n\n### Example\n\n```typescript\nimport Ocm from 'ocm-sdk';\n\nconst client = new Ocm();\n\nconst mediaitem = await client.mediaitem.create({ chargePointID: 1234, imageDataBase64: 'data:image/jpeg;base64,<BASE64_ENCODED_DATA>' });\n\nconsole.log(mediaitem);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/openapi',
    httpMethod: 'get',
    summary: 'Retrieve OpenAPI definition',
    description:
      'Retrieve the current OpenAPI format (YAML) definition for this API. This is useful for documentation tools, mocking, testing and client generation.',
    stainlessPath: '(resource) openapi > (method) retrieve',
    qualified: 'client.openAPI.retrieve',
    response: 'object',
    markdown:
      "## retrieve\n\n`client.openAPI.retrieve(): object`\n\n**get** `/openapi`\n\nRetrieve the current OpenAPI format (YAML) definition for this API. This is useful for documentation tools, mocking, testing and client generation.\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Ocm from 'ocm-sdk';\n\nconst client = new Ocm();\n\nconst openAPI = await client.openAPI.retrieve();\n\nconsole.log(openAPI);\n```",
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
