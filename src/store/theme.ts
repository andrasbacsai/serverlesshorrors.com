import { writable } from "svelte/store";
type ThemeType = "dark";

export const theme = writable<ThemeType>("dark");
