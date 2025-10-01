import Image from "next/image";
import Link from "next/link";

const categories = [
    { name: 'Database Security', count: 8 },
    { name: 'IT Consultancy', count: 11 },
    { name: 'App Development', count: 12, active: true },
    { name: 'UI/UX Design', count: 18 },
    { name: 'Cyber Security', count: 7 },
];

const recentPosts = [
    {
        imgSrc: '/img/news/pp3.jpg',
        date: '18 Dec, 2025',
        title: 'Colgate-Palmolive Renews with Morz in Malaysia Soon',
    },
    {
        imgSrc: '/img/news/pp4.jpg',
        date: '18 Dec, 2025',
        title: 'Bill Gates Launches Clean Energy Investment Fund',
    },
    {
        imgSrc: '/img/news/pp5.jpg',
        date: '18 Dec, 2025',
        title: 'Metal Roofing: The Best for Solar Panels',
    },
];

const tags = [
    'Uncategorized',
    'Construction',
    'Projects',
    'Expansion',
    'Design',
    'Corporat',
    'Branding',
];

const BlogSidebar = () => {
    return (
        <div className="main-sidebar">
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Search</h3>
                </div>
                <div className="search-widget">
                    <form action="#">
                        <input type="text" placeholder="Search here" />
                        <button type="submit">
                            <i className="fa-solid fa-magnifying-glass" />
                        </button>
                    </form>
                </div>
            </div>

            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Categories</h3>
                </div>
                <div className="news-widget-categories">
                    <ul>
                        {categories.map((category, index) => (
                            <li key={index} className={category.active ? 'active' : ''}>
                                <Link href="/news-details">{category.name}</Link>
                                <span>({category.count})</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Recent Post</h3>
                </div>
                <div className="recent-post-area">
                    {recentPosts.map((post, index) => (
                        <div className="recent-items" key={index}>
                            <div className="recent-thumb">
                                <Image width={78} height={79} sizes="100vw" src={post.imgSrc} alt="img" />
                            </div>
                            <div className="recent-content">
                                <ul>
                                    <li>
                                        <i className="fa-solid fa-calendar-days" />
                                        {post.date}
                                    </li>
                                </ul>
                                <h6>
                                    <Link href="/news-details">{post.title}</Link>
                                </h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Tags</h3>
                </div>
                <div className="news-widget-categories">
                    <div className="tagcloud">
                        {tags.map((tag, index) => (
                            <Link href="/news-details" key={index}>
                                {tag}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;