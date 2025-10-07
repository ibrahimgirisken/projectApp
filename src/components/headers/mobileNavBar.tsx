import { MegaMenuDataType, menuData, MenuItemDataType, SubMenuDataType } from '@/db/menuData';
import { MouseEvent, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import Link from "next/link"
import Image from 'next/image';

const MobileNavBar = () => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleSubmenu = (e: MouseEvent, index: number) => {
        e.preventDefault();
        setOpenIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    

    return (
        <div className='mobile-menu d-lg-none'>
            {menuData.map((item, index) => {
                const isOpen = openIndexes.includes(index);
                return <MenuItem key={index} item={item} index={index} toggleSubmenu={toggleSubmenu} isOpen={isOpen} />;
            })}
        </div>
    );
};

const MenuItem = ({ item, index, toggleSubmenu, isOpen }: { item: MenuItemDataType; index: number; isOpen: boolean; toggleSubmenu: (e: MouseEvent, index: number) => void }) => {
    return (
        <div key={index} className='menu-item'>
            <Link href={item.link}>
                {item.title}
                {(item.megamenu?.length || item.submenu?.length) && (
                    <i onClick={(e) => toggleSubmenu(e, index)}>+</i>
                )}
            </Link>
            {item.megamenu?.length && <MegaMenu megamenu={item.megamenu} isOpen={isOpen} index={index} />}
            {item.submenu?.length && <Submenu submenu={item.submenu} isOpen={isOpen} index={index} />}
        </div>
    );
};

const MegaMenu = ({ megamenu, isOpen, index }: { megamenu: MegaMenuDataType[]; isOpen: boolean; index: number }) => (
    <AnimateHeight id={`submenu-${index}`} duration={300} height={isOpen ? 'auto' : 0}>
        <div className='mega-menu'>
            {megamenu.map(({ image, links, title }) => (
                <div className="homemenu" key={title}>
                    <div className="homemenu-thumb">
                        <Image width={213} height={366} sizes='100vw' src={image} alt="img" />
                        <div className="demo-button">
                            {links.map(({ link, title }) => (
                                <Link key={link} href={link} className="theme-btn">
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
        </div>
    </AnimateHeight>
);

const Submenu = ({ submenu, isOpen, index }: { submenu: SubMenuDataType[]; isOpen: boolean; index: number }) => {
    const [openSubIndexes, setOpenSubIndexes] = useState<number[]>([]);

    const toggleNestedSubmenu = (e: MouseEvent, subIndex: number) => {
        e.preventDefault();
        setOpenSubIndexes((prev) =>
            prev.includes(subIndex) ? prev.filter((i) => i !== subIndex) : [...prev, subIndex]
        );
    };

    return (
        <AnimateHeight id={`submenu-${index}`} duration={500} height={isOpen ? 'auto' : 0}>
            <div className='has-submenu'>
                {submenu.map((item, subIndex) => {
                    const nestedIsOpen = openSubIndexes.includes(subIndex);
                    return (
                        <div key={subIndex}>
                            <Link href={item.link}>
                                {item.title}
                                {item.submenu?.length && (
                                    <i onClick={(e) => toggleNestedSubmenu(e, subIndex)}>+</i>
                                )}
                            </Link>
                            {item.submenu?.length && <Submenu submenu={item.submenu} isOpen={nestedIsOpen} index={subIndex} />}
                        </div>
                    );
                })}
            </div>
        </AnimateHeight>
    );
};

export default MobileNavBar;
