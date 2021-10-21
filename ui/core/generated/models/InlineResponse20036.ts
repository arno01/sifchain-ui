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
  InlineResponse20036Unbond,
  InlineResponse20036UnbondFromJSON,
  InlineResponse20036UnbondFromJSONTyped,
  InlineResponse20036UnbondToJSON,
} from "./";

/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 * @export
 * @interface InlineResponse20036
 */
export interface InlineResponse20036 {
  /**
   *
   * @type {InlineResponse20036Unbond}
   * @memberof InlineResponse20036
   */
  unbond?: InlineResponse20036Unbond;
}

export function InlineResponse20036FromJSON(json: any): InlineResponse20036 {
  return InlineResponse20036FromJSONTyped(json, false);
}

export function InlineResponse20036FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineResponse20036 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    unbond: !exists(json, "unbond")
      ? undefined
      : InlineResponse20036UnbondFromJSON(json["unbond"]),
  };
}

export function InlineResponse20036ToJSON(
  value?: InlineResponse20036 | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    unbond: InlineResponse20036UnbondToJSON(value.unbond),
  };
}
