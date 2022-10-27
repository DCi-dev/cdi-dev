import Link from "next/link";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { navigationRoutes } from "@utils/utils";
import socialMedia from "@content/socialMedia";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className=" font-inter mb-20 w-screen text-gray-600 dark:text-gray-400/50 print:hidden">
      <section className="grid grid-cols-3 gap-10">
        <div className="flex flex-col gap-4 capitalize">
          {navigationRoutes.slice(0, 4).map((link, index) => {
            return (
              <FooterLink
                key={index}
                href={`/${link}`}
                text={link}
                router={router}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-4 capitalize">
          {navigationRoutes
            .slice(4, navigationRoutes.length)
            .map((link, index) => {
              return (
                <FooterLink
                  key={index}
                  href={`/${link}`}
                  text={link}
                  router={router}
                />
              );
            })}
        </div>
        <div className="flex flex-col gap-4 capitalize">
          {socialMedia.slice(0, 4).map((platform, index) => {
            return (
              <Link key={index} href={platform.url} passHref>
                <a
                  className="w-fit hover:text-black dark:hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={platform.url}
                >
                  {platform.title}
                </a>
              </Link>
            );
          })}
        </div>
      </section>
    </footer>
  );
}

function FooterLink({
  router,
  href,
  text,
}: {
  router: NextRouter;
  href: string;
  text: string;
}) {
  const isActive = router.asPath === (href === "/home" ? "/" : href);
  return (
    <Link href={href === "/home" ? "/" : href} passHref>
      <a
        className={`${
          isActive
            ? "text-gray-800 dark:text-gray-100"
            : " text-gray-600 dark:text-gray-300"
        } w-fit hover:text-black dark:hover:text-white`}
      >
        <span className="capitalize">{text}</span>
      </a>
    </Link>
  );
}
