/* ================================================================
   Content dictionary for the Hayakawa & Nanbae Lab 2026 Lab Trip
   itinerary. Each language holds one HTML fragment that is dropped
   straight into #app by app.js. English is the default language.
   ================================================================ */
var I18N = {};

I18N.en = `
<div class="hero-wrap">
  <div class="hero-card">
    <h1>Hayakawa &amp; Nanbae Lab 2026 Lab Trip</h1>
    <div class="loc">Yokosuka / Miura Peninsula</div>
    <div class="dates">
      <span>📅 Aug 22–23, 2026</span>
      <span>Created 2026/06/01</span>
      <span>Updated 2026/07/30</span>
    </div>
  </div>
</div>

<nav class="quicknav">
  <a href="#overview">Overview</a>
  <a href="#packing">Packing</a>
  <a href="#day1">Day 1</a>
  <a href="#day2">Day 2</a>
  <a href="#appendix">Appendix</a>
</nav>

<div class="wrap">

<section id="overview">
  <h2 class="section-title"><span class="dot"></span>📋 Overview</h2>

  <div class="card quickfacts">
    <div class="row"><span class="ico">🗓️</span><div><b>Dates</b><br>Sat Aug 22 – Sun Aug 23, 2026</div></div>
    <div class="row"><span class="ico">📍</span><div><b>Meet</b><br>Yokohama Station, Keikyu central ticket gate</div></div>
    <div class="row"><span class="ico">🏠</span><div><b>Stay</b><br>Two buildings — α (led by Saito) &amp; β (led by Kita)</div></div>
    <div class="row"><span class="ico">🎟️</span><div><b>Ticket</b><br>Miura Peninsula Marugoto Ticket (bring ID / keep safe)</div></div>
  </div>

  <div class="plan-block">
    <b>☀️ Plan A — Sunny</b>
    <span class="leg">8/22 (Sat): Yokohama Station ▶ Sarushima Island ▶ Mikasa Park ▶ Accommodation</span>
    <span class="leg">8/23 (Sun): Accommodation ▶ Miura-kaigan Station ▶ Lunch ▶ SUP ▶ Disperse</span>
  </div>
  <div class="plan-block rain">
    <b>🌧️ Plan B — Rain</b>
    <span class="leg">8/22 (Sat): Yokohama Station ▶ Hakkeijima Sea Paradise ▶ Accommodation</span>
    <span class="leg">8/23 (Sun): Accommodation ▶ Miura-kaigan Station ▶ Lunch ▶ Yokosuka city walk (staggered dismissal)</span>
  </div>
</section>

<section id="packing">
  <h2 class="section-title"><span class="dot"></span>🎒 What to Bring</h2>
  <div class="card">
    <b style="color:var(--ink);">Required</b>
    <ul>
      <li>Change of clothes for Day 2</li>
      <li>Swimsuit</li>
      <li>Sleepwear</li>
      <li>Toothbrush</li>
      <li>Sweat towel (enough for 2 days)</li>
      <li>Bath towel</li>
    </ul>
    <b style="color:var(--ink);">Nice to have</b>
    <ul>
      <li>Motion sickness medicine (if sunny, we board the boat right after arriving in Yokosuka)</li>
      <li>Rash guard</li>
    </ul>
  </div>
</section>

<section id="day1">
  <h2 class="section-title"><span class="dot"></span>🚶 Itinerary</h2>
  <h3 class="day-heading">Sat, Aug 22</h3>

  <div class="timeline-item advance">
    <span class="audience">Advance team</span>
    <span class="time-badge">09:00</span>
    <div class="event-title">Meet at Yokohama Station, "Keikyu central ticket gate"</div>
    <div class="event-body">
      <p><b>Advance team:</b> Kita, Kurokawa, Ishii, Yoshida, Naiki, Hamamoto, Sugizaki</p>
      <div class="callout info">
        <span class="ico">🎫</span>
        <div>We will have purchased the <a href="https://www.keikyu.co.jp/visit/otoku/marugoto/" target="_blank">Miura Peninsula Marugoto Ticket</a>. It's a set of 3 tickets, but only the <b>ride ticket</b> will be handed out — please keep it safe.</div>
      </div>
      <ul class="ticket-list">
        <li><b>🎫 Ride ticket</b>Round-trip Yokohama ⇄ Kanazawa-bunko, plus a 2-day unlimited-ride pass on Keikyu trains/buses south of Kanazawa-bunko</li>
        <li><b>🍽️ Meal ticket</b>Free menu item at participating restaurants — used for lunch on Day 2</li>
        <li><b>🏄 Facility-use / souvenir ticket</b>Used for SUP on Day 2. If SUP is cancelled, use it as a souvenir voucher instead</li>
      </ul>
      <p>We'll also be doing grocery shopping, so if you have a cooler box or a larger suitcase at home, please bring it.</p>
      <div class="callout warn">
        <span class="ico">⚠️</span>
        <div>Running late? Contact us on Slack (including Saito and Kita).</div>
      </div>
    </div>
  </div>

  <div class="timeline-item advance">
    <span class="audience">Advance team</span>
    <span class="time-badge">09:50 – 10:20ish</span>
    <div class="event-title">Arrive at Keikyu "Yokosuka-chuo Station"</div>
    <div class="event-body"><p>We'll do the shopping for BBQ ingredients.</p></div>
  </div>

  <div class="timeline-item rest">
    <span class="audience rest">Everyone else</span>
    <span class="time-badge">09:20</span>
    <div class="event-title">Meet at Yokohama Station, "Keikyu central ticket gate"</div>
    <div class="event-body">
      <div class="callout info">
        <span class="ico">🎫</span>
        <div>We will have purchased the <a href="https://www.keikyu.co.jp/visit/otoku/marugoto/" target="_blank">Miura Peninsula Marugoto Ticket</a>. It's a set of 3 tickets, but only the <b>ride ticket</b> will be handed out — please keep it safe.</div>
      </div>
      <ul class="ticket-list">
        <li><b>🎫 Ride ticket</b>Round-trip Yokohama ⇄ Kanazawa-bunko, plus a 2-day unlimited-ride pass on Keikyu trains/buses south of Kanazawa-bunko</li>
        <li><b>🍽️ Meal ticket</b>Free menu item at participating restaurants — used for lunch on Day 2</li>
        <li><b>🏄 Facility-use / souvenir ticket</b>Used for SUP on Day 2. If SUP is cancelled, use it as a souvenir voucher instead</li>
      </ul>
      <div class="callout warn">
        <span class="ico">⚠️</span>
        <div>Running late? Contact us on Slack (including Saito and Kita).</div>
      </div>
    </div>
  </div>

  <div class="timeline-item merge">
    <span class="time-badge">~10:20</span>
    <div class="event-title">Group merges at Yokosuka-chuo Station</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">~10:45</span>
    <div class="event-title">Group photo in front of the battleship Mikasa</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">~11:00</span>
    <div class="event-title">Arrive at Mikasa Terminal</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">11:30 – 11:45</span>
    <div class="event-title">Board the ferry to Sarushima</div>
    <div class="event-body"><p><a href="https://sarushima.jp/information/" target="_blank">Ferry timetable →</a></p></div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">~12:00</span>
    <div class="event-title">🍖 BBQ</div>
    <div class="event-body">
      <div class="callout warn"><span class="ico">⏰</span><div>Equipment must be returned by <b>15:30</b>.</div></div>
    </div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">17:00 – 17:15</span>
    <div class="event-title">⛴️ Ferry back to the Yokosuka mainland</div>
    <div class="event-body">
      <p><a href="https://sarushima.jp/information/" target="_blank">Ferry timetable →</a></p>
      <div class="callout warn"><span class="ico">🚨</span><div><b>Do not miss the last ferry</b> — missing it would be a genuine disaster.</div></div>
    </div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">17:30 – 18:00ish</span>
    <div class="event-title">Move: Yokosuka-chuo Station ▶ Shioiri Station ▶ Accommodation</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">18:00 – 20:30ish</span>
    <div class="event-title">🔑 Check-in &amp; free time</div>
    <div class="event-body">
      <p>We'll drop off our bags at the accommodation. There are two buildings, <b>α</b> and <b>β</b>. Saito leads α, Kita leads β. Please use the bath, sleep, and eat breakfast within your own building.</p>
      <p>Once your bags are dropped off, it's free time. There's no shopping errand this time, but please go ahead and take your bath at some point.</p>

      <p style="font-weight:700; color:var(--ink); margin-bottom:4px;">🏠 Room assignments</p>
      <p class="note" style="margin-top:-2px; margin-bottom:2px;">Getting there is on foot by default. 🚶 α ⇄ β: about a 6-minute walk.</p>
      <p class="note" style="margin-bottom:10px;">🚌 Optional: Keikyu Bus route Su20 also connects Shioiri Sta. ⇄ Sakamoto-icchome bus stop (right by both buildings) — free with the Marugoto Ticket — <a href="https://ekitan.com/timetable/route-bus/company/5079/1025044" target="_blank">timetable</a></p>
      <div class="rooms">
        <div class="room">
          <div class="room-head"><span class="label">α</span><a class="room-map" href="https://share.google/ORXuxUADRfo4urra7" target="_blank">📍 Map</a></div>
          <p class="note" style="margin:-2px 0 8px;">🚶 15 min walk from Shioiri Sta. (1.0 km) · 5 min walk from the Sakamoto-icchome bus stop (300 m)</p>
          <div class="chips">
            <span class="chip lead">Saito</span>
            <span class="chip">Prof. Hayakawa</span><span class="chip">Assoc. Prof. Nanbae</span><span class="chip">Asst. Prof. Takahashi</span>
            <span class="chip">Tao</span><span class="chip">Kong</span><span class="chip">Sone</span><span class="chip">Kikuchi</span>
            <span class="chip">Sasaki</span><span class="chip">Suzaki</span><span class="chip">Yamazaki</span><span class="chip">Azuma</span>
            <span class="chip">Hiramatsu</span><span class="chip">Matsuo</span><span class="chip">Sugizaki</span><span class="chip">Lee</span>
          </div>
        </div>
        <div class="room">
          <div class="room-head"><span class="label">β</span><a class="room-map" href="https://share.google/DLrvtx7JUWZkJWiqs" target="_blank">📍 Map</a></div>
          <p class="note" style="margin:-2px 0 8px;">🚶 16 min walk from Shioiri Sta. (1.0 km) · 5 min walk from the Sakamoto-icchome bus stop (290 m)</p>
          <div class="chips">
            <span class="chip lead">Kita</span>
            <span class="chip">Ko</span><span class="chip">Jin</span><span class="chip">Ishii</span><span class="chip">Minami</span>
            <span class="chip">Kurokawa</span><span class="chip">Zhuo</span><span class="chip">Hamamoto</span><span class="chip">Naiki</span><span class="chip">Yoshida</span>
          </div>
        </div>
      </div>

      <div class="divider"></div>
      <div class="callout info">
        <span class="ico">🛁</span>
        <div>Each building has one bath, but there are sento (public bathhouses) nearby too — use whichever you prefer. If you go to a sento, let us know the cost and we'll deduct it from your trip fee.</div>
      </div>

      <p style="margin-top:14px; font-weight:700; color:var(--ink);">Sento reference (nearest first)</p>
      <div class="sento-grid">
        <div class="sento"><div><div class="name">Kame-no-yu <a class="sento-map" href="https://maps.app.goo.gl/xymwpTqazsNzuSpG9" target="_blank">📍 Map</a></div><div class="meta">until 20:00 · towel rental ¥30 · 13 min walk from α · 15 min walk from β · 5 min walk from Shioiri Sta.</div></div><div class="price">¥570</div></div>
        <div class="sento"><div><div class="name">Atari-yu <a class="sento-map" href="https://maps.app.goo.gl/Rqeg3qL8Bp836pXS9" target="_blank">📍 Map</a></div><div class="meta">until 21:00 · 20 min walk from α · 14 min walk from β</div></div><div class="price">¥570</div></div>
        <div class="sento"><div><div class="name">Sano Natural Hot Spring <a class="sento-map" href="https://maps.app.goo.gl/3K5vfceH4CST3yER6" target="_blank">📍 Map</a></div><div class="meta">last entry 23:00 · 26 min walk from α · 21 min walk from β</div></div><div class="price">¥1,250</div></div>
        <div class="sento"><div><div class="name">Tokiwa-yu <a class="sento-map" href="https://maps.app.goo.gl/gR1TLsHfpsh4y1zu7" target="_blank">📍 Map</a></div><div class="meta">until 22:00 · 27 min walk from α · 22 min walk from β</div></div><div class="price">¥570</div></div>
      </div>
      <p class="note">Hours and prices may have changed — please double-check.</p>
    </div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">20:30 – 22:30ish</span>
    <div class="event-title">🍻 Banquet @ Building α</div>
    <div class="event-body">
      <p>Everyone gathers at building α for the banquet. Around 22:30, Kita will head back to building β to unlock it — if you're nervous about the walk back or want company, feel free to walk back together.</p>
    </div>
  </div>
</section>

<section id="day2">
  <h3 class="day-heading">Sun, Aug 23</h3>

  <div class="timeline-item">
    <span class="time-badge">10:00</span>
    <div class="event-title">Check-out</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">~10:20</span>
    <div class="event-title">Meet at Shioiri Station ▶ move to Miura-kaigan Station</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">11:00</span>
    <div class="event-title">🍚 Lunch @ <a href="https://tabelog.com/kanagawa/A1406/A140603/14050824/" target="_blank">Umiwaya</a></div>
    <div class="event-body"><p>5-minute walk from Miura-kaigan Station. We'll have kaisen-don (seafood rice bowl).</p></div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">13:00</span>
    <div class="event-title">🏄 SUP</div>
    <div class="event-body"><p>10-minute walk from Miura-kaigan Station — <a href="https://www.google.com/maps/search/?api=1&query=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E4%B8%89%E6%B5%A6%E5%B8%82%E5%8D%97%E4%B8%8B%E6%B5%A6%E7%94%BA%E8%8F%8A%E5%90%8D7-5" target="_blank">S-RIDE</a>.</p></div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">~15:00</span>
    <div class="event-title">Disperse at Miura-kaigan Station</div>
  </div>
</section>

<section id="appendix">
  <h2 class="section-title"><span class="dot"></span>📎 Appendix</h2>

  <p style="font-weight:700; color:var(--ink); margin-bottom:10px;">Accommodation Details</p>
  <div class="stay-card">
    <span class="tag">α</span>
    <div class="addr">3-65 Shioiri-cho, Yokosuka-shi, Kanagawa 238-0042</div>
    <div class="links">
      <a href="https://share.google/ORXuxUADRfo4urra7" target="_blank">Map</a>
      <a href="https://www.airbnb.jp/rooms/1001862777575621328?check_in=2026-08-20&check_out=2026-08-21&guests=16&adults=16" target="_blank">Airbnb listing</a>
    </div>
  </div>
  <div class="stay-card">
    <span class="tag">β</span>
    <div class="addr">4-19 Iriazuto-cho, Yokosuka-shi, Kanagawa 238-0051</div>
    <div class="links">
      <a href="https://share.google/DLrvtx7JUWZkJWiqs" target="_blank">Map</a>
      <a href="https://www.airbnb.jp/rooms/1492713478388391928?check_in=2026-08-23&check_out=2026-08-24&guests=16&adults=16" target="_blank">Airbnb listing</a>
    </div>
  </div>

  <p style="font-weight:700; color:var(--ink); margin:22px 0 10px;">Yokosuka Sightseeing Info <span style="color:var(--ink-soft); font-weight:400; font-size:0.85rem;">(rain days / after we disperse)</span></p>

  <div class="callout tip">
    <span class="ico">🎆</span>
    <div><b>Fireworks (fingers crossed!)</b><br>8/22 (Sat) 19:00–20:00 — 52nd Kanazawa Festival Fireworks (near Umi-no-Kōen / Hakkeijima area). You might be able to see them from around Verny Park!</div>
  </div>

  <div class="card">
    <b style="color:var(--ink);">Local food to try</b>
    <ul class="food-list">
      <li><a href="https://www.cocoyoko.net/gourmet/curry-kaigun.html" target="_blank">Yokosuka Navy Curry</a><span class="perk">🎟️ Marugoto Ticket: free croquette topping at Yokosuka Navy Curry Main Store</span></li>
      <li><a href="https://www.cocoyoko.net/gourmet/yokosuka_navyburger.html" target="_blank">Yokosuka Navy Burger</a></li>
      <li><a href="https://dobuita-st.com/map_cccake.html" target="_blank">Cherry cheesecake</a></li>
    </ul>
  </div>

  <div class="card">
    <b style="color:var(--ink);">Sightseeing spots</b>
    <ul class="spot-list">
      <li><a href="https://www.kinenkan-mikasa.or.jp/" target="_blank"><b>Memorial battleship "Mikasa"</b></a><span class="desc">Preserved early-1900s battleship — go aboard and explore the decks</span><span class="perk">🎟️ Marugoto Ticket: ¥100 off admission (adult ¥600→¥500, high school ¥300→¥200, elementary/JHS free)</span></li>
      <li><a href="https://coaska.jp/" target="_blank"><b>Shioiri Terminal</b></a><span class="desc">Shopping complex inside Coaska Bayside Stores, 5 min walk from Shioiri Sta.</span></li>
      <li><a href="https://dobuita-st.com/" target="_blank"><b>Dobuita Street</b></a><span class="desc">Retro shopping arcade with a US Navy-town atmosphere, 5 min walk north of Shioiri Sta.</span></li>
      <li><a href="https://www.cocoyoko.net/spot/verny-park.html" target="_blank"><b>Verny Park</b></a><span class="desc">Seaside French-style rose garden, 5 min walk from Shioiri Sta.</span></li>
      <li><a href="https://www.cocoyoko.net/spot/umikaze-park.html" target="_blank"><b>Umikaze Park</b></a><span class="desc">Waterfront park with a BBQ area, skate park, and a big lawn slide</span></li>
      <li><a href="https://www.cocoyoko.net/spot/kannonzaki-park.html" target="_blank"><b>Kannonzaki Lighthouse</b></a><span class="desc">Japan's first Western-style lighthouse — climb up for views across Tokyo Bay</span><span class="perk">🎟️ Marugoto Ticket: free original sticker</span></li>
      <li><a href="https://www.cocoyoko.net/spot/hananokuni.html" target="_blank"><b>Kurihama Flower Park</b></a><span class="desc">Hillside flower park famous for cosmos and poppies, with a Godzilla-shaped slide</span><span class="perk">🎟️ Marugoto Ticket: ¥100 off soft-serve ice cream at the Cosmos Hall shop</span></li>
    </ul>
    <div class="callout warn" style="margin-top:10px;"><span class="ico">🚧</span><div>The Yokosuka Museum of Art is currently closed.</div></div>
  </div>

  <div class="callout info">
    <span class="ico">🛁</span>
    <div><b>Sento recommended by our Airbnb host</b><br>Yokosuka Onsen Yura-no-Sato — ¥1,230 (¥50 off with the Marugoto Ticket; near Umakobori-kaigan Station) — <a href="https://maps.app.goo.gl/DkFhivqPiDigEcMo8" target="_blank">map link</a></div>
  </div>

  <p style="font-weight:700; color:var(--ink); margin:22px 0 10px;">💰 Bill-Splitting Site — "Warika"</p>
  <div class="card">
    <p>This year we're using a site that automatically handles splitting the bill, called "Warika." If you paid for something up front, please register it via the link below!</p>
    <a href="https://walica.jp/group/01KSRFF7FWQ6CHZ26M3C400MKG" target="_blank">https://walica.jp/group/01KSRFF7FWQ6CHZ26M3C400MKG</a>
  </div>

  <a class="top-link" href="#overview">↑ Back to top</a>
</section>

</div>

<footer class="foot">Hayakawa &amp; Nanbae Lab · 2026 Lab Trip · Yokosuka</footer>
`;

