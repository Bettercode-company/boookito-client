import Link from "next/link";
import LogoApplication from "../Home/Logo";
import { useEffect, useState } from "react";
import { AxiosInstance } from "../../utils/http";

export default function NavbarComponent({ url }) {
  const [login, setLogin] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogin(true);
      setImage(localStorage.getItem("image"));
    } else {
      setLogin(false);
    }
  }, [url]);
  return (
    <>
      <header className="hidden w-full  lg:px-36   lg:block    flex-wrap sm:justify-start sm:flex-nowrap z-50  bg-transparent border-b shadow-lg  rounded-lg text-sm py-2  dark:bg-slate-900 dark:border-gray-700">
        <nav
          className="lg:max-w-5xl  flex basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="mr-5 md:mr-8">
            
              <a href="/" className="flex-none text-xl font-semibold ">
                <LogoApplication />
              </a>
          </div>
          <div className="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3">
            <div className="hidden sm:block"></div>
            <div className="flex flex-row items-center justify-end gap-2">
              {!login && (
                <Link href="/login">
                  <a
                    type="button"
                    class="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-green-600 text-white shadow-sm align-middle   "
                  >
                    ورود به حساب کاربری
                  </a>
                </Link>
              )}
              {login && (
                <div
                  className="hs-dropdown relative inline-flex"
                  data-hs-dropdown-placement="bottom-right"
                >
                  <Link href="/user/dashboard">
                    <a
                      id="hs-dropdown-with-header"
                      type="button"
                      className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                    >
                      <img
                        className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
                        src={image}
                        alt="Image Description"
                      />
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
