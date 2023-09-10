import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import NextLink from "../NextLink";

const Header = () => {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  //@ts-ignore
  const locales = i18n.options?.locales;

  const changeLang = (lang: string) => {
    console.log({ router });
    console.log(`/${lang}${router.pathname}`);
    router.push(`/${lang}${router.pathname}`, undefined, { locale: lang });
  };

  return (
    <nav className="w-full bg-gray-800 p-4 flex justify-between items-center">
      <div>
        <NextLink href={"/"}>
          <div className="text-2xl text-white m-0">{t("page.title")}</div>
        </NextLink>
      </div>
      <div className="flex align-center">
        {locales?.map((locale: string) => (
          <div className="ms-5" key={locale}>
            <button
              key={locale}
              className="text-sm text-white"
              onClick={() => changeLang(locale)}
            >
              {locale}
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Header;
