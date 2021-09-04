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
export const darkCrimson = createTheme("dark_crimson", {
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
		primary1: "$crimson1",
		primary2: "$crimson2",
		primary3: "$crimson3",
		primary4: "$crimson4",
		primary5: "$crimson5",
		primary6: "$crimson6",
		primary7: "$crimson7",
		primary8: "$crimson8",
		primary9: "$crimson9",
		primary10: "$crimson10",
		primary11: "$crimson11",
		primary12: "$crimson12",
	},
});
