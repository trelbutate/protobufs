// @generated by protoc-gen-es v1.2.0
// @generated from file meshtastic/portnums.proto (package meshtastic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 *
 * For any new 'apps' that run on the device or via sister apps on phones/PCs they should pick and use a
 * unique 'portnum' for their application.
 * If you are making a new app using meshtastic, please send in a pull request to add your 'portnum' to this
 * master table.
 * PortNums should be assigned in the following range:
 * 0-63   Core Meshtastic use, do not use for third party apps
 * 64-127 Registered 3rd party apps, send in a pull request that adds a new entry to portnums.proto to  register your application
 * 256-511 Use one of these portnums for your private applications that you don't want to register publically
 * All other values are reserved.
 * Note: This was formerly a Type enum named 'typ' with the same id #
 * We have change to this 'portnum' based scheme for specifying app handlers for particular payloads.
 * This change is backwards compatible by treating the legacy OPAQUE/CLEAR_TEXT values identically.
 *
 * @generated from enum meshtastic.PortNum
 */
export const PortNum = proto3.makeEnum(
  "meshtastic.PortNum",
  [
    {no: 0, name: "UNKNOWN_APP"},
    {no: 1, name: "TEXT_MESSAGE_APP"},
    {no: 2, name: "REMOTE_HARDWARE_APP"},
    {no: 3, name: "POSITION_APP"},
    {no: 4, name: "NODEINFO_APP"},
    {no: 5, name: "ROUTING_APP"},
    {no: 6, name: "ADMIN_APP"},
    {no: 7, name: "TEXT_MESSAGE_COMPRESSED_APP"},
    {no: 8, name: "WAYPOINT_APP"},
    {no: 9, name: "AUDIO_APP"},
    {no: 32, name: "REPLY_APP"},
    {no: 33, name: "IP_TUNNEL_APP"},
    {no: 64, name: "SERIAL_APP"},
    {no: 65, name: "STORE_FORWARD_APP"},
    {no: 66, name: "RANGE_TEST_APP"},
    {no: 67, name: "TELEMETRY_APP"},
    {no: 68, name: "ZPS_APP"},
    {no: 69, name: "SIMULATOR_APP"},
    {no: 70, name: "TRACEROUTE_APP"},
    {no: 256, name: "PRIVATE_APP"},
    {no: 257, name: "ATAK_FORWARDER"},
    {no: 511, name: "MAX"},
  ],
);

