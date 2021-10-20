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
  OsmosisGammV1beta1PoolAssetToken,
  OsmosisGammV1beta1PoolAssetTokenFromJSON,
  OsmosisGammV1beta1PoolAssetTokenFromJSONTyped,
  OsmosisGammV1beta1PoolAssetTokenToJSON,
} from "./";

/**
 *
 * @export
 * @interface OsmosisGammV1beta1PoolAsset
 */
export interface OsmosisGammV1beta1PoolAsset {
  /**
   *
   * @type {OsmosisGammV1beta1PoolAssetToken}
   * @memberof OsmosisGammV1beta1PoolAsset
   */
  token?: OsmosisGammV1beta1PoolAssetToken;
  /**
   *
   * @type {string}
   * @memberof OsmosisGammV1beta1PoolAsset
   */
  weight?: string;
}

export function OsmosisGammV1beta1PoolAssetFromJSON(
  json: any,
): OsmosisGammV1beta1PoolAsset {
  return OsmosisGammV1beta1PoolAssetFromJSONTyped(json, false);
}

export function OsmosisGammV1beta1PoolAssetFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): OsmosisGammV1beta1PoolAsset {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    token: !exists(json, "token")
      ? undefined
      : OsmosisGammV1beta1PoolAssetTokenFromJSON(json["token"]),
    weight: !exists(json, "weight") ? undefined : json["weight"],
  };
}

export function OsmosisGammV1beta1PoolAssetToJSON(
  value?: OsmosisGammV1beta1PoolAsset | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    token: OsmosisGammV1beta1PoolAssetTokenToJSON(value.token),
    weight: value.weight,
  };
}
