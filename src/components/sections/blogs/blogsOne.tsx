import SectionTitle from "@/components/ui/sectionTitle"
import { blogPostsOneData } from "@/db/blogPostsOneData"
import Link from "next/link"

const BlogsOne = () => {
    return (
        <section id="blog" className="news-section section-padding fix">
            <div className="container">
                <SectionTitle className="text-center">
                    <SectionTitle.SubTitle>Recent Articles</SectionTitle.SubTitle>
                    <SectionTitle.Title>Our Latest Blog</SectionTitle.Title>
                </SectionTitle>
            </div>
            <div className="news-wrapper">
                <div className="row">
                    {blogPostsOneData.map((post) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 wow slideUp" data-delay={post.delay} key={post.id}>
                            <div className="single-news-items">
                                <div className="news-image bg-cover" style={{ backgroundImage: `url(${post.image})` }}>
                                    <div className="post-date">
                                        <span>{post.date.month} {post.date.year}</span>
                                    </div>
                                </div>
                                <div className="news-content">
                                    <h3>
                                        <Link href={post.link}>
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p>{post.description}</p>
                                    <Link href={post.link} className="theme-btn-2 mt-3">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default BlogsOne