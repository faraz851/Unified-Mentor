import React from 'react'

function Footer() {
  return (
    <footer class="footer">
        <div class="footer__container container">
            <h1 class="footer__title">Faraz</h1>
            <p>Frontend Developer</p>

            <ul class="footer__list">
                <li><a class="footer__link highlight" href="#home">Home</a></li>
                <li><a class="footer__link highlight" href="#skills">Skills</a></li>
                <li><a class="footer__link highlight" href="#services">Services</a></li>
                <li><a class="footer__link highlight" href="#projects">Projects</a></li>
                <li><a class="footer__link highlight" href="#contact">Contact</a></li>
            </ul>

           
            <span class="footer__copy">
                &#169; Copyright Faraz. All rights reserved.
            </span>
        </div>
    </footer>

  )
}

export default Footer