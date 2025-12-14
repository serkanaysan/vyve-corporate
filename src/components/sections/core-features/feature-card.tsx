"use client";
import React from "react";
import Image from "next/image";
import { useI18n } from '@/app/providers/intl';

type Feature = {
  title: string;
  titleKey?: string;
  description: string;
  descriptionKey?: string;
  iconUrl: string;
  popular?: boolean;
  mode?: string;
};

export default function FeatureCard({ feature }: { feature: Feature }) {
  const { t } = useI18n();

  const title = feature.titleKey ? t(feature.titleKey, feature.title) : feature.title;
  const description = feature.descriptionKey
    ? t(feature.descriptionKey, feature.description)
    : feature.description;

  return (
    <div className="relative bg-white p-9 border border-gray-200 dark:bg-white/5 dark:border-white/3 rounded-[20px] shadow-[0px_30px_50px_-32px_rgba(107,110,148,0.04)]">
      {feature.popular && (
        <span className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
          {t('common.popular', 'Popular')}
        </span>
      )}

      <div className="core-feature-icon mb-6">
        <Image src={feature.iconUrl} alt={title} role="presentation" width={40} height={40} color="#fff" style={{fill: '#fff'}} />
      </div>

      <div className="flex items-center gap-3 mb-4">
        <h3 className="text-gray-800 dark:text-white/90 font-bold text-xl md:text-2xl">{title}</h3>
        {feature.mode && (
          <span className="ml-2 inline-block text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-700">
            {t(`mode.${feature.mode}`, feature.mode)}
          </span>
        )}
      </div>

      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}
