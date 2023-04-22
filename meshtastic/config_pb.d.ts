// @generated by protoc-gen-es v1.2.0
// @generated from file meshtastic/config.proto (package meshtastic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message meshtastic.Config
 */
export declare class Config extends Message<Config> {
  /**
   *
   * Payload Variant
   *
   * @generated from oneof meshtastic.Config.payload_variant
   */
  payloadVariant: {
    /**
     * @generated from field: meshtastic.Config.DeviceConfig device = 1;
     */
    value: Config_DeviceConfig;
    case: "device";
  } | {
    /**
     * @generated from field: meshtastic.Config.PositionConfig position = 2;
     */
    value: Config_PositionConfig;
    case: "position";
  } | {
    /**
     * @generated from field: meshtastic.Config.PowerConfig power = 3;
     */
    value: Config_PowerConfig;
    case: "power";
  } | {
    /**
     * @generated from field: meshtastic.Config.NetworkConfig network = 4;
     */
    value: Config_NetworkConfig;
    case: "network";
  } | {
    /**
     * @generated from field: meshtastic.Config.DisplayConfig display = 5;
     */
    value: Config_DisplayConfig;
    case: "display";
  } | {
    /**
     * @generated from field: meshtastic.Config.LoRaConfig lora = 6;
     */
    value: Config_LoRaConfig;
    case: "lora";
  } | {
    /**
     * @generated from field: meshtastic.Config.BluetoothConfig bluetooth = 7;
     */
    value: Config_BluetoothConfig;
    case: "bluetooth";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Config>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.Config";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Config;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Config;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Config;

  static equals(a: Config | PlainMessage<Config> | undefined, b: Config | PlainMessage<Config> | undefined): boolean;
}

/**
 *
 * Configuration
 *
 * @generated from message meshtastic.Config.DeviceConfig
 */
export declare class Config_DeviceConfig extends Message<Config_DeviceConfig> {
  /**
   *
   * Sets the role of node
   *
   * @generated from field: meshtastic.Config.DeviceConfig.Role role = 1;
   */
  role: Config_DeviceConfig_Role;

  /**
   *
   * Disabling this will disable the SerialConsole by not initilizing the StreamAPI
   *
   * @generated from field: bool serial_enabled = 2;
   */
  serialEnabled: boolean;

  /**
   *
   * By default we turn off logging as soon as an API client connects (to keep shared serial link quiet).
   * Set this to true to leave the debug log outputting even when API is active.
   *
   * @generated from field: bool debug_log_enabled = 3;
   */
  debugLogEnabled: boolean;

  /**
   *
   * For boards without a hard wired button, this is the pin number that will be used
   * Boards that have more than one button can swap the function with this one. defaults to BUTTON_PIN if defined.
   *
   * @generated from field: uint32 button_gpio = 4;
   */
  buttonGpio: number;

  /**
   *
   * For boards without a PWM buzzer, this is the pin number that will be used
   * Defaults to PIN_BUZZER if defined.
   *
   * @generated from field: uint32 buzzer_gpio = 5;
   */
  buzzerGpio: number;

  /**
   *
   * Sets the role of node
   *
   * @generated from field: meshtastic.Config.DeviceConfig.RebroadcastMode rebroadcast_mode = 6;
   */
  rebroadcastMode: Config_DeviceConfig_RebroadcastMode;

  /**
   *
   * Send our nodeinfo this often
   * Defaults to 900 Seconds (15 minutes)
   *
   * @generated from field: uint32 node_info_broadcast_secs = 7;
   */
  nodeInfoBroadcastSecs: number;

  /**
   *
   * Treat double tap interrupt on supported accelerometers as a button press if set to true
   *
   * @generated from field: bool double_tap_as_button_press = 8;
   */
  doubleTapAsButtonPress: boolean;

  constructor(data?: PartialMessage<Config_DeviceConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.Config.DeviceConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Config_DeviceConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Config_DeviceConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Config_DeviceConfig;

  static equals(a: Config_DeviceConfig | PlainMessage<Config_DeviceConfig> | undefined, b: Config_DeviceConfig | PlainMessage<Config_DeviceConfig> | undefined): boolean;
}

/**
 *
 * Defines the device's role on the Mesh network
 *
 * @generated from enum meshtastic.Config.DeviceConfig.Role
 */
export declare enum Config_DeviceConfig_Role {
  /**
   *
   * Client device role
   *
   * @generated from enum value: CLIENT = 0;
   */
  CLIENT = 0,

  /**
   *
   * Client Mute device role
   *   Same as a client except packets will not hop over this node, does not contribute to routing packets for mesh.
   *
   * @generated from enum value: CLIENT_MUTE = 1;
   */
  CLIENT_MUTE = 1,

