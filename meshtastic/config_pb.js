// @generated by protoc-gen-es v1.2.0
// @generated from file meshtastic/config.proto (package meshtastic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message meshtastic.Config
 */
export const Config = proto3.makeMessageType(
  "meshtastic.Config",
  () => [
    { no: 1, name: "device", kind: "message", T: Config_DeviceConfig, oneof: "payload_variant" },
    { no: 2, name: "position", kind: "message", T: Config_PositionConfig, oneof: "payload_variant" },
    { no: 3, name: "power", kind: "message", T: Config_PowerConfig, oneof: "payload_variant" },
    { no: 4, name: "network", kind: "message", T: Config_NetworkConfig, oneof: "payload_variant" },
    { no: 5, name: "display", kind: "message", T: Config_DisplayConfig, oneof: "payload_variant" },
    { no: 6, name: "lora", kind: "message", T: Config_LoRaConfig, oneof: "payload_variant" },
    { no: 7, name: "bluetooth", kind: "message", T: Config_BluetoothConfig, oneof: "payload_variant" },
  ],
);

/**
 *
 * Configuration
 *
 * @generated from message meshtastic.Config.DeviceConfig
 */
export const Config_DeviceConfig = proto3.makeMessageType(
  "meshtastic.Config.DeviceConfig",
  () => [
    { no: 1, name: "role", kind: "enum", T: proto3.getEnumType(Config_DeviceConfig_Role) },
    { no: 2, name: "serial_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "debug_log_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "button_gpio", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "buzzer_gpio", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "rebroadcast_mode", kind: "enum", T: proto3.getEnumType(Config_DeviceConfig_RebroadcastMode) },
    { no: 7, name: "node_info_broadcast_secs", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 8, name: "double_tap_as_button_press", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
  {localName: "Config_DeviceConfig"},
);

/**
 *
 * Defines the device's role on the Mesh network
 *
 * @generated from enum meshtastic.Config.DeviceConfig.Role
 */
export const Config_DeviceConfig_Role = proto3.makeEnum(
  "meshtastic.Config.DeviceConfig.Role",
  [
    {no: 0, name: "CLIENT"},
    {no: 1, name: "CLIENT_MUTE"},
    {no: 2, name: "ROUTER"},
    {no: 3, name: "ROUTER_CLIENT"},
    {no: 4, name: "REPEATER"},
    {no: 5, name: "TRACKER"},
    {no: 6, name: "SENSOR"},
  ],
);

/**
 *
 * Defines the device's behavior for how messages are rebroadcast
 *
 * @generated from enum meshtastic.Config.DeviceConfig.RebroadcastMode
 */
export const Config_DeviceConfig_RebroadcastMode = proto3.makeEnum(
  "meshtastic.Config.DeviceConfig.RebroadcastMode",
  [
    {no: 0, name: "ALL"},
    {no: 1, name: "ALL_SKIP_DECODING"},
    {no: 2, name: "LOCAL_ONLY"},
  ],
);

/**
 *
 * Position Config
 *
 * @generated from message meshtastic.Config.PositionConfig
 */
export const Config_PositionConfig = proto3.makeMessageType(
  "meshtastic.Config.PositionConfig",
  () => [
    { no: 1, name: "position_broadcast_secs", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "position_broadcast_smart_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "fixed_position", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "gps_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "gps_update_interval", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "gps_attempt_time", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "position_flags", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 8, name: "rx_gpio", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 9, name: "tx_gpio", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 10, name: "broadcast_smart_minimum_distance", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 11, name: "broadcast_smart_minimum_interval_secs", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
  {localName: "Config_PositionConfig"},
);

/**
 *
 * Bit field of boolean configuration options, indicating which optional
 *   fields to include when assembling POSITION messages
 * Longitude and latitude are always included (also time if GPS-synced)
 * NOTE: the more fields are included, the larger the message will be -
 *   leading to longer airtime and a higher risk of packet loss
 *
 * @generated from enum meshtastic.Config.PositionConfig.PositionFlags
 */
export const Config_PositionConfig_PositionFlags = proto3.makeEnum(
  "meshtastic.Config.PositionConfig.PositionFlags",
  [
    {no: 0, name: "UNSET"},
    {no: 1, name: "ALTITUDE"},
    {no: 2, name: "ALTITUDE_MSL"},
    {no: 4, name: "GEOIDAL_SEPARATION"},
    {no: 8, name: "DOP"},
    {no: 16, name: "HVDOP"},
    {no: 32, name: "SATINVIEW"},
    {no: 64, name: "SEQ_NO"},
    {no: 128, name: "TIMESTAMP"},
    {no: 256, name: "HEADING"},
    {no: 512, name: "SPEED"},
  ],
);

/**
 *
 * Power Config\
 * See [Power Config](/docs/settings/config/power) for additional power config details.
 *
 * @generated from message meshtastic.Config.PowerConfig
 */
export const Config_PowerConfig = proto3.makeMessageType(
  "meshtastic.Config.PowerConfig",
  () => [
    { no: 1, name: "is_power_saving", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "on_battery_shutdown_after_secs", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "adc_multiplier_override", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 4, name: "wait_bluetooth_secs", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "mesh_sds_timeout_secs", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "sds_secs", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "ls_secs", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 8, name: "min_wake_secs", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
  {localName: "Config_PowerConfig"},
);

/**
 *
 * Network Config
 *
 * @generated from message meshtastic.Config.NetworkConfig
 */
export const Config_NetworkConfig = proto3.makeMessageType(
  "meshtastic.Config.NetworkConfig",
  () => [
    { no: 1, name: "wifi_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "wifi_ssid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "wifi_psk", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "ntp_server", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "eth_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "address_mode", kind: "enum", T: proto3.getEnumType(Config_NetworkConfig_AddressMode) },
    { no: 8, name: "ipv4_config", kind: "message", T: Config_NetworkConfig_IpV4Config },
    { no: 9, name: "rsyslog_server", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "Config_NetworkConfig"},
);

/**
 * @generated from enum meshtastic.Config.NetworkConfig.AddressMode
 */
export const Config_NetworkConfig_AddressMode = proto3.makeEnum(
  "meshtastic.Config.NetworkConfig.AddressMode",
  [
    {no: 0, name: "DHCP"},
    {no: 1, name: "STATIC"},
  ],
);

/**
 * @generated from message meshtastic.Config.NetworkConfig.IpV4Config
 */
export const Config_NetworkConfig_IpV4Config = proto3.makeMessageType(
  "meshtastic.Config.NetworkConfig.IpV4Config",
  () => [
    { no: 1, name: "ip", kind: "scalar", T: 7 /* ScalarType.FIXED32 */ },
    { no: 2, name: "gateway", kind: "scalar", T: 7 /* ScalarType.FIXED32 */ },
    { no: 3, name: "subnet", kind: "scalar", T: 7 /* ScalarType.FIXED32 */ },
    { no: 4, name: "dns", kind: "scalar", T: 7 /* ScalarType.FIXED32 */ },
  ],
  {localName: "Config_NetworkConfig_IpV4Config"},
);

/**
 *
 * Display Config
 *
 * @generated from message meshtastic.Config.DisplayConfig
 */
export const Config_DisplayConfig = proto3.makeMessageType(
  "meshtastic.Config.DisplayConfig",
  () => [
    { no: 1, name: "screen_on_secs", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "gps_format", kind: "enum", T: proto3.getEnumType(Config_DisplayConfig_GpsCoordinateFormat) },
    { no: 3, name: "auto_screen_carousel_secs", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "compass_north_top", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "flip_screen", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "units", kind: "enum", T: proto3.getEnumType(Config_DisplayConfig_DisplayUnits) },
    { no: 7, name: "oled", kind: "enum", T: proto3.getEnumType(Config_DisplayConfig_OledType) },
    { no: 8, name: "displaymode", kind: "enum", T: proto3.getEnumType(Config_DisplayConfig_DisplayMode) },
    { no: 9, name: "heading_bold", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "wake_on_tap_or_motion", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
  {localName: "Config_DisplayConfig"},
);

/**
 *
 * How the GPS coordinates are displayed on the OLED screen.
 *
 * @generated from enum meshtastic.Config.DisplayConfig.GpsCoordinateFormat
 */
export const Config_DisplayConfig_GpsCoordinateFormat = proto3.makeEnum(
  "meshtastic.Config.DisplayConfig.GpsCoordinateFormat",
  [
    {no: 0, name: "DEC"},
    {no: 1, name: "DMS"},
    {no: 2, name: "UTM"},
    {no: 3, name: "MGRS"},
    {no: 4, name: "OLC"},
    {no: 5, name: "OSGR"},
  ],
);

/**
 *
 * Unit display preference
 *
 * @generated from enum meshtastic.Config.DisplayConfig.DisplayUnits
 */
export const Config_DisplayConfig_DisplayUnits = proto3.makeEnum(
  "meshtastic.Config.DisplayConfig.DisplayUnits",
  [
    {no: 0, name: "METRIC"},
    {no: 1, name: "IMPERIAL"},
  ],
);

/**
 *
 * Override OLED outo detect with this if it fails.
 *
 * @generated from enum meshtastic.Config.DisplayConfig.OledType
 */
export const Config_DisplayConfig_OledType = proto3.makeEnum(
  "meshtastic.Config.DisplayConfig.OledType",
  [
    {no: 0, name: "OLED_AUTO"},
    {no: 1, name: "OLED_SSD1306"},
    {no: 2, name: "OLED_SH1106"},
    {no: 3, name: "OLED_SH1107"},
  ],
);

/**
 * @generated from enum meshtastic.Config.DisplayConfig.DisplayMode
 */
export const Config_DisplayConfig_DisplayMode = proto3.makeEnum(
  "meshtastic.Config.DisplayConfig.DisplayMode",
  [
    {no: 0, name: "DEFAULT"},
    {no: 1, name: "TWOCOLOR"},
    {no: 2, name: "INVERTED"},
    {no: 3, name: "COLOR"},
  ],
);

/**
 *
 * Lora Config
 *
 * @generated from message meshtastic.Config.LoRaConfig
 */
export const Config_LoRaConfig = proto3.makeMessageType(
  "meshtastic.Config.LoRaConfig",
  () => [
    { no: 1, name: "use_preset", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "modem_preset", kind: "enum", T: proto3.getEnumType(Config_LoRaConfig_ModemPreset) },
    { no: 3, name: "bandwidth", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "spread_factor", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "coding_rate", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "frequency_offset", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 7, name: "region", kind: "enum", T: proto3.getEnumType(Config_LoRaConfig_RegionCode) },
    { no: 8, name: "hop_limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 9, name: "tx_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "tx_power", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 11, name: "channel_num", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 12, name: "override_duty_cycle", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "sx126x_rx_boosted_gain", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "override_frequency", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 103, name: "ignore_incoming", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true },
  ],
  {localName: "Config_LoRaConfig"},
);

/**
 * @generated from enum meshtastic.Config.LoRaConfig.RegionCode
 */
export const Config_LoRaConfig_RegionCode = proto3.makeEnum(
  "meshtastic.Config.LoRaConfig.RegionCode",
  [
    {no: 0, name: "UNSET"},
    {no: 1, name: "US"},
    {no: 2, name: "EU_433"},
    {no: 3, name: "EU_868"},
    {no: 4, name: "CN"},
    {no: 5, name: "JP"},
    {no: 6, name: "ANZ"},
    {no: 7, name: "KR"},
    {no: 8, name: "TW"},
    {no: 9, name: "RU"},
    {no: 10, name: "IN"},
    {no: 11, name: "NZ_865"},
    {no: 12, name: "TH"},
    {no: 13, name: "LORA_24"},
    {no: 14, name: "UA_433"},
    {no: 15, name: "UA_868"},
  ],
);

/**
 *
 * Standard predefined channel settings
 * Note: these mappings must match ModemPreset Choice in the device code.
 *
 * @generated from enum meshtastic.Config.LoRaConfig.ModemPreset
 */
export const Config_LoRaConfig_ModemPreset = proto3.makeEnum(
  "meshtastic.Config.LoRaConfig.ModemPreset",
  [
    {no: 0, name: "LONG_FAST"},
    {no: 1, name: "LONG_SLOW"},
    {no: 2, name: "VERY_LONG_SLOW"},
    {no: 3, name: "MEDIUM_SLOW"},
    {no: 4, name: "MEDIUM_FAST"},
    {no: 5, name: "SHORT_SLOW"},
    {no: 6, name: "SHORT_FAST"},
    {no: 7, name: "LONG_MODERATE"},
  ],
);

/**
 * @generated from message meshtastic.Config.BluetoothConfig
 */
export const Config_BluetoothConfig = proto3.makeMessageType(
  "meshtastic.Config.BluetoothConfig",
  () => [
    { no: 1, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "mode", kind: "enum", T: proto3.getEnumType(Config_BluetoothConfig_PairingMode) },
    { no: 3, name: "fixed_pin", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
  {localName: "Config_BluetoothConfig"},
);

/**
 * @generated from enum meshtastic.Config.BluetoothConfig.PairingMode
 */
export const Config_BluetoothConfig_PairingMode = proto3.makeEnum(
  "meshtastic.Config.BluetoothConfig.PairingMode",
  [
    {no: 0, name: "RANDOM_PIN"},
    {no: 1, name: "FIXED_PIN"},
    {no: 2, name: "NO_PIN"},
  ],
);

