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
export const darkViolet = createTheme("dark_violet", {
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
		primary1: "$violet1",
		primary2: "$violet2",
		primary3: "$violet3",
		primary4: "$violet4",
		primary5: "$violet5",
		primary6: "$violet6",
		primary7: "$violet7",
		primary8: "$violet8",
		primary9: "$violet9",
		primary10: "$violet10",
		primary11: "$violet11",
		primary12: "$violet12",
	},
});
