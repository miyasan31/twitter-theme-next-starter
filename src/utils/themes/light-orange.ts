import { amber, blue, crimson, green, orange, red, slate, slateA, violet } from "@radix-ui/colors";
import { createTheme } from "src/utils";

/**
 * @package
 */
export const lightOrange = createTheme("light_orange", {
	colors: {
		...amber,
		...blue,
		...crimson,
		...green,
		...orange,
		...red,
		...slate,
		...slateA,
		...violet,
		primary1: "$orange1",
		primary2: "$orange2",
		primary3: "$orange3",
		primary4: "$orange4",
		primary5: "$orange5",
		primary6: "$orange6",
		primary7: "$orange7",
		primary8: "$orange8",
		primary9: "$orange9",
		primary10: "$orange10",
		primary11: "$orange11",
		primary12: "$orange12",
	},
});
