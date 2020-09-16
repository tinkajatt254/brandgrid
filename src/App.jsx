import React, { Component, Fragment } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";

import Header from "./brandsgridDark/Header/HeaderThree";
import HeroMain from "./brandsgridDark/HeroMain/HeroMain";
import About from "./brandsgridDark/About/About";
import Services from "./brandsgridDark/Services/ServiceTwo";
import Portfolio from './brandsgridDark/Portfolio/Portfolio';
import Team from './brandsgridDark/Team/TeamOne';
import Testimonial from './brandsgridDark/Testimonial/Testimonial';
import BlogContent from "./brandsgridDark/Blog/BlogContent";
import BrandTwo from "./brandsgridDark/Brands/Brand";
import Footer from "./brandsgridDark/Footer/Footer";

class App extends Component {
  render() {
    const PostList = BlogContent.slice(0 , 3);
    return (
      <Fragment>
        <div className="active-dark">
          <Header />

          <div className="slider-wrapper">
            <HeroMain />
          </div>

          {/* About */}
          <div className="about-area about-position-top pb--120 bg_color--1">
            <About />
          </div>
          {/* About */}
          {/* Services */}
          <div className="service-area ptb--80  bg_image bg_image--3">
            <div className="container">
              <Services />
            </div>
          </div>
          {/* services */}
          {/* Start Portfolio Area */}
          <div className="portfolio-area ptb--120 bg_color--1">
            <div className="portfolio-sacousel-inner mb--55">
              <Portfolio />
            </div>
          </div>
          {/* End Portfolio Area */}


{/* Start Team Area  */}
<div className="rn-team-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title service-style--3 text-left mb--25 mb_sm--0">
                                    <h2 className="title">Skilled Team</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Team column="col-lg-4 col-md-6 col-sm-6 col-12" />
                        </div>
                    </div>
                </div>
                {/* End Team Area  */}

          {/* Start Testimonial Area */}
          <div className="rn-testimonial-area bg_color--5 ptb--120">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}




{/* Start Blog Area */}
<div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-left">
                                    <h2>Latest News</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                                    <a className="btn-transparent rn-btn-dark" href="/blog"><span className="text">View All News</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--60 mt_sm--40">
                            {PostList.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-12" key={i}>
                                    <div className="blog blog-style--1">
                                        <div className="thumbnail">
                                            <a href="/blog-details">
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="blogtype">{value.category}</p>
                                            <h4 className="title"><a href="/blog-details">{value.title}</a></h4>
                                            <div className="blog-btn">
                                                <a className="rn-btn text-white" href="/blog-details">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>    
                    </div>    
                </div>
                {/* End Blog Area */}


{/* Start Brand Area */}
<div className="rn-brand-area brand-separation pb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}


          {/* Start Back To Top */}
          <div className="backto-top">
            <ScrollToTop showUnder={160}>
              <FiChevronUp />
            </ScrollToTop>
          </div>
          {/* End Back To Top */}
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;
