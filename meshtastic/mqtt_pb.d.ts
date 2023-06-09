// @generated by protoc-gen-es v1.2.0
// @generated from file meshtastic/mqtt.proto (package meshtastic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { MeshPacket } from "./mesh_pb.js";

/**
 *
 * This message wraps a MeshPacket with extra metadata about the sender and how it arrived.
 *
 * @generated from message meshtastic.ServiceEnvelope
 */
export declare class ServiceEnvelope extends Message<ServiceEnvelope> {
  /**
   *
   * The (probably encrypted) packet
   *
   * @generated from field: meshtastic.MeshPacket packet = 1;
   */
  packet?: MeshPacket;

  /**
   *
   * The global channel ID it was sent on
   *
   * @generated from field: string channel_id = 2;
   */
  channelId: string;

  /**
   *
   * The sending gateway node ID. Can we use this to authenticate/prevent fake
   * nodeid impersonation for senders? - i.e. use gateway/mesh id (which is authenticated) + local node id as
   * the globally trusted nodenum
   *
   * @generated from field: string gateway_id = 3;
   */
  gatewayId: string;

  constructor(data?: PartialMessage<ServiceEnvelope>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.ServiceEnvelope";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServiceEnvelope;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServiceEnvelope;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServiceEnvelope;

  static equals(a: ServiceEnvelope | PlainMessage<ServiceEnvelope> | undefined, b: ServiceEnvelope | PlainMessage<ServiceEnvelope> | undefined): boolean;
}

