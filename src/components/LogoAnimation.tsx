import React, { useEffect } from 'react';
import anime from 'animejs';

const LogoAnimation: React.FC = () => {
  useEffect(() => {
    const SPEED_FACTOR = 1; 

    const logoEl = document.querySelector('.logo-animation') as HTMLElement | null;
    const innerWidth = window.innerWidth;
    const maxWidth = 840;
    const logoScale = innerWidth <= maxWidth ? innerWidth / maxWidth : 1;

    function explodeParticles() {
      const krumelur = document.querySelector('.krumelur') as HTMLElement | null;
      if (!krumelur) return;

      const rect = krumelur.getBoundingClientRect();
      const numberOfParticles = 20;

      for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);

        const scrollY = window.scrollY || window.pageYOffset;
        particle.style.left = `${rect.left + window.scrollX}px`;
        particle.style.top = `${rect.top + scrollY}px`;
      }

      anime({
        targets: '.particle',
        translateX: () => anime.random(-15, 15) + 'vw',
        translateY: () => anime.random(-15, 15) + 'vh',
        scale: [1, 0],
        easing: 'easeOutCirc',
        duration: 1000 * SPEED_FACTOR,
        complete: () => {
          document.querySelectorAll('.particle').forEach(p => p.remove());
        }
      });
    }

    function handleScroll() {
      anime.remove('.krumelur');
      anime({
        targets: '.krumelur',
        scale: [0.5, 1, 0],
        easing: 'easeInOutQuad',
        duration: 500 * SPEED_FACTOR,
        complete: () => {
          explodeParticles();
        }
      });
      window.removeEventListener('scroll', handleScroll);
    }

    function bounceTriangle() {
      anime({
        targets: '.triangle',
        opacity: [0, 1],
        duration: 4000 * SPEED_FACTOR,
      });
      anime({
        targets: '.triangle',
        translateY: [0, -10, 0],
        duration: 800 * SPEED_FACTOR,
        easing: 'easeInOutQuad',
        loop: true,
        delay: 1000 * SPEED_FACTOR,
      });
    }

    const logoTimeline = anime.timeline({
      begin: () => {
        const lettersEl = document.querySelector('.letters') as HTMLElement | null;
        if (lettersEl) {
          lettersEl.style.opacity = '1';
          lettersEl.style.visibility = 'visible';
        }
      },
      complete: () => {
        bounceTriangle();
        window.addEventListener('scroll', handleScroll);
      }
    });

    if (logoEl) {
      logoEl.style.transform = 'translateY(50px) scale(' + logoScale + ')';
    }

    logoTimeline
      // dot-i animation
      .add({
        targets: '.dot-i',
        translateY: { value: [-250, 0], duration: 1250 * SPEED_FACTOR, elasticity: 400 },
        rotate: {
          value: [-90, 0],
          duration: 500 * SPEED_FACTOR,
          easing: 'linear'
        },
        scale: [
          { value: [0.5, 1], duration: 1200 * SPEED_FACTOR, easing: 'easeOutQuart' },
        ],
        delay: 1200 * SPEED_FACTOR,
        offset: 0
      }, 750 * SPEED_FACTOR) 

      // fill.in animation
      .add({
        targets: '.fill.in',
        strokeDashoffset: {
          value: [anime.setDashoffset, 0],
          duration: 600 * SPEED_FACTOR,
          delay: (el, i) => (700 + i * 100) * SPEED_FACTOR,
          easing: 'easeOutQuart',
        },
        stroke: {
          value: ['#FFF', (el) => (el.parentNode as SVGGElement).getAttribute('stroke')!],
          duration: 500 * SPEED_FACTOR,
          delay: 500 * SPEED_FACTOR,
          easing: 'easeInQuad'
        },
        opacity: {
          value: 0,
          duration: 1,
          delay: (el, i) => (5500 + i * 80) * SPEED_FACTOR,
        },
        offset: 0
      }, 250 * SPEED_FACTOR)

      // krumelur animation
      .add({
        targets: '.krumelur',
        opacity: { value: 1 },
        translateX: {
          duration: 250 * SPEED_FACTOR,
          delay: 500 * SPEED_FACTOR,
          value: 60,
          easing: 'easeOutQuint',
        },
        translateY: {
          duration: 250 * SPEED_FACTOR,
          delay: 1000 * SPEED_FACTOR,
          value: 60,
          easing: 'easeOutBack'
        },
        rotate: {
          value: 360,
          delay: 500 * SPEED_FACTOR,
          duration: 510 * SPEED_FACTOR,
          easing: 'easeOutQuint',
        },
        scale: {
          value: 0.5,
          delay: 1000 * SPEED_FACTOR,
          duration: 250 * SPEED_FACTOR,
        }
      }, `-=${250 * SPEED_FACTOR}`)

      // icon-text animation
      .add({
        targets: ['.icon-text path', '.icon-text polygon'],
        opacity: { value: [0, 1], duration: 100 * SPEED_FACTOR, easing: 'linear' },
        delay: (el, i) => (3000 + i * 20) * SPEED_FACTOR,
        offset: 0
      }, -250 * SPEED_FACTOR)

      // letter-e animation
      .add({
        targets: '.letter-e',
        translateX: {
          duration: 100 * SPEED_FACTOR,
          value: -16,
          easing: 'easeOutQuint'
        },
      }, `-=${225 * SPEED_FACTOR}`);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '100vh' }} className="logo-container">
      <div className="logo-animation">
        <div className="letters" style={{ opacity: 0, visibility: 'hidden' }}>
          <div className="letter letter-m1">
            <svg viewBox="0 0 162 162">
              <g fill="none" fillRule="evenodd" stroke="#1CE2B2">
                <path className="fill in" strokeWidth="40" d="M 103.91541,161 V 1" />
                <path className="fill in" strokeWidth="40" d="m 123.91541,20.311186 h -80 L 21.00662,65.005346 V 162" />
              </g>
            </svg>
          </div>
          <div className="letter letter-m2">
            <svg viewBox="0 0 162 162">
              <g fill="none" fillRule="evenodd" stroke="#fff">
                <path className="fill in" strokeWidth="40" d="M 103.91541,161 V 1" />
                <path className="fill in" strokeWidth="40" d="m 123.91541,20.311186 h -80 L 21.00662,65.005346 V 162" />
              </g>
            </svg>
          </div>
          <div className="letter letter-a">
            <svg viewBox="0 0 162 162">
              <g fill="none" fillRule="evenodd" stroke="#FB155A">
                <path className="fill in" strokeWidth="40" d="m 142.13574,162 -0.27434,-142.061874 -97.94599,0.37306 -22.90879,44.69416 0.305665,77.126394 58.721124,-0.30296"/>
              </g>
            </svg>
          </div>
          <div className="letter letter-r">
            <svg viewBox="0 0 162 162">
              <g fill="none" fillRule="evenodd" stroke="#1CE2B2">
                <path className="fill in" strokeWidth="40" d="m 131.16756,20.383361 h -80 l -22.90879,44.69416 v 96.920219"/>
              </g>
            </svg>
          </div>
          <div className="letter letter-t">
            <svg viewBox="0 0 162 162">
              <g fill="none" fillRule="evenodd" stroke="#fff">
                <path className="fill in" strokeWidth="40" d="M21 1V161"/>
                <path className="fill in" strokeWidth="40" d="M81 61h-80"/>
              </g>
            </svg>
          </div>
          <div className="letter letter-i">
            <svg viewBox="0 0 82 162">
              <g fill="none" fillRule="evenodd" stroke="#FB155A">
                <path className="fill in" strokeWidth="40" d="M 21,161 20.613365,81" style={{display:'inline'}} />
              </g>
            </svg>
          </div>
          <div className="letter letter-n">
            <svg viewBox="0 0 162 162">
              <g fill="none" fillRule="evenodd" stroke="#1CE2B2">
                <path className="fill in" strokeWidth="40" d="M 142.24771,162 L 141.73228,65.005346 L 118.82349,20.311186 L 20.8775,19.938126 L 20.8775,162"/>
              </g>
            </svg>
          </div>
          <div className="logo-icon">
            <div className="icon-text">
              <svg viewBox="0 0 160 62">
                <g fill="#FBF3FB" fillRule="evenodd">
                  <path d="m 102.72424,44.032665 0,-19.632636 4.06592,-5.514692 7.85648,-0.08499 -0.0164,25.14733" style={{display:'inline',fill:'none',stroke:'#fef7fa',strokeWidth:1.58346}} />
                  <path d="m 114.63024,43.947677 0.0164,-25.14733 c 4.75846,0 7.88367,-0.02769 11.87288,-0.02769 l 0.0169,25.090034" style={{display:'inline',fill:'none',stroke:'#fef7fa',strokeWidth:1.58346}} />
                  <polygon className="letter-e" points="159.123,18 159.123,19.368 143.427,19.368 143.427,29.664 158.187,29.664 158.187,31.032 143.427,31.032 143.427,42.336 159.303,42.336 159.303,43.704 141.843,43.704 141.843,18 " />
                </g>
              </svg>
            </div>
          </div>
          <div className="dot dot-i">
            <svg viewBox="0 0 42 42">
              <g fill="none" fillRule="evenodd" stroke="#FB155A"> 
                <path className="fill in" strokeWidth="40" d="M 21,1 V 40.756563" style={{display:'inline'}} />
              </g>
            </svg>
          </div>   
          <div className="dot krumelur">
            <svg viewBox="0 0 42 42">
              <g fill="#FB155A" fillRule="evenodd" stroke="#FB155A">
                {/* intentionally blank as per original code */}
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="triangle"></div>
    </div>
  );
};

export default LogoAnimation;