  /**
   *
   * Router device role.
   *   Mesh packets will prefer to be routed over this node. This node will not be used by client apps. 
   *   The wifi/ble radios and the oled screen will be put to sleep.
   *   This mode may still potentially have higher power usage due to it's preference in message rebroadcasting on the mesh.
   *
   * @generated from enum value: ROUTER = 2;
   */
  ROUTER = 2,

  /**
   *
   * Router Client device role
   *   Mesh packets will prefer to be routed over this node. The Router Client can be used as both a Router and an app connected Client.
   *
   * @generated from enum value: ROUTER_CLIENT = 3;
   */
  ROUTER_CLIENT = 3,

  /**
   *
   * Repeater device role
   *   Mesh packets will simply be rebroadcasted over this node. Nodes configured with this role will not originate NodeInfo, Position, Telemetry
   *   or any other packet type. They will simply rebroadcast any mesh packets on the same frequency, channel num, spread factor, and coding rate. 
   *
   * @generated from enum value: REPEATER = 4;
   */
  REPEATER = 4,

  /**
   *
   * Tracker device role
   *   Position Mesh packets will be prioritized higher and sent more frequently by default.
   *
   * @generated from enum value: TRACKER = 5;
   */
  TRACKER = 5,

  /**
   *
   * Sensor device role
   *   Telemetry Mesh packets will be prioritized higher and sent more frequently by default.
   *
   * @generated from enum value: SENSOR = 6;
   */
  SENSOR = 6,
}

/**
 *
 * Defines the device's behavior for how messages are rebroadcast
 *
 * @generated from enum meshtastic.Config.DeviceConfig.RebroadcastMode
 */
export declare enum Config_DeviceConfig_RebroadcastMode {
  /**
   *
   * Default behavior.
   * Rebroadcast any observed message, if it was on our private channel or from another mesh with the same lora params.
   *
   * @generated from enum value: ALL = 0;
   */
  ALL = 0,

  /**
   *
   * Same as behavior as ALL but skips packet decoding and simply rebroadcasts them.
   * Only available in Repeater role. Setting this on any other roles will result in ALL behavior.
   *
   * @generated from enum value: ALL_SKIP_DECODING = 1;
   */
  ALL_SKIP_DECODING = 1,

  /**
   *
   * Ignores observed messages from foreign meshes that are open or those which it cannot decrypt.
   * Only rebroadcasts message on the nodes local primary / secondary channels.
   *
   * @generated from enum value: LOCAL_ONLY = 2;
   */
  LOCAL_ONLY = 2,
}

/**
 *
 * Position Config
 *
 * @generated from message meshtastic.Config.PositionConfig
 */
export declare class Config_PositionConfig extends Message<Config_PositionConfig> {
  /**
   *
   * We should send our position this often (but only if it has changed significantly)
   * Defaults to 15 minutes
   *
   * @generated from field: uint32 position_broadcast_secs = 1;
   */
  positionBroadcastSecs: number;

  /**
   *
   * Adaptive position braoadcast, which is now the default.
   *
   * @generated from field: bool position_broadcast_smart_enabled = 2;
   */
  positionBroadcastSmartEnabled: boolean;

  /**
   *
   * If set, this node is at a fixed position.
   * We will generate GPS position updates at the regular interval, but use whatever the last lat/lon/alt we have for the node.
   * The lat/lon/alt can be set by an internal GPS or with the help of the app.
   *
   * @generated from field: bool fixed_position = 3;
   */
  fixedPosition: boolean;

  /**
   *
   * Is GPS enabled for this node?
   *
   * @generated from field: bool gps_enabled = 4;
   */
  gpsEnabled: boolean;

  /**
   *
   * How often should we try to get GPS position (in seconds)
   * or zero for the default of once every 30 seconds
   * or a very large value (maxint) to update only once at boot.
   *
   * @generated from field: uint32 gps_update_interval = 5;
   */
  gpsUpdateInterval: number;

  /**
   *
   * How long should we try to get our position during each gps_update_interval attempt?  (in seconds)
   * Or if zero, use the default of 30 seconds.
   * If we don't get a new gps fix in that time, the gps will be put into sleep until  the next gps_update_rate
   * window.
   *
   * @generated from field: uint32 gps_attempt_time = 6;
   */
  gpsAttemptTime: number;

  /**
   *
   * Bit field of boolean configuration options for POSITION messages
   * (bitwise OR of PositionFlags)
   *
   * @generated from field: uint32 position_flags = 7;
   */
  positionFlags: number;

