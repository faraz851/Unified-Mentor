import React from 'react'

function Skills() {
  return (
        <section class="skills section" id="skills">
            <h2 class="section__title">Skills</h2>
            <span class="section__subtitle">My favourite skills</span>

            <div class="skills__container container grid section__border">
                <div class="skills__content">
                    <h3 class="skills__title">
                        <i class="ri-braces-line"></i> Frontend
                    </h3>

                    <div class="skills__info">

                        <div class="skills__data">
                            <div class="skills__blob">
                                <img src="/html.png" alt="skills image"/>
                            </div>
                            <h3 class="skills__name">HTML</h3>
                            <span class="skills__subtitle">Intermediate</span>
                        </div>

                        <div class="skills__data">
                            <div class="skills__blob">
                                <img src="/css.png" alt="skills image"/>
                            </div>
                            <h3 class="skills__name">CSS</h3>
                            <span class="skills__subtitle">Intermediate</span>
                        </div>

                        <div class="skills__data">
                            <div class="skills__blob">
                                <img src="/js.png" alt="skills image"/>
                            </div>
                            <h3 class="skills__name">JAVASCRIPT</h3>
                            <span class="skills__subtitle">Advanced</span>
                        </div>

                        <div class="skills__data">
                            <div class="skills__blob">
                                <img src="/react.png" alt="skills image"/>
                            </div>
                            <h3 class="skills__name">REACT</h3>
                            <span class="skills__subtitle">Basic</span>
                        </div>

                       

                        

                    </div>
                </div>

                <div class="skills__content">
                    <h3 class="skills__title">
                        <i class="ri-braces-line"></i> Backend
                    </h3>

                    <div class="skills__info">

                        <div class="skills__data">
                            <div class="skills__blob">
                                <img src="/github.png" alt="skills image"/>
                            </div>
                            <h3 class="skills__name">Git</h3>
                            <span class="skills__subtitle">Intermediate</span>
                        </div>

                        <div class="skills__data">
                            <div class="skills__blob">
                                <img src="/netlify.png" alt="skills image"/>
                            </div>
                            <h3 class="skills__name">Netlify</h3>
                            <span class="skills__subtitle">Basic</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
  )
}

export default Skills