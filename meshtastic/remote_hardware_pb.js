// @generated by protoc-gen-es v1.2.0
// @generated from file meshtastic/remote_hardware.proto (package meshtastic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

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
export const HardwareMessage = proto3.makeMessageType(
  "meshtastic.HardwareMessage",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(HardwareMessage_Type) },
    { no: 2, name: "gpio_mask", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "gpio_value", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 *
 * TODO: REPLACE
 *
 * @generated from enum meshtastic.HardwareMessage.Type
 */
export const HardwareMessage_Type = proto3.makeEnum(
  "meshtastic.HardwareMessage.Type",
  [
    {no: 0, name: "UNSET"},
    {no: 1, name: "WRITE_GPIOS"},
    {no: 2, name: "WATCH_GPIOS"},
    {no: 3, name: "GPIOS_CHANGED"},
    {no: 4, name: "READ_GPIOS"},
    {no: 5, name: "READ_GPIOS_REPLY"},
  ],
);

