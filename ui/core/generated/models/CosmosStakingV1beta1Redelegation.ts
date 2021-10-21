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
  InlineResponse20028RedelegationEntries,
  InlineResponse20028RedelegationEntriesFromJSON,
  InlineResponse20028RedelegationEntriesFromJSONTyped,
  InlineResponse20028RedelegationEntriesToJSON,
} from "./";

/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 * @export
 * @interface CosmosStakingV1beta1Redelegation
 */
export interface CosmosStakingV1beta1Redelegation {
  /**
   * delegator_address is the bech32-encoded address of the delegator.
   * @type {string}
   * @memberof CosmosStakingV1beta1Redelegation
   */
  delegatorAddress?: string;
  /**
   * validator_src_address is the validator redelegation source operator address.
   * @type {string}
   * @memberof CosmosStakingV1beta1Redelegation
   */
  validatorSrcAddress?: string;
  /**
   * validator_dst_address is the validator redelegation destination operator address.
   * @type {string}
   * @memberof CosmosStakingV1beta1Redelegation
   */
  validatorDstAddress?: string;
  /**
   * entries are the redelegation entries.
   * @type {Array<InlineResponse20028RedelegationEntries>}
   * @memberof CosmosStakingV1beta1Redelegation
   */
  entries?: Array<InlineResponse20028RedelegationEntries>;
}

export function CosmosStakingV1beta1RedelegationFromJSON(
  json: any,
): CosmosStakingV1beta1Redelegation {
  return CosmosStakingV1beta1RedelegationFromJSONTyped(json, false);
}

export function CosmosStakingV1beta1RedelegationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CosmosStakingV1beta1Redelegation {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    delegatorAddress: !exists(json, "delegator_address")
      ? undefined
      : json["delegator_address"],
    validatorSrcAddress: !exists(json, "validator_src_address")
      ? undefined
      : json["validator_src_address"],
    validatorDstAddress: !exists(json, "validator_dst_address")
      ? undefined
      : json["validator_dst_address"],
    entries: !exists(json, "entries")
      ? undefined
      : (json["entries"] as Array<any>).map(
          InlineResponse20028RedelegationEntriesFromJSON,
        ),
  };
}

export function CosmosStakingV1beta1RedelegationToJSON(
  value?: CosmosStakingV1beta1Redelegation | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    delegator_address: value.delegatorAddress,
    validator_src_address: value.validatorSrcAddress,
    validator_dst_address: value.validatorDstAddress,
    entries:
      value.entries === undefined
        ? undefined
        : (value.entries as Array<any>).map(
            InlineResponse20028RedelegationEntriesToJSON,
          ),
  };
}