  /**
   *
   * (Re)define GPS_RX_PIN for your board.
   *
   * @generated from field: uint32 rx_gpio = 8;
   */
  rxGpio: number;

  /**
   *
   * (Re)define GPS_TX_PIN for your board.
   *
   * @generated from field: uint32 tx_gpio = 9;
   */
  txGpio: number;

  /**
   *
   * The minimum distance in meters traveled (since the last send) before we can send a position to the mesh if position_broadcast_smart_enabled
   *
   * @generated from field: uint32 broadcast_smart_minimum_distance = 10;
   */
  broadcastSmartMinimumDistance: number;

  /**
   *
   * The minumum number of seconds (since the last send) before we can send a position to the mesh if position_broadcast_smart_enabled
   *
   * @generated from field: uint32 broadcast_smart_minimum_interval_secs = 11;
   */
  broadcastSmartMinimumIntervalSecs: number;

  constructor(data?: PartialMessage<Config_PositionConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.Config.PositionConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Config_PositionConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Config_PositionConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Config_PositionConfig;

  static equals(a: Config_PositionConfig | PlainMessage<Config_PositionConfig> | undefined, b: Config_PositionConfig | PlainMessage<Config_PositionConfig> | undefined): boolean;
}

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
export declare enum Config_PositionConfig_PositionFlags {
  /**
   *
   * Required for compilation
   *
   * @generated from enum value: UNSET = 0;
   */
  UNSET = 0,

  /**
   *
   * Include an altitude value (if available)
   *
   * @generated from enum value: ALTITUDE = 1;
   */
  ALTITUDE = 1,

  /**
   *
   * Altitude value is MSL
   *
   * @generated from enum value: ALTITUDE_MSL = 2;
   */
  ALTITUDE_MSL = 2,

  /**
   *
   * Include geoidal separation
   *
   * @generated from enum value: GEOIDAL_SEPARATION = 4;
   */
  GEOIDAL_SEPARATION = 4,

  /**
   *
   * Include the DOP value ; PDOP used by default, see below
   *
   * @generated from enum value: DOP = 8;
   */
  DOP = 8,

  /**
   *
   * If POS_DOP set, send separate HDOP / VDOP values instead of PDOP
   *
   * @generated from enum value: HVDOP = 16;
   */
  HVDOP = 16,

  /**
   *
   * Include number of "satellites in view"
   *
   * @generated from enum value: SATINVIEW = 32;
   */
  SATINVIEW = 32,

  /**
   *
   * Include a sequence number incremented per packet
   *
   * @generated from enum value: SEQ_NO = 64;
   */
  SEQ_NO = 64,

  /**
   *
   * Include positional timestamp (from GPS solution)
   *
   * @generated from enum value: TIMESTAMP = 128;
   */
  TIMESTAMP = 128,

  /**
   *
   * Include positional heading
   * Intended for use with vehicle not walking speeds
   * walking speeds are likely to be error prone like the compass
   *
   * @generated from enum value: HEADING = 256;
   */
  HEADING = 256,

  /**
   *
   * Include positional speed
   * Intended for use with vehicle not walking speeds
   * walking speeds are likely to be error prone like the compass
   *
   * @generated from enum value: SPEED = 512;
   */
  SPEED = 512,
}

/**
 *
 * Power Config\
 * See [Power Config](/docs/settings/config/power) for additional power config details.
 *
 * @generated from message meshtastic.Config.PowerConfig
 */
export declare class Config_PowerConfig extends Message<Config_PowerConfig> {
  /**
   *
   * If set, we are powered from a low-current source (i.e. solar), so even if it looks like we have power flowing in
   * we should try to minimize power consumption as much as possible.
   * YOU DO NOT NEED TO SET THIS IF YOU'VE set is_router (it is implied in that case).
   * Advanced Option
   *
   * @generated from field: bool is_power_saving = 1;
   */
  isPowerSaving: boolean;

  /**
   *
   * If non-zero, the device will fully power off this many seconds after external power is removed.
   *
   * @generated from field: uint32 on_battery_shutdown_after_secs = 2;
   */
  onBatteryShutdownAfterSecs: number;

  /**
   *
   * Ratio of voltage divider for battery pin eg. 3.20 (R1=100k, R2=220k)
   * Overrides the ADC_MULTIPLIER defined in variant for battery voltage calculation.
   * Should be set to floating point value between 2 and 4
   * Fixes issues on Heltec v2
   *
   * @generated from field: float adc_multiplier_override = 3;
   */
  adcMultiplierOverride: number;

