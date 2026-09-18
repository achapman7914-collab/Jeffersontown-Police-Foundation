(()=>{
  const GIVEBUTTER_URL='https://givebutter.com/jtownpolicefoundation';

  const applyDonateCardFix=()=>{
    if(!location.pathname.toLowerCase().endsWith('/donate.html')) return;
    const style=document.createElement('style');
    style.textContent=`
      .initiatives .initiative{
        max-width:1220px!important;
        grid-template-columns:50% 50%!important;
        min-height:340px!important;
      }
      .initiatives .initiative-photo{
        min-height:340px!important;
        background:url('dfr-hero-clean.jpg?v=20260917-badge1') center center/cover no-repeat!important;
        background-color:transparent!important;
      }
      .initiatives .initiative-copy{
        padding:44px 46px!important;
      }
      @media(max-width:900px){
        .initiatives .initiative{
          max-width:100%!important;
          grid-template-columns:1fr!important;
          min-height:0!important;
        }
        .initiatives .initiative-photo{
          min-height:280px!important;
          background:url('dfr-hero-clean.jpg?v=20260917-badge1') center center/cover no-repeat!important;
        }
      }
    `;
    document.head.appendChild(style);
  };

  const updateDonateLinks=()=>{
    document.querySelectorAll('a[href="donate.html"],a[href="./donate.html"],a[href$="/donate.html"]').forEach((link)=>{
      link.href=GIVEBUTTER_URL;
      link.target='_blank';
      link.rel='noopener noreferrer';
    });
  };

  const enhanceDonatePage=()=>{
    if(!location.pathname.toLowerCase().endsWith('/donate.html')) return;

    document.querySelectorAll('.hero p').forEach((p)=>{
      if(p.textContent.includes('Donate today with Zelle')){
        p.textContent='Donate securely online with Givebutter, use Zelle, or mail a check to the Foundation.';
      }
    });

    const zelleCard=document.querySelector('#zelle');
    if(zelleCard && !document.querySelector('#givebutter')){
      const card=document.createElement('article');
      card.className='give-card';
      card.id='givebutter';
      card.innerHTML=`
        <div>
          <div class="give-icon">♥</div>
          <h3>Donate Online with Givebutter</h3>
          <div class="gold-rule"></div>
          <p>Make a secure one-time or recurring gift online. You can support the General Fund or choose Department Wellness, REACH, Community Engagement, Officer in Distress, Training &amp; Equipment, or Drone First Responder (DFR).</p>
        </div>
        <div class="qr-panel">
          <strong style="font-size:18px;margin-bottom:14px">Secure Online Giving</strong>
          <a class="button" href="${GIVEBUTTER_URL}" target="_blank" rel="noopener noreferrer" style="font-size:13px;padding:16px 22px">Donate with Givebutter →</a>
          <span style="margin-top:12px">Powered by Givebutter</span>
        </div>`;
      zelleCard.parentNode.insertBefore(card,zelleCard);
    }

    const futureReady=document.querySelector('.future-ready');
    if(futureReady){
      futureReady.innerHTML='<strong>Online giving is now available.</strong> Donate securely through Givebutter above, or choose Zelle or mail a check.';
    }
  };

  const finish=()=>{
    applyDonateCardFix();
    enhanceDonatePage();
    updateDonateLinks();
  };

  updateDonateLinks();
  enhanceDonatePage();

  const base=document.createElement('script');
  base.src='site-footer-base-20260917.js?v=20260917-base1';
  base.onload=finish;
  base.onerror=finish;
  document.head.appendChild(base);
})();