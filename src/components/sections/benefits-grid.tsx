"use client";
import { useI18n } from "@/app/providers/intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BenefitsGrid() {
  const { t } = useI18n();
  return (
    <section className="py-14 md:py-28">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="max-w-lg mx-auto mb-3 font-bold text-center text-dark dark:text-white/90 text-3xl md:text-title-lg">
            {t("vendor.title", "Let Your Venue Join the Rhythm of the City")}
          </h2>
          <p className="max-w-2xl mx-auto text-base dark: font-normal leading-6 text-white/50">
            {t(
              "vendor.description",
              "Join Vyve, show your real-time busyness, and connect with the right guests at the right moment."
            )}
          </p>
        </div>
        <div className="max-w-[1008px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6">
              <div className="relative flex flex-col justify-between bg-primary-500 rounded-[20px] p-9 md:p-13">
                <div className="max-w-sm mb-32">
                  <h3 className="font-bold text-white text-2xl md:text-3xl mb-4">
                    {t("vendor.title1", "Join Vyve")}
                  </h3>
                  <p className="text-base text-white/70">
                    {t(
                      "vendor.description1",
                      "Add your venue in minutes and take your place in the city’s digital flow."
                    )}
                  </p>
                </div>
                <div>
                  <Image
                    src="/images/hero/explorer.svg"
                    className="absolute top-[61%] left-8 floating-1"
                    alt=""
                    width={111}
                    height={34}
                  />
                  <Image
                    src="/images/hero/popular.svg"
                    className="absolute right-28 top-[55%] floating-2"
                    alt=""
                    width={118}
                    height={34}
                  />
                  <Image
                    src="/images/benefits/ind-4.svg"
                    className="right-8 absolute bottom-[15%] floating-3"
                    alt=""
                    width={117}
                    height={34}
                  />

                  <Image
                    src="/images/benefits/bn-1.svg"
                    className="-mb-8 md:-mb-13 w-full"
                    alt=""
                    width={488}
                    height={288}
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="benefits-bg rounded-[20px] p-12 overflow-hidden">
                <div>
                  <Image
                    src="/images/benefits/bn-2.svg"
                    alt=""
                    width={306}
                    height={279}
                  />
                </div>
                <div>
                  <h3 className="font-bold max-w-xs text-white text-2xl md:text-3xl mb-4">
                    {t("vendor.title2", "Real-Time Visibility")}
                  </h3>
                  <p className="text-base max-w-sm text-white/70">
                    {t(
                      "vendor.description2",
                      "Share your live occupancy and let the right guests find you at the right time."
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-12">
              <div className="lg:px-12 p-8 bg-[#2D0B70] lg:pb-0 lg:p-12 relative rounded-[20px] h-full lg:flex lg:flex-row justify-between bg-cover flex-col gap-5">
                <div className="max-w-sm relative z-10">
                  <h3 className="font-bold text-white text-2xl md:text-3xl mb-4">
                    {t("vendor.title3", "Adapt to the City’s Flow")}
                  </h3>
                  <p className="text-base text-white/70 mb-8">
                    {t(
                      "vendor.description3",
                      "Respond to real-time movement and meet the right guests at the right moment."
                    )}
                  </p>
                  <Link
                    href="/iletisim"
                    className="font-medium inline-block text-sm text-white rounded-full bg-primary-500 hover:bg-primary-600 transition py-3 px-6"
                  >
                    {t("vendor.try", "Try It for Free Now")}
                  </Link>
                </div>
                <div>
                  <Image
                    src="/images/benefits/bn-3.svg"
                    className="hidden lg:block relative z-10"
                    alt=""
                    width={359}
                    height={318}
                  />
                </div>
                <Image
                  src="/images/benefits/blur-shape.png"
                  alt=""
                  className="h-full w-full -z-0 absolute top-0 right-0"
                  width={399}
                  height={399}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
