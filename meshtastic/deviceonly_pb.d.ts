// @generated by protoc-gen-es v1.2.0
// @generated from file meshtastic/deviceonly.proto (package meshtastic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { MeshPacket, MyNodeInfo, NodeInfo, User } from "./mesh_pb.js";
import type { Channel } from "./channel_pb.js";
import type { LocalConfig, LocalModuleConfig } from "./localonly_pb.js";

/**
 *
 * TODO: REPLACE
 *
 * @generated from enum meshtastic.ScreenFonts
 */
export declare enum ScreenFonts {
  /**
   *
   * TODO: REPLACE
   *
   * @generated from enum value: FONT_SMALL = 0;
   */
  FONT_SMALL = 0,

  /**
   *
   * TODO: REPLACE
   *
   * @generated from enum value: FONT_MEDIUM = 1;
   */
  FONT_MEDIUM = 1,

  /**
   *
   * TODO: REPLACE
   *
   * @generated from enum value: FONT_LARGE = 2;
   */
  FONT_LARGE = 2,
}

/**
 *
 * This message is never sent over the wire, but it is used for serializing DB
 * state to flash in the device code
 * FIXME, since we write this each time we enter deep sleep (and have infinite
 * flash) it would be better to use some sort of append only data structure for
 * the receive queue and use the preferences store for the other stuff
 *
 * @generated from message meshtastic.DeviceState
 */
export declare class DeviceState extends Message<DeviceState> {
  /**
   *
   * Read only settings/info about this node
   *
   * @generated from field: meshtastic.MyNodeInfo my_node = 2;
   */
  myNode?: MyNodeInfo;

  /**
   *
   * My owner info
   *
   * @generated from field: meshtastic.User owner = 3;
   */
  owner?: User;

  /**
   *
   * TODO: REPLACE
   *
   * @generated from field: repeated meshtastic.NodeInfo node_db = 4;
   */
  nodeDb: NodeInfo[];

  /**
   *
   * Received packets saved for delivery to the phone
   *
   * @generated from field: repeated meshtastic.MeshPacket receive_queue = 5;
   */
  receiveQueue: MeshPacket[];

  /**
   *
   * A version integer used to invalidate old save files when we make
   * incompatible changes This integer is set at build time and is private to
   * NodeDB.cpp in the device code.
   *
   * @generated from field: uint32 version = 8;
   */
  version: number;

  /**
   *
   * We keep the last received text message (only) stored in the device flash,
   * so we can show it on the screen.
   * Might be null
   *
   * @generated from field: meshtastic.MeshPacket rx_text_message = 7;
   */
  rxTextMessage?: MeshPacket;

  /**
   *
   * Used only during development.
   * Indicates developer is testing and changes should never be saved to flash.
   *
   * @generated from field: bool no_save = 9;
   */
  noSave: boolean;

  /**
   *
   * Some GPS receivers seem to have bogus settings from the factory, so we always do one factory reset.
   *
   * @generated from field: bool did_gps_reset = 11;
   */
  didGpsReset: boolean;

  constructor(data?: PartialMessage<DeviceState>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.DeviceState";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeviceState;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeviceState;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeviceState;

  static equals(a: DeviceState | PlainMessage<DeviceState> | undefined, b: DeviceState | PlainMessage<DeviceState> | undefined): boolean;
}

/**
 *
 * The on-disk saved channels
 *
 * @generated from message meshtastic.ChannelFile
 */
export declare class ChannelFile extends Message<ChannelFile> {
  /**
   *
   * The channels our node knows about
   *
   * @generated from field: repeated meshtastic.Channel channels = 1;
   */
  channels: Channel[];

  /**
   *
   * A version integer used to invalidate old save files when we make
   * incompatible changes This integer is set at build time and is private to
   * NodeDB.cpp in the device code.
   *
   * @generated from field: uint32 version = 2;
   */
  version: number;

  constructor(data?: PartialMessage<ChannelFile>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.ChannelFile";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChannelFile;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChannelFile;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChannelFile;

  static equals(a: ChannelFile | PlainMessage<ChannelFile> | undefined, b: ChannelFile | PlainMessage<ChannelFile> | undefined): boolean;
}

/**
 *
 * This can be used for customizing the firmware distribution. If populated,
 * show a secondary bootup screen with custom logo and text for 2.5 seconds.
 *
 * @generated from message meshtastic.OEMStore
 */
export declare class OEMStore extends Message<OEMStore> {
  /**
   *
   * The Logo width in Px
   *
   * @generated from field: uint32 oem_icon_width = 1;
   */
  oemIconWidth: number;

  /**
   *
   * The Logo height in Px
   *
   * @generated from field: uint32 oem_icon_height = 2;
   */
  oemIconHeight: number;

  /**
   *
   * The Logo in XBM bytechar format
   *
   * @generated from field: bytes oem_icon_bits = 3;
   */
  oemIconBits: Uint8Array;

  /**
   *
   * Use this font for the OEM text.
   *
   * @generated from field: meshtastic.ScreenFonts oem_font = 4;
   */
  oemFont: ScreenFonts;

  /**
   *
   * Use this font for the OEM text.
   *
   * @generated from field: string oem_text = 5;
   */
  oemText: string;

  /**
   *
   * The default device encryption key, 16 or 32 byte
   *
   * @generated from field: bytes oem_aes_key = 6;
   */
  oemAesKey: Uint8Array;

  /**
   *
   * A Preset LocalConfig to apply during factory reset
   *
   * @generated from field: meshtastic.LocalConfig oem_local_config = 7;
   */
  oemLocalConfig?: LocalConfig;

  /**
   *
   * A Preset LocalModuleConfig to apply during factory reset
   *
   * @generated from field: meshtastic.LocalModuleConfig oem_local_module_config = 8;
   */
  oemLocalModuleConfig?: LocalModuleConfig;

  constructor(data?: PartialMessage<OEMStore>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.OEMStore";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OEMStore;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OEMStore;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OEMStore;

  static equals(a: OEMStore | PlainMessage<OEMStore> | undefined, b: OEMStore | PlainMessage<OEMStore> | undefined): boolean;
}

