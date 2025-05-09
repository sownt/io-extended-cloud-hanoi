'use client';
import Image from 'next/image';
import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  TicketIcon,
} from '@heroicons/react/24/solid';
import Button from '@/components/button/Button';
import logo_white from '@/public/logo_white.png';
import hero from '@/public/hero/home_hero.svg';
import hero_dark from '@/public/hero/home_hero_dark.svg';
import hero_mobile from '@/public/hero/home_hero_mobile.svg';
import hero_mobile_dark from '@/public/hero/home_hero_mobile_dark.svg';
import googlefordevelopers from '@/public/googlefordevelopers.svg';
import MobileNavBar from '@/components/navbar/MobileNavBar';
import Link from 'next/link';
import NavBar from '@/components/navbar/NavBar';

export default function Home() {
  return (
    <div className="relative isolate flex flex-col min-h-svh w-full bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
      {/* Nav */}
      <NavBar />
      {/* Mobile Nav */}
      <MobileNavBar />
      {/* Body */}
      <main>
        {/* Hero Section */}
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row overflow-hidden bg-grey-bg dark:bg-grey border-b-[1px] md:border-b-2 border-grey dark:border-grey-bg">
          <div className="flex flex-col md:justify-center px-8 py-16 w-full md:w-2/5 md:p-10 md:pr-0 dark:text-white z-10 text-center md:text-left items-center md:items-start">
            <h1 className="text-2xl sm:text-4xl font-semibold mb-4 sm:s-h3 md:l-h1-2">
              Cùng cập nhật những công nghệ mới nhất về Cloud, AI và ML từ
              Google I/O
            </h1>
            <p className="font-normal text-justify sm:s-h6 md:l-h6 mb-4">
              Tại sự kiện Google I/O Extended Cloud Hanoi 2024, phiên bản mở
              rộng của sự kiện Google I/O dành cho các lập trình viên và những
              người yêu thích công nghệ tại Việt Nam.
            </p>
            <Link href="https://gdgcloudhanoi.dev/iox-register">
              <Button>
                <TicketIcon />
                Đăng ký ngay
              </Button>
            </Link>
          </div>
          <div className="flex justify-end items-end w-full md:w-3/5 mt-[-55px] md:mt-[60px]">
            <Image
              src={hero}
              alt="Hero image"
              className="hidden md:inline-block h-full object-cover object-left dark:hidden ml:pr-4"
            />
            <Image
              src={hero_dark}
              alt="Hero image"
              className="hidden dark:md:inline-block h-full object-cover object-left ml:pr-4"
            />
            <Image
              src={hero_mobile}
              alt="Hero image"
              className="block md:hidden dark:hidden w-full mt-[60px]"
            />
            <Image
              src={hero_mobile_dark}
              alt="Hero image"
              className="hidden dark:inline-block dark:md:hidden w-full mt-[60px]"
            />
          </div>
        </div>
        {/* End Hero Section */}
        <div className="rounded-4xl bg-neutral-900 py-20 sm:py-32">
          <div className="mx-auto max-w-6xl px-8">
            <div className="flex items-center gap-x-8">
              <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
                Đồng hành cùng chúng tôi
              </h2>
              <div className="h-px flex-auto bg-neutral-800"></div>
            </div>
            <div>
              <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
                {Array.from({ length: 8 }, (_, i) => (
                  <li key={i}>
                    <span className="relative">
                      <Image
                        className="w-64"
                        src={logo_white}
                        alt="Google I/O Extended Cloud Hanoi 2024"
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          id="info"
          className="mx-auto max-w-6xl px-8 mt-24 sm:mt-32 lg:mt-40 text-neutral-950 dark:text-gray-50">
          <h2>
            <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl">
              Hẹn gặp bạn
            </span>
          </h2>
          <div className="mt-6 text-xl">
            <p>cùng với gần 400 thành viên tham dự</p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-16">
            <div className="flex">
              <Link
                href={'https://maps.app.goo.gl/G2hxgtVqWbVGmb5R9'}
                rel="noopener noreferrer"
                target="_blank">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition bg-neutral-50 hover:bg-white dark:bg-zinc-900 dark:hover:bg-zinc-800 sm:p-8">
                  <MapPinIcon className="w-8" />
                  <p className="mt-6 font-display text-2xl font-semibold ">
                    Hội trường A2, Học viện Công nghệ Bưu chính viễn thông
                  </p>
                  <p className="mt-4 text-base">
                    96A Đường Trần Phú, P. Mộ Lao, Hà Đông, Hà Nội
                  </p>
                </article>
              </Link>
            </div>
            <div className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition bg-neutral-50 hover:bg-white dark:bg-zinc-900 dark:hover:bg-zinc-800 sm:p-8">
                <ClockIcon className="w-8" />
                <p className="mt-6 font-display text-2xl font-semibold">
                  13:00
                </p>
                <p className="mt-4 text-base">
                  Nhớ đến sớm để nhận những phần quà hấp dẫn từ BTC
                </p>
              </article>
            </div>
            <div className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition bg-neutral-50 hover:bg-white dark:bg-zinc-900 dark:hover:bg-zinc-800 sm:p-8">
                <CalendarDaysIcon className="w-8" />
                <p className="mt-6 font-display text-2xl font-semibold">
                  Thứ bảy, 27 tháng 7
                </p>
                <p className="mt-4 text-base">
                  Thêm ngay vào Calendar để không bỏ lỡ nhau nhé
                </p>
              </article>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-24 sm:mt-32 lg:mt-40 pt-10 pb-16 lg:py-10 px-7 lg:px-16 bg-black flex flex-col lg:flex-row lg:justify-between lg:items-center w-max-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-6 text-grey-500 text-[16px] font-medium flex-1">
          <div className="text-2xl font-semibold lg:mr-6 text-grey-500 flex justify-center lg:justify-between w-full mb-4 lg:mb-0 lg:w-auto items-center">
            <Image
              className="w-32"
              src={googlefordevelopers}
              alt="Google for Developers"
            />
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-self-end lg:justify-end mt-8 lg:mt-0 text-slate-200">
          <Link href="#" className="p-3">
            Facebook
          </Link>
          <Link href="#" className="p-3">
            LinkedIn
          </Link>
          <Link href="#" className="p-3">
            Youtube
          </Link>
        </div>
      </footer>
    </div>
  );
}
