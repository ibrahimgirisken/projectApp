import Image from "next/image";
import Link from "next/link";

const commentsData = [
    {
        id: 1,
        author: 'Albert Flores',
        date: 'March 20, 2025 at 2:37 pm',
        image: '/img/news/comment.png',
        text: 'Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy',
    },
    {
        id: 2,
        author: 'Alex Flores',
        date: 'March 20, 2025 at 2:37 pm',
        image: '/img/news/comment-2.png',
        text: 'Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy',
    },
];

const BlogComments = () => {
    return (
        <div className="comments-area">
            <div className="comments-heading">
                <h3>{commentsData.length} Comments</h3>
            </div>
            {commentsData.map((comment, index) => (
                <div key={comment.id} className={`blog-single-comment d-flex gap-4 pb-5 ${index === 0 ? 'pt-4' : 'pt-5'}`}>
                    <div className="image">
                        <Image width={96} height={96} sizes="100vw" src={comment.image} alt="comment" />
                    </div>
                    <div className="content">
                        <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                            <div className="con">
                                <h5><Link href="/news-details">{comment.author}</Link></h5>
                                <span>{comment.date}</span>
                            </div>
                            <div className="star">
                                {[...Array(Math.floor(5))].map((_, i) => (
                                    <i key={i} className="fas fa-star" />
                                ))}
                            </div>
                        </div>
                        <p className="mt-30 mb-4">{comment.text}</p>
                        <Link href="/news-details" className="reply">Reply</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogComments;