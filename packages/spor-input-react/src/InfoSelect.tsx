import {
  Box,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
  useMultiStyleConfig,
  Button,
  Popover,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { FormControl, FormLabel } from ".";
import { Item, useSelectState, SelectState } from 'react-stately';
import { AriaSelectOptions, HiddenSelect, useSelect } from "react-aria";
import { useListBox, useOption } from "react-aria";

export type InfoSelectProps = AriaSelectOptions<typeof Item> & { label?: string };
/**
 * Selects let you choose between several options
 *
 * You should consider only using the Select component when you have more than  4 options. Otherwise, you should use the `<Radio>` component.
 *
 * ```tsx
 * <InfoSelect label="Select level of luxury">
 *  <Item>No luxury</Item>
 *  <Item>Some luxury</Item>
 *  <Item>Lots of luxury</Item>
 *  <Item>I'm rich</Item>
 * </InfoSelect>
 * ```
 */

export const InfoSelect = (props: InfoSelectProps) => {
  const state = useSelectState({ ...props })
  const ref = useRef(null);
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
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
        <Popover isOpen={state.isOpen}
          onClose={() => state.setOpen(false)}
          onOpen={() => state.setOpen(true)}
          closeOnBlur
          closeOnEsc
          returnFocusOnClose>
          <ul
            {...props}
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
            {Array.from(state.collection).map((item) => (
              <Option key={item.key} item={item} state={state} />
            ))}
          </ul>
        </Popover>
      )}
    </div>
  );
};

function Option({ item, state }: { item: any, state: SelectState<object> }) {
  const ref = useRef(null);

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

<InfoSelect label="Favorite Colors">
  <Item>Red</Item>
  <Item>Orange</Item>
  <Item>Yellow</Item>
  <Item>Green</Item>
  <Item>Blue</Item>
  <Item>Purple</Item>
  <Item>Black</Item>
  <Item>White</Item>
  <Item>Lime</Item>
  <Item>Fushsia</Item>
</InfoSelect>