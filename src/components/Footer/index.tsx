import React from "react";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();
  return (
    <div className="fixed bottom-0 w-full bg-gray-800 p-4">
      <p className="text-sm text-center">
        {t("page.copyright", { currentYear })}
      </p>
    </div>
  );
};

export default Footer;
