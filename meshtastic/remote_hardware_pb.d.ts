// @generated by protoc-gen-es v1.2.0
// @generated from file meshtastic/remote_hardware.proto (package meshtastic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 *
 * An example app to show off the module system. This message is used for
 * REMOTE_HARDWARE_APP PortNums.
 * Also provides easy remote access to any GPIO.
 * In the future other remote hardware operations can be added based on user interest
 * (i.e. serial output, spi/i2c input/output).
 * FIXME - currently this feature is turned on by default which is dangerous
 * because no security yet (beyond the channel mechanism).
 * It should be off by default and then protected based on some TBD mechanism
 * (a special channel once multichannel support is included?)
 *
 * @generated from message meshtastic.HardwareMessage
 */
export declare class HardwareMessage extends Message<HardwareMessage> {
  /**
   *
   * What type of HardwareMessage is this?
   *
   * @generated from field: meshtastic.HardwareMessage.Type type = 1;
   */
  type: HardwareMessage_Type;

  /**
   *
   * What gpios are we changing. Not used for all MessageTypes, see MessageType for details
   *
   * @generated from field: uint64 gpio_mask = 2;
   */
  gpioMask: bigint;

  /**
   *
   * For gpios that were listed in gpio_mask as valid, what are the signal levels for those gpios.
   * Not used for all MessageTypes, see MessageType for details
   *
   * @generated from field: uint64 gpio_value = 3;
   */
  gpioValue: bigint;

  constructor(data?: PartialMessage<HardwareMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "meshtastic.HardwareMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HardwareMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HardwareMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HardwareMessage;

  static equals(a: HardwareMessage | PlainMessage<HardwareMessage> | undefined, b: HardwareMessage | PlainMessage<HardwareMessage> | undefined): boolean;
}

/**
 *
 * TODO: REPLACE
 *
 * @generated from enum meshtastic.HardwareMessage.Type
 */
export declare enum HardwareMessage_Type {
  /**
   *
   * Unset/unused
   *
   * @generated from enum value: UNSET = 0;
   */
  UNSET = 0,

  /**
   *
   * Set gpio gpios based on gpio_mask/gpio_value
   *
   * @generated from enum value: WRITE_GPIOS = 1;
   */
  WRITE_GPIOS = 1,

  /**
   *
   * We are now interested in watching the gpio_mask gpios.
   * If the selected gpios change, please broadcast GPIOS_CHANGED.
   * Will implicitly change the gpios requested to be INPUT gpios.
   *
   * @generated from enum value: WATCH_GPIOS = 2;
   */
  WATCH_GPIOS = 2,

  /**
   *
   * The gpios listed in gpio_mask have changed, the new values are listed in gpio_value
   *
   * @generated from enum value: GPIOS_CHANGED = 3;
   */
  GPIOS_CHANGED = 3,

  /**
   *
   * Read the gpios specified in gpio_mask, send back a READ_GPIOS_REPLY reply with gpio_value populated
   *
   * @generated from enum value: READ_GPIOS = 4;
   */
  READ_GPIOS = 4,

  /**
   *
   * A reply to READ_GPIOS. gpio_mask and gpio_value will be populated
   *
   * @generated from enum value: READ_GPIOS_REPLY = 5;
   */
  READ_GPIOS_REPLY = 5,
}

