import {
    Select as ChakraSelect,
    SelectProps as ChakraSelectProps,
    useMultiStyleConfig,
    forwardRef,
    omitThemingProps
} from "@chakra-ui/react";
import React, { Component, FC, useState } from "react";
import { FormControl, FormLabel } from ".";

type ItemSelect = {
    value: string;
    label: string;
}

type ItemComponentProps = {
    onSelect: () => void;
}

export type MultiSelectProps<T extends ItemSelect> = Exclude<
    ChakraSelectProps,
    "colorScheme" | "variant" | "size" | "value" | "onSelect" | "onChange" | "children"
> & { label?: string, items: Array<T>, ItemComponent: FC<T & ItemComponentProps>};

/**
 * MultiSelect let you choose multiple options from given choices
 *
 * You should consider only using the MultiSelect component when you have more than 4 options. Otherwise, you should use the `<Radio>` component.
 *
 * ```tsx
 * <MultiSelect label="Select level of luxury">
 *  <option>No luxury</option>
 *  <option>Some luxury</option>
 *  <option>Lots of luxury</option>
 *  <option>I'm rich</option>
 * </MultiSelect>
 * ```
 */
const MultiSelect = forwardRef<MultiSelectProps<ItemSelect>, "input">(({ id, label, items, ItemComponent, ...props }, ref) => {
    const styles = useMultiStyleConfig("MultiSelect", props);

    const [value, setValue] = useState([] as Array<string>);

    const onSelect = (current: ItemSelect) => {
        const index = value.findIndex((item) => item === current.value);
        if (index >= 0) {
            setValue([...value, current.value])
        } else {
            setValue([...value.slice(0, index), ...value.slice(index + 1)])
        }
    }


    return (
        <FormControl>
            <ChakraSelect id={id} {...props} rootProps={{ __css: styles.root }} ref={ref}>
                {items.map((item) => <ItemComponent {...item} onSelect={() => onSelect(item)} />)}
            </ChakraSelect>
            {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
        </FormControl>
    );
});


MultiSelect.displayName = "MultiSelect";

export default MultiSelect;