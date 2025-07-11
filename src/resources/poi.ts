// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ReferencedataAPI from './referencedata';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Poi extends APIResource {
  /**
   * Used to fetch a list of POIs (sites) within a geographic boundary or near a
   * specific latitude/longitude. This is the primary method for most applications
   * and services to consume data from Open Charge Map.
   */
  list(query: PoiListParams | null | undefined = {}, options?: RequestOptions): APIPromise<PoiListResponse> {
    return this._client.get('/poi', { query, ...options });
  }
}

export type PoiListResponse = Array<PoiListResponse.PoiListResponseItem>;

export namespace PoiListResponse {
  /**
   * A POI (Point of Interest), also referred to as a `Site` or `ChargePoint`, is the
   * top-level set of information regarding a geographic site with one or more
   * electric vehicle charging equipment present. The term `ChargePointID` is used to
   * reference the unique ID for each POI, as called OCM ID. This reference appears
   * in various UI elements in the format `OCM-12345` to distinguish the ID number as
   * being a reference for a specific POI/site.
   *
   * Note: If the API is called in verbose mode properties expanded properties are
   * included in the results (e.g. UsageType, StatusType, DataProvider, OperatorInfo,
   * SubmissionStatus). With the exception of the AddressInfo property, other object
   * properties will not be populated in a compact result set and instead only the
   * associated reference IDs will be set (e.g. UsageTypeID, DataProviderID etc)
   */
  export interface PoiListResponseItem {
    /**
     * Geographic position for site and (nearest) address component information.
     */
    AddressInfo?: PoiListResponseItem.AddressInfo;

    /**
     * List of equipment summary information for this site
     */
    Connections?: Array<PoiListResponseItem.Connection>;

    /**
     * A Data Provider is the controller of the source data set used to construct the
     * details for this POI. Data has been transformed and interpreted from it's
     * original form. Each Data Provider provides data either by an explicit license or
     * agreement.
     */
    DataProvider?: PoiListResponseItem.DataProvider;

    /**
     * The reference ID for the Data Provider of this POI
     */
    DataProviderID?: number;

    /**
     * If present, this is the Data Providers own key for this POI within their source
     * data set
     */
    DataProvidersReference?: string;

    /**
     * A metric applied during imports to indicate a quality level based on available
     * information detail (5 == best). Largely unused currently.
     */
    DataQualityLevel?: number;

    /**
     * The date and time (UTC, ISO 8601) this POI was added to the Open Charge Map
     * database
     */
    DateCreated?: string;

    /**
     * The date and time (UTC, ISO 8601) this POI was last confirmed according to the
     * data provider or a user. See DateLastVerified for a dynamically computed date
     * based on multiple signals.
     */
    DateLastConfirmed?: string;

    /**
     * The date and time (UTC, ISO 8601) this POI or directly related child properties
     * were updated.
     */
    DateLastStatusUpdate?: string;

    /**
     * A dynamically computed value, the date and time (UTC, ISO 8601) this POI was
     * last confirmed by a user edit or related user comment
     */
    DateLastVerified?: string;

    /**
     * The date and time (UTC, ISO 8601) this POI is or was planned for commissioning.
     * In general planned POIs should not be presented to end users until confirmed
     * operational.
     */
    DatePlanned?: string;

    /**
     * General additional factual information for the POI. Users are discouraged from
     * using this field for opinions on site quality etc.
     */
    GeneralComments?: string;

    /**
     * The OCM reference ID for this POI (Point of Interest).
     */
    ID?: number;

    /**
     * A dynamically computed value indicating of any recently confirmation activity
     * has taken place for this site (positive check-ins etc)
     */
    IsRecentlyVerified?: boolean;

    /**
     * A list of user submitted photos for this site
     */
    MediaItems?: Array<PoiListResponseItem.MediaItem>;

    /**
     * Optional array of metadata values. Generally used to indicate data attribution
     * but is also intended for future use to indicate surrounding amenties, links or
     * foreign key values into other data sets.
     */
    MetadataValues?: Array<unknown>;

    /**
     * The number of bays or discreet stations available overall at this site. This
     * indicates the limiting for number of simultaneous site users.
     */
    NumberOfPoints?: number;

    /**
     * The reference ID of the equipment network operator or owner
     */
    OperatorID?: number;

