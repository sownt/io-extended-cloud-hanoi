import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';
import logo_white from '@/public/logo_white.png';
import ThemeSwitcher from '@/components/ThemeSwitcher';
export default function NavBar() {
  return (
    <div className="inset-x-0 top-0 max-lg:hidden dark:text-white">
      <nav className="mx-auto max-w-6xl px-4 flex flex-1 items-center gap-8 py-2.5">
        <Link href={'/'}>
          <span className="relative">
            <Image
              className="dark:hidden w-64"
              src={logo}
              alt="Google I/O Extended Cloud Hanoi 2024"
            />
            <Image
              className="hidden dark:inline w-64"
              src={logo_white}
              alt="Google I/O Extended Cloud Hanoi 2024"
            />
          </span>
        </Link>
        <div className="max-lg:hidden h-6 w-px bg-zinc-950/10 dark:bg-white/10"></div>
        <div className="max-lg:hidden flex items-center gap-8">
          <span className="relative">
            <Link href="#info">Thông tin</Link>
          </span>
          <span className="relative">
            <Link href="#agenda">Lịch trình</Link>
          </span>
          <span className="relative">
            <Link href="#speakers">Diễn giả</Link>
          </span>
          <span className="relative">
            <Link href="#joinus">Tham gia</Link>
          </span>
          <span className="relative">
            <Link href="#contacts">Liên hệ</Link>
          </span>
        </div>
        <div className="-ml-4 flex-1"></div>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  );
}
