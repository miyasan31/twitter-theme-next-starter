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
export const darkAmber = createTheme("dark_amber", {
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
		primary1: "$amber1",
		primary2: "$amber2",
		primary3: "$amber3",
		primary4: "$amber4",
		primary5: "$amber5",
		primary6: "$amber6",
		primary7: "$amber7",
		primary8: "$amber8",
		primary9: "$amber9",
		primary10: "$amber10",
		primary11: "$amber11",
		primary12: "$amber12",
	},
});
