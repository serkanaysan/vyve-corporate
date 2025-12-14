"use client";
import React from "react";
import { useI18n } from '@/app/providers/intl';
import { getCurrentYear } from '@/lib/utils';

export default function CopyrightText() {
  const { t } = useI18n();

  return (
    <p className="text-sm text-gray-600 dark:text-gray-400">
      &copy; {getCurrentYear()} Vyve - {t('common.copyright', 'All Rights Reserved')}.
    </p>
  );
}
