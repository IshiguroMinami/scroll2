$(document).ready(function () {
  let imagesAppended = false;

  function isInViewport(element) {
    const rect = element.get(0).getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function appendImages() {
    const container = $('.image-grid');

    const imageUrls = [
      'https://placehold.jp/400x400.png',
      'https://placehold.jp/400x400.png',
      'https://placehold.jp/400x400.png',
      'https://placehold.jp/400x400.png',
      'https://placehold.jp/400x400.png',
      'https://placehold.jp/400x400.png'
    ];

    imageUrls.forEach((url, index) => {
      const rowClass = index < 3 ? 'row-1' : 'row-2';
      const img = $('<img>')
        .attr('src', url)
        .addClass(rowClass);
      container.append(img);
    });

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
