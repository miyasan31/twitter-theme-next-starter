import {
	amberDark,
	blueDark,
	crimsonDark,
	greenDark,
	orangeDark,
	redDark,
	slateDark,
	slateDarkA,
	violetDark,
} from "@radix-ui/colors";
import { createTheme } from "src/utils";

/**
 * @package
 */
export const darkGreen = createTheme("dark_green", {
	colors: {
		...amberDark,
		...blueDark,
		...crimsonDark,
		...greenDark,
		...orangeDark,
		...redDark,
		...slateDark,
		...slateDarkA,
		...violetDark,
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
