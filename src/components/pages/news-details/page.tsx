import BlogCommentFrom from "@/components/sections/blogs/blogCommentFrom"
import BlogComments from "@/components/sections/blogs/blogComments"
import BlogSidebar from "@/components/sections/blogs/blogSIdebar"
import PageTitle from "@/components/sections/pageTitle"
import Image from "next/image"
import Link from "next/link"

const BlogDetails = () => {
    return (
        <>
            <PageTitle currentPage="Blog Details" title="Blog Details" />
            <section className="news-standard fix section-padding">
                <div className="container">
                    <div className="news-details-area">
                        <div className="row g-5">
                            <div className="col-12 col-lg-8">
                                <div className="blog-post-details">
                                    <div className="single-blog-post">
                                        <div className="post-featured-thumb bg-cover" style={{ backgroundImage: 'url("/img/news/post-4.jpg")' }} />
                                        <div className="post-content">
                                            <ul className="post-list d-flex align-items-center">
                                                <li>
                                                    <i className="fa-regular fa-user" />
                                                    By Admin
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-calendar-days" />
                                                    18 Dec, 2025
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-tag" />
                                                    IT Services
                                                </li>
                                            </ul>
                                            <h3>5 energy innovations revolution</h3>
                                            <p className="mb-3">
                                                Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.
                                            </p>
                                            <p className="mb-3">
                                                The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.
                                            </p>
                                            <p>
                                                Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet. Donec quis convallis neque. In id lacus pulvinar lacus, eget vulputate lectus. Ut viverra bibendum lorem, at tempus nibh mattis in. Sed a massa eget lacus consequat auctor.
                                            </p>
                                            <div className="hilight-text mt-4 mb-4">
                                                <p>Pellentesque sollicitudin congue dolor non aliquam. Morbi volutpat, nisi vel
                                                    ultricies urnacondimentum, sapien neque
                                                    lobortis tortor, quis efficitur mi ipsum eu metus. Praesent eleifend orci sit
                                                    amet
                                                    est vehicula.</p>
                                                <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 20.3698H7.71428L2.57139 30.5546H10.2857L15.4286 20.3698V5.09247H0V20.3698Z" fill="#77B80F" />
                                                    <path d="M20.5703 5.09247V20.3698H28.2846L23.1417 30.5546H30.856L35.9989 20.3698V5.09247H20.5703Z" fill="#77B80F" />
                                                </svg>
                                            </div>
                                            <p className="mt-4 mb-5">
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros.
                                            </p>
                                            <div className="row g-4">
                                                <div className="col-lg-6">
                                                    <div className="details-image">
                                                        <Image width={412} height={299} sizes="100vw" src="/img/news/post-5.jpg" alt="img" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="details-image">
                                                        <Image width={412} height={299} sizes="100vw" src="/img/news/post-6.jpg" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="pt-5">
                                                Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row tag-share-wrap mt-4 mb-5">
                                        <div className="col-lg-8 col-12">
                                            <div className="tagcloud">
                                                <Link href="/news-details">News</Link>
                                                <Link href="/news-details">business</Link>
                                                <Link href="/news-details">marketing</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                                            <div className="social-share">
                                                <span className="me-3">Share:</span>
                                                <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                <Link href="#"><i className="fa-brands fa-x-twitter" /></Link>
                                                <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <BlogComments/>
                                    <BlogCommentFrom/>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <BlogSidebar/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BlogDetails