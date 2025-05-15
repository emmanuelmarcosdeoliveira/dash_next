import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import styles from "../app/ui/home.module.css";
import AcmeLogo from "./ui/acme-logo";
import { lusitana } from "./ui/fonts";
export default function Page() {
  return (
    <main className="flex flex-col min-h-screen p-6">
      <div className="bg-blue-500 flex h-20 items-end md:h-52 p-4 rounded-lg shrink-0">
        <AcmeLogo />
      </div>
      <div className="flex flex-col gap-4 grow md:flex-row mt-4">
        <div className="bg-gray-50 flex flex-col gap-6 justify-center md:px-20 md:w-2/5 px-6 py-10 rounded-lg">
          <div className={styles.shape} />
          <p
            className={`text-xl text-gray-800 md:text-3xl md:leading-normal ${lusitana.className}`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="bg-blue-500 flex font-medium gap-5 hover:bg-blue-400 items-center md:text-base px-6 py-3 rounded-lg self-start text-sm text-white transition-colors"
          >
            <span>Log in</span> <ArrowRightIcon className="md:w-6 w-5" />
          </Link>
        </div>
        <div className="flex items-center justify-center md:px-28 md:py-12 md:w-3/5 p-6">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screen Shot Desktop"
          />
          <Image
            width={560}
            height={620}
            src="/hero-mobile.png"
            className="block md:hidden"
            alt="Screen shot Mobile"
          />
        </div>
      </div>
    </main>
  );
}
