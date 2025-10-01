import { blogPostsTwoData } from "@/db/blogPostsTwoData"
import BlogCard from "./blogCard"
import SectionTitle from "@/components/ui/sectionTitle"
import Link from "next/link"

const BlogsTwo = () => {
  return (
    <section id="blog" className="news-section fix section-padding">
      <div className="container">
        <div className="section-title-area">
          <SectionTitle>
            <SectionTitle.SubTitle>Latest Blog</SectionTitle.SubTitle>
            <SectionTitle.Title>Our Latest Blog</SectionTitle.Title>
          </SectionTitle>
          <Link href="/news" className="theme-btn wow slideUp" data-delay=".5">
            All Article
            <i className="fa-solid fa-arrow-right-long" />
          </Link>
        </div>
        <div className="row">
          {blogPostsTwoData.map((news) => (
            <div
              key={news.id}
              className="col-xl-4 col-lg-6 col-md-6 wow slideUp"
              data-delay={news.delay}
            >
              <BlogCard height={269} width={414} news={news} />
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default BlogsTwo