import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import NextLink from "@/components/NextLink";
import { useTranslation } from "next-i18next";

const Second = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div>
        <h1 className="text-center mt-10">{t("button.secondPage")}</h1>
        <NextLink href="/">
          <div className="mt-10 text-center">
            <button className="px-10 py-2 bg-gray-800 text-white rounded-md">
              {t("button.homePage")}
            </button>
          </div>
        </NextLink>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const locale = context.locale || context.defaultLocale || "en";
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Second;
