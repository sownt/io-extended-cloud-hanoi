export interface NavItemProps {
  id: string;
  name: string;
  url?: string;
}

export interface HeaderProps {
  logo: string;
  nav: NavItemProps[];
}
