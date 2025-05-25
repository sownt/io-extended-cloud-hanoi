"use client";

import { Locale, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import siteConfig from "@/lib/config";

export default function LanguageSwitcher(...props) {
  const currentLocale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (nextLocale: Locale) => {
    // Set the cookie
    document.cookie = `NEXT_LOCALE=${nextLocale};path=/;max-age=31536000;SameSite=Lax`; // Expires in 1 year

    startTransition(() => {
      // Refresh the page to apply the new locale
      // The server will read the new cookie in getRequestConfig
      router.refresh();
    });
  };

  return (
    <Select {...props}>
      <SelectTrigger className="w-[96px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {siteConfig.locales.map((item, index) => (
            <SelectItem key={index} value="apple">
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
