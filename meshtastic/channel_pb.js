// @generated by protoc-gen-es v1.2.0
// @generated from file meshtastic/channel.proto (package meshtastic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 *
 * Full settings (center freq, spread factor, pre-shared secret key etc...)
 * needed to configure a radio for speaking on a particular channel This
 * information can be encoded as a QRcode/url so that other users can configure
 * their radio to join the same channel.
 * A note about how channel names are shown to users: channelname-Xy
 * poundsymbol is a prefix used to indicate this is a channel name (idea from @professr).
 * Where X is a letter from A-Z (base 26) representing a hash of the PSK for this
 * channel - so that if the user changes anything about the channel (which does
 * force a new PSK) this letter will also change. Thus preventing user confusion if
 * two friends try to type in a channel name of "BobsChan" and then can't talk
 * because their PSKs will be different.
 * The PSK is hashed into this letter by "0x41 + [xor all bytes of the psk ] modulo 26"
 * This also allows the option of someday if people have the PSK off (zero), the
 * users COULD type in a channel name and be able to talk.
 * Y is a lower case letter from a-z that represents the channel 'speed' settings
 * (for some future definition of speed)
 * FIXME: Add description of multi-channel support and how primary vs secondary channels are used.
 * FIXME: explain how apps use channels for security.
 * explain how remote settings and remote gpio are managed as an example
 *
 * @generated from message meshtastic.ChannelSettings
 */
export const ChannelSettings = proto3.makeMessageType(
  "meshtastic.ChannelSettings",
  () => [
    { no: 1, name: "channel_num", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "psk", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "id", kind: "scalar", T: 7 /* ScalarType.FIXED32 */ },
    { no: 5, name: "uplink_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "downlink_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 *
 * A pair of a channel number, mode and the (sharable) settings for that channel
 *
 * @generated from message meshtastic.Channel
 */
export const Channel = proto3.makeMessageType(
  "meshtastic.Channel",
  () => [
    { no: 1, name: "index", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "settings", kind: "message", T: ChannelSettings },
    { no: 3, name: "role", kind: "enum", T: proto3.getEnumType(Channel_Role) },
  ],
);

/**
 *
 * How this channel is being used (or not).
 * Note: this field is an enum to give us options for the future.
 * In particular, someday we might make a 'SCANNING' option.
 * SCANNING channels could have different frequencies and the radio would
 * occasionally check that freq to see if anything is being transmitted.
 * For devices that have multiple physical radios attached, we could keep multiple PRIMARY/SCANNING channels active at once to allow
 * cross band routing as needed.
 * If a device has only a single radio (the common case) only one channel can be PRIMARY at a time
 * (but any number of SECONDARY channels can't be sent received on that common frequency)
 *
 * @generated from enum meshtastic.Channel.Role
 */
export const Channel_Role = proto3.makeEnum(
  "meshtastic.Channel.Role",
  [
    {no: 0, name: "DISABLED"},
    {no: 1, name: "PRIMARY"},
    {no: 2, name: "SECONDARY"},
  ],
);
