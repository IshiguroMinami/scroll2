$(document).ready(function () {
  let imagesAppended = false;

  function isInViewport(element) {
    const rect = element.get(0).getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function appendImages() {
    const container = $('.image-grid');

    for (let i = 0; i < 6; i++) {
      const img = $('<img>')
        .attr('src', 'https://placehold.jp/400x400.png')
        .addClass(`row-${i < 3 ? '1' : '2'}`);
      container.append(img);
    }

    setTimeout(() => {
      $('.image-grid .row-1').addClass('visible');
    }, 100);

    setTimeout(() => {
      $('.image-grid .row-2').addClass('visible');
    }, 500);
  }

  $(window).on('scroll', function () {
    const section = $('.image-section');
    if (!imagesAppended && isInViewport(section)) {
      appendImages();
      imagesAppended = true;
    }
  });
});
