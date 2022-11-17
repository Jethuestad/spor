import {
  Box,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
  useMultiStyleConfig,
  Button,
  Popover,
} from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel } from ".";
import { HiddenSelect, useSelect } from "react-aria";
import { useListBox, useOption } from "react-aria";

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

export const InfoSelect = (props: InfoSelectProps) => {
  // Create state based on the incoming props
  let state = useSelectState(props);

  // Get props for child elements from useSelect
  let ref = React.useRef();
  let { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref
  );

  return (
    <div style={{ display: "inline-block" }}>
      <div {...labelProps}>{props.label}</div>
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <Button {...triggerProps} ref={ref} style={{ height: 30, fontSize: 14 }}>
        <span {...valueProps}>
          {state.selectedItem
            ? state.selectedItem.rendered
            : "Select an option"}
        </span>
        <span aria-hidden="true" style={{ paddingLeft: 5 }}>
          ▼
        </span>
      </Button>
      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement="bottom start">
          <ul
            {...menuProps}
            ref={ref}
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              maxHeight: 150,
              overflow: "auto",
              minWidth: 100,
            }}
          >
            {[...state.collection].map((item) => (
              <Option key={item.key} item={item} state={state} />
            ))}
          </ul>
        </Popover>
      )}
    </div>
  );
};

function Option({ item, state }) {
  let ref = React.useRef();
  let { optionProps, isSelected, isFocused, isDisabled } = useOption(
    { key: item.key },
    state,
    ref
  );

  let backgroundColor;
  let color = "black";

  if (isSelected) {
    backgroundColor = "blueviolet";
    color = "white";
  } else if (isFocused) {
    backgroundColor = "gray";
  } else if (isDisabled) {
    backgroundColor = "transparent";
    color = "gray";
  }

  return (
    <li
      {...optionProps}
      ref={ref}
      style={{
        background: backgroundColor,
        color: color,
        padding: "2px 5px",
        outline: "none",
        cursor: "pointer",
      }}
    >
      {item.rendered}
    </li>
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