    /**
     * An Operator is the public organisation which controls a network of charging
     * points.
     */
    OperatorInfo?: PoiListResponseItem.OperatorInfo;

    /**
     * The network operators own reference for this site (may be a site reference or a
     * single equipment reference)
     */
    OperatorsReference?: string;

    /**
     * If present, this data in this POI supercedes information in another POI.
     * Generally not relevant to consumers.
     */
    ParentChargePointID?: number;

    /**
     * The Status Type of a site or equipment item indicates whether it is generally
     * operational.
     */
    StatusType?: PoiListResponseItem.StatusType;

    /**
     * The overall operational status type reference ID for this POI (i.e. Operational
     * etc). 0 == Unknown
     */
    StatusTypeID?: number;

    /**
     * Submission Status object, detailing the POI listing status
     */
    SubmissionStatus?: PoiListResponseItem.SubmissionStatus;

    /**
     * The reference ID for the submission status type which applied to this POI.
     */
    SubmissionStatusTypeID?: number;

    /**
     * Free text description of likely usage costs associated with this site. Generally
     * relates to parking charges whether network operates this site as Free
     */
    UsageCost?: string;

    /**
     * The Usage Type of a site indicates the general restrictions on usage.
     */
    UsageType?: PoiListResponseItem.UsageType;

    /**
     * The reference ID for the site Usage Type, 0 == Unknown
     */
    UsageTypeID?: number;

    /**
     * A list of user comments or check-ins for this site
     */
    UserComments?: Array<PoiListResponseItem.UserComment>;

    /**
     * A universally unique identifier used as surrogate key. ID and UUID must be
     * preserved when submitting POI update information.
     */
    UUID?: string;
  }

  export namespace PoiListResponseItem {
    /**
     * Geographic position for site and (nearest) address component information.
     */
    export interface AddressInfo {
      /**
       * The reference ID for the Country
       */
      CountryID: number;

      /**
       * ID
       */
      ID: number;

      /**
       * Site latitude coordinate in decimal degrees
       */
      Latitude: number;

      /**
       * Site longitude coordinate in decimal degrees
       */
      Longitude: number;

      /**
       * Guidance for users to use or find the equipment
       */
      AccessComments?: string;

      /**
       * First line of nearby street address
       */
      AddressLine1?: string;

      /**
       * Second line of nearby street address
       */
      AddressLine2?: string;

      /**
       * Primary contact email
       */
      ContactEmail?: string;

      /**
       * Primary contact number
       */
      ContactTelephone1?: string;

      /**
       * Secondary contact number
       */
      ContactTelephone2?: string;

      /**
       * Country details
       */
      Country?: ReferencedataAPI.Country;

      /**
       * Distance from search location, if search is around a point
       */
      Distance?: number;

      /**
       * Unit used for distance, 1= Miles, 2 = KM
       */
      DistanceUnit?: number;

      /**
       * Postal code or Zipcode
       */
      Postcode?: string;

      /**
       * Optional website for more information
       */
      RelatedURL?: string;

      /**
       * State or Province
       */
      StateOrProvince?: string;

      /**
       * General title for this location to aid user
       */
      Title?: string;

      /**
       * Town or City
       */
      Town?: string;
    }

    /**
     * Details on the equipment type and power capability.
     *
     * If calling the API in verbose mode related models are also included in the
     * result (e.g. ConnectionType, Level, StatusType, CurrentType)
     */
    export interface Connection {
      /**
       * EVSE supply max current in Amps
       */
      Amps?: number;

      Comments?: string;

      /**
       * The type of end-user connection an EVSE supports.
       */
      ConnectionType?: Connection.ConnectionType;

      ConnectionTypeID?: number;

      /**
       * Indicates the EVSE power supply type e.g. DC (Direct Current), AC (Single
       * Phase), AC (3 Phase).
       */
      CurrentType?: Connection.CurrentType;

      /**
       * The supply type reference ID (e.g. DC etc)
       */
      CurrentTypeID?: number;

      ID?: number;

      /**
       * A general category for equipment power capability. Deprecated for general use.
       * Currently computed automatically based on equipment power.
       */
      Level?: Connection.Level;

      /**
       * @deprecated A general category for power capability. Depreceated in favour of
       * documenting specific equipment power in kW.
       */
      LevelID?: number;

      /**
       * Peak available power in kW
       */
      PowerKW?: number;

