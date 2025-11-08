
"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

export function ThemeProvider(props) {
  return <NextThemesProvider {...props}>
    <SessionProvider>
    {props.children}
    </SessionProvider>
    </NextThemesProvider>;
}