I18N.ja = `
<div class="hero-wrap">
  <div class="hero-card">
    <h1>早川・難波江研究室2026研究室旅行</h1>
    <div class="loc">横須賀・三浦半島</div>
    <div class="dates">
      <span>📅 2026/08/22～2026/08/23</span>
      <span>作成日 2026/06/01</span>
      <span>更新日 2026/07/30</span>
    </div>
  </div>
</div>

<nav class="quicknav">
  <a href="#overview">概要</a>
  <a href="#packing">持ち物</a>
  <a href="#day1">1日目</a>
  <a href="#day2">2日目</a>
  <a href="#appendix">附録</a>
</nav>

<div class="wrap">

<section id="overview">
  <h2 class="section-title"><span class="dot"></span>📋 概要</h2>

  <div class="card quickfacts">
    <div class="row"><span class="ico">🗓️</span><div><b>日程</b><br>2026年8月22日(土)～8月23日(日)</div></div>
    <div class="row"><span class="ico">📍</span><div><b>集合</b><br>横浜駅 京急中央改札前</div></div>
    <div class="row"><span class="ico">🏠</span><div><b>宿泊</b><br>2棟制 — α棟（齋藤引率）・β棟（喜多引率）</div></div>
    <div class="row"><span class="ico">🎟️</span><div><b>チケット</b><br>三浦半島まるごと切符（身分証持参・大切に保管）</div></div>
  </div>

  <div class="plan-block">
    <b>☀️ プランA：晴れ</b>
    <span class="leg">8/22(土) 横浜駅▶猿島▶三笠公園▶宿</span>
    <span class="leg">8/23(日) 宿▶三浦海岸駅▶昼食▶SUP▶解散</span>
  </div>
  <div class="plan-block rain">
    <b>🌧️ プランB：雨</b>
    <span class="leg">8/22(土) 横浜駅▶八景島シーパラダイス▶宿</span>
    <span class="leg">8/23(日) 宿▶三浦海岸駅▶昼食▶横須賀市街散策（順次解散）</span>
  </div>
</section>

<section id="packing">
  <h2 class="section-title"><span class="dot"></span>🎒 持ち物</h2>
  <div class="card">
    <b style="color:var(--ink);">必須</b>
    <ul>
      <li>2日目の着替え</li>
      <li>水着</li>
      <li>寝巻</li>
      <li>歯ブラシ</li>
      <li>汗ふきタオル（2日分）</li>
      <li>バスタオル</li>
    </ul>
    <b style="color:var(--ink);">あると良いもの</b>
    <ul>
      <li>酔い止め薬（晴天の場合は横須賀着後すぐに船に乗ります）</li>
      <li>ラッシュガード</li>
    </ul>
  </div>
</section>

<section id="day1">
  <h2 class="section-title"><span class="dot"></span>🚶 プラン</h2>
  <h3 class="day-heading">2026/08/22（土）</h3>

  <div class="timeline-item advance">
    <span class="audience">先発隊</span>
    <span class="time-badge">09:00</span>
    <div class="event-title">横浜駅"京急中央改札前"集合</div>
    <div class="event-body">
      <p><b>先発隊：</b>喜多、黒川、石井、吉田、内木、濱元、杉﨑</p>
      <div class="callout info">
        <span class="ico">🎫</span>
        <div><a href="https://www.keikyu.co.jp/visit/otoku/marugoto/" target="_blank">"三浦半島まるごと切符"</a>を購入しています。以下の3枚のチケットがセットになっていますが、<b>"乗車券"</b>のみお渡しするので大切に保管してください。</div>
      </div>
      <ul class="ticket-list">
        <li><b>🎫 乗車券</b>横浜駅⇔金沢文庫駅の往復乗車券と、金沢文庫駅以南の京急鉄道・バスの2日間乗り放題乗車券</li>
        <li><b>🍽️ お食事券</b>対象店舗のメニューが無料になるチケット。2日目昼食に使用</li>
        <li><b>🏄 施設利用券orお土産券</b>2日目SUPに使用。中止の場合はお土産券として使用してください</li>
      </ul>
      <p>また、買い出しをするので家にクーラーボックスや大きめのスーツケースがある人は持ってきてください。</p>
      <div class="callout warn">
        <span class="ico">⚠️</span>
        <div>遅刻をする場合は齋藤・喜多を含めたSlackで連絡してください。</div>
      </div>
    </div>
  </div>

  <div class="timeline-item advance">
    <span class="audience">先発隊</span>
    <span class="time-badge">09:50～10:20頃</span>
    <div class="event-title">京急"横須賀中央駅"着</div>
    <div class="event-body"><p>BBQ食材の買い出しを行います。</p></div>
  </div>

  <div class="timeline-item rest">
    <span class="audience rest">先発隊以外</span>
    <span class="time-badge">09:20</span>
    <div class="event-title">横浜駅"京急中央改札前"集合</div>
    <div class="event-body">
      <div class="callout info">
        <span class="ico">🎫</span>
        <div><a href="https://www.keikyu.co.jp/visit/otoku/marugoto/" target="_blank">"三浦半島まるごと切符"</a>を購入しています。以下の3枚のチケットがセットになっていますが、<b>"乗車券"</b>のみお渡しするので大切に保管してください。</div>
      </div>
      <ul class="ticket-list">
        <li><b>🎫 乗車券</b>横浜駅⇔金沢文庫駅の往復乗車券と、金沢文庫駅以南の京急鉄道・バスの2日間乗り放題乗車券</li>
        <li><b>🍽️ お食事券</b>対象店舗のメニューが無料になるチケット。2日目昼食に使用</li>
        <li><b>🏄 施設利用券orお土産券</b>2日目SUPに使用。中止の場合はお土産券として使用してください</li>
      </ul>
      <div class="callout warn">
        <span class="ico">⚠️</span>
        <div>遅刻をする場合は齋藤・喜多を含めたSlackで連絡してください。</div>
      </div>
    </div>
  </div>

  <div class="timeline-item merge">
    <span class="time-badge">10:20頃</span>
    <div class="event-title">横須賀中央駅にて合流</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">10:45頃</span>
    <div class="event-title">戦艦三笠前で写真撮影</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">11:00頃</span>
    <div class="event-title">三笠ターミナル着</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">11:30～11:45</span>
    <div class="event-title">猿島フェリー乗船</div>
    <div class="event-body"><p><a href="https://sarushima.jp/information/" target="_blank">フェリー時刻表を見る →</a></p></div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">12:00頃</span>
    <div class="event-title">🍖 BBQ</div>
    <div class="event-body">
      <div class="callout warn"><span class="ico">⏰</span><div>15時半までに機材を返却する必要があります。</div></div>
    </div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">17:00～17:15</span>
    <div class="event-title">⛴️ 横須賀本土帰港</div>
    <div class="event-body">
      <p><a href="https://sarushima.jp/information/" target="_blank">フェリー時刻表を見る →</a></p>
      <div class="callout warn"><span class="ico">🚨</span><div>フェリーの最終便に乗り遅れるとガチの大事になるので乗り遅れないようにしましょう。</div></div>
    </div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">17:30～18:00頃</span>
    <div class="event-title">横須賀中央駅▶汐入駅▶宿移動</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">18:00～20:30頃</span>
    <div class="event-title">🔑 チェックイン&amp;自由時間</div>
    <div class="event-body">
      <p>宿に荷物を置きに行きます。αとβの2棟の宿があります。αは齋藤、βは喜多が引率します。就寝と朝食はそれぞれの棟でお願いします。</p>
      <p>宿に荷物を置いたら自由時間です。買い出し等はありませんが、順次お風呂を済ませておいてください。</p>

      <p style="font-weight:700; color:var(--ink); margin-bottom:4px;">🏠 棟分け</p>
      <p class="note" style="margin-top:-2px; margin-bottom:2px;">基本は徒歩移動を想定しています。🚶 α⇄β：徒歩約6分。</p>
      <p class="note" style="margin-bottom:10px;">🚌 補足：京急バス須20系統でも汐入駅⇔坂本一丁目（両宿のすぐそば）を移動できます — 三浦半島まるごと切符で乗車無料 — <a href="https://ekitan.com/timetable/route-bus/company/5079/1025044" target="_blank">時刻表</a></p>
      <div class="rooms">
        <div class="room">
          <div class="room-head"><span class="label">α</span><a class="room-map" href="https://share.google/ORXuxUADRfo4urra7" target="_blank">📍 地図</a></div>
          <p class="note" style="margin:-2px 0 8px;">🚶 汐入駅から徒歩15分（1.0km）・坂本一丁目バス停から徒歩5分（300m）</p>
          <div class="chips">
            <span class="chip lead">齋藤</span>
            <span class="chip">早川先生</span><span class="chip">難波江先生</span><span class="chip">高橋先生</span>
            <span class="chip">Tao</span><span class="chip">Kong</span><span class="chip">曽根</span><span class="chip">菊地</span>
            <span class="chip">佐々木</span><span class="chip">須崎</span><span class="chip">山崎</span><span class="chip">東</span>
            <span class="chip">平松</span><span class="chip">松尾</span><span class="chip">杉﨑</span><span class="chip">Lee</span>
          </div>
        </div>
        <div class="room">
          <div class="room-head"><span class="label">β</span><a class="room-map" href="https://share.google/DLrvtx7JUWZkJWiqs" target="_blank">📍 地図</a></div>
          <p class="note" style="margin:-2px 0 8px;">🚶 汐入駅から徒歩16分（1.0km）・坂本一丁目バス停から徒歩5分（290m）</p>
          <div class="chips">
            <span class="chip lead">喜多</span>
            <span class="chip">柯</span><span class="chip">金</span><span class="chip">石井</span><span class="chip">南</span>
            <span class="chip">黒川</span><span class="chip">卓</span><span class="chip">濱元</span><span class="chip">内木</span><span class="chip">吉田</span>
          </div>
        </div>
      </div>

      <div class="divider"></div>
      <div class="callout info">
        <span class="ico">🛁</span>
        <div>お風呂は各宿に一つずつありますが、近くに銭湯もあるので好きな方を利用してください。銭湯に行った際は費用と共に連絡していただければ、旅行費用の集金の際に加味します。</div>
      </div>

      <p style="margin-top:14px; font-weight:700; color:var(--ink);">銭湯の参考情報（近い順）</p>
      <div class="sento-grid">
        <div class="sento"><div><div class="name">亀の湯 <a class="sento-map" href="https://maps.app.goo.gl/xymwpTqazsNzuSpG9" target="_blank">📍 地図</a></div><div class="meta">20時まで・貸しタオル30円・α宿から徒歩13分・β宿から徒歩15分・汐入駅から徒歩5分</div></div><div class="price">570円</div></div>
        <div class="sento"><div><div class="name">当り湯 <a class="sento-map" href="https://maps.app.goo.gl/Rqeg3qL8Bp836pXS9" target="_blank">📍 地図</a></div><div class="meta">21時まで・α宿から徒歩20分・β宿から徒歩14分</div></div><div class="price">570円</div></div>
        <div class="sento"><div><div class="name">佐野天然温泉（のぼり雲） <a class="sento-map" href="https://maps.app.goo.gl/3K5vfceH4CST3yER6" target="_blank">📍 地図</a></div><div class="meta">23時最終入館・α宿から徒歩26分・β宿から徒歩21分</div></div><div class="price">1,250円</div></div>
        <div class="sento"><div><div class="name">常盤湯 <a class="sento-map" href="https://maps.app.goo.gl/gR1TLsHfpsh4y1zu7" target="_blank">📍 地図</a></div><div class="meta">22時まで・α宿から徒歩27分・β宿から徒歩22分</div></div><div class="price">570円</div></div>
      </div>
      <p class="note">時間や料金は変更になっている可能性がありますのでご注意ください。</p>
    </div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">20:30～22:30頃</span>
    <div class="event-title">🍻 宴会 @ α棟</div>
    <div class="event-body">
      <p>α棟の方に全員集まって宴会をします。22時半頃に鍵を開けに喜多はβ棟に戻りますので、帰り道不安な人や一緒に戻りたい人は一緒に帰りましょう。</p>
    </div>
  </div>
</section>

<section id="day2">
  <h3 class="day-heading">2026/08/23（日）</h3>

  <div class="timeline-item">
    <span class="time-badge">10:00</span>
    <div class="event-title">チェックアウト</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">10:20頃</span>
    <div class="event-title">汐入駅集合▶三浦海岸駅に移動</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">11:00</span>
    <div class="event-title">🍚 昼食 @ <a href="https://tabelog.com/kanagawa/A1406/A140603/14050824/" target="_blank">海わ屋</a></div>
    <div class="event-body"><p>三浦海岸駅徒歩5分。海鮮丼食べます。</p></div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">13:00</span>
    <div class="event-title">🏄 SUP</div>
    <div class="event-body"><p>三浦海岸駅徒歩10分 <a href="https://www.google.com/maps/search/?api=1&query=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E4%B8%89%E6%B5%A6%E5%B8%82%E5%8D%97%E4%B8%8B%E6%B5%A6%E7%94%BA%E8%8F%8A%E5%90%8D7-5" target="_blank">S-RIDE</a></p></div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">15:00頃</span>
    <div class="event-title">三浦海岸駅にて解散</div>
  </div>
</section>

<section id="appendix">
  <h2 class="section-title"><span class="dot"></span>📎 附録</h2>

  <p style="font-weight:700; color:var(--ink); margin-bottom:10px;">宿の詳細</p>
  <div class="stay-card">
    <span class="tag">α</span>
    <div class="addr">〒238-0042 神奈川県横須賀市汐入町3-65</div>
    <div class="links">
      <a href="https://share.google/ORXuxUADRfo4urra7" target="_blank">地図</a>
      <a href="https://www.airbnb.jp/rooms/1001862777575621328?check_in=2026-08-20&check_out=2026-08-21&guests=16&adults=16" target="_blank">Airbnb</a>
    </div>
  </div>
  <div class="stay-card">
    <span class="tag">β</span>
    <div class="addr">〒238-0051 神奈川県横須賀市不入斗町4-19</div>
    <div class="links">
      <a href="https://share.google/DLrvtx7JUWZkJWiqs" target="_blank">地図</a>
      <a href="https://www.airbnb.jp/rooms/1492713478388391928?check_in=2026-08-23&check_out=2026-08-24&guests=16&adults=16" target="_blank">Airbnb</a>
    </div>
  </div>

  <p style="font-weight:700; color:var(--ink); margin:22px 0 10px;">横須賀観光情報 <span style="color:var(--ink-soft); font-weight:400; font-size:0.85rem;">（雨の場合や解散後など）</span></p>

  <div class="callout tip">
    <span class="ico">🎆</span>
    <div><b>打ち上げ花火</b><br>8/22（土）19時-20時 — 第52回 金沢まつり花火大会（海の公園・八景島あたり）。もしかしたらヴェルニー公園あたりから見れるかも…！</div>
  </div>

  <div class="card">
    <b style="color:var(--ink);">名物グルメ</b>
    <ul class="food-list">
      <li><a href="https://www.cocoyoko.net/gourmet/curry-kaigun.html" target="_blank">横須賀海軍カレー</a><span class="perk">🎟️ まるごと切符提示でカレーコロッケトッピングサービス（横須賀海軍カレー本舗）</span></li>
      <li><a href="https://www.cocoyoko.net/gourmet/yokosuka_navyburger.html" target="_blank">横須賀ネイビーバーガー</a></li>
      <li><a href="https://dobuita-st.com/map_cccake.html" target="_blank">チェリーチーズケーキ</a></li>
    </ul>
  </div>

  <div class="card">
    <b style="color:var(--ink);">観光地</b>
    <ul class="spot-list">
      <li><a href="https://www.kinenkan-mikasa.or.jp/" target="_blank"><b>記念館「三笠」</b></a><span class="desc">明治時代の戦艦をそのまま保存した記念艦。艦内を見学できる</span><span class="perk">🎟️ まるごと切符提示で入艦料割引（大人600円→500円、高校生300円→200円、小中学生無料）</span></li>
      <li><a href="https://coaska.jp/" target="_blank"><b>汐入ターミナル</b></a><span class="desc">コースカベイサイドストアーズ内の商業施設。汐入駅から徒歩5分</span></li>
      <li><a href="https://dobuita-st.com/" target="_blank"><b>ドブ板通り商店街</b></a><span class="desc">アメリカンな雰囲気が漂うレトロな商店街。汐入駅から徒歩5分（北側）</span></li>
      <li><a href="https://www.cocoyoko.net/spot/verny-park.html" target="_blank"><b>ヴェルニー公園</b></a><span class="desc">バラが彩るフランス式庭園のある海沿いの公園。汐入駅から徒歩5分</span></li>
      <li><a href="https://www.cocoyoko.net/spot/umikaze-park.html" target="_blank"><b>うみかぜ公園</b></a><span class="desc">BBQ広場や芝すべり台もある海沿いの公園</span></li>
      <li><a href="https://www.cocoyoko.net/spot/kannonzaki-park.html" target="_blank"><b>観音崎灯台</b></a><span class="desc">日本初の洋式灯台。上まで登れて東京湾を一望できる</span><span class="perk">🎟️ まるごと切符提示でオリジナルステッカープレゼント</span></li>
      <li><a href="https://www.cocoyoko.net/spot/hananokuni.html" target="_blank"><b>くりはま花の国</b></a><span class="desc">コスモスやポピーで有名な丘の上の花公園。ゴジラの滑り台も</span><span class="perk">🎟️ まるごと切符提示でソフトクリーム100円引き（コスモス館売店）</span></li>
    </ul>
    <div class="callout warn" style="margin-top:10px;"><span class="ico">🚧</span><div>横須賀美術館は休館中です。</div></div>
  </div>

  <div class="callout info">
    <span class="ico">🛁</span>
    <div><b>Airbnb運営者のおススメ銭湯</b><br>横須賀温泉 湯楽の里 — 1,230円（まるごと切符提示で50円引き・馬堀海岸駅）— <a href="https://maps.app.goo.gl/DkFhivqPiDigEcMo8" target="_blank">地図</a></div>
  </div>

  <p style="font-weight:700; color:var(--ink); margin:22px 0 10px;">💰 割り勘サイト"ワリカ"</p>
  <div class="card">
    <p>今年度は勝手に割り勘をやってくれるサイト"ワリカ"を導入しました。何か立て替えた方は下のリンクから登録をしてください！</p>
    <a href="https://walica.jp/group/01KSRFF7FWQ6CHZ26M3C400MKG" target="_blank">https://walica.jp/group/01KSRFF7FWQ6CHZ26M3C400MKG</a>
  </div>

  <a class="top-link" href="#overview">↑ トップへ戻る</a>
</section>

</div>

<footer class="foot">早川・難波江研究室 · 2026研究室旅行 · 横須賀</footer>
`;

