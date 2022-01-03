import React from 'react';

const BackToTop = () => {
  return (
    <>
      <div id="back-top" class="back-top hidden-print" style={{ display: "block" }}>
        <a href="#top">
          <i class="fa fa-angle-up fa-2x"></i>
        </a>
      </div>
    </>
  );
};

export default BackToTop;