  /**
   *
   * Wait Bluetooth Seconds
   * The number of seconds for to wait before turning off BLE in No Bluetooth states
   * 0 for default of 1 minute
   *
   * @generated from field: uint32 wait_bluetooth_secs = 4;
   */
  waitBluetoothSecs: number;

  /**
   *
   * Mesh Super Deep Sleep Timeout Seconds
   * While in Light Sleep if this value is exceeded we will lower into super deep sleep 
   * for sds_secs (default 1 year) or a button press
   * 0 for default of two hours, MAXUINT for disabled
   *
   * @generated from field: uint32 mesh_sds_timeout_secs = 5;
   */
  meshSdsTimeoutSecs: number;

  /**
   *
   * Super Deep Sleep Seconds
   * While in Light Sleep if mesh_sds_timeout_secs is exceeded we will lower into super deep sleep
   * for this value (default 1 year) or a button press
   * 0 for default of one year
   *
   * @generated from field: uint32 sds_secs = 6;
   */
  sdsSecs: number;

  /**
   *
   * Light Sleep Seconds
   * In light sleep the CPU is suspended, LoRa radio is on, BLE is off an GPS is on
   * ESP32 Only
   * 0 for default of 300
   *
   * @generated from field: uint32 ls_secs = 7;
   */
  lsSecs: number;

  /**
   *
   * Minimum Wake Seconds
   * While in light sleep when we receive packets on the LoRa radio we will wake and handle them and stay awake in no BLE mode for this value
   * 0 for default of 10 seconds
   *
   * @generated from field: uint32 min_wake_secs = 8;
   */
  minWakeSecs: number;

  constructor(data?: PartialMessage<Config_PowerConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.Config.PowerConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Config_PowerConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Config_PowerConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Config_PowerConfig;

  static equals(a: Config_PowerConfig | PlainMessage<Config_PowerConfig> | undefined, b: Config_PowerConfig | PlainMessage<Config_PowerConfig> | undefined): boolean;
}

/**
 *
 * Network Config
 *
 * @generated from message meshtastic.Config.NetworkConfig
 */
export declare class Config_NetworkConfig extends Message<Config_NetworkConfig> {
  /**
   *
   * Enable WiFi (disables Bluetooth)
   *
   * @generated from field: bool wifi_enabled = 1;
   */
  wifiEnabled: boolean;

  /**
   *
   * If set, this node will try to join the specified wifi network and
   * acquire an address via DHCP
   *
   * @generated from field: string wifi_ssid = 3;
   */
  wifiSsid: string;

  /**
   *
   * If set, will be use to authenticate to the named wifi
   *
   * @generated from field: string wifi_psk = 4;
   */
  wifiPsk: string;

  /**
   *
   * NTP server to use if WiFi is conneced, defaults to `0.pool.ntp.org`
   *
   * @generated from field: string ntp_server = 5;
   */
  ntpServer: string;

  /**
   *
   * Enable Ethernet
   *
   * @generated from field: bool eth_enabled = 6;
   */
  ethEnabled: boolean;

  /**
   *
   * acquire an address via DHCP or assign static
   *
   * @generated from field: meshtastic.Config.NetworkConfig.AddressMode address_mode = 7;
   */
  addressMode: Config_NetworkConfig_AddressMode;

  /**
   *
   * struct to keep static address
   *
   * @generated from field: meshtastic.Config.NetworkConfig.IpV4Config ipv4_config = 8;
   */
  ipv4Config?: Config_NetworkConfig_IpV4Config;

  /**
   *
   * rsyslog Server and Port
   *
   * @generated from field: string rsyslog_server = 9;
   */
  rsyslogServer: string;

  constructor(data?: PartialMessage<Config_NetworkConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.Config.NetworkConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Config_NetworkConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Config_NetworkConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Config_NetworkConfig;

  static equals(a: Config_NetworkConfig | PlainMessage<Config_NetworkConfig> | undefined, b: Config_NetworkConfig | PlainMessage<Config_NetworkConfig> | undefined): boolean;
}

/**
 * @generated from enum meshtastic.Config.NetworkConfig.AddressMode
 */
export declare enum Config_NetworkConfig_AddressMode {
  /**
   *
   * obtain ip address via DHCP
   *
   * @generated from enum value: DHCP = 0;
   */
  DHCP = 0,

  /**
   *
   * use static ip address
   *
   * @generated from enum value: STATIC = 1;
   */
  STATIC = 1,
}

/**
 * @generated from message meshtastic.Config.NetworkConfig.IpV4Config
 */
export declare class Config_NetworkConfig_IpV4Config extends Message<Config_NetworkConfig_IpV4Config> {
  /**
   *
   * Static IP address
   *
   * @generated from field: fixed32 ip = 1;
   */
  ip: number;

