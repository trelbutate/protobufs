// @generated by protoc-gen-es v1.2.0
// @generated from file meshtastic/admin.proto (package meshtastic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Channel } from "./channel_pb.js";
import type { DeviceMetadata, User } from "./mesh_pb.js";
import type { Config } from "./config_pb.js";
import type { ModuleConfig } from "./module_config_pb.js";
import type { DeviceConnectionStatus } from "./connection_status_pb.js";

/**
 *
 * This message is handled by the Admin module and is responsible for all settings/channel read/write operations.
 * This message is used to do settings operations to both remote AND local nodes.
 * (Prior to 1.2 these operations were done via special ToRadio operations)
 *
 * @generated from message meshtastic.AdminMessage
 */
export declare class AdminMessage extends Message<AdminMessage> {
  /**
   *
   * TODO: REPLACE
   *
   * @generated from oneof meshtastic.AdminMessage.payload_variant
   */
  payloadVariant: {
    /**
     *
     * Send the specified channel in the response to this message
     * NOTE: This field is sent with the channel index + 1 (to ensure we never try to send 'zero' - which protobufs treats as not present)
     *
     * @generated from field: uint32 get_channel_request = 1;
     */
    value: number;
    case: "getChannelRequest";
  } | {
    /**
     *
     * TODO: REPLACE
     *
     * @generated from field: meshtastic.Channel get_channel_response = 2;
     */
    value: Channel;
    case: "getChannelResponse";
  } | {
    /**
     *
     * Send the current owner data in the response to this message.
     *
     * @generated from field: bool get_owner_request = 3;
     */
    value: boolean;
    case: "getOwnerRequest";
  } | {
    /**
     *
     * TODO: REPLACE
     *
     * @generated from field: meshtastic.User get_owner_response = 4;
     */
    value: User;
    case: "getOwnerResponse";
  } | {
    /**
     *
     * Ask for the following config data to be sent
     *
     * @generated from field: meshtastic.AdminMessage.ConfigType get_config_request = 5;
     */
    value: AdminMessage_ConfigType;
    case: "getConfigRequest";
  } | {
    /**
     *
     * Send the current Config in the response to this message.
     *
     * @generated from field: meshtastic.Config get_config_response = 6;
     */
    value: Config;
    case: "getConfigResponse";
  } | {
    /**
     *
     * Ask for the following config data to be sent
     *
     * @generated from field: meshtastic.AdminMessage.ModuleConfigType get_module_config_request = 7;
     */
    value: AdminMessage_ModuleConfigType;
    case: "getModuleConfigRequest";
  } | {
    /**
     *
     * Send the current Config in the response to this message.
     *
     * @generated from field: meshtastic.ModuleConfig get_module_config_response = 8;
     */
    value: ModuleConfig;
    case: "getModuleConfigResponse";
  } | {
    /**
     *
     * Get the Canned Message Module messages in the response to this message.
     *
     * @generated from field: bool get_canned_message_module_messages_request = 10;
     */
    value: boolean;
    case: "getCannedMessageModuleMessagesRequest";
  } | {
    /**
     *
     * Get the Canned Message Module messages in the response to this message.
     *
     * @generated from field: string get_canned_message_module_messages_response = 11;
     */
    value: string;
    case: "getCannedMessageModuleMessagesResponse";
  } | {
    /**
     *
     * Request the node to send device metadata (firmware, protobuf version, etc)
     *
     * @generated from field: bool get_device_metadata_request = 12;
     */
    value: boolean;
    case: "getDeviceMetadataRequest";
  } | {
    /**
     *
     * Device metadata response
     *
     * @generated from field: meshtastic.DeviceMetadata get_device_metadata_response = 13;
     */
    value: DeviceMetadata;
    case: "getDeviceMetadataResponse";
  } | {
    /**
     *
     * Get the Ringtone in the response to this message.
     *
     * @generated from field: bool get_ringtone_request = 14;
     */
    value: boolean;
    case: "getRingtoneRequest";
  } | {
    /**
     *
     * Get the Ringtone in the response to this message.
     *
     * @generated from field: string get_ringtone_response = 15;
     */
    value: string;
    case: "getRingtoneResponse";
  } | {
    /**
     *
     * Request the node to send it's connection status
     *
     * @generated from field: bool get_device_connection_status_request = 16;
     */
    value: boolean;
    case: "getDeviceConnectionStatusRequest";
  } | {
    /**
     *
     * Device connection status response
     *
     * @generated from field: meshtastic.DeviceConnectionStatus get_device_connection_status_response = 17;
     */
    value: DeviceConnectionStatus;
    case: "getDeviceConnectionStatusResponse";
  } | {
    /**
     *
     * Setup a node for licensed amateur (ham) radio operation
     *
     * @generated from field: meshtastic.HamParameters set_ham_mode = 18;
     */
    value: HamParameters;
    case: "setHamMode";
  } | {
    /**
     *
     * Set the owner for this node
     *
     * @generated from field: meshtastic.User set_owner = 32;
     */
    value: User;
    case: "setOwner";
  } | {
    /**
     *
     * Set channels (using the new API).
     * A special channel is the "primary channel".
     * The other records are secondary channels.
     * Note: only one channel can be marked as primary.
     * If the client sets a particular channel to be primary, the previous channel will be set to SECONDARY automatically.
     *
     * @generated from field: meshtastic.Channel set_channel = 33;
     */
    value: Channel;
    case: "setChannel";
  } | {
    /**
     *
     * Set the current Config
     *
     * @generated from field: meshtastic.Config set_config = 34;
     */
    value: Config;
    case: "setConfig";
  } | {
    /**
     *
     * Set the current Config
     *
     * @generated from field: meshtastic.ModuleConfig set_module_config = 35;
     */
    value: ModuleConfig;
    case: "setModuleConfig";
  } | {
    /**
     *
     * Set the Canned Message Module messages text.
     *
     * @generated from field: string set_canned_message_module_messages = 36;
     */
    value: string;
    case: "setCannedMessageModuleMessages";
  } | {
    /**
     *
     * Set the ringtone for ExternalNotification.
     *
     * @generated from field: string set_ringtone_message = 37;
     */
    value: string;
    case: "setRingtoneMessage";
  } | {
    /**
     *
     * Begins an edit transaction for config, module config, owner, and channel settings changes
     * This will delay the standard *implicit* save to the file system and subsequent reboot behavior until committed (commit_edit_settings)
     *
     * @generated from field: bool begin_edit_settings = 64;
     */
    value: boolean;
    case: "beginEditSettings";
  } | {
    /**
     *
     * Commits an open transaction for any edits made to config, module config, owner, and channel settings
     *
     * @generated from field: bool commit_edit_settings = 65;
     */
    value: boolean;
    case: "commitEditSettings";
  } | {
    /**
     *
     * Tell the node to reboot into the OTA Firmware in this many seconds (or <0 to cancel reboot)
     * Only Implemented for ESP32 Devices. This needs to be issued to send a new main firmware via bluetooth.
     *
     * @generated from field: int32 reboot_ota_seconds = 95;
     */
    value: number;
    case: "rebootOtaSeconds";
  } | {
    /**
     *
     * This message is only supported for the simulator Portduino build.
     * If received the simulator will exit successfully.
     *
     * @generated from field: bool exit_simulator = 96;
     */
    value: boolean;
    case: "exitSimulator";
  } | {
    /**
     *
     * Tell the node to reboot in this many seconds (or <0 to cancel reboot)
     *
     * @generated from field: int32 reboot_seconds = 97;
     */
    value: number;
    case: "rebootSeconds";
  } | {
    /**
     *
     * Tell the node to shutdown in this many seconds (or <0 to cancel shutdown)
     *
     * @generated from field: int32 shutdown_seconds = 98;
     */
    value: number;
    case: "shutdownSeconds";
  } | {
    /**
     *
     * Tell the node to factory reset, all device settings will be returned to factory defaults.
     *
     * @generated from field: int32 factory_reset = 99;
     */
    value: number;
    case: "factoryReset";
  } | {
    /**
     *
     * Tell the node to reset the nodedb.
     *
     * @generated from field: int32 nodedb_reset = 100;
     */
    value: number;
    case: "nodedbReset";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<AdminMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.AdminMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AdminMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AdminMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AdminMessage;

  static equals(a: AdminMessage | PlainMessage<AdminMessage> | undefined, b: AdminMessage | PlainMessage<AdminMessage> | undefined): boolean;
}

/**
 *
 * TODO: REPLACE
 *
 * @generated from enum meshtastic.AdminMessage.ConfigType
 */
export declare enum AdminMessage_ConfigType {
  /**
   *
   * TODO: REPLACE
   *
   * @generated from enum value: DEVICE_CONFIG = 0;
   */
  DEVICE_CONFIG = 0,

