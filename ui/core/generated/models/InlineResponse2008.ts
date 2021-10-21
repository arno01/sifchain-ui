/* tslint:disable */
/* eslint-disable */
/**
 * Sifchain - gRPC Gateway docs
 * A REST interface for state queries, legacy transactions
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
import {
  InlineResponse2008Pool,
  InlineResponse2008PoolFromJSON,
  InlineResponse2008PoolFromJSONTyped,
  InlineResponse2008PoolToJSON,
} from "./";

/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 * @export
 * @interface InlineResponse2008
 */
export interface InlineResponse2008 {
  /**
   * pool defines community pool's coins.
   * @type {Array<InlineResponse2008Pool>}
   * @memberof InlineResponse2008
   */
  pool?: Array<InlineResponse2008Pool>;
}

export function InlineResponse2008FromJSON(json: any): InlineResponse2008 {
  return InlineResponse2008FromJSONTyped(json, false);
}

export function InlineResponse2008FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineResponse2008 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    pool: !exists(json, "pool")
      ? undefined
      : (json["pool"] as Array<any>).map(InlineResponse2008PoolFromJSON),
  };
}

export function InlineResponse2008ToJSON(
  value?: InlineResponse2008 | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    pool:
      value.pool === undefined
        ? undefined
        : (value.pool as Array<any>).map(InlineResponse2008PoolToJSON),
  };
}
