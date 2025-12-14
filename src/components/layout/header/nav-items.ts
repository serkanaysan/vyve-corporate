export const navItems = [
  {
    type: 'link',
    href: '/',
    label: 'Home',
    labelKey: 'nav.home',
  },
  // {
  //   type: 'link',
  //   label: 'About Us',
  //   labelKey: 'nav.about',
  //   href: '/hakkimizda',
  // },
  {
    type: 'link',
    label: 'Contact',
    labelKey: 'nav.contact',
    href: '/iletisim',
  },
] satisfies NavItem[];

export type NavItem =
  | {
      type: 'link';
      href: string;
      label: string;
      labelKey?: string;
    }
  | {
      type: 'dropdown';
      label: string;
      labelKey?: string;
      items: Array<{
        href: string;
        label: string;
        labelKey?: string;
        icon?: string;
      }>;
    };
