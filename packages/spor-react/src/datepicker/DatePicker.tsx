import {
  Box,
  BoxProps,
  InputGroup,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  Portal,
  ResponsiveValue,
  useBreakpointValue,
  useFormControlContext,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { DateValue } from "@internationalized/date";
import { useDatePickerState } from "@react-stately/datepicker";
import { CalendarOutline24Icon } from "@vygruppen/spor-icon-react";
import React, { forwardRef, useRef } from "react";
import { AriaDatePickerProps, I18nProvider, useDatePicker } from "react-aria";
import { FormErrorMessage } from "..";
import { Calendar } from "./Calendar";
import { CalendarTriggerButton } from "./CalendarTriggerButton";
import { DateField } from "./DateField";
import { StyledField } from "./StyledField";
import { useCurrentLocale } from "./utils";

type DatePickerProps = AriaDatePickerProps<DateValue> &
  Pick<BoxProps, "minHeight" | "width"> & {
    variant: ResponsiveValue<"simple" | "with-trigger">;
    name?: string;
    showYearNavigation?: boolean;
  };
/**
 * A date picker component.
 *
 * There are two versions of this component – a simple one, and one with a trigger button for showing the calendar. Use whatever fits your design.
 *
 * ```tsx
 * <DatePicker label="Dato" variant="simple" />
 * ```
 */
export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      variant,
      errorMessage,
      minHeight,
      showYearNavigation,
      width = "auto",
      ...props
    },
    externalRef
  ) => {
    const formControlProps = useFormControlContext();
    const state = useDatePickerState({
      ...props,
      shouldCloseOnSelect: true,
      errorMessage,
      isRequired: props.isRequired ?? formControlProps?.isRequired,
      validationState: formControlProps?.isInvalid ? "invalid" : "valid",
    });
    const internalRef = useRef<HTMLDivElement>(null);
    const ref = externalRef ?? internalRef;
    const {
      groupProps,
      labelProps,
      fieldProps,
      buttonProps,
      dialogProps,
      calendarProps,
      errorMessageProps,
    } = useDatePicker(
      props,
      state,
      ref as React.MutableRefObject<HTMLDivElement>
    );

    const responsiveVariant =
      useBreakpointValue(typeof variant === "string" ? [variant] : variant) ??
      "simple";

    const locale = useCurrentLocale();

    const onFieldClick = () => {
      if (!hasTrigger) {
        state.setOpen(true);
      }
    };

    const hasTrigger = responsiveVariant === "with-trigger";

    const styles = useMultiStyleConfig("Datepicker", {});

    return (
      <I18nProvider locale={locale}>
        <Box
          position="relative"
          display="inline-flex"
          flexDirection="column"
          width={width}
        >
          <Popover
            {...dialogProps}
            isOpen={state.isOpen}
            onClose={state.close}
            onOpen={state.open}
            closeOnBlur
            closeOnEsc
            returnFocusOnClose
          >
            <InputGroup {...groupProps} display="inline-flex">
              <PopoverAnchor>
                <StyledField
                  variant={responsiveVariant}
                  onClick={onFieldClick}
                  paddingX={3}
                  minHeight={minHeight}
                >
                  {!hasTrigger && (
                    <CalendarOutline24Icon marginRight={2} alignSelf="center" />
                  )}
                  <DateField
                    label={props.label}
                    labelProps={labelProps}
                    name={props.name}
                    ref={ref}
                    {...fieldProps}
                  />
                </StyledField>
              </PopoverAnchor>
              {hasTrigger && <CalendarTriggerButton {...buttonProps} />}
            </InputGroup>
            <FormErrorMessage {...errorMessageProps}>
              {errorMessage}
            </FormErrorMessage>
            {state.isOpen && !props.isDisabled && (
              <PopoverContent
                color="darkGrey"
                boxShadow="md"
                sx={styles.calendar}
              >
                <PopoverArrow sx={styles.arrow} />
                <PopoverBody>
                  <Calendar
                    {...calendarProps}
                    showYearNavigation={showYearNavigation}
                  />
                </PopoverBody>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      </I18nProvider>
    );
  }
);
