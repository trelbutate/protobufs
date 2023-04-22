// @generated by protoc-gen-es v1.2.0
// @generated from file meshtastic/deviceonly.proto (package meshtastic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { MeshPacket, MyNodeInfo, NodeInfo, User } from "./mesh_pb.js";
import { Channel } from "./channel_pb.js";
import { LocalConfig, LocalModuleConfig } from "./localonly_pb.js";

/**
 *
 * TODO: REPLACE
 *
 * @generated from enum meshtastic.ScreenFonts
 */
export const ScreenFonts = proto3.makeEnum(
  "meshtastic.ScreenFonts",
  [
    {no: 0, name: "FONT_SMALL"},
    {no: 1, name: "FONT_MEDIUM"},
    {no: 2, name: "FONT_LARGE"},
  ],
);

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
export const DeviceState = proto3.makeMessageType(
  "meshtastic.DeviceState",
  () => [
    { no: 2, name: "my_node", kind: "message", T: MyNodeInfo },
    { no: 3, name: "owner", kind: "message", T: User },
    { no: 4, name: "node_db", kind: "message", T: NodeInfo, repeated: true },
    { no: 5, name: "receive_queue", kind: "message", T: MeshPacket, repeated: true },
    { no: 8, name: "version", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "rx_text_message", kind: "message", T: MeshPacket },
    { no: 9, name: "no_save", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "did_gps_reset", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 *
 * The on-disk saved channels
 *
 * @generated from message meshtastic.ChannelFile
 */
export const ChannelFile = proto3.makeMessageType(
  "meshtastic.ChannelFile",
  () => [
    { no: 1, name: "channels", kind: "message", T: Channel, repeated: true },
    { no: 2, name: "version", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 *
 * This can be used for customizing the firmware distribution. If populated,
 * show a secondary bootup screen with custom logo and text for 2.5 seconds.
 *
 * @generated from message meshtastic.OEMStore
 */
export const OEMStore = proto3.makeMessageType(
  "meshtastic.OEMStore",
  () => [
    { no: 1, name: "oem_icon_width", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "oem_icon_height", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "oem_icon_bits", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "oem_font", kind: "enum", T: proto3.getEnumType(ScreenFonts) },
    { no: 5, name: "oem_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "oem_aes_key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 7, name: "oem_local_config", kind: "message", T: LocalConfig },
    { no: 8, name: "oem_local_module_config", kind: "message", T: LocalModuleConfig },
  ],
);

