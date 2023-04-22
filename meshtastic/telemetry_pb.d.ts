// @generated by protoc-gen-es v1.2.0
// @generated from file meshtastic/telemetry.proto (package meshtastic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * 
 * Supported I2C Sensors for telemetry in Meshtastic
 *
 * @generated from enum meshtastic.TelemetrySensorType
 */
export declare enum TelemetrySensorType {
  /**
   * 
   * No external telemetry sensor explicitly set
   *
   * @generated from enum value: SENSOR_UNSET = 0;
   */
  SENSOR_UNSET = 0,

  /**
   * 
   * High accuracy temperature, pressure, humidity
   *
   * @generated from enum value: BME280 = 1;
   */
  BME280 = 1,

  /**
   * 
   * High accuracy temperature, pressure, humidity, and air resistance
   *
   * @generated from enum value: BME680 = 2;
   */
  BME680 = 2,

  /**
   * 
   * Very high accuracy temperature
   *
   * @generated from enum value: MCP9808 = 3;
   */
  MCP9808 = 3,

  /**
   * 
   * Moderate accuracy current and voltage
   *
   * @generated from enum value: INA260 = 4;
   */
  INA260 = 4,

  /**
   * 
   * Moderate accuracy current and voltage
   *
   * @generated from enum value: INA219 = 5;
   */
  INA219 = 5,

  /**
   * 
   * High accuracy temperature and pressure
   *
   * @generated from enum value: BMP280 = 6;
   */
  BMP280 = 6,

  /**
   * 
   * High accuracy temperature and humidity
   *
   * @generated from enum value: SHTC3 = 7;
   */
  SHTC3 = 7,

  /**
   * 
   * High accuracy pressure
   *
   * @generated from enum value: LPS22 = 8;
   */
  LPS22 = 8,

  /**
   * 
   * 3-Axis magnetic sensor
   *
   * @generated from enum value: QMC6310 = 9;
   */
  QMC6310 = 9,

  /**
   * 
   * 6-Axis inertial measurement sensor
   *
   * @generated from enum value: QMI8658 = 10;
   */
  QMI8658 = 10,

  /**
   * 
   * 3-Axis magnetic sensor
   *
   * @generated from enum value: QMC5883L = 11;
   */
  QMC5883L = 11,

  /**
   * 
   * High accuracy temperature and humidity
   *
   * @generated from enum value: SHT31 = 12;
   */
  SHT31 = 12,

  /**
   * 
   * PM2.5 air quality sensor
   *
   * @generated from enum value: PMSA003I = 13;
   */
  PMSA003I = 13,
}

/**
 * 
 * Key native device metrics such as battery level
 *
 * @generated from message meshtastic.DeviceMetrics
 */
export declare class DeviceMetrics extends Message<DeviceMetrics> {
  /**
   * 
   * 0-100 (>100 means powered)
   *
   * @generated from field: uint32 battery_level = 1;
   */
  batteryLevel: number;

  /**
   * 
   * Voltage measured
   *
   * @generated from field: float voltage = 2;
   */
  voltage: number;

  /**
   * 
   * Utilization for the current channel, including well formed TX, RX and malformed RX (aka noise).
   *
   * @generated from field: float channel_utilization = 3;
   */
  channelUtilization: number;

  /**
   * 
   * Percent of airtime for transmission used within the last hour.
   *
   * @generated from field: float air_util_tx = 4;
   */
  airUtilTx: number;

  constructor(data?: PartialMessage<DeviceMetrics>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.DeviceMetrics";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeviceMetrics;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeviceMetrics;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeviceMetrics;

  static equals(a: DeviceMetrics | PlainMessage<DeviceMetrics> | undefined, b: DeviceMetrics | PlainMessage<DeviceMetrics> | undefined): boolean;
}

/**
 * 
 * Weather station or other environmental metrics
 *
 * @generated from message meshtastic.EnvironmentMetrics
 */
export declare class EnvironmentMetrics extends Message<EnvironmentMetrics> {
  /**
   * 
   * Temperature measured
   *
   * @generated from field: float temperature = 1;
   */
  temperature: number;

  /**
   * 
   * Relative humidity percent measured
   *
   * @generated from field: float relative_humidity = 2;
   */
  relativeHumidity: number;

  /**
   * 
   * Barometric pressure in hPA measured
   *
   * @generated from field: float barometric_pressure = 3;
   */
  barometricPressure: number;

  /**
   * 
   * Gas resistance in mOhm measured
   *
   * @generated from field: float gas_resistance = 4;
   */
  gasResistance: number;

  /**
   * 
   * Voltage measured
   *
   * @generated from field: float voltage = 5;
   */
  voltage: number;

