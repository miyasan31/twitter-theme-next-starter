import { amber, blue, crimson, green, orange, red, slate, slateA, violet } from "@radix-ui/colors";
import { createTheme } from "src/utils";

/**
 * @package
 */
export const lightGreen = createTheme("light_green", {
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
		primary1: "$green1",
		primary2: "$green2",
		primary3: "$green3",
		primary4: "$green4",
		primary5: "$green5",
		primary6: "$green6",
		primary7: "$green7",
		primary8: "$green8",
		primary9: "$green9",
		primary10: "$green10",
		primary11: "$green11",
		primary12: "$green12",
	},
});
