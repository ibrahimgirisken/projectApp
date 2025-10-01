import Link from "next/link"
import * as motion from "motion/react-client"

const HeroTwo = () => {
    return (
        <section className="hero-section hero-2 fix bg-cover" style={{ backgroundImage: 'url("/img/hero/hero-4.jpg")' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <motion.h1
                                initial={{ y: 40 }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: .5
                                }}
                            >
                                Renewable Solar Power Energy
                            </motion.h1>
                            <motion.p
                                initial={{ y: 40 }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: .5,
                                    delay: 0.3
                                }}
                            >
                                Transmds is the world’s driving worldwide coordinations supplier we uphold
                                industry and exchange the worldwide trade of merchandi
                            </motion.p>
                            <motion.div
                                initial={{ y: 40 }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: .5,
                                    delay: 0.6
                                }}
                                className="hero-button"
                            >
                                <Link href="/" className="theme-btn hover-white"><span>Learn More <i className="fas fa-chevron-right" /></span></Link>
                                <Link href="/service-details" className="theme-btn bg-white"><span>Explore Services  <i className="fas fa-chevron-right" /></span></Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroTwo