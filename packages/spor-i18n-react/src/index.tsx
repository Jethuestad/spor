import { initLobot } from "@leile/lobo-t";
import React from "react";

export enum Language {
  NorwegianBokmal = "nb",
  Swedish = "sv",
  English = "en",
}
export const { LanguageProvider, useTranslation } = initLobot<typeof Language>(
  Language.NorwegianBokmal
);

export type Translations = {
  [key: string]: Translations | { [key in Language]: Translation };
};

type Translation = string | ((args: unknown) => string);
