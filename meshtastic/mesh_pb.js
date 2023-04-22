// @generated by protoc-gen-es v1.2.0
// @generated from file meshtastic/mesh.proto (package meshtastic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { PortNum } from "./portnums_pb.js";
import { DeviceMetrics } from "./telemetry_pb.js";
import { Config, Config_DeviceConfig_Role } from "./config_pb.js";
import { ModuleConfig } from "./module_config_pb.js";
import { Channel } from "./channel_pb.js";
import { XModem } from "./xmodem_pb.js";

/**
 *
 * Note: these enum names must EXACTLY match the string used in the device
 * bin/build-all.sh script.
 * Because they will be used to find firmware filenames in the android app for OTA updates.
 * To match the old style filenames, _ is converted to -, p is converted to .
 *
 * @generated from enum meshtastic.HardwareModel
 */
export const HardwareModel = proto3.makeEnum(
  "meshtastic.HardwareModel",
  [
    {no: 0, name: "UNSET"},
    {no: 1, name: "TLORA_V2"},
    {no: 2, name: "TLORA_V1"},
    {no: 3, name: "TLORA_V2_1_1P6"},
    {no: 4, name: "TBEAM"},
    {no: 5, name: "HELTEC_V2_0"},
    {no: 6, name: "TBEAM_V0P7"},
    {no: 7, name: "T_ECHO"},
    {no: 8, name: "TLORA_V1_1P3"},
    {no: 9, name: "RAK4631"},
    {no: 10, name: "HELTEC_V2_1"},
    {no: 11, name: "HELTEC_V1"},
    {no: 12, name: "LILYGO_TBEAM_S3_CORE"},
    {no: 13, name: "RAK11200"},
    {no: 14, name: "NANO_G1"},
    {no: 15, name: "TLORA_V2_1_1P8"},
    {no: 16, name: "TLORA_T3_S3"},
    {no: 17, name: "NANO_G1_EXPLORER"},
    {no: 25, name: "STATION_G1"},
    {no: 32, name: "LORA_RELAY_V1"},
    {no: 33, name: "NRF52840DK"},
    {no: 34, name: "PPR"},
    {no: 35, name: "GENIEBLOCKS"},
    {no: 36, name: "NRF52_UNKNOWN"},
    {no: 37, name: "PORTDUINO"},
    {no: 38, name: "ANDROID_SIM"},
    {no: 39, name: "DIY_V1"},
    {no: 40, name: "NRF52840_PCA10059"},
    {no: 41, name: "DR_DEV"},
    {no: 42, name: "M5STACK"},
    {no: 43, name: "HELTEC_V3"},
    {no: 44, name: "HELTEC_WSL_V3"},
    {no: 45, name: "BETAFPV_2400_TX"},
    {no: 46, name: "BETAFPV_900_NANO_TX"},
    {no: 255, name: "PRIVATE_HW"},
  ],
);

/**
 *
 * Shared constants between device and phone
 *
 * @generated from enum meshtastic.Constants
 */
export const Constants = proto3.makeEnum(
  "meshtastic.Constants",
  [
    {no: 0, name: "ZERO"},
    {no: 237, name: "DATA_PAYLOAD_LEN"},
  ],
);

/**
 *
 * Error codes for critical errors
 * The device might report these fault codes on the screen.
 * If you encounter a fault code, please post on the meshtastic.discourse.group
 * and we'll try to help.
 *
 * @generated from enum meshtastic.CriticalErrorCode
 */
export const CriticalErrorCode = proto3.makeEnum(
  "meshtastic.CriticalErrorCode",
  [
    {no: 0, name: "NONE"},
    {no: 1, name: "TX_WATCHDOG"},
    {no: 2, name: "SLEEP_ENTER_WAIT"},
    {no: 3, name: "NO_RADIO"},
    {no: 4, name: "UNSPECIFIED"},
    {no: 5, name: "UBLOX_UNIT_FAILED"},
    {no: 6, name: "NO_AXP192"},
    {no: 7, name: "INVALID_RADIO_SETTING"},
    {no: 8, name: "TRANSMIT_FAILED"},
    {no: 9, name: "BROWNOUT"},
    {no: 10, name: "SX1262_FAILURE"},
    {no: 11, name: "RADIO_SPI_BUG"},
  ],
);

/**
 *
 * a gps position
 *
 * @generated from message meshtastic.Position
 */
