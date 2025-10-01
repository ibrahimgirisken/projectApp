import BlogSIdebar from "@/components/sections/blogs/blogSIdebar"
import PageTitle from "@/components/sections/pageTitle"
import Pagination from "@/components/ui/pagination"
import { blogStandardData } from "@/db/blogStandardData"
import Image from "next/image"
import Link from "next/link"

const BlogStandard = () => {
  return (
    <>
      <PageTitle currentPage="Blog Standard" title="Blog Standard" />
      <section className="news-standard fix section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-8">
              <div className="news-standard-wrapper">
                {blogStandardData.map((item) => (
                  <div className="news-standard-items" key={item.id}>
                    <div className="news-thumb">
                      <Image width={804} height={399} sizes="100vw" src={item.image} alt="img" />
                      <div className="post-date">
                        <h3>
                          {item.date.day} <br />
                          <span>{item.date.month}</span>
                        </h3>
                      </div>
                    </div>
                    <div className="news-content">
                      <ul>
                        <li>
                          <i className="fa-regular fa-user" />
                          By {item.author}
                        </li>
                        <li>
                          <i className="fa-solid fa-tag" />
                          {item.category}
                        </li>
                      </ul>
                      <h3>
                        <Link href={item.link}>{item.title}</Link>
                      </h3>
                      <p>{item.description}</p>
                      <Link href={item.link} className="theme-btn mt-4">
                        Read More
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                ))}
                <Pagination />
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <BlogSIdebar />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogStandard