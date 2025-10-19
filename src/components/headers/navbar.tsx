'use client';

import { menuData, MenuItemDataType } from "@/db/menuData";
import { useEffect, useState } from "react";
import { menuDataSingleHomePage } from "@/db/menuDataSingleHomePage";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Page } from "@/features/page/types/page";
import { useLangs } from "@/features/lang/hooks/useLang";

function Navbar({ menu }: { menu: Page[] }) {
  const { data: langs = [] } = useLangs();
  const pathName = usePathname();
  const [data, setData] = useState<MenuItemDataType[]>([]);
  const locale = useLocale();
  const t=useTranslations('Navigation');

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
  }, [pathName]);

  const currentSlug = pathName.split('/').slice(2).join('/'); 
  const activeMenuItem = menu.find((item) =>
    item.pageTranslations.some((t) => t.url === currentSlug)
  );

  return (
    <ul>
      {menu.map((menuItem) => {
        const langDatas = menuItem.pageTranslations.find(
          (l) => l.langCode === locale
        );
        return (
          <li
            key={menuItem.id}
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

      <li className="lang-switch">
        <button type="button">
          {locale} <i className="fas fa-angle-down" />
        </button>
        <ul className="submenu">
          {langs.map((lang) => {
            const targetSlug = activeMenuItem?.pageTranslations.find(
              (t) => t.langCode === lang.langCode
            )?.url;
            const href = targetSlug
              ? `/${lang.langCode}/${targetSlug}`
              : `/${lang.langCode}`;
            return (
              <li key={lang.id} className="homemenu-items">
                <Link href={href}>{lang.title}</Link>
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
}

export default Navbar;
