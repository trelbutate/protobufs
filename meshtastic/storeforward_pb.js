// @generated by protoc-gen-es v1.2.0
// @generated from file meshtastic/storeforward.proto (package meshtastic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 *
 * TODO: REPLACE
 *
 * @generated from message meshtastic.StoreAndForward
 */
export const StoreAndForward = proto3.makeMessageType(
  "meshtastic.StoreAndForward",
  () => [
    { no: 1, name: "rr", kind: "enum", T: proto3.getEnumType(StoreAndForward_RequestResponse) },
    { no: 2, name: "stats", kind: "message", T: StoreAndForward_Statistics, oneof: "variant" },
    { no: 3, name: "history", kind: "message", T: StoreAndForward_History, oneof: "variant" },
    { no: 4, name: "heartbeat", kind: "message", T: StoreAndForward_Heartbeat, oneof: "variant" },
    { no: 5, name: "empty", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "variant" },
  ],
);

/**
 *
 * 001 - 063 = From Router
 * 064 - 127 = From Client
 *
 * @generated from enum meshtastic.StoreAndForward.RequestResponse
 */
export const StoreAndForward_RequestResponse = proto3.makeEnum(
  "meshtastic.StoreAndForward.RequestResponse",
  [
    {no: 0, name: "UNSET"},
    {no: 1, name: "ROUTER_ERROR"},
    {no: 2, name: "ROUTER_HEARTBEAT"},
    {no: 3, name: "ROUTER_PING"},
    {no: 4, name: "ROUTER_PONG"},
    {no: 5, name: "ROUTER_BUSY"},
    {no: 6, name: "ROUTER_HISTORY"},
    {no: 7, name: "ROUTER_STATS"},
    {no: 64, name: "CLIENT_ERROR"},
    {no: 65, name: "CLIENT_HISTORY"},
    {no: 66, name: "CLIENT_STATS"},
    {no: 67, name: "CLIENT_PING"},
    {no: 68, name: "CLIENT_PONG"},
    {no: 106, name: "CLIENT_ABORT"},
  ],
);

/**
 *
 * TODO: REPLACE
 *
 * @generated from message meshtastic.StoreAndForward.Statistics
 */
export const StoreAndForward_Statistics = proto3.makeMessageType(
  "meshtastic.StoreAndForward.Statistics",
  () => [
    { no: 1, name: "messages_total", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "messages_saved", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "messages_max", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "up_time", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "requests", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "requests_history", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "heartbeat", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "return_max", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 9, name: "return_window", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
  {localName: "StoreAndForward_Statistics"},
);

/**
 *
 * TODO: REPLACE
 *
 * @generated from message meshtastic.StoreAndForward.History
 */
export const StoreAndForward_History = proto3.makeMessageType(
  "meshtastic.StoreAndForward.History",
  () => [
    { no: 1, name: "history_messages", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "window", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "last_request", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
  {localName: "StoreAndForward_History"},
);

/**
 *
 * TODO: REPLACE
 *
 * @generated from message meshtastic.StoreAndForward.Heartbeat
 */
export const StoreAndForward_Heartbeat = proto3.makeMessageType(
  "meshtastic.StoreAndForward.Heartbeat",
  () => [
    { no: 1, name: "period", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "secondary", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
  {localName: "StoreAndForward_Heartbeat"},
);
