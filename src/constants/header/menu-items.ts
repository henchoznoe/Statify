export type MenuItemsType = {
  label: string;
  to: string;
};

export const menuItems: MenuItemsType[] = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'My Stats',
    to: '/stats/1'
  },
  {
    label: 'Privacy Policy',
    to: '/privacy-policy'
  }
];