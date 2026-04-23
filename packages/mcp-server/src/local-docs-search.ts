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
    perLanguage: {
      cli: {
        method: 'poi list',
        example: "ocm poi list \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Poi.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ocm-go"\n\t"github.com/stainless-sdks/ocm-go/option"\n)\n\nfunc main() {\n\tclient := ocm.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpois, err := client.Poi.List(context.TODO(), ocm.PoiListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pois)\n}\n',
      },
      http: {
        example: 'curl https://api.openchargemap.io/v3/poi',
      },
      php: {
        method: 'poi->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$pois = $client->poi->list(\n  boundingbox: [(object) []],\n  camelcase: true,\n  chargepointid: 'chargepointid',\n  client: 'client',\n  compact: true,\n  connectiontypeid: [(object) []],\n  countrycode: 'countrycode',\n  countryid: ['string'],\n  dataproviderid: [(object) []],\n  distance: 0,\n  distanceunit: 'distanceunit',\n  greaterthanid: 'greaterthanid',\n  includecomments: true,\n  latitude: 0,\n  levelid: [(object) []],\n  longitude: 0,\n  maxresults: 0,\n  modifiedsince: 'modifiedsince',\n  opendata: true,\n  operatorid: [(object) []],\n  output: 'output',\n  polygon: 'polygon',\n  polyline: 'polyline',\n  sortby: 'sortby',\n  statustypeid: [(object) []],\n  usagetypeid: [(object) []],\n  verbose: true,\n);\n\nvar_dump($pois);",
      },
      typescript: {
        method: 'client.poi.list',
        example:
          "import Ocm from 'ocm-sdk';\n\nconst client = new Ocm({\n  apiKey: process.env['OCM_API_KEY'], // This is the default and can be omitted\n});\n\nconst pois = await client.poi.list();\n\nconsole.log(pois);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'referencedata retrieve',
        example: "ocm referencedata retrieve \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Referencedata.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ocm-go"\n\t"github.com/stainless-sdks/ocm-go/option"\n)\n\nfunc main() {\n\tclient := ocm.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\treferencedata, err := client.Referencedata.Get(context.TODO(), ocm.ReferencedataGetParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", referencedata.DataProviders)\n}\n',
      },
      http: {
        example: 'curl https://api.openchargemap.io/v3/referencedata',
      },
      php: {
        method: 'referencedata->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$referencedata = $client->referencedata->retrieve(countryid: [(object) []]);\n\nvar_dump($referencedata);",
      },
      typescript: {
        method: 'client.referencedata.retrieve',
        example:
          "import Ocm from 'ocm-sdk';\n\nconst client = new Ocm({\n  apiKey: process.env['OCM_API_KEY'], // This is the default and can be omitted\n});\n\nconst referencedata = await client.referencedata.retrieve();\n\nconsole.log(referencedata.DataProviders);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'profile authenticate',
        example: "ocm profile authenticate \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.Profile.Authenticate',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ocm-go"\n\t"github.com/stainless-sdks/ocm-go/option"\n)\n\nfunc main() {\n\tclient := ocm.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Profile.Authenticate(context.TODO(), ocm.ProfileAuthenticateParams{\n\t\tEmailaddress: ocm.String("string"),\n\t\tPassword:     ocm.String("string"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      http: {
        example: 'curl https://api.openchargemap.io/v3/profile/authenticate \\\n    -X POST',
      },
      php: {
        method: 'profile->authenticate',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->profile->authenticate(\n  emailaddress: 'string', password: 'string'\n);\n\nvar_dump($response);",
      },
      typescript: {
        method: 'client.profile.authenticate',
        example:
          "import Ocm from 'ocm-sdk';\n\nconst client = new Ocm({\n  apiKey: process.env['OCM_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.profile.authenticate({ emailaddress: 'string', password: 'string' });\n\nconsole.log(response.Data);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'comment submit',
        example: "ocm comment submit \\\n  --bearer 'My Bearer' \\\n  --charge-point-id 0",
      },
      go: {
        method: 'client.Comment.Submit',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ocm-go"\n\t"github.com/stainless-sdks/ocm-go/option"\n)\n\nfunc main() {\n\tclient := ocm.NewClient(\n\t\toption.WithBearer("My Bearer"),\n\t)\n\tresponse, err := client.Comment.Submit(context.TODO(), ocm.CommentSubmitParams{\n\t\tChargePointID: 0,\n\t\tComment:       ocm.String("string"),\n\t\tRating:        ocm.Int(3),\n\t\tRelatedURL:    ocm.String("string"),\n\t\tUserName:      ocm.String("string"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Description)\n}\n',
      },
      http: {
        example:
          'curl https://api.openchargemap.io/v3/comment \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $OCM_USERNAME" \\\n    -d \'{\n          "chargePointID": 0,\n          "rating": 3\n        }\'',
      },
      php: {
        method: 'comment->submit',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearer: 'My Bearer');\n\n$response = $client->comment->submit(\n  chargePointID: 0,\n  checkinStatusTypeID: 0,\n  comment: 'string',\n  commentTypeID: 0,\n  rating: 3,\n  relatedURL: 'string',\n  userName: 'string',\n);\n\nvar_dump($response);",
      },
      typescript: {
        method: 'client.comment.submit',
        example:
          "import Ocm from 'ocm-sdk';\n\nconst client = new Ocm({\n  bearer: process.env['OCM_USERNAME'], // This is the default and can be omitted\n});\n\nconst response = await client.comment.submit({\n  chargePointID: 0,\n  comment: 'string',\n  rating: 3,\n  relatedURL: 'string',\n  userName: 'string',\n});\n\nconsole.log(response.description);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'mediaitem create',
        example:
          "ocm mediaitem create \\\n  --bearer 'My Bearer' \\\n  --charge-point-id 1234 \\\n  --image-data-base64 'data:image/jpeg;base64,<BASE64_ENCODED_DATA>'",
      },
      go: {
        method: 'client.Mediaitem.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ocm-go"\n\t"github.com/stainless-sdks/ocm-go/option"\n)\n\nfunc main() {\n\tclient := ocm.NewClient(\n\t\toption.WithBearer("My Bearer"),\n\t)\n\tmediaitem, err := client.Mediaitem.New(context.TODO(), ocm.MediaitemNewParams{\n\t\tChargePointID:   1234,\n\t\tImageDataBase64: "data:image/jpeg;base64,<BASE64_ENCODED_DATA>",\n\t\tComment:         ocm.String("An example comment"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", mediaitem.Status)\n}\n',
      },
      http: {
        example:
          'curl https://api.openchargemap.io/v3/mediaitem \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $OCM_USERNAME" \\\n    -d \'{\n          "chargePointID": 1234,\n          "imageDataBase64": "data:image/jpeg;base64,<BASE64_ENCODED_DATA>"\n        }\'',
      },
      php: {
        method: 'mediaitem->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearer: 'My Bearer');\n\n$mediaitem = $client->mediaitem->create(\n  chargePointID: 1234,\n  imageDataBase64: 'data:image/jpeg;base64,<BASE64_ENCODED_DATA>',\n  comment: 'An example comment',\n);\n\nvar_dump($mediaitem);",
      },
      typescript: {
        method: 'client.mediaitem.create',
        example:
          "import Ocm from 'ocm-sdk';\n\nconst client = new Ocm({\n  bearer: process.env['OCM_USERNAME'], // This is the default and can be omitted\n});\n\nconst mediaitem = await client.mediaitem.create({\n  chargePointID: 1234,\n  imageDataBase64: 'data:image/jpeg;base64,<BASE64_ENCODED_DATA>',\n  comment: 'An example comment',\n});\n\nconsole.log(mediaitem.status);",
      },
    },
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
    perLanguage: {
      cli: {
        method: 'openapi retrieve',
        example: "ocm openapi retrieve \\\n  --api-key 'My API Key'",
      },
      go: {
        method: 'client.OpenAPI.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ocm-go"\n\t"github.com/stainless-sdks/ocm-go/option"\n)\n\nfunc main() {\n\tclient := ocm.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\topenAPI, err := client.OpenAPI.Get(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", openAPI)\n}\n',
      },
      http: {
        example: 'curl https://api.openchargemap.io/v3/openapi',
      },
      php: {
        method: 'openAPI->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$openAPI = $client->openAPI->retrieve();\n\nvar_dump($openAPI);",
      },
      typescript: {
        method: 'client.openAPI.retrieve',
        example:
          "import Ocm from 'ocm-sdk';\n\nconst client = new Ocm({\n  apiKey: process.env['OCM_API_KEY'], // This is the default and can be omitted\n});\n\nconst openAPI = await client.openAPI.retrieve();\n\nconsole.log(openAPI);",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'cli',
    content:
      "# Ocm CLI\n\nThe official CLI for the [Ocm REST API](https://openchargemap.org/site/about).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## Installation\n\n### Installing with Go\n\nTo test or install the CLI locally, you need [Go](https://go.dev/doc/install) version 1.22 or later installed.\n\n~~~sh\ngo install 'github.com/stainless-sdks/ocm-cli/cmd/ocm@latest'\n~~~\n\nOnce you have run `go install`, the binary is placed in your Go bin directory:\n\n- **Default location**: `$HOME/go/bin` (or `$GOPATH/bin` if GOPATH is set)\n- **Check your path**: Run `go env GOPATH` to see the base directory\n\nIf commands aren't found after installation, add the Go bin directory to your PATH:\n\n~~~sh\n# Add to your shell profile (.zshrc, .bashrc, etc.)\nexport PATH=\"$PATH:$(go env GOPATH)/bin\"\n~~~\n\n### Running Locally\n\nAfter cloning the git repository for this project, you can use the\n`scripts/run` script to run the tool locally:\n\n~~~sh\n./scripts/run args...\n~~~\n\n## Usage\n\nThe CLI follows a resource-based command structure:\n\n~~~sh\nocm [resource] <command> [flags...]\n~~~\n\n~~~sh\nocm poi list \\\n  --api-key 'My API Key'\n~~~\n\nFor details about specific commands, use the `--help` flag.\n\n### Environment variables\n\n| Environment variable | Required | Default value |\n| -------------------- | -------- | ------------- |\n| `OCM_API_KEY`        | no       | `null`        |\n| `OCM_API_KEY`        | no       | `null`        |\n| `OCM_USERNAME`       | no       | `null`        |\n\n### Global flags\n\n- `--api-key` (can also be set with `OCM_API_KEY` env var)\n- `--api-key-header` (can also be set with `OCM_API_KEY` env var)\n- `--bearer` (can also be set with `OCM_USERNAME` env var)\n- `--help` - Show command line usage\n- `--debug` - Enable debug logging (includes HTTP request/response details)\n- `--version`, `-v` - Show the CLI version\n- `--base-url` - Use a custom API backend URL\n- `--format` - Change the output format (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--format-error` - Change the output format for errors (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--transform` - Transform the data output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n- `--transform-error` - Transform the error output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n\n### Passing files as arguments\n\nTo pass files to your API, you can use the `@myfile.ext` syntax:\n\n~~~bash\nocm <command> --arg @abe.jpg\n~~~\n\nFiles can also be passed inside JSON or YAML blobs:\n\n~~~bash\nocm <command> --arg '{image: \"@abe.jpg\"}'\n# Equivalent:\nocm <command> <<YAML\narg:\n  image: \"@abe.jpg\"\nYAML\n~~~\n\nIf you need to pass a string literal that begins with an `@` sign, you can\nescape the `@` sign to avoid accidentally passing a file.\n\n~~~bash\nocm <command> --username '\\@abe'\n~~~\n\n#### Explicit encoding\n\nFor JSON endpoints, the CLI tool does filetype sniffing to determine whether the\nfile contents should be sent as a string literal (for plain text files) or as a\nbase64-encoded string literal (for binary files). If you need to explicitly send\nthe file as either plain text or base64-encoded data, you can use\n`@file://myfile.txt` (for string encoding) or `@data://myfile.dat` (for\nbase64-encoding). Note that absolute paths will begin with `@file://` or\n`@data://`, followed by a third `/` (for example, `@file:///tmp/file.txt`).\n\n~~~bash\nocm <command> --arg @data://file.txt\n~~~\n\n## Linking different Go SDK versions\n\nYou can link the CLI against a different version of the Ocm Go SDK\nfor development purposes using the `./scripts/link` script.\n\nTo link to a specific version from a repository (version can be a branch,\ngit tag, or commit hash):\n\n~~~bash\n./scripts/link github.com/org/repo@version\n~~~\n\nTo link to a local copy of the SDK:\n\n~~~bash\n./scripts/link ../path/to/ocm-go\n~~~\n\nIf you run the link script without any arguments, it will default to `../ocm-go`.\n",
  },
  {
    language: 'go',
    content:
      '# Ocm Go API Library\n\n<a href="https://pkg.go.dev/github.com/stainless-sdks/ocm-go"><img src="https://pkg.go.dev/badge/github.com/stainless-sdks/ocm-go.svg" alt="Go Reference"></a>\n\nThe Ocm Go library provides convenient access to the [Ocm REST API](https://openchargemap.org/site/about)\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Ocm MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=ocm-sdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIm9jbS1zZGstbWNwIl0sImVudiI6eyJPQ01fQVBJX0tFWSI6Ik15IEFQSSBLZXkgSGVhZGVyIiwiT0NNX1VTRVJOQU1FIjoiTXkgQmVhcmVyIn19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22ocm-sdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22ocm-sdk-mcp%22%5D%2C%22env%22%3A%7B%22OCM_API_KEY%22%3A%22My%20API%20Key%20Header%22%2C%22OCM_USERNAME%22%3A%22My%20Bearer%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n\n\n```go\nimport (\n\t"github.com/stainless-sdks/ocm-go" // imported as SDK_PackageName\n)\n```\n\n\n\nOr to pin the version:\n\n\n\n```sh\ngo get -u \'github.com/stainless-sdks/ocm-go@v0.0.1\'\n```\n\n\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ocm-go"\n\t"github.com/stainless-sdks/ocm-go/option"\n)\n\nfunc main() {\n\tclient := ocm.NewClient(\n\t\toption.WithAPIKey("My API Key"), // defaults to os.LookupEnv("OCM_API_KEY")\n\t)\n\tpois, err := client.Poi.List(context.TODO(), ocm.PoiListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pois)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.Poi.List(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/stainless-sdks/ocm-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.Poi.List(context.TODO(), ocm.PoiListParams{})\nif err != nil {\n\tvar apierr *ocm.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/poi": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.Poi.List(\n\tctx,\n\tocm.PoiListParams{},\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := ocm.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.Poi.List(\n\tcontext.TODO(),\n\tocm.PoiListParams{},\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\npois, err := client.Poi.List(\n\tcontext.TODO(),\n\tocm.PoiListParams{},\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", pois)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/ocm-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'php',
    content:
      '# Ocm PHP API Library\n\nThe Ocm PHP library provides convenient access to the Ocm REST API from any PHP 8.1.0+ application.\n\n## Installation\n\nTo use this package, install via Composer by adding the following to your application\'s `composer.json`:\n\n<!-- x-release-please-start-version -->\n```json\n{\n  "repositories": [\n    {\n      "type": "vcs",\n      "url": "git@github.com:andreibesleaga/ocm-php.git"\n    }\n  ],\n  "require": {\n    "andreibesleaga/ocm-php": "dev-main"\n  }\n}\n```\n<!-- x-release-please-end -->\n\n## Usage\n\n```php\n<?php\n\n$client = new Client(apiKey: getenv(\'OCM_API_KEY\') ?: \'My API Key\');\n\n$pois = $client->poi->list();\n\nvar_dump($pois);\n```',
  },
  {
    language: 'typescript',
    content:
      "# Ocm TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/ocm-sdk.svg?label=npm%20(stable))](https://npmjs.org/package/ocm-sdk) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/ocm-sdk)\n\nThis library provides convenient access to the Ocm REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [openchargemap.org](https://openchargemap.org/site/about). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Ocm MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=ocm-sdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIm9jbS1zZGstbWNwIl0sImVudiI6eyJPQ01fQVBJX0tFWSI6Ik15IEFQSSBLZXkgSGVhZGVyIiwiT0NNX1VTRVJOQU1FIjoiTXkgQmVhcmVyIn19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22ocm-sdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22ocm-sdk-mcp%22%5D%2C%22env%22%3A%7B%22OCM_API_KEY%22%3A%22My%20API%20Key%20Header%22%2C%22OCM_USERNAME%22%3A%22My%20Bearer%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install ocm-sdk\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Ocm from 'ocm-sdk';\n\nconst client = new Ocm({\n  apiKey: process.env['OCM_API_KEY'], // This is the default and can be omitted\n});\n\nconst pois = await client.poi.list();\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Ocm from 'ocm-sdk';\n\nconst client = new Ocm({\n  apiKey: process.env['OCM_API_KEY'], // This is the default and can be omitted\n});\n\nconst pois: Ocm.PoiListResponse = await client.poi.list();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst pois = await client.poi.list().catch(async (err) => {\n  if (err instanceof Ocm.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Ocm({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.poi.list({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Ocm({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.poi.list({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Ocm();\n\nconst response = await client.poi.list().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: pois, response: raw } = await client.poi.list().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(pois);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `OCM_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Ocm from 'ocm-sdk';\n\nconst client = new Ocm({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Ocm from 'ocm-sdk';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Ocm({\n  logger: logger.child({ name: 'Ocm' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.poi.list({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Ocm from 'ocm-sdk';\nimport fetch from 'my-fetch';\n\nconst client = new Ocm({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Ocm from 'ocm-sdk';\n\nconst client = new Ocm({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Ocm from 'ocm-sdk';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Ocm({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Ocm from 'ocm-sdk';\n\nconst client = new Ocm({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Ocm from 'npm:ocm-sdk';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Ocm({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/andreibesleaga/ocm-sdk/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

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
