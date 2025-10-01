import { BlogPostDataType } from "@/db/blogPostsThreeData"
import Image from "next/image"
import Link from "next/link"

const BlogCard = ({ news, width, height, className }: { news: BlogPostDataType; width:number; height:number; className?: string }) => {
    return (
        <div className={`news-card-items ${className}`}>
            <div className="news-image">
                <Image width={width} height={height} sizes="100vw" src={news.image} alt="news-img" />
                <div className="post-date">
                    <h3>
                        {news.date.day} <br />
                        <span>{news.date.month}</span>
                    </h3>
                </div>
            </div>
            <div className="news-content">
                <ul>
                    <li>
                        <i className="fa-regular fa-user" />
                        By {news.author}
                    </li>
                    <li>
                        <i className="fa-solid fa-tag" />
                        {news.category}
                    </li>
                </ul>
                <h3>
                    <Link href={news.link}>{news.title}</Link>
                </h3>
                <Link href={news.link} className="theme-btn-2 mt-3">
                    read More
                    <i className="fa-solid fa-arrow-right-long" />
                </Link>
            </div>
        </div>
    )
}

export default BlogCard