I18N["zh-Hans"] = `
<div class="hero-wrap">
  <div class="hero-card">
    <h1>早川・难波江研究室 2026年度研修旅行</h1>
    <div class="loc">横须贺・三浦半岛</div>
    <div class="dates">
      <span>📅 2026年8月22日–23日</span>
      <span>创建日期 2026/06/01</span>
      <span>更新日期 2026/07/30</span>
    </div>
  </div>
</div>

<nav class="quicknav">
  <a href="#overview">概览</a>
  <a href="#packing">携带物品</a>
  <a href="#day1">第一天</a>
  <a href="#day2">第二天</a>
  <a href="#appendix">附录</a>
</nav>

<div class="wrap">

<section id="overview">
  <h2 class="section-title"><span class="dot"></span>📋 概览</h2>

  <div class="card quickfacts">
    <div class="row"><span class="ico">🗓️</span><div><b>日期</b><br>2026年8月22日（周六）至8月23日（周日）</div></div>
    <div class="row"><span class="ico">📍</span><div><b>集合地点</b><br>横滨站 京急中央检票口前</div></div>
    <div class="row"><span class="ico">🏠</span><div><b>住宿</b><br>共两栋 — α栋（斋藤带队）・β栋（喜多带队）</div></div>
    <div class="row"><span class="ico">🎟️</span><div><b>票券</b><br>三浦半岛周游券（请携带证件・妥善保管）</div></div>
  </div>

  <div class="plan-block">
    <b>☀️ 方案A：晴天</b>
    <span class="leg">8/22（周六）横滨站▶猿岛▶三笠公园▶住宿处</span>
    <span class="leg">8/23（周日）住宿处▶三浦海岸站▶午餐▶SUP桨板▶解散</span>
  </div>
  <div class="plan-block rain">
    <b>🌧️ 方案B：雨天</b>
    <span class="leg">8/22（周六）横滨站▶八景岛海洋乐园▶住宿处</span>
    <span class="leg">8/23（周日）住宿处▶三浦海岸站▶午餐▶横须贺市区漫步（分批解散）</span>
  </div>
</section>

<section id="packing">
  <h2 class="section-title"><span class="dot"></span>🎒 携带物品</h2>
  <div class="card">
    <b style="color:var(--ink);">必备</b>
    <ul>
      <li>第二天的换洗衣物</li>
      <li>泳装</li>
      <li>睡衣</li>
      <li>牙刷</li>
      <li>擦汗毛巾（2天份）</li>
      <li>浴巾</li>
    </ul>
    <b style="color:var(--ink);">建议携带</b>
    <ul>
      <li>晕船药（如遇晴天，抵达横须贺后会立刻搭船）</li>
      <li>防晒泳衣外套（Rash Guard）</li>
    </ul>
  </div>
</section>

<section id="day1">
  <h2 class="section-title"><span class="dot"></span>🚶 行程</h2>
  <h3 class="day-heading">8月22日（周六）</h3>

  <div class="timeline-item advance">
    <span class="audience">先遣队</span>
    <span class="time-badge">09:00</span>
    <div class="event-title">集合地点：横滨站「京急中央检票口前」</div>
    <div class="event-body">
      <p><b>先遣队：</b>喜多、黑川、石井、吉田、内木、滨元、杉﨑</p>
      <div class="callout info">
        <span class="ico">🎫</span>
        <div>我们已购买了<a href="https://www.keikyu.co.jp/visit/otoku/marugoto/" target="_blank">「三浦半岛周游券」</a>。这是一套3张的车票组合，但当天只会发放<b>乘车券</b>，请妥善保管。</div>
      </div>
      <ul class="ticket-list">
        <li><b>🎫 乘车券</b>横滨站⇔金泽文库站往返车票，加上金泽文库站以南京急电铁・巴士2日无限次乘坐券</li>
        <li><b>🍽️ 餐券</b>可在指定店铺兑换免费餐点，将用于第二天午餐</li>
        <li><b>🏄 设施使用券／伴手礼券</b>用于第二天的SUP桨板体验。若SUP取消，可作为伴手礼兑换券使用</li>
      </ul>
      <p>另外我们会去採购食材，如果家里有保冷箱或较大的行李箱，请带来。</p>
      <div class="callout warn">
        <span class="ico">⚠️</span>
        <div>若会迟到，请在Slack上联系我们（包含斋藤和喜多）。</div>
      </div>
    </div>
  </div>

  <div class="timeline-item advance">
    <span class="audience">先遣队</span>
    <span class="time-badge">09:50–10:20左右</span>
    <div class="event-title">抵达京急「横须贺中央站」</div>
    <div class="event-body"><p>在这里採购烧烤食材。</p></div>
  </div>

  <div class="timeline-item rest">
    <span class="audience rest">先遣队以外</span>
    <span class="time-badge">09:20</span>
    <div class="event-title">集合地点：横滨站「京急中央检票口前」</div>
    <div class="event-body">
      <div class="callout info">
        <span class="ico">🎫</span>
        <div>我们已购买了<a href="https://www.keikyu.co.jp/visit/otoku/marugoto/" target="_blank">「三浦半岛周游券」</a>。这是一套3张的车票组合，但当天只会发放<b>乘车券</b>，请妥善保管。</div>
      </div>
      <ul class="ticket-list">
        <li><b>🎫 乘车券</b>横滨站⇔金泽文库站往返车票，加上金泽文库站以南京急电铁・巴士2日无限次乘坐券</li>
        <li><b>🍽️ 餐券</b>可在指定店铺兑换免费餐点，将用于第二天午餐</li>
        <li><b>🏄 设施使用券／伴手礼券</b>用于第二天的SUP桨板体验。若SUP取消，可作为伴手礼兑换券使用</li>
      </ul>
      <div class="callout warn">
        <span class="ico">⚠️</span>
        <div>若会迟到，请在Slack上联系我们（包含斋藤和喜多）。</div>
      </div>
    </div>
  </div>

  <div class="timeline-item merge">
    <span class="time-badge">10:20左右</span>
    <div class="event-title">于横须贺中央站会合</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">10:45左右</span>
    <div class="event-title">在战舰三笠前拍摄团体照</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">11:00左右</span>
    <div class="event-title">抵达三笠码头</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">11:30–11:45</span>
    <div class="event-title">搭乘渡轮前往猿岛</div>
    <div class="event-body"><p><a href="https://sarushima.jp/information/" target="_blank">查看渡轮时刻表 →</a></p></div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">12:00左右</span>
    <div class="event-title">🍖 烧烤</div>
    <div class="event-body">
      <div class="callout warn"><span class="ico">⏰</span><div>器材须于<b>15:30</b>前归还。</div></div>
    </div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">17:00–17:15</span>
    <div class="event-title">⛴️ 搭渡轮返回横须贺本岛</div>
    <div class="event-body">
      <p><a href="https://sarushima.jp/information/" target="_blank">查看渡轮时刻表 →</a></p>
      <div class="callout warn"><span class="ico">🚨</span><div><b>千万别错过最后一班渡轮</b>——错过的话真的会很麻烦，请务必留意时间。</div></div>
    </div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">17:30–18:00左右</span>
    <div class="event-title">移动：横须贺中央站▶汐入站▶住宿处</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">18:00–20:30左右</span>
    <div class="event-title">🔑 入住登记 &amp; 自由活动</div>
    <div class="event-body">
      <p>我们会先到住宿处放行李。住宿共分<b>α</b>、<b>β</b>两栋，α栋由斋藤带队，β栋由喜多带队。请在各自所属的房栋内洗澡、就寝及用早餐。</p>
      <p>放完行李后就是自由活动时间。这段时间不需要採购，但请大家陆续洗好澡。</p>

      <p style="font-weight:700; color:var(--ink); margin-bottom:4px;">🏠 房栋分配</p>
      <p class="note" style="margin-top:-2px; margin-bottom:2px;">基本上以步行移动为主。🚶 α⇄β：步行约6分钟。</p>
      <p class="note" style="margin-bottom:10px;">🚌 补充：也可搭乘京急巴士须20路线往返汐入站⇔坂本一丁目（就在两栋住宿附近）— 凭三浦半岛周游券免费搭乘 — <a href="https://ekitan.com/timetable/route-bus/company/5079/1025044" target="_blank">时刻表</a></p>
      <div class="rooms">
        <div class="room">
          <div class="room-head"><span class="label">α</span><a class="room-map" href="https://share.google/ORXuxUADRfo4urra7" target="_blank">📍 地图</a></div>
          <p class="note" style="margin:-2px 0 8px;">🚶 距汐入站步行15分钟（1.0公里）・距坂本一丁目巴士站步行5分钟（300米）</p>
          <div class="chips">
            <span class="chip lead">斋藤</span>
            <span class="chip">早川教授</span><span class="chip">难波江副教授</span><span class="chip">高桥助理教授</span>
            <span class="chip">Tao</span><span class="chip">Kong</span><span class="chip">曾根</span><span class="chip">菊地</span>
            <span class="chip">佐佐木</span><span class="chip">须崎</span><span class="chip">山崎</span><span class="chip">东</span>
            <span class="chip">平松</span><span class="chip">松尾</span><span class="chip">杉﨑</span><span class="chip">Lee</span>
          </div>
        </div>
        <div class="room">
          <div class="room-head"><span class="label">β</span><a class="room-map" href="https://share.google/DLrvtx7JUWZkJWiqs" target="_blank">📍 地图</a></div>
          <p class="note" style="margin:-2px 0 8px;">🚶 距汐入站步行16分钟（1.0公里）・距坂本一丁目巴士站步行5分钟（290米）</p>
          <div class="chips">
            <span class="chip lead">喜多</span>
            <span class="chip">柯</span><span class="chip">金</span><span class="chip">石井</span><span class="chip">南</span>
            <span class="chip">黑川</span><span class="chip">卓</span><span class="chip">滨元</span><span class="chip">内木</span><span class="chip">吉田</span>
          </div>
        </div>
      </div>

      <div class="divider"></div>
      <div class="callout info">
        <span class="ico">🛁</span>
        <div>每栋住宿各有一间浴室，附近也有钱汤（公共澡堂），可依个人喜好选择。若前往钱汤，请把花费告诉我们，我们会在结算旅行费用时一併计入。</div>
      </div>

      <p style="margin-top:14px; font-weight:700; color:var(--ink);">钱汤参考资讯（依距离由近到远）</p>
      <div class="sento-grid">
        <div class="sento"><div><div class="name">龟之汤 <a class="sento-map" href="https://maps.app.goo.gl/xymwpTqazsNzuSpG9" target="_blank">📍 地图</a></div><div class="meta">营业至20:00・租毛巾30日元・距α栋步行13分钟・距β栋步行15分钟・距汐入站步行5分钟</div></div><div class="price">¥570</div></div>
        <div class="sento"><div><div class="name">当里汤 <a class="sento-map" href="https://maps.app.goo.gl/Rqeg3qL8Bp836pXS9" target="_blank">📍 地图</a></div><div class="meta">营业至21:00・距α栋步行20分钟・距β栋步行14分钟</div></div><div class="price">¥570</div></div>
        <div class="sento"><div><div class="name">佐野天然温泉（登云） <a class="sento-map" href="https://maps.app.goo.gl/3K5vfceH4CST3yER6" target="_blank">📍 地图</a></div><div class="meta">最晚23:00入场・距α栋步行26分钟・距β栋步行21分钟</div></div><div class="price">¥1,250</div></div>
        <div class="sento"><div><div class="name">常盘汤 <a class="sento-map" href="https://maps.app.goo.gl/gR1TLsHfpsh4y1zu7" target="_blank">📍 地图</a></div><div class="meta">营业至22:00・距α栋步行27分钟・距β栋步行22分钟</div></div><div class="price">¥570</div></div>
      </div>
      <p class="note">营业时间与价格可能有变动，请自行确认最新资讯。</p>
    </div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">20:30–22:30左右</span>
    <div class="event-title">🍻 聚餐 @ α栋</div>
    <div class="event-body">
      <p>大家会全部集合到α栋一起聚餐。22:30左右喜多会先回β栋开门，若担心晚上独自走回去或想结伴同行的人，欢迎一起回去。</p>
    </div>
  </div>
</section>

<section id="day2">
  <h3 class="day-heading">8月23日（周日）</h3>

  <div class="timeline-item">
    <span class="time-badge">10:00</span>
    <div class="event-title">退房</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">10:20左右</span>
    <div class="event-title">汐入站集合▶前往三浦海岸站</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">11:00</span>
    <div class="event-title">🍚 午餐 @ <a href="https://tabelog.com/kanagawa/A1406/A140603/14050824/" target="_blank">海わ屋</a></div>
    <div class="event-body"><p>距三浦海岸站步行5分钟，我们会享用海鲜丼。</p></div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">13:00</span>
    <div class="event-title">🏄 SUP桨板</div>
    <div class="event-body"><p>距三浦海岸站步行10分钟 — <a href="https://www.google.com/maps/search/?api=1&query=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E4%B8%89%E6%B5%A6%E5%B8%82%E5%8D%97%E4%B8%8B%E6%B5%A6%E7%94%BA%E8%8F%8A%E5%90%8D7-5" target="_blank">S-RIDE</a></p></div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">15:00左右</span>
    <div class="event-title">于三浦海岸站解散</div>
  </div>
</section>

<section id="appendix">
  <h2 class="section-title"><span class="dot"></span>📎 附录</h2>

  <p style="font-weight:700; color:var(--ink); margin-bottom:10px;">住宿详情</p>
  <div class="stay-card">
    <span class="tag">α</span>
    <div class="addr">〒238-0042 神奈川県横須賀市汐入町3-65</div>
    <div class="links">
      <a href="https://share.google/ORXuxUADRfo4urra7" target="_blank">地图</a>
      <a href="https://www.airbnb.jp/rooms/1001862777575621328?check_in=2026-08-20&check_out=2026-08-21&guests=16&adults=16" target="_blank">Airbnb页面</a>
    </div>
  </div>
  <div class="stay-card">
    <span class="tag">β</span>
    <div class="addr">〒238-0051 神奈川県横須賀市不入斗町4-19</div>
    <div class="links">
      <a href="https://share.google/DLrvtx7JUWZkJWiqs" target="_blank">地图</a>
      <a href="https://www.airbnb.jp/rooms/1492713478388391928?check_in=2026-08-23&check_out=2026-08-24&guests=16&adults=16" target="_blank">Airbnb页面</a>
    </div>
  </div>

  <p style="font-weight:700; color:var(--ink); margin:22px 0 10px;">横须贺观光资讯 <span style="color:var(--ink-soft); font-weight:400; font-size:0.85rem;">（雨天或解散后可参考）</span></p>

  <div class="callout tip">
    <span class="ico">🎆</span>
    <div><b>烟花大会（希望能顺利举办！）</b><br>8/22（周六）19:00–20:00 — 第52届金泽祭烟花大会（海之公园・八景岛一带）。说不定在凡尔尼公园附近也能看到！</div>
  </div>

  <div class="card">
    <b style="color:var(--ink);">特色美食</b>
    <ul class="food-list">
      <li><a href="https://www.cocoyoko.net/gourmet/curry-kaigun.html" target="_blank">横须贺海军咖喱</a><span class="perk">🎟️ 出示周游券可获赠咖喱可乐饼配料（横须贺海军咖喱本铺）</span></li>
      <li><a href="https://www.cocoyoko.net/gourmet/yokosuka_navyburger.html" target="_blank">横须贺海军汉堡</a></li>
      <li><a href="https://dobuita-st.com/map_cccake.html" target="_blank">樱桃芝士蛋糕</a></li>
    </ul>
  </div>

  <div class="card">
    <b style="color:var(--ink);">观光景点</b>
    <ul class="spot-list">
      <li><a href="https://www.kinenkan-mikasa.or.jp/" target="_blank"><b>纪念舰「三笠」</b></a><span class="desc">明治时代战舰原样保存的纪念舰，可登舰参观</span><span class="perk">🎟️ 出示周游券可享入舰门票优惠（成人¥600→¥500，高中生¥300→¥200，中小学生免费）</span></li>
      <li><a href="https://coaska.jp/" target="_blank"><b>汐入码头商场</b></a><span class="desc">位于Coaska Bayside Stores内的购物设施，距汐入站步行5分钟</span></li>
      <li><a href="https://dobuita-st.com/" target="_blank"><b>多布板通商店街</b></a><span class="desc">充满美式怀旧氛围的商店街，距汐入站步行5分钟（北侧）</span></li>
      <li><a href="https://www.cocoyoko.net/spot/verny-park.html" target="_blank"><b>凡尔尼公园</b></a><span class="desc">拥有法式玫瑰花坛的海滨公园，距汐入站步行5分钟，可眺望海景</span></li>
      <li><a href="https://www.cocoyoko.net/spot/umikaze-park.html" target="_blank"><b>海风公园</b></a><span class="desc">海边公园，设有烧烤区和大型草坡滑梯</span></li>
      <li><a href="https://www.cocoyoko.net/spot/kannonzaki-park.html" target="_blank"><b>观音崎灯塔</b></a><span class="desc">日本第一座西式灯塔，登顶可俯瞰东京湾</span><span class="perk">🎟️ 出示周游券可获赠原创贴纸</span></li>
      <li><a href="https://www.cocoyoko.net/spot/hananokuni.html" target="_blank"><b>栗滨花之国</b></a><span class="desc">以波斯菊、虞美人闻名的丘陵花园，还有哥斯拉滑梯</span><span class="perk">🎟️ 出示周游券软冰淇淋优惠100日元（Cosmos馆商店）</span></li>
    </ul>
    <div class="callout warn" style="margin-top:10px;"><span class="ico">🚧</span><div>横须贺美术馆目前休馆中。</div></div>
  </div>

  <div class="callout info">
    <span class="ico">🛁</span>
    <div><b>Airbnb房东推荐的钱汤</b><br>横须贺温泉 汤乐之里 — ¥1,230（出示周游券可减50日元・近马堀海岸站）— <a href="https://maps.app.goo.gl/DkFhivqPiDigEcMo8" target="_blank">地图连结</a></div>
  </div>

  <p style="font-weight:700; color:var(--ink); margin:22px 0 10px;">💰 分帐网站「Warika」</p>
  <div class="card">
    <p>今年我们使用了可自动分帐的网站「Warika」。如果你先垫付了任何费用，请透过下方连结登记！</p>
    <a href="https://walica.jp/group/01KSRFF7FWQ6CHZ26M3C400MKG" target="_blank">https://walica.jp/group/01KSRFF7FWQ6CHZ26M3C400MKG</a>
  </div>

  <a class="top-link" href="#overview">↑ 返回顶部</a>
</section>

</div>

<footer class="foot">早川・难波江研究室 · 2026年度研修旅行 · 横须贺</footer>
`;

