/* eslint-disable arrow-body-style */
import type { PropertyValue } from "@stitches/react";

/**
 * @package
 */
export const utils = {
	// Abbreviated margin properties
	marginY: (value: PropertyValue<"margin">) => ({
		marginTop: value,
		marginBottom: value,
	}),
	marginX: (value: PropertyValue<"margin">) => ({
		marginLeft: value,
		marginRight: value,
	}),
	paddingY: (value: PropertyValue<"padding">) => ({
		paddingTop: value,
		paddingBottom: value,
	}),
	paddingX: (value: PropertyValue<"padding">) => ({
		paddingLeft: value,
		paddingRight: value,
	}),

	// A property for applying width/height together
	square: (value: PropertyValue<"width" | "height">) => ({
		width: value,
		height: value,
	}),
};

// declare const phoneNominality: unique symbol;
// type PhoneNumber = string & { [phoneNominality]: never };
