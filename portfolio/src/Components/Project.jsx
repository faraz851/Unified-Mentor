import React from 'react'

function Project() {
  return (
        <section class="projects section" id="projects">
            <h2 class="section__title">Projects</h2>
            <span class="section__subtitle">Most recent work</span>

            <div class="container section__border">
                <div class="projects__container swiper">
                    <div class="swiper-wrapper">
                        

                    </div>

                    <div class="swiper-button-next">
                        <i class="ri-arrow-right-s-line"></i>
                    </div>

                    <div class="swiper-button-prev">
                        <i class="ri-arrow-left-s-line"></i>
                    </div>

                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </section>

  )
}

export default Project