  /**
   *
   * TODO: REPLACE
   *
   * @generated from enum value: POSITION_CONFIG = 1;
   */
  POSITION_CONFIG = 1,

  /**
   *
   * TODO: REPLACE
   *
   * @generated from enum value: POWER_CONFIG = 2;
   */
  POWER_CONFIG = 2,

  /**
   *
   * TODO: REPLACE
   *
   * @generated from enum value: NETWORK_CONFIG = 3;
   */
  NETWORK_CONFIG = 3,

  /**
   *
   * TODO: REPLACE
   *
   * @generated from enum value: DISPLAY_CONFIG = 4;
   */
  DISPLAY_CONFIG = 4,

  /**
   *
   * TODO: REPLACE
   *
   * @generated from enum value: LORA_CONFIG = 5;
   */
  LORA_CONFIG = 5,

  /**
   *
   * TODO: REPLACE
   *
   * @generated from enum value: BLUETOOTH_CONFIG = 6;
   */
  BLUETOOTH_CONFIG = 6,
}

/**
 *
 * TODO: REPLACE
 *
 * @generated from enum meshtastic.AdminMessage.ModuleConfigType
 */
export declare enum AdminMessage_ModuleConfigType {
  /**
   *
   * TODO: REPLACE
   *
   * @generated from enum value: MQTT_CONFIG = 0;
   */
  MQTT_CONFIG = 0,

