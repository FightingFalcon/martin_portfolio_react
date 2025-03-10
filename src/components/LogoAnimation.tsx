import React, { useEffect } from 'react';
import anime from 'animejs';
import SocialIcons from './SocialIcons';

const LogoAnimation: React.FC = () => {
  const SPEED_FACTOR = 0.9;
  const s = (value: number) => value * SPEED_FACTOR;

  function getLogoScale() {
    const innerWidth = window.innerWidth;
    const maxWidth = 840;
    return Math.min(1, Math.max(0.3, innerWidth / maxWidth));
  };

  function explodeKrumelur() {
    anime.remove('.krumelur');
    anime({
      targets: '.krumelur',
      scale: [0.5, 1, 0],
      easing: 'easeInOutQuad',
      duration: s(500),
      complete: () => {
        createParticles();
      }
    });
    window.removeEventListener('scroll', explodeKrumelur);
  };

  function createParticles() {
    const container = document.querySelector('.logo-animation') as HTMLElement | null;
    const krumelur = document.querySelector('.krumelur') as HTMLElement | null;
    if (!container || !krumelur) return;

    const rectContainer = container.getBoundingClientRect();
    const rectKrumelur = krumelur.getBoundingClientRect();
    const numberOfParticles = 20;

    const scale = getLogoScale();
    
    const baseOffsetLeft = rectKrumelur.left - rectContainer.left;
    const baseOffsetTop = rectKrumelur.top - rectContainer.top;
    const centeringOffset = (window.innerWidth < 600) ? (1 - scale) * 30 : 0;
    
    const offsetLeft = (baseOffsetLeft / scale) + centeringOffset;
    const offsetTop = baseOffsetTop / scale;

    for (let i = 0; i < numberOfParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      container.appendChild(particle);

      particle.style.position = 'absolute';
      particle.style.left = `${offsetLeft}px`;
      particle.style.top = `${offsetTop}px`;
    }

    anime({
      targets: '.particle',
      translateX: () => anime.random(-15, 15) + 'vw',
      translateY: () => anime.random(-15, 15) + 'vh',
      scale: [1, 0],
      easing: 'easeOutCirc',
      duration: s(1000),
      complete: () => {
        document.querySelectorAll('.particle').forEach(p => p.remove());
      }
    });
  };

  useEffect(() => {
    function updateLogoScale() {
      const logoEl = document.querySelector('.logo-animation') as HTMLElement | null;
      const innerWidth = window.innerWidth;
      const maxWidth = 840;
      const logoScale = Math.min(1, Math.max(0.3, innerWidth / maxWidth));
      
      if (logoEl) {
        logoEl.style.transform = `translateY(50px) scale(${logoScale})`;
      }
    }

    function bounceTriangle() {
      anime({
        targets: '.triangle',
        opacity: [0, 1],
        duration: s(4000),
      });
      anime({
        targets: '.triangle',
        translateY: [0, -10, 0],
        duration: s(800),
        easing: 'easeInOutQuad',
        loop: true,
        delay: s(500),
      });
    }

    updateLogoScale();
    window.addEventListener('resize', updateLogoScale);

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
        explodeKrumelur();
      }
    });

    logoTimeline
      .add({
        targets: '.dot-i',
        translateY: { value: [-250, 0], duration: s(1250), elasticity: 400 },
        rotate: { value: [-90, 0], duration: s(500), easing: 'linear' },
        scale: [{ value: [0.5, 1], duration: s(1200), easing: 'easeOutQuart' }],
        delay: s(1200),
        offset: 0
      }, s(750))
      .add({
        targets: '.fill.in',
        strokeDashoffset: {
          value: [anime.setDashoffset, 0],
          duration: s(600),
          delay: (_el: HTMLElement, i: number) => s(700 + i * 100),
          easing: 'easeOutQuart',
        },
        stroke: {
          value: ['#FFF', (el: HTMLElement) => (el.parentNode as SVGGElement).getAttribute('stroke')!],
          duration: s(500),
          delay: s(500),
          easing: 'easeInQuad'
        },
        opacity: {
          value: 0,
          duration: 1,
          delay: (_el: HTMLElement, i: number) => s(5500 + i * 80),
        },
        offset: 0
      }, s(250))
      .add({
        targets: '.krumelur',
        opacity: { value: 1 },
        translateX: { duration: s(250), delay: s(500), value: 60, easing: 'easeOutQuint' },
        translateY: { duration: s(250), delay: s(1000), value: 60, easing: 'easeOutBack' },
        rotate: { value: 360, delay: s(500), duration: s(510), easing: 'easeOutQuint' },
        scale: { value: 0.5, delay: s(1000), duration: s(250) }
      }, `-=${s(250)}`)
      .add({
        targets: ['.icon-text path', '.icon-text polygon'],
        opacity: { value: [0, 1], duration: s(100), easing: 'linear' },
        delay: (_, i: number) => s(3000 + i * 20),
        offset: 0
      }, s(-250))
      .add({
        targets: '.letter-e',
        translateX: { duration: s(100), value: -16, easing: 'easeOutQuint' }
      }, `-=${s(225)}`);

    return () => {
      console.log("Cleaning up...");
      window.removeEventListener('resize', updateLogoScale);
    };
  }, []);

  return (
    <div className="logo-container">
      <SocialIcons />
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
                <path className="fill in" strokeWidth="40" d="M 21,161 20.613365,81" style={{ display: 'inline' }} />
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
                  <path d="m 102.72424,44.032665 0,-19.632636 4.06592,-5.514692 7.85648,-0.08499 -0.0164,25.14733" style={{ display: 'inline', fill: 'none', stroke: '#fef7fa', strokeWidth: 1.58346 }} />
                  <path d="m 114.63024,43.947677 0.0164,-25.14733 c 4.75846,0 7.88367,-0.02769 11.87288,-0.02769 l 0.0169,25.090034" style={{ display: 'inline', fill: 'none', stroke: '#fef7fa', strokeWidth: 1.58346 }} />
                  <polygon className="letter-e" points="159.123,18 159.123,19.368 143.427,19.368 143.427,29.664 158.187,29.664 158.187,31.032 143.427,31.032 143.427,42.336 159.303,42.336 159.303,43.704 141.843,43.704 141.843,18" />
                </g>
              </svg>
            </div>
          </div>
          <div className="dot dot-i">
            <svg viewBox="0 0 42 42">
              <g fill="none" fillRule="evenodd" stroke="#FB155A"> 
                <path className="fill in" strokeWidth="40" d="M 21,1 V 40.756563" style={{ display: 'inline' }} />
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