      /**
       * Optional summary number of equipment items available with this specification
       */
      Quantity?: number;

      /**
       * Optional operators reference for this connection/port
       */
      Reference?: string;

      /**
       * The Status Type of a site or equipment item indicates whether it is generally
       * operational.
       */
      StatusType?: Connection.StatusType;

      /**
       * Status Type reference ID. 0 = Unknown
       */
      StatusTypeID?: number;

      /**
       * EVSE supply voltage
       */
      Voltage?: number;
    }

    export namespace Connection {
      /**
       * The type of end-user connection an EVSE supports.
       */
      export interface ConnectionType {
        /**
         * Formal (standard) name for this connection type
         */
        FormalName?: string;

        ID?: number;

        /**
         * If true, this is an discontinued but used connection type
         */
        IsDiscontinued?: boolean;

        /**
         * If true, this is an obsolete connection type and is unlikely top be present in
         * modern infrastructure
         */
        IsObsolete?: boolean;

        Title?: string;
      }

      /**
       * Indicates the EVSE power supply type e.g. DC (Direct Current), AC (Single
       * Phase), AC (3 Phase).
       */
      export interface CurrentType {
        ID: number;

        Title?: string;
      }

      /**
       * A general category for equipment power capability. Deprecated for general use.
       * Currently computed automatically based on equipment power.
       */
      export interface Level {
        Comments: string;

        ID: number;

        /**
         * If true, this level is considered 'fast' charging, relative to other levels.
         */
        IsFastChargeCapable: boolean;

        Title?: string;
      }

      /**
       * The Status Type of a site or equipment item indicates whether it is generally
       * operational.
       */
      export interface StatusType {
        ID: number;

        IsOperational: boolean;

        IsUserSelectable: boolean;

        Title?: string;
      }
    }

    /**
     * A Data Provider is the controller of the source data set used to construct the
     * details for this POI. Data has been transformed and interpreted from it's
     * original form. Each Data Provider provides data either by an explicit license or
     * agreement.
     */
    export interface DataProvider {
      /**
       * The reference ID for this Data Provider
       */
      ID: number;

      /**
       * Currently not implemented. Indicates a potential editing restriction.
       */
      IsRestrictedEdit: boolean;

      /**
       * General public comments with information about this Data Provider.
       */
      Comments?: string;

      /**
       * Status object describing whether this data provider is currently enabled and the
       * type of source (manual entry, imported etc)
       */
      DataProviderStatusType?: DataProvider.DataProviderStatusType;

      /**
       * Date and time (UTC) the last import was performed for this data provider (if an
       * import).
       */
      DateLastImported?: string;

      /**
       * If false, data may not be imported for this provider.
       */
      IsApprovedImport?: boolean;

      /**
       * If true, data provider uses an Open Data license
       */
      IsOpenDataLicensed?: boolean;

      /**
       * Summary of the licensing which applies for this Data Provider. Each Data
       * Provider has one specific license or agreement. Usage of the data requires
       * acceptance of the given license.
       */
      License?: string;

      /**
       * The Title for this Data Provider
       */
      Title?: string;

      /**
       * Website URL for this data provider
       */
      WebsiteURL?: string;
    }

    export namespace DataProvider {
      /**
       * Status object describing whether this data provider is currently enabled and the
       * type of source (manual entry, imported etc)
       */
      export interface DataProviderStatusType {
        /**
         * The reference ID for this provider status type
         */
        ID: number;

        /**
         * If false, results from this data provider are not currently enabled
         */
        IsProviderEnabled: boolean;

        /**
         * The Title of this status type
         */
        description?: string;
      }
    }

    /**
     * A user submitted media item related to a specific charge point or site.
     * Currently always an image.
     */
    export interface MediaItem {
      ChargePointID?: string;

      Comment?: string;

      DateCreated?: string;

      ID?: string;

      IsEnabled?: boolean;

      IsExternalResource?: boolean;

      IsFeaturedItem?: boolean;

      IsVideo?: boolean;

      ItemThumbnailURL?: string;

      ItemURL?: string;

      /**
       * Short public summary profile for a specific Open Charge Map user
       */
      User?: MediaItem.User;
    }

    export namespace MediaItem {
      /**
       * Short public summary profile for a specific Open Charge Map user
       */
      export interface User {
        ID?: number;