  /**
   *
   * TODO: REPLACE
   *
   * @generated from enum value: SERIAL_CONFIG = 1;
   */
  SERIAL_CONFIG = 1,

  /**
   *
   * TODO: REPLACE
   *
   * @generated from enum value: EXTNOTIF_CONFIG = 2;
   */
  EXTNOTIF_CONFIG = 2,

  /**
   *
   * TODO: REPLACE
   *
   * @generated from enum value: STOREFORWARD_CONFIG = 3;
   */
  STOREFORWARD_CONFIG = 3,

  /**
   *
   * TODO: REPLACE
   *
   * @generated from enum value: RANGETEST_CONFIG = 4;
   */
  RANGETEST_CONFIG = 4,

  /**
   *
   * TODO: REPLACE
   *
   * @generated from enum value: TELEMETRY_CONFIG = 5;
   */
  TELEMETRY_CONFIG = 5,

  /**
   *
   * TODO: REPLACE
   *
   * @generated from enum value: CANNEDMSG_CONFIG = 6;
   */
  CANNEDMSG_CONFIG = 6,

  /**
   *
   * TODO: REPLACE
   *
   * @generated from enum value: AUDIO_CONFIG = 7;
   */
  AUDIO_CONFIG = 7,

  /**
   *
   * TODO: REPLACE
   *
   * @generated from enum value: REMOTEHARDWARE_CONFIG = 8;
   */
  REMOTEHARDWARE_CONFIG = 8,
}

/**
 *
 * Parameters for setting up Meshtastic for ameteur radio usage
 *
 * @generated from message meshtastic.HamParameters
 */
export declare class HamParameters extends Message<HamParameters> {
  /**
   *
   * Amateur radio call sign, eg. KD2ABC
   *
   * @generated from field: string call_sign = 1;
   */
  callSign: string;

  /**
   *
   * Transmit power in dBm at the LoRA transceiver, not including any amplification
   *
   * @generated from field: int32 tx_power = 2;
   */
  txPower: number;

  /**
   *
   * The selected frequency of LoRA operation
   * Please respect your local laws, regulations, and band plans.
   * Ensure your radio is capable of operating of the selected frequency before setting this.
   *
   * @generated from field: float frequency = 3;
   */
  frequency: number;

  /**
   *
   * Optional short name of user
   *
   * @generated from field: string short_name = 4;
   */
  shortName: string;

  constructor(data?: PartialMessage<HamParameters>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.HamParameters";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HamParameters;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HamParameters;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HamParameters;

  static equals(a: HamParameters | PlainMessage<HamParameters> | undefined, b: HamParameters | PlainMessage<HamParameters> | undefined): boolean;
}
