window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});

//$(document).ready(function(){
      $('.my-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 300,
        infinite: true,
        autoplaySpeed: 1000,
        autoplay: true,
        responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
      });
   // });

 document.addEventListener("DOMContentLoaded", () => {
            const counters = document.querySelectorAll('.counter-number');
            let started = false;

            function isInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                );
            }

            function runCounters() {
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-count');
                    const suffix = counter.dataset.suffix || '';
                    let current = 0;
                    const increment = target / 200;

                    function updateCount() {
                        if (current < target) {
                            current += increment;
                            counter.innerText = Math.ceil(current) + suffix;
                            requestAnimationFrame(updateCount);
                        } else {
                            counter.innerText = target + suffix;
                        }
                    }
                    updateCount();
                });
            }

            window.addEventListener('scroll', () => {
                if (!started) {
                    counters.forEach(counter => {
                        if (isInViewport(counter)) {
                            runCounters();
                            started = true;
                        }
                    });
                }
            });
        });

      // logo-slider
       const scrollTop = document.querySelector('.scroll-top');
  const progressPath = document.querySelector('.progress-circle path');
  const pathLength = progressPath.getTotalLength();

  // Initial style
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;

  window.addEventListener('scroll', function () {
    let scroll = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let progress = pathLength - (scroll * pathLength / docHeight);
    progressPath.style.strokeDashoffset = progress;

    if (scroll > 100) {
      scrollTop.classList.add('show');
    } else {
      scrollTop.classList.remove('show');
    }
  });

  scrollTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
   

  //filtr
   $(document).ready(function () {
    // Show all items by default
    $('.portfolio').fadeIn();

    // Filter click event
    $('.filter').click(function () {
      var filterValue = $(this).attr('data-filter');

      // Add active class to the selected filter and remove from others
      $('.filter').removeClass('active');
      $(this).addClass('active');

      // Show/Hide items
      if (filterValue == '*') {
        $('.portfolio').fadeIn();
      } else {
        $('.portfolio').hide();
        $(filterValue).fadeIn();
      }
    });
  });
