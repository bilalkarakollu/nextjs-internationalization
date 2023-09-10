import React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface NextLinkProps extends LinkProps {
  children: React.ReactNode;
}

const NextLink: React.FC<NextLinkProps> = (props) => {
  const router = useRouter();
  const { locale } = router;
  const { children, href, ...restProps } = props;

  return (
    <Link href={`/${locale}${href}`} {...restProps}>
      {children}
    </Link>
  );
};

export default NextLink;
