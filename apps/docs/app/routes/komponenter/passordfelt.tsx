import { Box, BoxProps, Stack, Text } from "@vygruppen/spor-react";
import { ComponentDocs } from "~/features/component-docs/ComponentDocs";
import { ComponentPlayground } from "~/features/component-playground/ComponentPlayground";
import { usePlaygroundProps } from "~/features/component-playground/usePlaygroundProps";
import { toPropsString } from "~/features/component-playground/utils";
import { LinkableHeading } from "~/features/linkable-heading/LinkableHeading";

export default function PasswordDocsPage() {
  return (
    <ComponentDocs
      title="Passordfelt"
      description="Passordfelt brukes når vi skal legge inn passord i felt. Store inputbokser brukes når vi skal legge inn lengre passord i felt."
    >
      <DemoArea />
      <Guidelines />
    </ComponentDocs>
  );
}

const DemoArea = (props: BoxProps) => {
  const { currentProps, propList, onPropsChange } = usePlaygroundProps([
    { name: "label", defaultValue: "Passord", type: "input" },
    /* {
        name: "variant",
        defaultValue: "ghost",
        type: "select",
        values: ["control", "primary", "secondary", "tertiary", "additional", "ghost"],
      }, */
    { name: "isInvalid", defaultValue: false, type: "choiceChip" },
    { name: "isDisabled", defaultValue: false, type: "choiceChip" },
  ]);
  const code = `
<FormControl>
<PasswordInput

  ${toPropsString(currentProps, "    ")}
  /></FormControl>`;
  return (
    <Box {...props}>
      <ComponentPlayground
        code={code}
        propList={propList}
        currentProps={currentProps}
        onPropsChange={onPropsChange}
      />
    </Box>
  );
};

const Guidelines = (props: BoxProps) => {
  return (
    <Stack {...props} spacing={8}>
      <Stack spacing={3}>
        <LinkableHeading as="h2" textStyle="xl-display">
          Retningslinjer
        </LinkableHeading>
      </Stack>
    </Stack>
  );
};
