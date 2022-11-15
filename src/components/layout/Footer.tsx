import socialLinks from "@content/socialMedia";
import { navigationRoutes } from "@utils/utils";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="mt-auto w-full bg-neutral-100 p-4 dark:bg-neutral-1000 print:hidden sm:p-6">
      <hr className="my-6 border-neutral-200 dark:border-neutral-700 sm:mx-auto lg:my-8" />
      <div className="md:flex md:justify-evenly">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <Link href="/" passHref className="flex items-center">
            <a className="flex items-center">
              <span className="font-squartiqa text-6xl text-primary-900 dark:text-primary-200">
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

      <div className="pt-12 pb-8 sm:flex sm:items-center sm:justify-center">
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <span className="self-center font-ubuntu text-2xl text-neutral-900 dark:text-neutral-200">
            Get in touch:
          </span>
          {socialLinks.data.map((platform, index) => {
            return (
              <div
                key={index}
                className="self-center text-neutral-600 hover:text-primary-800 dark:text-neutral-400 dark:hover:text-primary-200"
              >
                <Link href={platform.url} passHref className="mb-4">
                  <a
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={platform.url}
                  >
                    <platform.Icon className="h-7 w-7" />
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
            ? "text-neutral-900 dark:text-neutral-200"
            : " text-neutral-600 dark:text-neutral-400"
        } w-fit font-bold hover:text-neutral-1000 hover:underline dark:hover:text-neutral-100`}
      >
        <span className="text-lg capitalize">{text}</span>
      </a>
    </Link>
  );
}
