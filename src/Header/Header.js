import React from 'react';

const Header = () => {
  return (
    <>
      <header class="mobile_header sticky-top mb-0 px-0 d-print-none">
        <div class="search-box bg-white">
          <div class="input-group-lg mb-0 pb-0 w-100 p-0 mb-0 bg-white rounded collapse container srch_form" id="collapseSearch">
            <input type="text" name="q" class="form-control srch_keyword" placeholder="সার্চ করুন..." value=""/>
              <div class="input-group-append">
                <button class="btn btn-sm btn-info" type="button"><i class="fas fa-search srch_btn"></i></button>
                <button class="btn btn-sm btn-danger search-icon" data-toggle="collapse" href="#collapseSearch" aria-expanded="true" aria-controls="collapseSearch" type="button"><i class="fas fa-times text-white"></i></button>
              </div>
          </div>
        </div>
        <div class="bg-white navbar-light mobile-navbar container px-md-0 px-sm-0">
          <div class="row py-1">
            <div class="col-3">
              <a class="nav-link hide-menu" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="aria-controls" href="#MenuWrapper">
                <i class="fas fa-bars"></i>
              </a>
            </div>
            <div class="col-6" align="center">
              <a href="https://www.jugantor.com">
                <img class="img-fluid" src="https://www.jugantor.com/web-assets/img/jugantor-logo.svg" alt="jugantor"/>
              </a>
            </div>
            <div class="col-3 text-right">
              <span class="search-icon collapsed" data-target="#collapseSearch" data-toggle="collapse" id="mobile_search">
                <i class="fa fa-search align-middle" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
        <div id="desktop_navbar">
          <style>
          
          </style>
          <nav class="navbar navbar-expand-lg bg-white pb-0 container px-0 pb-1 header">
            <a class="navbar-brand ml-n2" href="https://www.jugantor.com">
              <img class="img-fluid" src="https://www.jugantor.com/web-assets/img/jugantor-logo.svg" alt="jugantor"/>
            </a>
            <div class="collapse navbar-collapse" id="navcol-1">
              <ul class="navbar-nav nav-hover mx-auto">
                <li role="presentation" class="nav-item d-lg-block d-xl-none">
                  <a class="nav-link font-weight-bolder" href="https://www.jugantor.com/covid-19">কোভিড-১৯</a>
                </li>
                <li role="presentation" class="nav-item d-lg-none d-xl-block">
                  <a class="nav-link font-weight-bolder" href="https://www.jugantor.com/covid-19">কোভিড-১৯</a>
                </li>
                <li role="presentation" class="nav-item d-lg-block d-xl-none">
                  <a class="nav-link font-weight-bolder" href="https://www.jugantor.com/national">জাতীয়</a>
                </li>
                <li role="presentation" class="nav-item d-lg-none d-xl-block">
                  <a class="nav-link font-weight-bolder" href="https://www.jugantor.com/national">জাতীয়</a>
                </li>
                <li role="presentation" class="nav-item d-lg-block d-xl-none">
                  <a class="nav-link font-weight-bolder" href="https://www.jugantor.com/politics">রাজনীতি</a>
                </li>
                <li role="presentation" class="nav-item d-lg-none d-xl-block">
                  <a class="nav-link font-weight-bolder" href="https://www.jugantor.com/politics">রাজনীতি</a>
                </li>
                <li role="presentation" class="nav-item d-lg-block d-xl-none">
                  <a class="nav-link font-weight-bolder" href="https://www.jugantor.com/economics">অর্থনীতি</a>
                </li>
                <li role="presentation" class="nav-item d-lg-none d-xl-block">
                  <a class="nav-link font-weight-bolder" href="https://www.jugantor.com/economics">অর্থনীতি</a>
                </li>
                <li role="presentation" class="nav-item d-lg-block d-xl-none">
                  <a class="nav-link font-weight-bolder" href="https://www.jugantor.com/international">আন্তর্জাতিক</a>
                </li>
                <li role="presentation" class="nav-item d-lg-none d-xl-block">
                  <a class="nav-link font-weight-bolder" href="https://www.jugantor.com/international">আন্তর্জাতিক</a>
                </li>
                <li role="presentation" class="nav-item d-lg-block d-xl-none">
                  <a class="nav-link font-weight-bolder" href="https://www.jugantor.com/country-news">সারাদেশ</a>
                </li>
                <li role="presentation" class="nav-item d-lg-none d-xl-block">
                  <a class="nav-link font-weight-bolder" href="https://www.jugantor.com/country-news">সারাদেশ</a>
                </li>
                <li role="presentation" class="nav-item d-lg-block d-xl-none">
                  <a class="nav-link font-weight-bolder" href="https://www.jugantor.com/sports">খেলা</a>
                </li>
                <li role="presentation" class="nav-item d-lg-none d-xl-block">
                  <a class="nav-link font-weight-bolder" href="https://www.jugantor.com/sports">খেলা</a>
                </li>
                <li role="presentation" class="nav-item d-lg-block d-xl-none">
                  <a class="nav-link font-weight-bolder" href="https://www.jugantor.com/entertainment">বিনোদন</a>
                </li>
                <li role="presentation" class="nav-item d-lg-none d-xl-block">
                  <a class="nav-link font-weight-bolder" href="https://www.jugantor.com/entertainment">বিনোদন</a>
                </li>
                <li role="presentation" class="nav-item d-lg-none d-xl-block">
                  <a class="nav-link font-weight-bolder" href="https://www.jugantor.com/campus">শিক্ষাঙ্গন</a>
                </li>
                <li role="presentation" class="nav-item d-lg-none d-xl-block">
                  <a class="nav-link font-weight-bolder" href="https://www.jugantor.com/lifestyle">লাইফ স্টাইল</a>
                </li>
              </ul>
              <ul class="navbar-nav ml-auto dropdown has-megamenu">
                <li class="header_right_part" data-toggle="dropdown">
                  <a class="nav-link hide-menu px-1 " role="button">
                    <i class="fas fa-bars align-middle pr-2"></i> আরও
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link search-icon collapsed icon-search pr-0" data-toggle="collapse" href="#collapseSearch">
                    <i class="fas fa-search align-bottom"></i>
                  </a>
                </li>
                <div class="dropdown-menu megamenu megaMenuWrapper border-top-3 rounded-0" id="desktopMenuWrapper">
                  <div class="row">
                    <div class="col-12 topMenuWrapper py-2">
                      <ul class="nav row text-left">
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com">প্রচ্ছদ</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/covid-19">কোভিড-১৯</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/national">জাতীয়</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/politics">রাজনীতি</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/economics">অর্থনীতি</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/international">আন্তর্জাতিক</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/country-news">সারাদেশ</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/sports">খেলা</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/entertainment">বিনোদন</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/campus">শিক্ষাঙ্গন</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/lifestyle">লাইফ স্টাইল</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/tech">আইটি বিশ্ব</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/us-election">মার্কিন নির্বাচন</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/exile">পরবাস</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/capital">রাজধানী</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/everyday">একদিন প্রতিদিন</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/editorial">সম্পাদকীয়</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/viewers-opinion">দৃষ্টিপাত</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/opinion">বাতায়ন</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/islam-life">ইসলাম ও জীবন</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/all-together">স্বজন সমাবেশ</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/upstairs">প্রতিমঞ্চ</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/social-media">সোশ্যাল মিডিয়া</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/literature">সাহিত্য</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/doctor-available">ডাক্তার আছেন</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/various">চিত্র বিচিত্র</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/bicchu">বিচ্ছু</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/interview">সাক্ষাৎকার</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/suranjona">সুরঞ্জনা</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/corporate-news">কর্পোরেট নিউজ</a></li>
                      </ul>
                    </div>
                    <div class="col-12 topMenuWrapper py-2">
                      <ul class="nav row text-left">
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/todays-paper"><i class="fas fa-file-alt"></i>&nbsp;&nbsp;আজকের পত্রিকা</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/todays-paper/second-edition"><i class="fas fa-file-alt text-success"></i>&nbsp;&nbsp;দ্বিতীয় সংস্করণ</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://epaper.jugantor.com/" target="_blank"><i class="far fa-newspaper text-info"></i>&nbsp;&nbsp;ই-পেপার</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/photo-gallery"><i class="far fa-image"></i>&nbsp;&nbsp;ছবি</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/video-gallery"><i class="fas fa-file-video"></i>&nbsp;&nbsp;ভিডিও</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/archive"><i class="fas fa-archive text-danger"></i>&nbsp;&nbsp;আর্কাইভ</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://play.google.com/store/apps/details?id=com.jugantor" target="_blank"><i class="fab fa-android text-success"></i>&nbsp;&nbsp;অ্যান্ড্রয়েড</a></li>
                        <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/ad-rate"><i class="fas fa-briefcase"></i>&nbsp;&nbsp;বিজ্ঞাপন</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </nav>
        </div>
        <div class="container megaMenuWrapper collapse d-lg-none d-xl-none" id="MenuWrapper">
          <div class="row">
            <div class="col-12 topMenuWrapper py-2">
              <ul class="nav row text-left">
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com">প্রচ্ছদ</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/covid-19">কোভিড-১৯</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/national">জাতীয়</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/politics">রাজনীতি</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/economics">অর্থনীতি</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/international">আন্তর্জাতিক</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/country-news">সারাদেশ</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/sports">খেলা</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/entertainment">বিনোদন</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/campus">শিক্ষাঙ্গন</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/lifestyle">লাইফ স্টাইল</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/tech">আইটি বিশ্ব</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/us-election">মার্কিন নির্বাচন</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/exile">পরবাস</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/capital">রাজধানী</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/everyday">একদিন প্রতিদিন</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/editorial">সম্পাদকীয়</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/viewers-opinion">দৃষ্টিপাত</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/opinion">বাতায়ন</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/islam-life">ইসলাম ও জীবন</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/all-together">স্বজন সমাবেশ</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/upstairs">প্রতিমঞ্চ</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/social-media">সোশ্যাল মিডিয়া</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/literature">সাহিত্য</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/doctor-available">ডাক্তার আছেন</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/various">চিত্র বিচিত্র</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/bicchu">বিচ্ছু</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/interview">সাক্ষাৎকার</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/suranjona">সুরঞ্জনা</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/corporate-news">কর্পোরেট নিউজ</a></li>
              </ul>
            </div>
            <div class="col-12 topMenuWrapper py-2">
              <ul class="nav row text-left">
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/todays-paper"><i class="fas fa-file-alt"></i>&nbsp;&nbsp;আজকের পত্রিকা</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/todays-paper/second-edition"><i class="fas fa-file-alt text-success"></i>&nbsp;&nbsp;দ্বিতীয় সংস্করণ</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://epaper.jugantor.com/" target="_blank"><i class="far fa-newspaper text-info"></i>&nbsp;&nbsp;ই-পেপার</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/photo-gallery"><i class="far fa-image"></i>&nbsp;&nbsp;ছবি</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/video-gallery"><i class="fas fa-file-video"></i>&nbsp;&nbsp;ভিডিও</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/archive"><i class="fas fa-archive text-danger"></i>&nbsp;&nbsp;আর্কাইভ</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://play.google.com/store/apps/details?id=com.jugantor" target="_blank"><i class="fab fa-android text-success"></i>&nbsp;&nbsp;অ্যান্ড্রয়েড</a></li>
                <li class="col-6 col-xl-2 col-lg-2 col-sm-6 col-md-6"><a href="https://www.jugantor.com/ad-rate"><i class="fas fa-briefcase"></i>&nbsp;&nbsp;বিজ্ঞাপন</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;