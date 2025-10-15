import { menuData, MenuItemDataType } from "@/db/menuData";
import { useEffect, useState } from "react";
import { menuDataSingleHomePage } from "@/db/menuDataSingleHomePage";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Page } from "@/features/page/types/page";
import { useLangs } from "@/features/lang/hooks/useLang";

function Navbar({ menu }: { menu: Page[] }) {
  const { data: langs = [], isLoading, error } = useLangs();
  const pathName = usePathname();
  const [data, setData] = useState<MenuItemDataType[]>([]);
  const locale = useLocale();
  useEffect(() => {
    if (
      pathName === "/home-one-single" ||
      pathName === "/home-two-single" ||
      pathName === "/home-three-single" ||
      pathName === "/home-four-single"
    ) {
      setData(menuDataSingleHomePage);
    } else {
      setData(menuData);
    }
  });
  return (
    <ul>
      {menu.map((menu, index) => {
        const langDatas = menu.pageTranslations[0];
        return (
          <li
            key={menu.id}
            className={
              pathName === `/${locale}/${langDatas?.url}` ? "active" : ""
            }
          >
            <Link href={`/${locale}/${langDatas?.url}`}>
              {langDatas?.pageTitle}
            </Link>
          </li>
        );
      })}
      <li>
        {langs.map((lang, index) => {
          return (
            <li key={lang.id}>
              <Link href={lang.langCode}>
                {
                  lang.langCode === locale ? (<>
                    {lang.langCode} <i className="fas fa-angle-down" />
                  </>) : null
                }
              </Link>
            </li>
          );
        })}
        {
          <ul className="submenu">
            {langs.map((lang, index) => {
              return (
                <li key={lang.id} className="homemenu-items">
                  <Link href={`/${lang.langCode}`}>
                    {lang?.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        }
      </li>
    </ul>
  );
}

export default Navbar;
