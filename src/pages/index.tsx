import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import Head from "next/head";
import NextLink from "@/components/NextLink";

const Home = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.title")} />
      </Head>
      <div className="pt-10">
        {t("example")}
        <div>
          <h1 className="text-6xl font-bold text-center">{t("page.title")}</h1>
        </div>
        <div className="mt-10">
          <p className="text-2xl text-center">{t("page.description")}</p>
        </div>
        <NextLink href="/second">
          <div className="mt-10 text-center">
            <button className="px-10 py-2 bg-gray-800 text-white rounded-md">
              {t("button.secondPage")}
            </button>
          </div>
        </NextLink>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const locale = "en";
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Home;
