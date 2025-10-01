import { blogPostsFourData } from "@/db/blogPostsFourData"
import BlogCard from "./blogCard"
import SectionTitle from "@/components/ui/sectionTitle"

const BlogsFour = () => {
    return (
        <section id="blog" className="news-section-4 fix section-padding section-bg">
            <div className="container">
                <SectionTitle className="text-center">
                    <SectionTitle.SubTitle>Blog &amp; Updates</SectionTitle.SubTitle>
                    <SectionTitle.Title> Recent News Post</SectionTitle.Title>
                </SectionTitle>
                <div className="row">
                    {blogPostsFourData.map((post) => (
                        <div
                            key={post.id}
                            className="col-xl-4 col-lg-6 col-md-6 wow slideUp"
                            data-delay={post.delay}
                        >
                            <BlogCard news={post} width={384} height={273} className="style-2 style-3" />
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default BlogsFour