  /**
   *
   * Static gateway address
   *
   * @generated from field: fixed32 gateway = 2;
   */
  gateway: number;

  /**
   *
   * Static subnet mask
   *
   * @generated from field: fixed32 subnet = 3;
   */
  subnet: number;

  /**
   *
   * Static DNS server address
   *
   * @generated from field: fixed32 dns = 4;
   */
  dns: number;

  constructor(data?: PartialMessage<Config_NetworkConfig_IpV4Config>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.Config.NetworkConfig.IpV4Config";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Config_NetworkConfig_IpV4Config;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Config_NetworkConfig_IpV4Config;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Config_NetworkConfig_IpV4Config;

  static equals(a: Config_NetworkConfig_IpV4Config | PlainMessage<Config_NetworkConfig_IpV4Config> | undefined, b: Config_NetworkConfig_IpV4Config | PlainMessage<Config_NetworkConfig_IpV4Config> | undefined): boolean;
}

/**
 *
 * Display Config
 *
 * @generated from message meshtastic.Config.DisplayConfig
 */
export declare class Config_DisplayConfig extends Message<Config_DisplayConfig> {
  /**
   *
   * Number of seconds the screen stays on after pressing the user button or receiving a message
   * 0 for default of one minute MAXUINT for always on
   *
   * @generated from field: uint32 screen_on_secs = 1;
   */
  screenOnSecs: number;

  /**
   *
   * How the GPS coordinates are formatted on the OLED screen.
   *
   * @generated from field: meshtastic.Config.DisplayConfig.GpsCoordinateFormat gps_format = 2;
   */
  gpsFormat: Config_DisplayConfig_GpsCoordinateFormat;

  /**
   *
   * Automatically toggles to the next page on the screen like a carousel, based the specified interval in seconds.
   * Potentially useful for devices without user buttons.
   *
   * @generated from field: uint32 auto_screen_carousel_secs = 3;
   */
  autoScreenCarouselSecs: number;

  /**
   *
   * If this is set, the displayed compass will always point north. if unset, the old behaviour 
   * (top of display is heading direction) is used.
   *
   * @generated from field: bool compass_north_top = 4;
   */
  compassNorthTop: boolean;

  /**
   *
   * Flip screen vertically, for cases that mount the screen upside down
   *
   * @generated from field: bool flip_screen = 5;
   */
  flipScreen: boolean;

  /**
   *
   * Perferred display units
   *
   * @generated from field: meshtastic.Config.DisplayConfig.DisplayUnits units = 6;
   */
  units: Config_DisplayConfig_DisplayUnits;

  /**
   *
   * Override auto-detect in screen
   *
   * @generated from field: meshtastic.Config.DisplayConfig.OledType oled = 7;
   */
  oled: Config_DisplayConfig_OledType;

  /**
   *
   * Display Mode
   *
   * @generated from field: meshtastic.Config.DisplayConfig.DisplayMode displaymode = 8;
   */
  displaymode: Config_DisplayConfig_DisplayMode;

  /**
   *
   * Print first line in pseudo-bold? FALSE is original style, TRUE is bold
   *
   * @generated from field: bool heading_bold = 9;
   */
  headingBold: boolean;

  /**
   *
   * Should we wake the screen up on accelerometer detected motion or tap
   *
   * @generated from field: bool wake_on_tap_or_motion = 10;
   */
  wakeOnTapOrMotion: boolean;

  constructor(data?: PartialMessage<Config_DisplayConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.Config.DisplayConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Config_DisplayConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Config_DisplayConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Config_DisplayConfig;

  static equals(a: Config_DisplayConfig | PlainMessage<Config_DisplayConfig> | undefined, b: Config_DisplayConfig | PlainMessage<Config_DisplayConfig> | undefined): boolean;
}

/**
 *
 * How the GPS coordinates are displayed on the OLED screen.
 *
 * @generated from enum meshtastic.Config.DisplayConfig.GpsCoordinateFormat
 */
export declare enum Config_DisplayConfig_GpsCoordinateFormat {
  /**
   *
   * GPS coordinates are displayed in the normal decimal degrees format:
   * DD.DDDDDD DDD.DDDDDD
   *
   * @generated from enum value: DEC = 0;
   */
  DEC = 0,

  /**
   *
   * GPS coordinates are displayed in the degrees minutes seconds format:
   * DD°MM'SS"C DDD°MM'SS"C, where C is the compass point representing the locations quadrant
   *
   * @generated from enum value: DMS = 1;
   */
  DMS = 1,

