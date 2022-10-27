import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { navigationRoutes } from "@utils/utils";
import socialMedia from "@content/socialMedia";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="bg-white p-4 dark:bg-gray-900 print:hidden sm:p-6">
      <div className="md:flex md:justify-between">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <Link href="/" passHref className="flex items-center">
            <a className="flex items-center">
              <span className="font-squartiqa text-6xl text-black dark:text-white">
                CDi
              </span>
            </a>
          </Link>
        </div>

        {/* Menu */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
          <div className="flex flex-col gap-4 capitalize">
            {navigationRoutes.slice(0, 3).map((link, index) => {
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
            {navigationRoutes.slice(3, 6).map((link, index) => {
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
              .slice(6, navigationRoutes.length)
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
        </div>
      </div>
      <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />

      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          {socialMedia.slice(0, 3).map((platform, index) => {
            return (
              <div key={index} className="text-gray-600 dark:text-gray-400">
                <Link href={platform.url} passHref className="mb-4">
                  <a
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={platform.url}
                  >
                    <platform.Icon className="h-6 w-6" />
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
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
    <Link href={href === "/home" ? "/" : href} className="mb-4" passHref>
      <a
        className={`${
          isActive
            ? "text-gray-800 dark:text-gray-100"
            : " text-gray-600 dark:text-gray-300"
        } w-fit hover:text-black hover:underline dark:hover:text-white`}
      >
        <span className="capitalize">{text}</span>
      </a>
    </Link>
  );
}
