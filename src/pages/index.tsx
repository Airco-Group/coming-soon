import Head from "next/head";
import Image from "next/image";
import bgImage from "../../public/comingSoonBg.jpg";
import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowToast(true);
  };
  return (
    <>
      <Head>
        <title>Airco, Inc.</title>
        <meta
          name="description"
          content="Temporary Landing page for Airco, Inc."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main
        className="flex min-h-screen flex-col items-center bg-cover bg-fixed bg-right bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Image
            src="/airco-main.png"
            alt="primary Logo"
            width="450"
            height="100"
          />
          <div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-4 md:gap-12">
            <Image
              src="/airco-equipment.png"
              alt="primary Logo"
              width="200"
              height="100"
            />
            <Image
              src="/airco-powder.png"
              alt="primary Logo"
              width="200"
              height="100"
            />
            <Image
              src="/airco-shared.png"
              alt="primary Logo"
              width="200"
              height="100"
            />
            <Image
              src="/airco-industrial.png"
              alt="primary Logo"
              width="200"
              height="100"
            />
          </div>

          <div className="mt-8 max-w-5xl text-center">
            <h1 className=" text-6xl font-bold">Under Construction</h1>
            <p className="mt-8 text-lg font-medium">
              Airco specializes in the application of both powder and liquid
              coatings. We provide abrasive blasting, fireproofing, and linings,
              applied both in a shop environment or at your site. Our team of
              experts ensures finishes that are durable, have a long life cycle,
              and are done to the highest safety and quality standards, all
              within your time frame and budget. Please contact us below for
              immediate assistance. You can trust Airco for all your surface
              preparation and finishing requirements
            </p>
          </div>

          <div>
            <form
              name="Contact Us"
              onSubmit={(e) => handleSubmit(e)}
              data-netlify="true"
            >
              <div className="flex gap-4">
                <input type="hidden" name="form-name" value="Contact Us" />
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Name:
                  <input
                    type="text"
                    name="full_name"
                    id="name"
                    placeholder="Your Full Name"
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  />
                </label>
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Email Address:{" "}
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    id="email"
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  />
                </label>
              </div>
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Description
                <textarea
                  name="description"
                  id="description"
                  placeholder="Write your message here.."
                  rows={10}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                ></textarea>
                <div className="mt-4 flex justify-end">
                  <button
                    className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </label>
            </form>
          </div>
        </div>
        <AnimatePresence>
          {showToast && (
            <ToastMessage
              message="Email successfully sent!"
              setShowToast={setShowToast}
            />
          )}
        </AnimatePresence>
      </main>
    </>
  );
}

type toastProps = {
  message: string;
  setShowToast: (b: boolean) => void;
};

const ToastMessage = ({ message, setShowToast }: toastProps) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute bottom-0 left-1/2 mb-10 -translate-x-1/2 transition delay-100 ease-in-out">
        <div
          className="max-w-xs rounded-md border bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
          role="alert"
        >
          <div className="flex gap-4 p-2 sm:p-4">
            <h3 className="text-xs font-semibold text-gray-800 dark:text-white sm:text-base">
              {message}
            </h3>
            <button onClick={() => setShowToast(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