        ProfileImageURL?: string;

        ReputationPoints?: number;

        Username?: string;
      }
    }

    /**
     * An Operator is the public organisation which controls a network of charging
     * points.
     */
    export interface OperatorInfo {
      /**
       * Id
       */
      ID: number;

      /**
       * Geographic position for site and (nearest) address component information.
       */
      AddressInfo?: OperatorInfo.AddressInfo;

      BookingURL?: string;

      Comments?: string;

      ContactEmail?: string;

      /**
       * Used to send automated notification to network operator if a user submits a
       * fault report comment/check-in
       */
      FaultReportEmail?: string;

      /**
       * @deprecated If true, this operator represents a private individual
       */
      IsPrivateIndividual?: boolean;

      /**
       * If true, this network restricts community edits for OCM data
       */
      IsRestrictedEdit?: boolean;

      /**
       * Primary contact number for network users
       */
      PhonePrimaryContact?: string;

      /**
       * Secondary contact number
       */
      PhoneSecondaryContact?: string;

      /**
       * Title
       */
      Title?: string;

      /**
       * Website for more information about this network
       */
      WebsiteURL?: string;
    }

    export namespace OperatorInfo {
      /**
       * Geographic position for site and (nearest) address component information.
       */
      export interface AddressInfo {
        /**
         * The reference ID for the Country
         */
        CountryID: number;

        /**
         * ID
         */
        ID: number;

        /**
         * Site latitude coordinate in decimal degrees
         */
        Latitude: number;

        /**
         * Site longitude coordinate in decimal degrees
         */
        Longitude: number;

        /**
         * Guidance for users to use or find the equipment
         */
        AccessComments?: string;

        /**
         * First line of nearby street address
         */
        AddressLine1?: string;

        /**
         * Second line of nearby street address
         */
        AddressLine2?: string;

        /**
         * Primary contact email
         */
        ContactEmail?: string;

        /**
         * Primary contact number
         */
        ContactTelephone1?: string;

        /**
         * Secondary contact number
         */
        ContactTelephone2?: string;

        /**
         * Country details
         */
        Country?: ReferencedataAPI.Country;

        /**
         * Distance from search location, if search is around a point
         */
        Distance?: number;

        /**
         * Unit used for distance, 1= Miles, 2 = KM
         */
        DistanceUnit?: number;

        /**
         * Postal code or Zipcode
         */
        Postcode?: string;

        /**
         * Optional website for more information
         */
        RelatedURL?: string;

        /**
         * State or Province
         */
        StateOrProvince?: string;

        /**
         * General title for this location to aid user
         */
        Title?: string;

        /**
         * Town or City
         */
        Town?: string;
      }
    }

    /**
     * The Status Type of a site or equipment item indicates whether it is generally
     * operational.
     */
    export interface StatusType {
      ID: number;

      IsOperational: boolean;

      IsUserSelectable: boolean;

      Title?: string;
    }

    /**
     * Submission Status object, detailing the POI listing status
     */
    export interface SubmissionStatus {
      /**
       * Submission Status Type reference ID
       */
      ID: number;

      /**
       * If true, POI listing is live (not draft or de-listed)
       */
      IsLive: boolean;

      Title?: string;
    }

    /**
     * The Usage Type of a site indicates the general restrictions on usage.
     */
    export interface UsageType {
      ID: number;

      /**
       * @deprecated If true this usage required a physical access key
       */
      IsAccessKeyRequired: boolean;

      /**
       * If true, this usage type requires registration or membership with a service.
       */
      IsMembershipRequired: boolean;

      /**
       * If true, usage requires paying at location
       */
      IsPayAtLocation: boolean;

      Title?: string;
    }

    /**
     * A user comment or check-in for a specific charging point (POI/Site)
     */
    export interface UserComment {
      ChargePointID?: number;

      /**
       * Classification for the users comment or experience using a specific charging
       * location.
       */
      CheckinStatusType?: UserComment.CheckinStatusType;

      CheckinStatusTypeID?: number;

      Comment?: string;

      /**
       * Category for a user comment, e.g. General Comment, Fault Report (Notice To Users
       * And Operator)
       */
      CommentType?: UserComment.CommentType;

      CommentTypeID?: number;

      DateCreated?: string;

      ID?: string;

      RelatedURL?: string;

