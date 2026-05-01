// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ReferencedataAPI from './referencedata';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Referencedata extends APIResource {
  /**
   * Returns the core reference data used for looking up IDs such as Connection
   * Types, Operators, Countries etc.
   *
   * This information is useful for UIs such as editing systems or for fetching
   * results in the lighter non-verbose mode, then hydrating POI results back into
   * complex objects.
   */
  retrieve(
    query: ReferencedataRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReferencedataRetrieveResponse> {
    return this._client.get('/referencedata', { query, ...options });
  }
}

/**
 * Country details
 */
export interface Country {
  /**
   * The Continentcode Schema
   */
  ContinentCode: string;

  /**
   * The Id Schema
   */
  ID: number;

  /**
   * The Isocode Schema
   */
  ISOCode: string;

  /**
   * The Title Schema
   */
  Title?: string;
}

/**
 * Set of core reference data used for other API results and UI
 */
export interface ReferencedataRetrieveResponse {
  ChargerTypes?: Array<ReferencedataRetrieveResponse.ChargerType>;

  CheckinStatusTypes?: Array<ReferencedataRetrieveResponse.CheckinStatusType>;

  ConnectionTypes?: Array<ReferencedataRetrieveResponse.ConnectionType>;

  Countries?: Array<Country>;

  CurrentTypes?: Array<ReferencedataRetrieveResponse.CurrentType>;

  DataProviders?: Array<ReferencedataRetrieveResponse.DataProvider>;

  DataTypes?: unknown;

  MetadataGroups?: string;

  Operators?: Array<ReferencedataRetrieveResponse.Operator>;

  StatusTypes?: Array<ReferencedataRetrieveResponse.StatusType>;

  SubmissionStatusTypes?: Array<ReferencedataRetrieveResponse.SubmissionStatusType>;

  UsageTypes?: Array<ReferencedataRetrieveResponse.UsageType>;

  UserCommentTypes?: Array<ReferencedataRetrieveResponse.UserCommentType>;
}

export namespace ReferencedataRetrieveResponse {
  /**
   * A general category for equipment power capability. Deprecated for general use.
   * Currently computed automatically based on equipment power.
   */
  export interface ChargerType {
    Comments: string;

    ID: number;

    /**
     * If true, this level is considered 'fast' charging, relative to other levels.
     */
    IsFastChargeCapable: boolean;

    Title?: string;
  }

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
   * An Operator is the public organisation which controls a network of charging
   * points.
   */
  export interface Operator {
    /**
     * Id
     */
    ID: number;

    /**
     * Geographic position for site and (nearest) address component information.
     */
    AddressInfo?: Operator.AddressInfo;

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

  export namespace Operator {
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
  export interface SubmissionStatusType {
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
   * Category for a user comment, e.g. General Comment, Fault Report (Notice To Users
   * And Operator)
   */
  export interface UserCommentType {
    ID?: number;

    Title?: string;
  }
}

export interface ReferencedataRetrieveParams {
  /**
   * Optional filter on countryid, exact match on a given numeric country id (comma
   * separated list)
   */
  countryid?: Array<unknown>;
}

export declare namespace Referencedata {
  export {
    type Country as Country,
    type ReferencedataRetrieveResponse as ReferencedataRetrieveResponse,
    type ReferencedataRetrieveParams as ReferencedataRetrieveParams,
  };
}
