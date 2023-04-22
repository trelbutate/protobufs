// @generated by protoc-gen-es v1.2.0
// @generated from file meshtastic/apponly.proto (package meshtastic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ChannelSettings } from "./channel_pb.js";
import type { Config_LoRaConfig } from "./config_pb.js";

/**
 *
 * This is the most compact possible representation for a set of channels.
 * It includes only one PRIMARY channel (which must be first) and
 * any SECONDARY channels.
 * No DISABLED channels are included.
 * This abstraction is used only on the the 'app side' of the world (ie python, javascript and android etc) to show a group of Channels as a (long) URL
 *
 * @generated from message meshtastic.ChannelSet
 */
export declare class ChannelSet extends Message<ChannelSet> {
  /**
   *
   * Channel list with settings
   *
   * @generated from field: repeated meshtastic.ChannelSettings settings = 1;
   */
  settings: ChannelSettings[];

  /**
   *
   * LoRa config
   *
   * @generated from field: meshtastic.Config.LoRaConfig lora_config = 2;
   */
  loraConfig?: Config_LoRaConfig;

  constructor(data?: PartialMessage<ChannelSet>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.ChannelSet";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChannelSet;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChannelSet;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChannelSet;

  static equals(a: ChannelSet | PlainMessage<ChannelSet> | undefined, b: ChannelSet | PlainMessage<ChannelSet> | undefined): boolean;
}
