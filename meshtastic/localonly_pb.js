// @generated by protoc-gen-es v1.2.0
// @generated from file meshtastic/localonly.proto (package meshtastic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Config_BluetoothConfig, Config_DeviceConfig, Config_DisplayConfig, Config_LoRaConfig, Config_NetworkConfig, Config_PositionConfig, Config_PowerConfig } from "./config_pb.js";
import { ModuleConfig_AudioConfig, ModuleConfig_CannedMessageConfig, ModuleConfig_ExternalNotificationConfig, ModuleConfig_MQTTConfig, ModuleConfig_RangeTestConfig, ModuleConfig_RemoteHardwareConfig, ModuleConfig_SerialConfig, ModuleConfig_StoreForwardConfig, ModuleConfig_TelemetryConfig } from "./module_config_pb.js";

/**
 * @generated from message meshtastic.LocalConfig
 */
export const LocalConfig = proto3.makeMessageType(
  "meshtastic.LocalConfig",
  () => [
    { no: 1, name: "device", kind: "message", T: Config_DeviceConfig },
    { no: 2, name: "position", kind: "message", T: Config_PositionConfig },
    { no: 3, name: "power", kind: "message", T: Config_PowerConfig },
    { no: 4, name: "network", kind: "message", T: Config_NetworkConfig },
    { no: 5, name: "display", kind: "message", T: Config_DisplayConfig },
    { no: 6, name: "lora", kind: "message", T: Config_LoRaConfig },
    { no: 7, name: "bluetooth", kind: "message", T: Config_BluetoothConfig },
    { no: 8, name: "version", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * @generated from message meshtastic.LocalModuleConfig
 */
export const LocalModuleConfig = proto3.makeMessageType(
  "meshtastic.LocalModuleConfig",
  () => [
    { no: 1, name: "mqtt", kind: "message", T: ModuleConfig_MQTTConfig },
    { no: 2, name: "serial", kind: "message", T: ModuleConfig_SerialConfig },
    { no: 3, name: "external_notification", kind: "message", T: ModuleConfig_ExternalNotificationConfig },
    { no: 4, name: "store_forward", kind: "message", T: ModuleConfig_StoreForwardConfig },
    { no: 5, name: "range_test", kind: "message", T: ModuleConfig_RangeTestConfig },
    { no: 6, name: "telemetry", kind: "message", T: ModuleConfig_TelemetryConfig },
    { no: 7, name: "canned_message", kind: "message", T: ModuleConfig_CannedMessageConfig },
    { no: 9, name: "audio", kind: "message", T: ModuleConfig_AudioConfig },
    { no: 10, name: "remote_hardware", kind: "message", T: ModuleConfig_RemoteHardwareConfig },
    { no: 8, name: "version", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);