      /**
       * Short public summary profile for a specific Open Charge Map user
       */
      User?: UserComment.User;

      UserName?: string;
    }

    export namespace UserComment {
      /**
       * Classification for the users comment or experience using a specific charging
       * location.
       */
      export interface CheckinStatusType {
        ID: number;

        /**
         * If true, checkin or comment was provided by an automated system.
         */
        IsAutomatedCheckin: boolean;

        /**
         * If true, this type of checkin/comment is considered positive.
         */
        IsPositive?: boolean;

        Title?: string;
      }

      /**
       * Category for a user comment, e.g. General Comment, Fault Report (Notice To Users
       * And Operator)
       */
      export interface CommentType {
        ID?: number;

        Title?: string;
      }

      /**
       * Short public summary profile for a specific Open Charge Map user
       */
      export interface User {
        ID?: number;

        ProfileImageURL?: string;

        ReputationPoints?: number;

        Username?: string;
      }
    }
  }
}

export interface PoiListParams {
  /**
   * Filter results to a given bounding box. specify top left and bottom right box
   * corners as: (lat,lng),(lat2,lng2)
   */
  boundingbox?: Array<unknown>;

  /**
   * Set to true to get a property names in camelCase format.
   */
  camelcase?: boolean;

  /**
   * Exact match on a given OCM POI ID (comma separated list)
   */
  chargepointid?: string;

  /**
   * String to identify your client application. Optional but recommended to
   * distinguish your client from other bots/crawlers
   */
  client?: string;

  /**
   * Set to true to remove reference data objects from output (just returns IDs for
   * common reference data such as DataProvider etc).
   */
  compact?: boolean;

  /**
   * Exact match on a given connection type id (comma separated list)
   */
  connectiontypeid?: Array<unknown>;

  /**
   * 2-character ISO Country code to filter to one specific country
   */
  countrycode?: string;

  /**
   * Exact match on a given numeric country id (comma separated list)
   */
  countryid?: Array<string>;

  /**
   * Exact match on a given data provider id id (comma separated list).
   */
  dataproviderid?: Array<unknown>;

  /**
   * Optionally filter results by a max distance from the given latitude/longitude
   */
  distance?: number;

  /**
   * `miles` or `km` distance unit
   */
  distanceunit?: string;

  /**
   * Filter to items with ID greater than given value
   */
  greaterthanid?: string;

  /**
   * If true, user comments and media items will be include in result set
   */
  includecomments?: boolean;

  /**
   * Latitude for distance calculation and filtering
   */
  latitude?: number;

  /**
   * Exact match on a given charging level (1-3) id (comma separated list)
   */
  levelid?: Array<unknown>;

  /**
   * Longitude for distance calculation and filtering
   */
  longitude?: number;

  /**
   * Limit on max number of results returned
   */
  maxresults?: number;

  /**
   * Filter to results modified after the given date
   */
  modifiedsince?: string;

  /**
   * Use opendata=true for only OCM provided ("Open") data.
   */
  opendata?: boolean;

  /**
   * Exact match on a given EVSE operator id (comma separated list)
   */
  operatorid?: Array<unknown>;

  /**
   * Optional output format `json`,`geojson`,`xml`,`csv`, JSON is the default and
   * recommended as the highest fidelity.
   */
  output?: string;

  /**
   * Filter results within a given Polygon. Specify an encoded polyline for the
   * polygon shape. Polygon will be automatically closed from the last point to the
   * first point.
   */
  polygon?: string;

  /**
   * Filter results along an encoded polyline, use with distance param to increase
   * search distance along line. Polyline is expanded into a polygon to cover the
   * search distance.
   */
  polyline?: string;

  /**
   * Default sort order is based on spatial index but you can optionally sort by
   * `modified_asc` for results in order of modification (oldest to newest), or
   * ` id_asc` for results in order of ID
   */
  sortby?: string;

  /**
   * Exact match on a given status type id (comma separated list)
   */
  statustypeid?: Array<unknown>;

  /**
   * Exact match on a given usage type id (comma separated list)
   */
  usagetypeid?: Array<unknown>;

  /**
   * Set to false to get a smaller result set with null items removed.
   */
  verbose?: boolean;
}

export declare namespace Poi {
  export { type PoiListResponse as PoiListResponse, type PoiListParams as PoiListParams };
}
