(function popularVideos() {
    var popularUploadsSection = document.querySelector('.js-popular-uploads-section');
    var popularUploadsSlides = popularUploadsSection.querySelector('.js-slides');
    var slides = youtube.Slides(popularUploadsSlides);
    var previousBtn = popularUploadsSection.querySelector('.js-previous-btn');
    var nextBtn = popularUploadsSection.querySelector('.js-next-btn');

    previousBtn.onclick = function () {
        slides.previous();
    };

    nextBtn.onclick = function () {
        slides.next();
    }
})();

(function recommendedVideos() {
    var recommendedVideosSection = document.querySelector('.js-recommended-videos-section');
    var recommendedVideosSlides = recommendedVideosSection.querySelector('.js-slides');
    var slides = youtube.Slides(recommendedVideosSlides);
    var previousBtn = recommendedVideosSection.querySelector('.js-previous-btn');
    var nextBtn = recommendedVideosSection.querySelector('.js-next-btn');

    previousBtn.onclick = function () {
        slides.previous();
    };

    nextBtn.onclick = function () {
        slides.next();
    }
})();