  /**
   * 
   * Current measured
   *
   * @generated from field: float current = 6;
   */
  current: number;

  constructor(data?: PartialMessage<EnvironmentMetrics>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.EnvironmentMetrics";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnvironmentMetrics;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnvironmentMetrics;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnvironmentMetrics;

  static equals(a: EnvironmentMetrics | PlainMessage<EnvironmentMetrics> | undefined, b: EnvironmentMetrics | PlainMessage<EnvironmentMetrics> | undefined): boolean;
}

/**
 * 
 * Air quality metrics
 *
 * @generated from message meshtastic.AirQualityMetrics
 */
export declare class AirQualityMetrics extends Message<AirQualityMetrics> {
  /**
   * 
   * Concentration Units Standard PM1.0
   *
   * @generated from field: uint32 pm10_standard = 1;
   */
  pm10Standard: number;

  /**
   * 
   * Concentration Units Standard PM2.5
   *
   * @generated from field: uint32 pm25_standard = 2;
   */
  pm25Standard: number;

  /**
   * 
   * Concentration Units Standard PM10.0
   *
   * @generated from field: uint32 pm100_standard = 3;
   */
  pm100Standard: number;

  /**
   * 
   * Concentration Units Environmental PM1.0
   *
   * @generated from field: uint32 pm10_environmental = 4;
   */
  pm10Environmental: number;

  /**
   * 
   * Concentration Units Environmental PM2.5
   *
   * @generated from field: uint32 pm25_environmental = 5;
   */
  pm25Environmental: number;

  /**
   * 
   * Concentration Units Environmental PM10.0
   *
   * @generated from field: uint32 pm100_environmental = 6;
   */
  pm100Environmental: number;

  /**
   * 
   * 0.3um Particle Count
   *
   * @generated from field: uint32 particles_03um = 7;
   */
  particles03um: number;

  /**
   * 
   * 0.5um Particle Count
   *
   * @generated from field: uint32 particles_05um = 8;
   */
  particles05um: number;

  /**
   * 
   * 1.0um Particle Count
   *
   * @generated from field: uint32 particles_10um = 9;
   */
  particles10um: number;

  /**
   * 
   * 2.5um Particle Count
   *
   * @generated from field: uint32 particles_25um = 10;
   */
  particles25um: number;

  /**
   * 
   * 5.0um Particle Count
   *
   * @generated from field: uint32 particles_50um = 11;
   */
  particles50um: number;

  /**
   * 
   * 10.0um Particle Count
   *
   * @generated from field: uint32 particles_100um = 12;
   */
  particles100um: number;

  constructor(data?: PartialMessage<AirQualityMetrics>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.AirQualityMetrics";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AirQualityMetrics;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AirQualityMetrics;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AirQualityMetrics;

  static equals(a: AirQualityMetrics | PlainMessage<AirQualityMetrics> | undefined, b: AirQualityMetrics | PlainMessage<AirQualityMetrics> | undefined): boolean;
}

/**
 * 
 * Types of Measurements the telemetry module is equipped to handle
 *
 * @generated from message meshtastic.Telemetry
 */
export declare class Telemetry extends Message<Telemetry> {
  /**
   * 
   * This is usually not sent over the mesh (to save space), but it is sent
   * from the phone so that the local device can set its RTC If it is sent over
   * the mesh (because there are devices on the mesh without GPS), it will only
   * be sent by devices which has a hardware GPS clock (IE Mobile Phone).
   * seconds since 1970
   *
   * @generated from field: fixed32 time = 1;
   */
  time: number;

  /**
   * @generated from oneof meshtastic.Telemetry.variant
   */
  variant: {
    /**
     * 
     * Key native device metrics such as battery level
     *
     * @generated from field: meshtastic.DeviceMetrics device_metrics = 2;
     */
    value: DeviceMetrics;
    case: "deviceMetrics";
  } | {
    /**
     * 
     * Weather station or other environmental metrics
     *
     * @generated from field: meshtastic.EnvironmentMetrics environment_metrics = 3;
     */
    value: EnvironmentMetrics;
    case: "environmentMetrics";
  } | {
    /**
     * 
     * Air quality metrics
     *
     * @generated from field: meshtastic.AirQualityMetrics air_quality_metrics = 4;
     */
    value: AirQualityMetrics;
    case: "airQualityMetrics";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Telemetry>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.Telemetry";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Telemetry;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Telemetry;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Telemetry;

  static equals(a: Telemetry | PlainMessage<Telemetry> | undefined, b: Telemetry | PlainMessage<Telemetry> | undefined): boolean;
}

