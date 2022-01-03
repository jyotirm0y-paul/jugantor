import React from 'react';

const TopHeader = () => {
  return (
    <div>
      <div class="container-fluid mobile-top-header top-header mx-0 d-print-none">
        <div class="clearfix mx-md-2">
          <ul class="list-inline text-white top_head_left_part my-1 float-left">
            <li class="list-inline-item pr-1 border border-0">রোববার, ০২ জানুয়ারি ২০২২, ১৮ পৌষ ১৪২৮</li>
          </ul>
          <ul class="list-inline text-right text-white my-1 float-right">
            <li class="list-inline-item">বেটা ভার্সন</li>
          </ul>
        </div>
        <div class="clearfix mx-md-2">
          <ul class="list-inline text-white top_head_left_part my-1 float-left">
            <li class="list-inline-item pr-2"><a class="text-decoration-none text-white" href="https://www.jugantor.com/todays-paper">আজকের পত্রিকা</a></li>
            <li class="list-inline-item pr-2"><a class="text-decoration-none text-white" href="https://epaper.jugantor.com/" target="_blank">ই-পেপার</a></li>
            <li class="list-inline-item pr-2"><a class="text-decoration-none text-white" href="https://www.jugantor.com/archive">আর্কাইভ</a></li>
            <li class="list-inline-item pr-2 border border-0"><a class="text-decoration-none text-white" href="https://play.google.com/store/apps/details?id=com.jugantor" target="_blank">অ্যাপস</a></li>
          </ul>
          <ul class="list-inline text-right text-white my-1 float-right">
            <li class="list-inline-item">
              <a class="text-decoration-none text-white px-auto py-0 pr-0" data-toggle="collapse" href="#collapseShareicons">
                <i class="fas fa-share-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="collapseShareicons" class="collapse container bg-light">
        <div class="row">
          <div class="col-md-12">
            <ul class="list-inline text-right text-white my-2">
              <div class="social_block" align="center">
                <li class="list-inline-item">
                  <a class="fb-link" href="https://www.facebook.com/DainikJugantor" target="_blank">
                    <i class="fa fa-facebook fa-md"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="twitter-link" href="https://twitter.com/DailyJugantor" target="_blank">
                    <i class="fa fa-twitter fa-md"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="youtube-link" href="https://www.youtube.com/c/DailyJugantorYouTube?sub_confirmation=1" target="_blank">
                    <i class="fa fa-youtube fa-md"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="pinterest-link" href="https://www.pinterest.com/DainikJugantor/" target="_blank">
                    <i class="fa fa-pinterest fa-md"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="instagram-link" href="https://www.instagram.com/dainikjugantor/" target="_blank">
                    <i class="fa fa-instagram fa-md"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="feed-link" href="#" target="_blank">
                    <i class="fa fa-linkedin fa-md"></i>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div class="desktop-top-header top-header container d-none d-md-block">
        <div class="row">
          <div class="col-xl-9 col-lg-9 offset-xl-0">
            <ul class="list-inline text-white top_head_left_part my-1">
              <li class="list-inline-item pr-2">ঢাকা, বাংলাদেশ </li>
              <li class="list-inline-item pr-2">রোববার, ০২ জানুয়ারি ২০২২, ১৮ পৌষ ১৪২৮<br /></li>
              <li class="list-inline-item pr-2"><a class="text-decoration-none text-white" href="https://www.jugantor.com/todays-paper">আজকের পত্রিকা</a></li>
              <li class="list-inline-item pr-2"><a class="text-decoration-none text-white" href="https://epaper.jugantor.com/" target="_blank">ই-পেপার</a></li>
              <li class="list-inline-item pr-2"><a class="text-decoration-none text-white" href="https://www.jugantor.com/archive">আর্কাইভ</a></li>
              <li class="list-inline-item pr-2"><a class="text-decoration-none text-white" href="https://www.jugantor.com/converter" target="_blank">কনভার্টার</a></li>
              <li class="list-inline-item pr-2"><a class="text-decoration-none text-white" href="https://play.google.com/store/apps/details?id=com.jugantor" target="_blank">অ্যাপস</a></li>
              <li class="list-inline-item pr-2 border border-0">বেটা ভার্সন</li>
            </ul>
          </div>
          <div class="col-xl-3 col-lg-3 pr-2">
            <ul class="list-inline text-right text-white my-1">
              <li class="list-inline-item"><a class="text-decoration-none text-white" target="_blank" href="https://www.facebook.com/DainikJugantor"><i class="fab fa-facebook-f"></i></a></li>
              <li class="list-inline-item"><a class="text-decoration-none text-white" target="_blank" href="https://twitter.com/DailyJugantor"><i class="fab fa-twitter"></i></a></li>
              <li class="list-inline-item"><a class="text-decoration-none text-white" target="_blank" href="https://www.youtube.com/c/DailyJugantorYouTube?sub_confirmation=1"><i class="fab fa-youtube"></i></a></li>
              <li class="list-inline-item"><a class="text-decoration-none text-white" target="_blank" href="https://www.pinterest.com/DainikJugantor/"><i class="fab fa-pinterest"></i></a></li>
              <li class="list-inline-item"><a class="text-decoration-none text-white" target="_blank" href="#"><i class="fab fa-linkedin-in"></i></a></li>
              <li class="list-inline-item"><a class="text-decoration-none text-white" target="_blank" href="https://www.instagram.com/dainikjugantor/"><i class="fab fa-instagram"></i></a></li>
              <li class="list-inline-item"><a class="text-decoration-none text-white" target="_blank" href="https://www.jugantor.com/feed/rss.xml"><i class="fas fa-rss"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;