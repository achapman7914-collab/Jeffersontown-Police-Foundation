(()=>{
  const applyDonateCardFix=()=>{
    if(!location.pathname.toLowerCase().endsWith('/donate.html')) return;
    const style=document.createElement('style');
    style.textContent=`
      .initiatives .initiative{
        max-width:850px!important;
        grid-template-columns:32% 68%!important;
        min-height:340px!important;
      }
      .initiatives .initiative-photo{
        min-height:340px!important;
        background-image:url('dfr-drone-display.png?v=20260917-fill1')!important;
        background-size:cover!important;
        background-position:center center!important;
        background-repeat:no-repeat!important;
        background-color:transparent!important;
      }
      .initiatives .initiative-copy{
        padding:36px 38px!important;
      }
      @media(max-width:900px){
        .initiatives .initiative{
          max-width:100%!important;
          grid-template-columns:1fr!important;
          min-height:0!important;
        }
        .initiatives .initiative-photo{
          min-height:280px!important;
          background-size:cover!important;
        }
      }
    `;
    document.head.appendChild(style);
  };

  const base=document.createElement('script');
  base.src='site-footer-base-20260917.js?v=20260917-base1';
  base.onload=applyDonateCardFix;
  base.onerror=applyDonateCardFix;
  document.head.appendChild(base);
})();