import { menuData, MenuItemDataType } from "@/db/menuData";
import { Fragment, useEffect, useState } from "react";
import { menuDataSingleHomePage } from "@/db/menuDataSingleHomePage";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { usePages } from "@/features/page/hooks/usePages";
import { useLocale, useTranslations } from "next-intl";

function Navbar() {
  const pathName = usePathname();
  const [data, setData] = useState<MenuItemDataType[]>([]);
  const { data: pages = [], isLoading, error } = usePages();
  const locale = useLocale();
  const t = useTranslations();
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
      {pages.map((page, index) => {
        const trLang = page.pageTranslations.find((t) => t.langCode === locale);
        return (
          <li
            key={page.id}
            className={
              pathName === `/${trLang?.url}` ? "active" : ""
            }
          >
            <Link href={`/${trLang?.url}`}>
              {trLang?.pageTitle}
            </Link>
          </li>
        );
      })}
      {data.map(({ link, title, megamenu, submenu }, index) => (
        <li
          key={index}
          className={`${megamenu ? "menu-thumb" : ""} ${submenu ? "has-dropdown" : ""} ${index === 0 ? "active" : ""}`}
        >
          <Link href={link}>
            {title}{" "}
            {megamenu || submenu ? <i className="fas fa-angle-down" /> : ""}
          </Link>
          {megamenu?.length && (
            <ul className="submenu has-homemenu">
              <li className="homemenu-items">
                {megamenu.map(({ image, links, title }, index) => (
                  <div key={index} className="homemenu">
                    <div className="homemenu-thumb">
                      <Image
                        width={213}
                        height={366}
                        sizes="100vw"
                        src={image}
                        alt="img"
                      />
                      <div className="demo-button">
                        {links.map(({ link, title }, ind) => (
                          <Link key={ind} href={link} className="theme-btn">
                            <span>{title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">{title}</h4>
                    </div>
                  </div>
                ))}
              </li>
            </ul>
          )}
          {submenu?.length && (
            <ul className="submenu">
              {submenu.map((dropdown, ind) => {
                return (
                  <Fragment key={ind}>
                    {dropdown.submenu ? (
                      <li className="has-dropdown">
                        <Link href="#">
                          {dropdown.title} <i className="fas fa-angle-down" />
                        </Link>
                        <ul className="submenu">
                          {dropdown.submenu.map((subDropdown, index) => (
                            <li key={index}>
                              <Link href={subDropdown.link}>
                                {subDropdown.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li>
                        <Link href={dropdown.link}>{dropdown.title}</Link>
                      </li>
                    )}
                  </Fragment>
                );
              })}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