I18N["zh-Hant"] = `
<div class="hero-wrap">
  <div class="hero-card">
    <h1>早川・難波江研究室 2026年度研修旅行</h1>
    <div class="loc">橫須賀・三浦半島</div>
    <div class="dates">
      <span>📅 2026年8月22日–23日</span>
      <span>建立日期 2026/06/01</span>
      <span>更新日期 2026/07/30</span>
    </div>
  </div>
</div>

<nav class="quicknav">
  <a href="#overview">概覽</a>
  <a href="#packing">攜帶物品</a>
  <a href="#day1">第一天</a>
  <a href="#day2">第二天</a>
  <a href="#appendix">附錄</a>
</nav>

<div class="wrap">

<section id="overview">
  <h2 class="section-title"><span class="dot"></span>📋 概覽</h2>

  <div class="card quickfacts">
    <div class="row"><span class="ico">🗓️</span><div><b>日期</b><br>2026年8月22日（週六）至8月23日（週日）</div></div>
    <div class="row"><span class="ico">📍</span><div><b>集合地點</b><br>橫濱站 京急中央剪票口前</div></div>
    <div class="row"><span class="ico">🏠</span><div><b>住宿</b><br>共兩棟 — α棟（齋藤帶隊）・β棟（喜多帶隊）</div></div>
    <div class="row"><span class="ico">🎟️</span><div><b>票券</b><br>三浦半島周遊券（請攜帶證件・妥善保管）</div></div>
  </div>

  <div class="plan-block">
    <b>☀️ 方案A：晴天</b>
    <span class="leg">8/22（週六）橫濱站▶猿島▶三笠公園▶住宿處</span>
    <span class="leg">8/23（週日）住宿處▶三浦海岸站▶午餐▶SUP槳板▶解散</span>
  </div>
  <div class="plan-block rain">
    <b>🌧️ 方案B：雨天</b>
    <span class="leg">8/22（週六）橫濱站▶八景島海洋樂園▶住宿處</span>
    <span class="leg">8/23（週日）住宿處▶三浦海岸站▶午餐▶橫須賀市區漫步（分批解散）</span>
  </div>
</section>

<section id="packing">
  <h2 class="section-title"><span class="dot"></span>🎒 攜帶物品</h2>
  <div class="card">
    <b style="color:var(--ink);">必備</b>
    <ul>
      <li>第二天的換洗衣物</li>
      <li>泳裝</li>
      <li>睡衣</li>
      <li>牙刷</li>
      <li>擦汗毛巾（2天份）</li>
      <li>浴巾</li>
    </ul>
    <b style="color:var(--ink);">建議攜帶</b>
    <ul>
      <li>暈船藥（若遇晴天，抵達橫須賀後會立刻搭船）</li>
      <li>防曬泳衣外套（Rash Guard）</li>
    </ul>
  </div>
</section>

<section id="day1">
  <h2 class="section-title"><span class="dot"></span>🚶 行程</h2>
  <h3 class="day-heading">8月22日（週六）</h3>

  <div class="timeline-item advance">
    <span class="audience">先遣隊</span>
    <span class="time-badge">09:00</span>
    <div class="event-title">集合地點：橫濱站「京急中央剪票口前」</div>
    <div class="event-body">
      <p><b>先遣隊：</b>喜多、黑川、石井、吉田、內木、濱元、杉﨑</p>
      <div class="callout info">
        <span class="ico">🎫</span>
        <div>我們已購買了<a href="https://www.keikyu.co.jp/visit/otoku/marugoto/" target="_blank">「三浦半島周遊券」</a>。這是一套3張的車票組合，但當天只會發放<b>乘車券</b>，請妥善保管。</div>
      </div>
      <ul class="ticket-list">
        <li><b>🎫 乘車券</b>橫濱站⇔金澤文庫站來回車票，加上金澤文庫站以南京急電鐵・巴士2日無限次搭乘券</li>
        <li><b>🍽️ 餐券</b>可在指定店鋪兌換免費餐點，將用於第二天午餐</li>
        <li><b>🏄 設施使用券／伴手禮券</b>用於第二天的SUP槳板體驗。若SUP取消，可作為伴手禮兌換券使用</li>
      </ul>
      <p>另外我們會去採購食材，如果家裡有保冷箱或較大的行李箱，請帶來。</p>
      <div class="callout warn">
        <span class="ico">⚠️</span>
        <div>若會遲到，請在Slack上聯絡我們（包含齋藤和喜多）。</div>
      </div>
    </div>
  </div>

  <div class="timeline-item advance">
    <span class="audience">先遣隊</span>
    <span class="time-badge">09:50–10:20左右</span>
    <div class="event-title">抵達京急「橫須賀中央站」</div>
    <div class="event-body"><p>在這裡採購烤肉食材。</p></div>
  </div>

  <div class="timeline-item rest">
    <span class="audience rest">先遣隊以外</span>
    <span class="time-badge">09:20</span>
    <div class="event-title">集合地點：橫濱站「京急中央剪票口前」</div>
    <div class="event-body">
      <div class="callout info">
        <span class="ico">🎫</span>
        <div>我們已購買了<a href="https://www.keikyu.co.jp/visit/otoku/marugoto/" target="_blank">「三浦半島周遊券」</a>。這是一套3張的車票組合，但當天只會發放<b>乘車券</b>，請妥善保管。</div>
      </div>
      <ul class="ticket-list">
        <li><b>🎫 乘車券</b>橫濱站⇔金澤文庫站來回車票，加上金澤文庫站以南京急電鐵・巴士2日無限次搭乘券</li>
        <li><b>🍽️ 餐券</b>可在指定店鋪兌換免費餐點，將用於第二天午餐</li>
        <li><b>🏄 設施使用券／伴手禮券</b>用於第二天的SUP槳板體驗。若SUP取消，可作為伴手禮兌換券使用</li>
      </ul>
      <div class="callout warn">
        <span class="ico">⚠️</span>
        <div>若會遲到，請在Slack上聯絡我們（包含齋藤和喜多）。</div>
      </div>
    </div>
  </div>

  <div class="timeline-item merge">
    <span class="time-badge">10:20左右</span>
    <div class="event-title">於橫須賀中央站會合</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">10:45左右</span>
    <div class="event-title">在戰艦三笠前拍攝團體照</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">11:00左右</span>
    <div class="event-title">抵達三笠碼頭</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">11:30–11:45</span>
    <div class="event-title">搭乘渡輪前往猿島</div>
    <div class="event-body"><p><a href="https://sarushima.jp/information/" target="_blank">查看渡輪時刻表 →</a></p></div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">12:00左右</span>
    <div class="event-title">🍖 烤肉</div>
    <div class="event-body">
      <div class="callout warn"><span class="ico">⏰</span><div>器材須於<b>15:30</b>前歸還。</div></div>
    </div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">17:00–17:15</span>
    <div class="event-title">⛴️ 搭渡輪返回橫須賀本島</div>
    <div class="event-body">
      <p><a href="https://sarushima.jp/information/" target="_blank">查看渡輪時刻表 →</a></p>
      <div class="callout warn"><span class="ico">🚨</span><div><b>千萬別錯過最後一班渡輪</b>——錯過的話真的會很麻煩，請務必留意時間。</div></div>
    </div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">17:30–18:00左右</span>
    <div class="event-title">移動：橫須賀中央站▶汐入站▶住宿處</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">18:00–20:30左右</span>
    <div class="event-title">🔑 入住登記 &amp; 自由活動</div>
    <div class="event-body">
      <p>我們會先到住宿處放行李。住宿共分<b>α</b>、<b>β</b>兩棟，α棟由齋藤帶隊，β棟由喜多帶隊。請在各自所屬的房棟內洗澡、就寢及用早餐。</p>
      <p>放完行李後就是自由活動時間。這段時間不需要採購，但請大家陸續洗好澡。</p>

      <p style="font-weight:700; color:var(--ink); margin-bottom:4px;">🏠 房棟分配</p>
      <p class="note" style="margin-top:-2px; margin-bottom:2px;">基本上以步行移動為主。🚶 α⇄β：步行約6分鐘。</p>
      <p class="note" style="margin-bottom:10px;">🚌 補充：也可搭乘京急巴士須20路線往返汐入站⇔坂本一丁目（就在兩棟住宿附近）— 憑三浦半島周遊券免費搭乘 — <a href="https://ekitan.com/timetable/route-bus/company/5079/1025044" target="_blank">時刻表</a></p>
      <div class="rooms">
        <div class="room">
          <div class="room-head"><span class="label">α</span><a class="room-map" href="https://share.google/ORXuxUADRfo4urra7" target="_blank">📍 地圖</a></div>
          <p class="note" style="margin:-2px 0 8px;">🚶 距汐入站步行15分鐘（1.0公里）・距坂本一丁目巴士站步行5分鐘（300公尺）</p>
          <div class="chips">
            <span class="chip lead">齋藤</span>
            <span class="chip">早川教授</span><span class="chip">難波江副教授</span><span class="chip">高橋助理教授</span>
            <span class="chip">Tao</span><span class="chip">Kong</span><span class="chip">曾根</span><span class="chip">菊地</span>
            <span class="chip">佐佐木</span><span class="chip">須崎</span><span class="chip">山崎</span><span class="chip">東</span>
            <span class="chip">平松</span><span class="chip">松尾</span><span class="chip">杉﨑</span><span class="chip">Lee</span>
          </div>
        </div>
        <div class="room">
          <div class="room-head"><span class="label">β</span><a class="room-map" href="https://share.google/DLrvtx7JUWZkJWiqs" target="_blank">📍 地圖</a></div>
          <p class="note" style="margin:-2px 0 8px;">🚶 距汐入站步行16分鐘（1.0公里）・距坂本一丁目巴士站步行5分鐘（290公尺）</p>
          <div class="chips">
            <span class="chip lead">喜多</span>
            <span class="chip">柯</span><span class="chip">金</span><span class="chip">石井</span><span class="chip">南</span>
            <span class="chip">黑川</span><span class="chip">卓</span><span class="chip">濱元</span><span class="chip">內木</span><span class="chip">吉田</span>
          </div>
        </div>
      </div>

      <div class="divider"></div>
      <div class="callout info">
        <span class="ico">🛁</span>
        <div>每棟住宿各有一間浴室，附近也有錢湯（公共澡堂），可依個人喜好選擇。若前往錢湯，請把花費告訴我們，我們會在結算旅行費用時一併計入。</div>
      </div>

      <p style="margin-top:14px; font-weight:700; color:var(--ink);">錢湯參考資訊（依距離由近到遠）</p>
      <div class="sento-grid">
        <div class="sento"><div><div class="name">龜之湯 <a class="sento-map" href="https://maps.app.goo.gl/xymwpTqazsNzuSpG9" target="_blank">📍 地圖</a></div><div class="meta">營業至20:00・租毛巾30日圓・距α棟步行13分鐘・距β棟步行15分鐘・距汐入站步行5分鐘</div></div><div class="price">¥570</div></div>
        <div class="sento"><div><div class="name">當里湯 <a class="sento-map" href="https://maps.app.goo.gl/Rqeg3qL8Bp836pXS9" target="_blank">📍 地圖</a></div><div class="meta">營業至21:00・距α棟步行20分鐘・距β棟步行14分鐘</div></div><div class="price">¥570</div></div>
        <div class="sento"><div><div class="name">佐野天然溫泉（登雲） <a class="sento-map" href="https://maps.app.goo.gl/3K5vfceH4CST3yER6" target="_blank">📍 地圖</a></div><div class="meta">最晚23:00入場・距α棟步行26分鐘・距β棟步行21分鐘</div></div><div class="price">¥1,250</div></div>
        <div class="sento"><div><div class="name">常盤湯 <a class="sento-map" href="https://maps.app.goo.gl/gR1TLsHfpsh4y1zu7" target="_blank">📍 地圖</a></div><div class="meta">營業至22:00・距α棟步行27分鐘・距β棟步行22分鐘</div></div><div class="price">¥570</div></div>
      </div>
      <p class="note">營業時間與價格可能有變動，請自行確認最新資訊。</p>
    </div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">20:30–22:30左右</span>
    <div class="event-title">🍻 聚餐 @ α棟</div>
    <div class="event-body">
      <p>大家會全部集合到α棟一起聚餐。22:30左右喜多會先回β棟開門，若擔心晚上獨自走回去或想結伴同行的人，歡迎一起回去。</p>
    </div>
  </div>
</section>

<section id="day2">
  <h3 class="day-heading">8月23日（週日）</h3>

  <div class="timeline-item">
    <span class="time-badge">10:00</span>
    <div class="event-title">退房</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">10:20左右</span>
    <div class="event-title">汐入站集合▶前往三浦海岸站</div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">11:00</span>
    <div class="event-title">🍚 午餐 @ <a href="https://tabelog.com/kanagawa/A1406/A140603/14050824/" target="_blank">海わ屋</a></div>
    <div class="event-body"><p>距三浦海岸站步行5分鐘，我們會享用海鮮丼。</p></div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">13:00</span>
    <div class="event-title">🏄 SUP槳板</div>
    <div class="event-body"><p>距三浦海岸站步行10分鐘 — <a href="https://www.google.com/maps/search/?api=1&query=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E4%B8%89%E6%B5%A6%E5%B8%82%E5%8D%97%E4%B8%8B%E6%B5%A6%E7%94%BA%E8%8F%8A%E5%90%8D7-5" target="_blank">S-RIDE</a></p></div>
  </div>

  <div class="timeline-item">
    <span class="time-badge">15:00左右</span>
    <div class="event-title">於三浦海岸站解散</div>
  </div>
</section>

<section id="appendix">
  <h2 class="section-title"><span class="dot"></span>📎 附錄</h2>

  <p style="font-weight:700; color:var(--ink); margin-bottom:10px;">住宿詳情</p>
  <div class="stay-card">
    <span class="tag">α</span>
    <div class="addr">〒238-0042 神奈川県橫須賀市汐入町3-65</div>
    <div class="links">
      <a href="https://share.google/ORXuxUADRfo4urra7" target="_blank">地圖</a>
      <a href="https://www.airbnb.jp/rooms/1001862777575621328?check_in=2026-08-20&check_out=2026-08-21&guests=16&adults=16" target="_blank">Airbnb頁面</a>
    </div>
  </div>
  <div class="stay-card">
    <span class="tag">β</span>
    <div class="addr">〒238-0051 神奈川県橫須賀市不入斗町4-19</div>
    <div class="links">
      <a href="https://share.google/DLrvtx7JUWZkJWiqs" target="_blank">地圖</a>
      <a href="https://www.airbnb.jp/rooms/1492713478388391928?check_in=2026-08-23&check_out=2026-08-24&guests=16&adults=16" target="_blank">Airbnb頁面</a>
    </div>
  </div>

  <p style="font-weight:700; color:var(--ink); margin:22px 0 10px;">橫須賀觀光資訊 <span style="color:var(--ink-soft); font-weight:400; font-size:0.85rem;">（雨天或解散後可參考）</span></p>

  <div class="callout tip">
    <span class="ico">🎆</span>
    <div><b>煙火大會（希望能順利舉辦！）</b><br>8/22（週六）19:00–20:00 — 第52屆金澤祭煙火大會（海之公園・八景島一帶）。說不定在凡爾尼公園附近也能看到！</div>
  </div>

  <div class="card">
    <b style="color:var(--ink);">特色美食</b>
    <ul class="food-list">
      <li><a href="https://www.cocoyoko.net/gourmet/curry-kaigun.html" target="_blank">橫須賀海軍咖哩</a><span class="perk">🎟️ 出示周遊券可獲贈咖哩可樂餅配料（橫須賀海軍咖哩本舖）</span></li>
      <li><a href="https://www.cocoyoko.net/gourmet/yokosuka_navyburger.html" target="_blank">橫須賀海軍漢堡</a></li>
      <li><a href="https://dobuita-st.com/map_cccake.html" target="_blank">櫻桃起司蛋糕</a></li>
    </ul>
  </div>

  <div class="card">
    <b style="color:var(--ink);">觀光景點</b>
    <ul class="spot-list">
      <li><a href="https://www.kinenkan-mikasa.or.jp/" target="_blank"><b>紀念艦「三笠」</b></a><span class="desc">明治時代戰艦原樣保存的紀念艦，可登艦參觀</span><span class="perk">🎟️ 出示周遊券可享入艦門票優惠（成人¥600→¥500，高中生¥300→¥200，中小學生免費）</span></li>
      <li><a href="https://coaska.jp/" target="_blank"><b>汐入碼頭商場</b></a><span class="desc">位於Coaska Bayside Stores內的購物設施，距汐入站步行5分鐘</span></li>
      <li><a href="https://dobuita-st.com/" target="_blank"><b>多布板通商店街</b></a><span class="desc">充滿美式懷舊氛圍的商店街，距汐入站步行5分鐘（北側）</span></li>
      <li><a href="https://www.cocoyoko.net/spot/verny-park.html" target="_blank"><b>凡爾尼公園</b></a><span class="desc">擁有法式玫瑰花壇的海濱公園，距汐入站步行5分鐘，可眺望海景</span></li>
      <li><a href="https://www.cocoyoko.net/spot/umikaze-park.html" target="_blank"><b>海風公園</b></a><span class="desc">海邊公園，設有烤肉區和大型草坡溜滑梯</span></li>
      <li><a href="https://www.cocoyoko.net/spot/kannonzaki-park.html" target="_blank"><b>觀音崎燈塔</b></a><span class="desc">日本第一座西式燈塔，登頂可俯瞰東京灣</span><span class="perk">🎟️ 出示周遊券可獲贈原創貼紙</span></li>
      <li><a href="https://www.cocoyoko.net/spot/hananokuni.html" target="_blank"><b>栗濱花之國</b></a><span class="desc">以波斯菊、虞美人聞名的丘陵花園，還有哥吉拉溜滑梯</span><span class="perk">🎟️ 出示周遊券霜淇淋優惠100日圓（Cosmos館商店）</span></li>
    </ul>
    <div class="callout warn" style="margin-top:10px;"><span class="ico">🚧</span><div>橫須賀美術館目前休館中。</div></div>
  </div>

  <div class="callout info">
    <span class="ico">🛁</span>
    <div><b>Airbnb房東推薦的錢湯</b><br>橫須賀溫泉 湯樂之里 — ¥1,230（出示周遊券可減50日圓・近馬堀海岸站）— <a href="https://maps.app.goo.gl/DkFhivqPiDigEcMo8" target="_blank">地圖連結</a></div>
  </div>

  <p style="font-weight:700; color:var(--ink); margin:22px 0 10px;">💰 分帳網站「Warika」</p>
  <div class="card">
    <p>今年我們使用了可自動分帳的網站「Warika」。如果你先墊付了任何費用，請透過下方連結登記！</p>
    <a href="https://walica.jp/group/01KSRFF7FWQ6CHZ26M3C400MKG" target="_blank">https://walica.jp/group/01KSRFF7FWQ6CHZ26M3C400MKG</a>
  </div>

  <a class="top-link" href="#overview">↑ 返回頂部</a>
</section>

</div>

<footer class="foot">早川・難波江研究室 · 2026年度研修旅行 · 橫須賀</footer>
`;
