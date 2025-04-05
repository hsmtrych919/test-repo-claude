/**
 * Intersection Observer API inview
 * @param {string} target
 * @param {string} className
 * @param {number} offset
 */
function inview(target, className, offset){
  if (/fadein-up/.test(className)) {
    offset = offset - 50
  }
  const nodes = document.querySelectorAll(`.${target}`);
  const offsetTop = document.body.clientHeight;
  const offsetForOptions = `${offsetTop}px 0px -${offset}px`;
  const options = {
    root: null,
    rootMargin: offsetForOptions,
    threshold: 0
  };

  const callback = (entries) => {
    entries.forEach(entry => {
      const node = entry.target;
      if (entry.isIntersecting) {
        if (/fadein-up/.test(className)) {
          node.style.transition = "all 1s ease";
          requestAnimationFrame(() => {
            node.style.opacity = '1';
            node.style.transform = 'translate3d(0, 0, 0)';
            setTimeout(() => {
              node.style.transform = 'translate3d(0, 0, 0)';
              node.style.transition = "opacity .3s ease";
            }, 1000);
          });
        } else {
          node.classList.add(className);
          if (/fadein/.test(className)) {
            setTimeout(() => {
              node.style.opacity = '1';
              node.style.transition = "opacity .3s ease";
            }, 10);
          }
        }
      } else {
        if (/fadein-up/.test(className)) {
          requestAnimationFrame(() => {
            setTimeout(() => { node.style.opacity = '0'; }, 10);
          setTimeout(() => {
              node.style.transform = 'translate3d(0, 100px, 0)';
              node.style.transition = '';
            }, 300);
          });
        } else {
          node.classList.remove(className);
          if (/fadein/.test(className)) {
            requestAnimationFrame(() => {
              setTimeout(() => { node.style.opacity = '0'; }, 10);
              setTimeout(() => { node.style.transition = ''; }, 300);
            });
          }
        }
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  nodes.forEach(node => observer.observe(node));
}

/**
 * Intersection Observer API fromTop
 * @param {string} target
 * @param {string} className
 * @param {number} offset
 */
function fromtop(target, className, offset){
  let isInit = true;
  document.addEventListener('DOMContentLoaded', () => {
    const node = document.querySelector(`.${target}`);
    if (!node) return;

    const offsetBottom = document.body.clientHeight * 1.2;
    const offsetForOptions = `${offset}px 0px ${offsetBottom}px`;
    const options = {
      root: null,
      rootMargin: offsetForOptions,
      threshold: 1
    };

    const callback = (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          node.classList.add(className);
          if (isInit) isInit = false;

          if (/fadein/.test(className)) {
            requestAnimationFrame(() => {
              node.style.opacity = '1';
              setTimeout(() => { node.style.transition = "opacity .3s ease"; }, 10);
            });
          }
        } else {
          node.classList.remove(className);
          if (!isInit && /fadein/.test(className) ) {
            requestAnimationFrame(() => {
              setTimeout(() => { node.style.opacity = '0'; }, 10);
              setTimeout(() => { node.style.transition = ''; }, 300);
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(document.body);
  });
}

