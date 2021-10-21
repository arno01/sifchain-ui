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
/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 * @export
 * @interface BasicBlockInfo
 */
export interface BasicBlockInfo {
  /**
   *
   * @type {string}
   * @memberof BasicBlockInfo
   */
  block?: string;
  /**
   *
   * @type {string}
   * @memberof BasicBlockInfo
   */
  app?: string;
}

export function BasicBlockInfoFromJSON(json: any): BasicBlockInfo {
  return BasicBlockInfoFromJSONTyped(json, false);
}

export function BasicBlockInfoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): BasicBlockInfo {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    block: !exists(json, "block") ? undefined : json["block"],
    app: !exists(json, "app") ? undefined : json["app"],
  };
}

export function BasicBlockInfoToJSON(value?: BasicBlockInfo | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    block: value.block,
    app: value.app,
  };
}
