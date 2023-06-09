// @generated by protoc-gen-es v1.2.0
// @generated from file meshtastic/apponly.proto (package meshtastic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { ChannelSettings } from "./channel_pb.js";
import { Config_LoRaConfig } from "./config_pb.js";

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
export const ChannelSet = proto3.makeMessageType(
  "meshtastic.ChannelSet",
  () => [
    { no: 1, name: "settings", kind: "message", T: ChannelSettings, repeated: true },
    { no: 2, name: "lora_config", kind: "message", T: Config_LoRaConfig },
  ],
);

