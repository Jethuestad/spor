import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  IconButton,
  forwardRef,
  useFormControlContext,
} from "@chakra-ui/react";
import {
  CloseOutline24Icon,
  SearchOutline24Icon,
} from "@vygruppen/spor-icon-react";
import React, { useId } from "react";
import { FormLabel, InputGroup, InputLeftElement, InputRightElement } from ".";
import { createTexts, useTranslation } from "..";

export type SearchInputProps = Exclude<
  ChakraInputProps,
  "variant" | "size" | "leftIcon" | "rightIcon"
> & {
  /** Optional label. Defaults to the localized version of "search" */
  label?: string;
  /** Callback for when the clear button is clicked */
  onReset?: () => void;
};
/** Simple search input component.
 *
 * Includes a search icon, a localized label and a reset button.
 */
export const SearchInput = forwardRef<SearchInputProps, "input">(
  ({ label, onReset, ...props }, ref) => {
    const { t } = useTranslation();
    const showClearButton = onReset && Boolean(props.value);
    const formControlProps = useFormControlContext();
    const autoGeneratedId = useId();
    const inputId = props.id ?? formControlProps?.id ?? autoGeneratedId;
    return (
      <InputGroup position="relative">
        <InputLeftElement>
          <SearchOutline24Icon />
        </InputLeftElement>
        <ChakraInput
          pl={7}
          pr={7}
          {...props}
          id={inputId}
          type="search"
          css={{
            "&::-webkit-search-cancel-button": {
              WebkitAppearance: "none",
            },
          }}
          ref={ref}
          placeholder=" " // This is needed to make the label work as expected
          data-attachable
        />
        <FormLabel htmlFor={inputId} pointerEvents="none">
          {label ?? t(texts.label)}
        </FormLabel>
        {showClearButton && (
          <InputRightElement width="fit-content">
            <IconButton
              variant="ghost"
              type="button"
              size="sm"
              mr={1}
              aria-label={t(texts.reset)}
              icon={<CloseOutline24Icon />}
              onClick={onReset}
            />
          </InputRightElement>
        )}
      </InputGroup>
    );
  }
);

const texts = createTexts({
  label: {
    nb: "Søk",
    nn: "Søk",
    sv: "Sök",
    en: "Search",
  },
  reset: {
    nb: "Tøm søkefeltet",
    nn: "Tøm søkefelt",
    sv: "Rensa sökrutan",
    en: "Reset search field",
  },
});