  /**
   *
   * Universal Transverse Mercator format:
   * ZZB EEEEEE NNNNNNN, where Z is zone, B is band, E is easting, N is northing
   *
   * @generated from enum value: UTM = 2;
   */
  UTM = 2,

  /**
   *
   * Military Grid Reference System format:
   * ZZB CD EEEEE NNNNN, where Z is zone, B is band, C is the east 100k square, D is the north 100k square,
   * E is easting, N is northing
   *
   * @generated from enum value: MGRS = 3;
   */
  MGRS = 3,

  /**
   *
   * Open Location Code (aka Plus Codes).
   *
   * @generated from enum value: OLC = 4;
   */
  OLC = 4,

  /**
   *
   * Ordnance Survey Grid Reference (the National Grid System of the UK).
   * Format: AB EEEEE NNNNN, where A is the east 100k square, B is the north 100k square,
   * E is the easting, N is the northing
   *
   * @generated from enum value: OSGR = 5;
   */
  OSGR = 5,
}

/**
 *
 * Unit display preference
 *
 * @generated from enum meshtastic.Config.DisplayConfig.DisplayUnits
 */
export declare enum Config_DisplayConfig_DisplayUnits {
  /**
   *
   * Metric (Default)
   *
   * @generated from enum value: METRIC = 0;
   */
  METRIC = 0,

  /**
   *
   * Imperial
   *
   * @generated from enum value: IMPERIAL = 1;
   */
  IMPERIAL = 1,
}

/**
 *
 * Override OLED outo detect with this if it fails.
 *
 * @generated from enum meshtastic.Config.DisplayConfig.OledType
 */
export declare enum Config_DisplayConfig_OledType {
  /**
   *
   * Default / Auto
   *
   * @generated from enum value: OLED_AUTO = 0;
   */
  OLED_AUTO = 0,

  /**
   *
   * Default / Auto
   *
   * @generated from enum value: OLED_SSD1306 = 1;
   */
  OLED_SSD1306 = 1,

  /**
   *
   * Default / Auto
   *
   * @generated from enum value: OLED_SH1106 = 2;
   */
  OLED_SH1106 = 2,

  /**
   *
   * Can not be auto detected but set by proto. Used for 128x128 screens
   *
   * @generated from enum value: OLED_SH1107 = 3;
   */
  OLED_SH1107 = 3,
}

/**
 * @generated from enum meshtastic.Config.DisplayConfig.DisplayMode
 */
export declare enum Config_DisplayConfig_DisplayMode {
  /**
   *
   * Default. The old style for the 128x64 OLED screen
   *
   * @generated from enum value: DEFAULT = 0;
   */
  DEFAULT = 0,

  /**
   *
   * Rearrange display elements to cater for bicolor OLED displays
   *
   * @generated from enum value: TWOCOLOR = 1;
   */
  TWOCOLOR = 1,

  /**
   *
   * Same as TwoColor, but with inverted top bar. Not so good for Epaper displays
   *
   * @generated from enum value: INVERTED = 2;
   */
  INVERTED = 2,

  /**
   *
   * TFT Full Color Displays (not implemented yet)
   *
   * @generated from enum value: COLOR = 3;
   */
  COLOR = 3,
}

/**
 *
 * Lora Config
 *
 * @generated from message meshtastic.Config.LoRaConfig
 */
export declare class Config_LoRaConfig extends Message<Config_LoRaConfig> {
  /**
   *
   * When enabled, the `modem_preset` fields will be adhered to, else the `bandwidth`/`spread_factor`/`coding_rate`
   * will be taked from their respective manually defined fields
   *
   * @generated from field: bool use_preset = 1;
   */
  usePreset: boolean;

  /**
   *
   * Either modem_config or bandwidth/spreading/coding will be specified - NOT BOTH.
   * As a heuristic: If bandwidth is specified, do not use modem_config.
   * Because protobufs take ZERO space when the value is zero this works out nicely.
   * This value is replaced by bandwidth/spread_factor/coding_rate.
   * If you'd like to experiment with other options add them to MeshRadio.cpp in the device code.
   *
   * @generated from field: meshtastic.Config.LoRaConfig.ModemPreset modem_preset = 2;
   */
  modemPreset: Config_LoRaConfig_ModemPreset;

  /**
   *
   * Bandwidth in MHz
   * Certain bandwidth numbers are 'special' and will be converted to the
   * appropriate floating point value: 31 -> 31.25MHz
   *
   * @generated from field: uint32 bandwidth = 3;
   */
  bandwidth: number;

  /**
   *
   * A number from 7 to 12.
   * Indicates number of chirps per symbol as 1<<spread_factor.
   *
   * @generated from field: uint32 spread_factor = 4;
   */
  spreadFactor: number;

