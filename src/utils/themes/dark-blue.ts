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
export const darkBlue = createTheme("dark_blue", {
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
		primary1: "$blue1",
		primary2: "$blue2",
		primary3: "$blue3",
		primary4: "$blue4",
		primary5: "$blue5",
		primary6: "$blue6",
		primary7: "$blue7",
		primary8: "$blue8",
		primary9: "$blue9",
		primary10: "$blue10",
		primary11: "$blue11",
		primary12: "$blue12",
	},
});
