"use client";
import React from 'react';
import { Input } from '@/components/ui/inputs';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/inputs/textarea';
import { useI18n } from '@/app/providers/intl';

export default function ContactForm() {
  const { t } = useI18n();

  return (
    <div className="relative max-w-[800px] mx-auto">
      <div className="contact-wrapper border p-14 relative z-30 bg-white border-gray-100 dark:bg-dark-primary dark:border-gray-800">
        <div className="text-center mb-12">
          <h3 className="text-gray-800 font-bold dark:text-white text-3xl mb-2">
            {t('contact.title', 'Get in Touch')}
          </h3>
        </div>

        <form>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName">{t('contact.first_name', 'First Name')}</Label>
              <Input type="text" placeholder="" />
            </div>

            <div>
              <Label htmlFor="lastName">{t('contact.last_name', 'Last Name')}</Label>
              <Input type="text" placeholder="" />
            </div>

            <div className="col-span-full">
              <Label htmlFor="email">{t('contact.email_address', 'Email Address')}</Label>
              <Input type="text" placeholder="" />
            </div>

            <div className="col-span-full">
              <Label htmlFor="message">{t('contact.message', 'Message')}</Label>
              <Textarea rows={6} placeholder={t('contact.type_your_message', 'Type your message')} />
            </div>

            <div className="col-span-full">
              <button className="bg-primary-500 hover:bg-primary-600 transition h-12 py-3 px-6 w-full font-medium text-white text-sm rounded-full">
                {t('contact.send_message', 'Send Message')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