  /**
   *
   * The denominator of the coding rate.
   * ie for 4/5, the value is 5. 4/8 the value is 8.
   *
   * @generated from field: uint32 coding_rate = 5;
   */
  codingRate: number;

  /**
   *
   * This parameter is for advanced users with advanced test equipment, we do not recommend most users use it.
   * A frequency offset that is added to to the calculated band center frequency.
   * Used to correct for crystal calibration errors.
   *
   * @generated from field: float frequency_offset = 6;
   */
  frequencyOffset: number;

  /**
   *
   * The region code for the radio (US, CN, EU433, etc...)
   *
   * @generated from field: meshtastic.Config.LoRaConfig.RegionCode region = 7;
   */
  region: Config_LoRaConfig_RegionCode;

  /**
   *
   * Maximum number of hops. This can't be greater than 7.
   * Default of 3
   *
   * @generated from field: uint32 hop_limit = 8;
   */
  hopLimit: number;

  /**
   *
   * Disable TX from the LoRa radio. Useful for hot-swapping antennas and other tests.
   * Defaults to false
   *
   * @generated from field: bool tx_enabled = 9;
   */
  txEnabled: boolean;

  /**
   *
   * If zero, then use default max legal continuous power (ie. something that won't
   * burn out the radio hardware)
   * In most cases you should use zero here.
   * Units are in dBm.
   *
   * @generated from field: int32 tx_power = 10;
   */
  txPower: number;

  /**
   *
   * This controls the actual hardware frequency the radio transmits on.
   * Most users should never need to be exposed to this field/concept.
   * A channel number between 1 and NUM_CHANNELS (whatever the max is in the current region).
   * If ZERO then the rule is "use the old channel name hash based
   * algorithm to derive the channel number")
   * If using the hash algorithm the channel number will be: hash(channel_name) %
   * NUM_CHANNELS (Where num channels depends on the regulatory region).
   *
   * @generated from field: uint32 channel_num = 11;
   */
  channelNum: number;

  /**
   *
   * If true, duty cycle limits will be exceeded and thus you're possibly not following 
   * the local regulations if you're not a HAM.
   * Has no effect if the duty cycle of the used region is 100%. 
   *
   * @generated from field: bool override_duty_cycle = 12;
   */
  overrideDutyCycle: boolean;

  /**
   *
   * If true, sets RX boosted gain mode on SX126X based radios
   *
   * @generated from field: bool sx126x_rx_boosted_gain = 13;
   */
  sx126xRxBoostedGain: boolean;

  /**
   *
   * This parameter is for advanced users and licensed HAM radio operators.
   * Ignore Channel Calculation and use this frequency instead. The frequency_offset
   * will still be applied. This will allow you to use out-of-band frequencies.
   * Please respect your local laws and regulations. If you are a HAM, make sure you
   * enable HAM mode and turn off encryption.
   *
   * @generated from field: float override_frequency = 14;
   */
  overrideFrequency: number;

  /**
   *
   * For testing it is useful sometimes to force a node to never listen to
   * particular other nodes (simulating radio out of range). All nodenums listed
   * in ignore_incoming will have packets they send dropped on receive (by router.cpp)
   *
   * @generated from field: repeated uint32 ignore_incoming = 103;
   */
  ignoreIncoming: number[];

  constructor(data?: PartialMessage<Config_LoRaConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.Config.LoRaConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Config_LoRaConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Config_LoRaConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Config_LoRaConfig;

  static equals(a: Config_LoRaConfig | PlainMessage<Config_LoRaConfig> | undefined, b: Config_LoRaConfig | PlainMessage<Config_LoRaConfig> | undefined): boolean;
}

/**
 * @generated from enum meshtastic.Config.LoRaConfig.RegionCode
 */
export declare enum Config_LoRaConfig_RegionCode {
  /**
   *
   * Region is not set
   *
   * @generated from enum value: UNSET = 0;
   */
  UNSET = 0,

  /**
   *
   * United States
   *
   * @generated from enum value: US = 1;
   */
  US = 1,

  /**
   *
   * European Union 433mhz
   *
   * @generated from enum value: EU_433 = 2;
   */
  EU_433 = 2,

  /**
   *
   * European Union 868mhz
   *
   * @generated from enum value: EU_868 = 3;
   */
  EU_868 = 3,

  /**
   *
   * China
   *
   * @generated from enum value: CN = 4;
   */
  CN = 4,

  /**
   *
   * Japan
   *
   * @generated from enum value: JP = 5;
   */
  JP = 5,

