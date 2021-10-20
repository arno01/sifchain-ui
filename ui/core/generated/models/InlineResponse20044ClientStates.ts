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
  ClientState,
  ClientStateFromJSON,
  ClientStateFromJSONTyped,
  ClientStateToJSON,
} from "./";

/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 * @export
 * @interface InlineResponse20044ClientStates
 */
export interface InlineResponse20044ClientStates {
  /**
   *
   * @type {string}
   * @memberof InlineResponse20044ClientStates
   */
  clientId?: string;
  /**
   *
   * @type {ClientState}
   * @memberof InlineResponse20044ClientStates
   */
  clientState?: ClientState;
}

export function InlineResponse20044ClientStatesFromJSON(
  json: any,
): InlineResponse20044ClientStates {
  return InlineResponse20044ClientStatesFromJSONTyped(json, false);
}

export function InlineResponse20044ClientStatesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineResponse20044ClientStates {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    clientId: !exists(json, "client_id") ? undefined : json["client_id"],
    clientState: !exists(json, "client_state")
      ? undefined
      : ClientStateFromJSON(json["client_state"]),
  };
}

export function InlineResponse20044ClientStatesToJSON(
  value?: InlineResponse20044ClientStates | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    client_id: value.clientId,
    client_state: ClientStateToJSON(value.clientState),
  };
}