export const Position = proto3.makeMessageType(
  "meshtastic.Position",
  () => [
    { no: 1, name: "latitude_i", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */ },
    { no: 2, name: "longitude_i", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */ },
    { no: 3, name: "altitude", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "time", kind: "scalar", T: 7 /* ScalarType.FIXED32 */ },
    { no: 5, name: "location_source", kind: "enum", T: proto3.getEnumType(Position_LocSource) },
    { no: 6, name: "altitude_source", kind: "enum", T: proto3.getEnumType(Position_AltSource) },
    { no: 7, name: "timestamp", kind: "scalar", T: 7 /* ScalarType.FIXED32 */ },
    { no: 8, name: "timestamp_millis_adjust", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 9, name: "altitude_hae", kind: "scalar", T: 17 /* ScalarType.SINT32 */ },
    { no: 10, name: "altitude_geoidal_separation", kind: "scalar", T: 17 /* ScalarType.SINT32 */ },
    { no: 11, name: "PDOP", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 12, name: "HDOP", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 13, name: "VDOP", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 14, name: "gps_accuracy", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 15, name: "ground_speed", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 16, name: "ground_track", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 17, name: "fix_quality", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 18, name: "fix_type", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 19, name: "sats_in_view", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 20, name: "sensor_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 21, name: "next_update", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 22, name: "seq_number", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 *
 * How the location was acquired: manual, onboard GPS, external (EUD) GPS
 *
 * @generated from enum meshtastic.Position.LocSource
 */
export const Position_LocSource = proto3.makeEnum(
  "meshtastic.Position.LocSource",
  [
    {no: 0, name: "LOC_UNSET"},
    {no: 1, name: "LOC_MANUAL"},
    {no: 2, name: "LOC_INTERNAL"},
    {no: 3, name: "LOC_EXTERNAL"},
  ],
);

/**
 *
 * How the altitude was acquired: manual, GPS int/ext, etc
 * Default: same as location_source if present
 *
 * @generated from enum meshtastic.Position.AltSource
 */
export const Position_AltSource = proto3.makeEnum(
  "meshtastic.Position.AltSource",
  [
    {no: 0, name: "ALT_UNSET"},
    {no: 1, name: "ALT_MANUAL"},
    {no: 2, name: "ALT_INTERNAL"},
    {no: 3, name: "ALT_EXTERNAL"},
    {no: 4, name: "ALT_BAROMETRIC"},
  ],
);

/**
 *
 * Broadcast when a newly powered mesh node wants to find a node num it can use
 * Sent from the phone over bluetooth to set the user id for the owner of this node.
 * Also sent from nodes to each other when a new node signs on (so all clients can have this info)
 * The algorithm is as follows:
 * when a node starts up, it broadcasts their user and the normal flow is for all
 * other nodes to reply with their User as well (so the new node can build its nodedb)
 * If a node ever receives a User (not just the first broadcast) message where
 * the sender node number equals our node number, that indicates a collision has
 * occurred and the following steps should happen:
 * If the receiving node (that was already in the mesh)'s macaddr is LOWER than the
 * new User who just tried to sign in: it gets to keep its nodenum.
 * We send a broadcast message of OUR User (we use a broadcast so that the other node can
 * receive our message, considering we have the same id - it also serves to let
 * observers correct their nodedb) - this case is rare so it should be okay.
 * If any node receives a User where the macaddr is GTE than their local macaddr,
 * they have been vetoed and should pick a new random nodenum (filtering against
 * whatever it knows about the nodedb) and rebroadcast their User.
 * A few nodenums are reserved and will never be requested:
 * 0xff - broadcast
 * 0 through 3 - for future use
 *
 * @generated from message meshtastic.User
 */
export const User = proto3.makeMessageType(
  "meshtastic.User",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "long_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "short_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "macaddr", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "hw_model", kind: "enum", T: proto3.getEnumType(HardwareModel) },
    { no: 6, name: "is_licensed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 *
 * A message used in our Dynamic Source Routing protocol (RFC 4728 based)
 *
 * @generated from message meshtastic.RouteDiscovery
 */
export const RouteDiscovery = proto3.makeMessageType(
  "meshtastic.RouteDiscovery",
  () => [
    { no: 1, name: "route", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, repeated: true },
  ],
);

/**
 *
 * A Routing control Data packet handled by the routing module
 *
 * @generated from message meshtastic.Routing
 */
export const Routing = proto3.makeMessageType(
  "meshtastic.Routing",
  () => [
    { no: 1, name: "route_request", kind: "message", T: RouteDiscovery, oneof: "variant" },
    { no: 2, name: "route_reply", kind: "message", T: RouteDiscovery, oneof: "variant" },
    { no: 3, name: "error_reason", kind: "enum", T: proto3.getEnumType(Routing_Error), oneof: "variant" },
  ],
);

/**
 *
 * A failure in delivering a message (usually used for routing control messages, but might be provided in addition to ack.fail_id to provide
 * details on the type of failure).
 *
 * @generated from enum meshtastic.Routing.Error
 */
export const Routing_Error = proto3.makeEnum(
  "meshtastic.Routing.Error",
  [
    {no: 0, name: "NONE"},
    {no: 1, name: "NO_ROUTE"},
    {no: 2, name: "GOT_NAK"},
    {no: 3, name: "TIMEOUT"},
    {no: 4, name: "NO_INTERFACE"},
    {no: 5, name: "MAX_RETRANSMIT"},
    {no: 6, name: "NO_CHANNEL"},
    {no: 7, name: "TOO_LARGE"},
    {no: 8, name: "NO_RESPONSE"},
    {no: 9, name: "DUTY_CYCLE_LIMIT"},
    {no: 32, name: "BAD_REQUEST"},
    {no: 33, name: "NOT_AUTHORIZED"},
  ],
);

/**
 *
 * (Formerly called SubPacket)
 * The payload portion fo a packet, this is the actual bytes that are sent
 * inside a radio packet (because from/to are broken out by the comms library)
 *
 * @generated from message meshtastic.Data
 */
export const Data = proto3.makeMessageType(
  "meshtastic.Data",
  () => [
    { no: 1, name: "portnum", kind: "enum", T: proto3.getEnumType(PortNum) },
    { no: 2, name: "payload", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "want_response", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "dest", kind: "scalar", T: 7 /* ScalarType.FIXED32 */ },
    { no: 5, name: "source", kind: "scalar", T: 7 /* ScalarType.FIXED32 */ },
    { no: 6, name: "request_id", kind: "scalar", T: 7 /* ScalarType.FIXED32 */ },
    { no: 7, name: "reply_id", kind: "scalar", T: 7 /* ScalarType.FIXED32 */ },
    { no: 8, name: "emoji", kind: "scalar", T: 7 /* ScalarType.FIXED32 */ },
  ],
);

/**
 *
 * Waypoint message, used to share arbitrary locations across the mesh
 *
 * @generated from message meshtastic.Waypoint
 */
export const Waypoint = proto3.makeMessageType(
  "meshtastic.Waypoint",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "latitude_i", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */ },
    { no: 3, name: "longitude_i", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */ },
    { no: 4, name: "expire", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "locked_to", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "icon", kind: "scalar", T: 7 /* ScalarType.FIXED32 */ },
  ],
);

/**
 *
 * A packet envelope sent/received over the mesh
 * only payload_variant is sent in the payload portion of the LORA packet.
 * The other fields are either not sent at all, or sent in the special 16 byte LORA header.
 *
 * @generated from message meshtastic.MeshPacket
 */
export const MeshPacket = proto3.makeMessageType(
  "meshtastic.MeshPacket",
  () => [
    { no: 1, name: "from", kind: "scalar", T: 7 /* ScalarType.FIXED32 */ },
    { no: 2, name: "to", kind: "scalar", T: 7 /* ScalarType.FIXED32 */ },
    { no: 3, name: "channel", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "decoded", kind: "message", T: Data, oneof: "payload_variant" },
    { no: 5, name: "encrypted", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "payload_variant" },
    { no: 6, name: "id", kind: "scalar", T: 7 /* ScalarType.FIXED32 */ },
    { no: 7, name: "rx_time", kind: "scalar", T: 7 /* ScalarType.FIXED32 */ },
    { no: 8, name: "rx_snr", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 9, name: "hop_limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 10, name: "want_ack", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "priority", kind: "enum", T: proto3.getEnumType(MeshPacket_Priority) },
    { no: 12, name: "rx_rssi", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 13, name: "delayed", kind: "enum", T: proto3.getEnumType(MeshPacket_Delayed) },
  ],
);

/**
 *
 * The priority of this message for sending.
 * Higher priorities are sent first (when managing the transmit queue).
 * This field is never sent over the air, it is only used internally inside of a local device node.
 * API clients (either on the local node or connected directly to the node)
 * can set this parameter if necessary.
 * (values must be <= 127 to keep protobuf field to one byte in size.
 * Detailed background on this field:
 * I noticed a funny side effect of lora being so slow: Usually when making
 * a protocol there isn’t much need to use message priority to change the order
 * of transmission (because interfaces are fairly fast).
 * But for lora where packets can take a few seconds each, it is very important
 * to make sure that critical packets are sent ASAP.
 * In the case of meshtastic that means we want to send protocol acks as soon as possible
 * (to prevent unneeded retransmissions), we want routing messages to be sent next,
 * then messages marked as reliable and finally ‘background’ packets like periodic position updates.
 * So I bit the bullet and implemented a new (internal - not sent over the air)
 * field in MeshPacket called ‘priority’.
 * And the transmission queue in the router object is now a priority queue.
 *
 * @generated from enum meshtastic.MeshPacket.Priority
 */
export const MeshPacket_Priority = proto3.makeEnum(
  "meshtastic.MeshPacket.Priority",
  [
    {no: 0, name: "UNSET"},
    {no: 1, name: "MIN"},
    {no: 10, name: "BACKGROUND"},
    {no: 64, name: "DEFAULT"},
    {no: 70, name: "RELIABLE"},
    {no: 120, name: "ACK"},
    {no: 127, name: "MAX"},
  ],
);

/**
 *
 * Identify if this is a delayed packet
 *
 * @generated from enum meshtastic.MeshPacket.Delayed
 */
export const MeshPacket_Delayed = proto3.makeEnum(
  "meshtastic.MeshPacket.Delayed",
  [
    {no: 0, name: "NO_DELAY"},
    {no: 1, name: "DELAYED_BROADCAST"},
    {no: 2, name: "DELAYED_DIRECT"},
  ],
);

/**
 *
 * The bluetooth to device link:
 * Old BTLE protocol docs from TODO, merge in above and make real docs...
 * use protocol buffers, and NanoPB
 * messages from device to phone:
 * POSITION_UPDATE (..., time)
 * TEXT_RECEIVED(from, text, time)
 * OPAQUE_RECEIVED(from, payload, time) (for signal messages or other applications)
 * messages from phone to device:
 * SET_MYID(id, human readable long, human readable short) (send down the unique ID
 * string used for this node, a human readable string shown for that id, and a very
 * short human readable string suitable for oled screen) SEND_OPAQUE(dest, payload)
 * (for signal messages or other applications) SEND_TEXT(dest, text) Get all
 * nodes() (returns list of nodes, with full info, last time seen, loc, battery
 * level etc) SET_CONFIG (switches device to a new set of radio params and
 * preshared key, drops all existing nodes, force our node to rejoin this new group)
 * Full information about a node on the mesh
 *
 * @generated from message meshtastic.NodeInfo
 */
export const NodeInfo = proto3.makeMessageType(
  "meshtastic.NodeInfo",
  () => [
    { no: 1, name: "num", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "user", kind: "message", T: User },
    { no: 3, name: "position", kind: "message", T: Position },
    { no: 4, name: "snr", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 5, name: "last_heard", kind: "scalar", T: 7 /* ScalarType.FIXED32 */ },
    { no: 6, name: "device_metrics", kind: "message", T: DeviceMetrics },
    { no: 7, name: "channel", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 *
 * Unique local debugging info for this node
 * Note: we don't include position or the user info, because that will come in the
 * Sent to the phone in response to WantNodes.
 *
 * @generated from message meshtastic.MyNodeInfo
 */
export const MyNodeInfo = proto3.makeMessageType(
  "meshtastic.MyNodeInfo",
  () => [
    { no: 1, name: "my_node_num", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "has_gps", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "max_channels", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "firmware_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "error_code", kind: "enum", T: proto3.getEnumType(CriticalErrorCode) },
    { no: 6, name: "error_address", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "error_count", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 8, name: "reboot_count", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 9, name: "bitrate", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 10, name: "message_timeout_msec", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 11, name: "min_app_version", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 12, name: "air_period_tx", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true },
    { no: 13, name: "air_period_rx", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true },
    { no: 14, name: "has_wifi", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 15, name: "channel_utilization", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 16, name: "air_util_tx", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ],
);

/**
 *
 * Debug output from the device.
 * To minimize the size of records inside the device code, if a time/source/level is not set
 * on the message it is assumed to be a continuation of the previously sent message.
 * This allows the device code to use fixed maxlen 64 byte strings for messages,
 * and then extend as needed by emitting multiple records.
 *
 * @generated from message meshtastic.LogRecord
 */
export const LogRecord = proto3.makeMessageType(
  "meshtastic.LogRecord",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "time", kind: "scalar", T: 7 /* ScalarType.FIXED32 */ },
    { no: 3, name: "source", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "level", kind: "enum", T: proto3.getEnumType(LogRecord_Level) },
  ],
);

/**
 *
 * Log levels, chosen to match python logging conventions.
 *
 * @generated from enum meshtastic.LogRecord.Level
 */
export const LogRecord_Level = proto3.makeEnum(
  "meshtastic.LogRecord.Level",
  [
    {no: 0, name: "UNSET"},
    {no: 50, name: "CRITICAL"},
    {no: 40, name: "ERROR"},
    {no: 30, name: "WARNING"},
    {no: 20, name: "INFO"},
    {no: 10, name: "DEBUG"},
    {no: 5, name: "TRACE"},
  ],
);

/**
 * @generated from message meshtastic.QueueStatus
 */
export const QueueStatus = proto3.makeMessageType(
  "meshtastic.QueueStatus",
  () => [
    { no: 1, name: "res", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "free", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "maxlen", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "mesh_packet_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 *
 * Packets from the radio to the phone will appear on the fromRadio characteristic.
 * It will support READ and NOTIFY. When a new packet arrives the device will BLE notify?
 * It will sit in that descriptor until consumed by the phone,
 * at which point the next item in the FIFO will be populated.
 *
 * @generated from message meshtastic.FromRadio
 */
export const FromRadio = proto3.makeMessageType(
  "meshtastic.FromRadio",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "packet", kind: "message", T: MeshPacket, oneof: "payload_variant" },
    { no: 3, name: "my_info", kind: "message", T: MyNodeInfo, oneof: "payload_variant" },
    { no: 4, name: "node_info", kind: "message", T: NodeInfo, oneof: "payload_variant" },
    { no: 5, name: "config", kind: "message", T: Config, oneof: "payload_variant" },
    { no: 6, name: "log_record", kind: "message", T: LogRecord, oneof: "payload_variant" },
    { no: 7, name: "config_complete_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */, oneof: "payload_variant" },
    { no: 8, name: "rebooted", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "payload_variant" },
    { no: 9, name: "moduleConfig", kind: "message", T: ModuleConfig, oneof: "payload_variant" },
    { no: 10, name: "channel", kind: "message", T: Channel, oneof: "payload_variant" },
    { no: 11, name: "queueStatus", kind: "message", T: QueueStatus, oneof: "payload_variant" },
    { no: 12, name: "xmodemPacket", kind: "message", T: XModem, oneof: "payload_variant" },
    { no: 13, name: "metadata", kind: "message", T: DeviceMetadata, oneof: "payload_variant" },
  ],
);

/**
 *
 * Packets/commands to the radio will be written (reliably) to the toRadio characteristic.
 * Once the write completes the phone can assume it is handled.
 *
 * @generated from message meshtastic.ToRadio
 */
export const ToRadio = proto3.makeMessageType(
  "meshtastic.ToRadio",
  () => [
    { no: 1, name: "packet", kind: "message", T: MeshPacket, oneof: "payload_variant" },
    { no: 3, name: "want_config_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */, oneof: "payload_variant" },
    { no: 4, name: "disconnect", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "payload_variant" },
    { no: 5, name: "xmodemPacket", kind: "message", T: XModem, oneof: "payload_variant" },
  ],
);

/**
 *
 * Compressed message payload
 *
 * @generated from message meshtastic.Compressed
 */
export const Compressed = proto3.makeMessageType(
  "meshtastic.Compressed",
  () => [
    { no: 1, name: "portnum", kind: "enum", T: proto3.getEnumType(PortNum) },
    { no: 2, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 *
 * Device metadata response
 *
 * @generated from message meshtastic.DeviceMetadata
 */
export const DeviceMetadata = proto3.makeMessageType(
  "meshtastic.DeviceMetadata",
  () => [
    { no: 1, name: "firmware_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "device_state_version", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "canShutdown", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "hasWifi", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "hasBluetooth", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "hasEthernet", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "role", kind: "enum", T: proto3.getEnumType(Config_DeviceConfig_Role) },
    { no: 8, name: "position_flags", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 9, name: "hw_model", kind: "enum", T: proto3.getEnumType(HardwareModel) },
  ],
);
