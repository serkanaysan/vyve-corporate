"use client";
"use client";
import Image from "next/image";
import InstagramIcon from "@/components/icons/Instagram";
import TiktokIcon from "@/components/icons/Tiktok";
import YoutubeIcon from "@/components/icons/Youtube";
import XIcon from "@/components/icons/X";
import Link from "next/link";
import CopyrightText from "./copyright-text";
import { useI18n } from "@/app/providers/intl";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative overflow-hidden bg-white dark:bg-dark-primary">
      <span className="absolute top-0 -translate-x-1/2 left-1/2">
        <svg
          width="1260"
          height="457"
          viewBox="0 0 1260 457"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_11105_867)">
            <circle cx="630" cy="-173.299" r="230" fill="#3B2EFF" />
          </g>
          <defs>
            <filter
              id="filter0_f_11105_867"
              x="0"
              y="-803.299"
              width="1260"
              height="1260"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="200"
                result="effect1_foregroundBlur_11105_867"
              />
            </filter>
          </defs>
        </svg>
      </span>

      <div className="relative z-10 py-16 xl:py-24">
        <div className="container px-5 mx-auto sm:px-7">
          <div className="grid gap-y-8 gap-x-6 lg:grid-cols-12">
            <div className="lg:col-span-3 xl:col-span-4">
              <div>
                <Link
                  href="/"
                  className="mb-6 flex flex-row gap-2 items-center text-gray-800 dark:text-white/90"
                >
                  <Image
                    src="/images/logo.svg"
                    alt="logo"
                    width={30}
                    height={50}
                  />
                  <span
                    className={`${roboto.className} text-2xl font-semibold text-gray-900 dark:text-white/90 leading-none`}
                  >
                    Vyve
                  </span>
                </Link>

                <div className="flex">
                  <a
                    href="https://www.instagram.com/vyve.city"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white/80 size-10 mr-3"
                  >
                    <InstagramIcon className="w-6 h-6" />
                  </a>

                  <a
                    href="https://www.tiktok.com/@vyve.city"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white/80 size-10 mr-3"
                  >
                    <TiktokIcon className="w-6 h-6" />
                  </a>

                  <a
                    href="https://x.com/vyvecity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white/80 size-10 mr-3"
                  >
                    <XIcon className="w-6 h-6" />
                  </a>

                  <a
                    href="https://www.youtube.com/@vyvecity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white/80 size-10 mr-3"
                  >
                    <YoutubeIcon className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 xl:col-span-5">
              <div className="grid sm:grid-cols-3 gap-7">
                <div>
                  <span className="block mb-6 text-sm text-gray-700 dark:text-gray-400">
                    {t("common.services", "Services")}
                  </span>
                  <nav className="flex flex-col space-y-3">
                    <Link
                      href="#"
                      className="text-sm font-normal text-gray-600 dark:text-gray-400 transition hover:text-gray-800 dark:hover:text-white"
                    >
                      {t("common.faq", "FAQ")}
                    </Link>
                    <Link
                      href="/iletisim"
                      className="text-sm font-normal text-gray-600 dark:text-gray-400 transition hover:text-gray-800 dark:hover:text-white"
                    >
                      {t("common.help", "Help")}
                    </Link>
                    <Link
                      href="#"
                      className="text-sm font-normal text-gray-600 dark:text-gray-400 transition hover:text-gray-800 dark:hover:text-white"
                    >
                      {t("common.privacy_policy", "Privacy Policy")}
                    </Link>
                  </nav>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div>
                <span className="block mb-6 text-sm text-gray-700 dark:text-gray-400">
                  {t("common.stay_in_touch", "Stay In Touch")}
                </span>
                <p className="block mb-5 text-sm text-gray-600 dark:text-gray-400">
                  {t(
                    "common.subscribe_text",
                    "Subscribe now for exclusive insights and offers!"
                  )}
                </p>
                <form>
                  <div className="flex flex-col items-center gap-2 w-full sm:max-w-64">
                    <input
                      type="email"
                      placeholder={t(
                        "common.enter_your_email",
                        "Enter your email"
                      )}
                      className="w-full h-12 p-4 text-sm text-gray-700 border border-gray-200 rounded-full placeholder:text-center placeholder:text-gray-400 placeholder:text-sm text-center placeholder:font-normal focus:outline-0 dark:text-white dark:border-gray-700"
                      required
                    />
                    <button className="w-full px-6 py-3 text-sm font-medium text-white transition rounded-full cursor-pointer bg-primary-500 hover:bg-primary-600">
                      {t("common.subscribe_now", "Subscribe Now")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container relative z-10 px-5 mx-auto sm:px-7">
          <div className="py-5 text-center">
            <CopyrightText />
          </div>
        </div>
      </div>
    </footer>
  );
}
