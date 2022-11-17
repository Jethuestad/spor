import {
    Box,
    Select as ChakraSelect,
    SelectProps as ChakraSelectProps,
    useMultiStyleConfig,
} from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel } from ".";

export type InfoSelectProps = Exclude<
    ChakraSelectProps,
    "colorScheme" | "variant" | "size"
> & { label?: string };
/**
 * Selects let you choose between several options
 *
 * You should consider only using the Select component when you have more than  4 options. Otherwise, you should use the `<Radio>` component.
 *
 * ```tsx
 * <Select label="Select level of luxury">
 *  <option>No luxury</option>
 *  <option>Some luxury</option>
 *  <option>Lots of luxury</option>
 *  <option>I'm rich</option>
 * </Select>
 * ```
 */

export const InfoSelect = ({ label, ...props }: InfoSelectProps) => {
    const styles = useMultiStyleConfig("Select", props);
    return (
        <Box>
            {label && <FormLabel>{label}</FormLabel>}
            <div className="select">
                <select id="standard-select">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                    <option value="Option length">
                        Option that has too long of a value to fit
                    </option>
                </select>
            </div>
        </Box>
    );
}

/*export const InfoSelect = ({ label, ...props }: InfoSelectProps) => {
    const styles = useMultiStyleConfig("Select", props);
    return (
        <FormControl>
            <Box className="select" style={{  // A reset of styles, including removing the default dropdown arrow
                appearance: "none",
                // Additional resets for further consistency
                backgroundColor: "transparent",
                border: "none",
                margin: 0,
                width: "100%",
                fontFamily: "inherit",
                fontSize: "inherit",
                cursor: "inherit"
            }}>
                <ChakraSelect {...props} rootProps={{ __css: styles.root, backgroundColor: "red" }} />
            </Box>
            {label && <FormLabel>{label}</FormLabel>}
        </FormControl >
    );
};*/