  /**
   *
   * Australia / New Zealand
   *
   * @generated from enum value: ANZ = 6;
   */
  ANZ = 6,

  /**
   *
   * Korea
   *
   * @generated from enum value: KR = 7;
   */
  KR = 7,

  /**
   *
   * Taiwan
   *
   * @generated from enum value: TW = 8;
   */
  TW = 8,

  /**
   *
   * Russia
   *
   * @generated from enum value: RU = 9;
   */
  RU = 9,

  /**
   *
   * India
   *
   * @generated from enum value: IN = 10;
   */
  IN = 10,

  /**
   *
   * New Zealand 865mhz
   *
   * @generated from enum value: NZ_865 = 11;
   */
  NZ_865 = 11,

  /**
   *
   * Thailand
   *
   * @generated from enum value: TH = 12;
   */
  TH = 12,

  /**
   *
   * WLAN Band
   *
   * @generated from enum value: LORA_24 = 13;
   */
  LORA_24 = 13,

  /**
   *
   * Ukraine 433mhz
   *
   * @generated from enum value: UA_433 = 14;
   */
  UA_433 = 14,

  /**
   *
   * Ukraine 868mhz
   *
   * @generated from enum value: UA_868 = 15;
   */
  UA_868 = 15,
}

/**
 *
 * Standard predefined channel settings
 * Note: these mappings must match ModemPreset Choice in the device code.
 *
 * @generated from enum meshtastic.Config.LoRaConfig.ModemPreset
 */
export declare enum Config_LoRaConfig_ModemPreset {
  /**
   *
   * Long Range - Fast
   *
   * @generated from enum value: LONG_FAST = 0;
   */
  LONG_FAST = 0,

  /**
   *
   * Long Range - Slow
   *
   * @generated from enum value: LONG_SLOW = 1;
   */
  LONG_SLOW = 1,

  /**
   *
   * Very Long Range - Slow
   *
   * @generated from enum value: VERY_LONG_SLOW = 2;
   */
  VERY_LONG_SLOW = 2,

  /**
   *
   * Medium Range - Slow
   *
   * @generated from enum value: MEDIUM_SLOW = 3;
   */
  MEDIUM_SLOW = 3,

  /**
   *
   * Medium Range - Fast
   *
   * @generated from enum value: MEDIUM_FAST = 4;
   */
  MEDIUM_FAST = 4,

  /**
   *
   * Short Range - Slow
   *
   * @generated from enum value: SHORT_SLOW = 5;
   */
  SHORT_SLOW = 5,

  /**
   *
   * Short Range - Fast
   *
   * @generated from enum value: SHORT_FAST = 6;
   */
  SHORT_FAST = 6,

  /**
   *
   * Long Range - Moderately Fast
   *
   * @generated from enum value: LONG_MODERATE = 7;
   */
  LONG_MODERATE = 7,
}

/**
 * @generated from message meshtastic.Config.BluetoothConfig
 */
export declare class Config_BluetoothConfig extends Message<Config_BluetoothConfig> {
  /**
   *
   * Enable Bluetooth on the device
   *
   * @generated from field: bool enabled = 1;
   */
  enabled: boolean;

  /**
   *
   * Determines the pairing strategy for the device
   *
   * @generated from field: meshtastic.Config.BluetoothConfig.PairingMode mode = 2;
   */
  mode: Config_BluetoothConfig_PairingMode;

  /**
   *
   * Specified PIN for PairingMode.FixedPin
   *
   * @generated from field: uint32 fixed_pin = 3;
   */
  fixedPin: number;

  constructor(data?: PartialMessage<Config_BluetoothConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.Config.BluetoothConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Config_BluetoothConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Config_BluetoothConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Config_BluetoothConfig;

  static equals(a: Config_BluetoothConfig | PlainMessage<Config_BluetoothConfig> | undefined, b: Config_BluetoothConfig | PlainMessage<Config_BluetoothConfig> | undefined): boolean;
}

/**
 * @generated from enum meshtastic.Config.BluetoothConfig.PairingMode
 */
export declare enum Config_BluetoothConfig_PairingMode {
  /**
   *
   * Device generates a random PIN that will be shown on the screen of the device for pairing
   *
   * @generated from enum value: RANDOM_PIN = 0;
   */
  RANDOM_PIN = 0,

  /**
   *
   * Device requires a specified fixed PIN for pairing
   *
   * @generated from enum value: FIXED_PIN = 1;
   */
  FIXED_PIN = 1,

  /**
   *
   * Device requires no PIN for pairing
   *
   * @generated from enum value: NO_PIN = 2;
   */
  NO_PIN = 2,
}
