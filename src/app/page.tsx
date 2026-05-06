import Image from "next/image";

export default function Home() {
  return (
    <main style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(20,20,20,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(201,155,48,0.2)",
        padding: "0 32px", height: "64px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Image src="/images/logo-solid-dark.png" alt="RUKCON 11" width={140} height={40} style={{ objectFit: "contain" }} />
        <a href="#reserve" className="btn-gold" style={{ fontSize: "12px", padding: "10px 24px" }}>Reserve Your Seat</a>
      </nav>

      {/* ── HERO ── */}
      <section className="section-dark" style={{
        minHeight: "100vh", paddingTop: "64px",
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
        textAlign: "center",
      }}>
        {/* Brushstroke background */}
        <div style={{
          position: "absolute", inset: 0, display: "flex",
          alignItems: "center", justifyContent: "center", opacity: 0.12, pointerEvents: "none",
        }}>
          <Image src="/images/brushstroke-gradient-v2.png" alt="" fill style={{ objectFit: "cover" }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "860px", padding: "96px 24px" }}>
          <p className="eyebrow" style={{ marginBottom: "24px" }}>
            RUKCON 11 · [DATES] · DALLAS, TX
          </p>
          <h1 style={{
            fontWeight: 900, textTransform: "uppercase",
            fontSize: "clamp(40px, 8vw, 96px)", lineHeight: 0.95,
            letterSpacing: "-0.02em", color: "#F5F4F0",
            marginBottom: "16px",
          }}>
            THE WEEKEND<br />
            <span style={{ color: "var(--gold-400)" }}>CHRISTIAN LEADERS</span><br />
            GO ALL IN.
          </h1>
          <p style={{
            fontWeight: 800, fontSize: "clamp(18px, 3vw, 28px)",
            textTransform: "uppercase", letterSpacing: "0.04em",
            color: "var(--ink-200)", marginBottom: "32px", lineHeight: 1.3,
          }}>
            …AND BRING THEIR PEOPLE WITH THEM.
          </p>
          <p style={{
            fontWeight: 400, fontSize: "18px", lineHeight: 1.65,
            color: "var(--ink-300)", maxWidth: "640px", margin: "0 auto 48px",
          }}>
            Three days. Keynote speakers. Deep-dive sessions on Faith, Family, Fitness, and Finance.
            The Freedom event for your wife running alongside. The brotherhood you've been trying
            to describe to your friends for months, now in a room they can walk into.
          </p>

          {/* Primary CTA */}
          <div style={{ marginBottom: "24px" }}>
            <a href="#reserve" className="btn-gold" style={{ fontSize: "15px", padding: "18px 48px" }}>
              Reserve Your Seat
            </a>
          </div>

          {/* Secondary CTAs */}
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
            <a href="#freedom" className="btn-ghost">Bring Your Wife</a>
            <a href="#teen" className="btn-ghost">Bring Your Teen</a>
            <a href="#reserve" className="btn-ghost">Bring Your Friend</a>
          </div>

          {/* Proof strip */}
          <div style={{
            display: "flex", gap: "32px", justifyContent: "center", flexWrap: "wrap",
            borderTop: "1px solid rgba(201,155,48,0.2)", paddingTop: "32px",
          }}>
            {["10+ RUKCONs Run", "Men in 43+ States", "The Largest Faith-Based Personal Development Organization in America"].map((item) => (
              <span key={item} style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", color: "var(--ink-400)", textTransform: "uppercase" }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 1: YOU WENT ALL IN ONCE ── */}
      <section className="section-dark" style={{ padding: "96px 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <hr className="gold-rule" style={{ marginBottom: "32px" }} />
          <h2 style={{
            fontWeight: 900, textTransform: "uppercase",
            fontSize: "clamp(28px, 5vw, 52px)", lineHeight: 1.0,
            letterSpacing: "-0.02em", color: "#F5F4F0", marginBottom: "40px",
          }}>
            YOU WENT ALL IN ONCE.<br />
            <span style={{ color: "var(--gold-400)" }}>IT'S TIME TO GO ALL IN AGAIN.</span>
          </h2>
          {[
            "If you're a RUK man, you already know what All In feels like. You walked into the Refinery, or the Awakening, or the Crucible/Covenant, and you walked out different. Your wife noticed. Your team noticed. The guys in your life have been asking what changed ever since.",
            "RUKCON 11 is where you do it again. Except this time, you don't go alone.",
            "You bring the business partner you've been trying to get into the Refinery for eight months. You bring the brother-in-law who keeps asking you what happened. You bring your wife into the Freedom event that runs alongside. You stop being the only one in your circle who's done the work.",
            "And if you're new to this… if a friend sent you this page, if your husband went last year and came back a different man, if you've been watching this from the outside… this is the room built for you to finally step inside.",
            "This is where seeing becomes believing.",
          ].map((p, i) => (
            <p key={i} style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--ink-300)", marginBottom: "20px" }}>{p}</p>
          ))}
          <p style={{ fontSize: "22px", fontWeight: 800, textTransform: "uppercase", color: "#F5F4F0", letterSpacing: "0.04em", marginTop: "40px" }}>
            Three days. One decision. All In.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: WHO IT'S FOR ── */}
      <section className="section-inset" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <hr className="gold-rule" style={{ marginBottom: "32px" }} />
          <h2 style={{
            fontWeight: 900, textTransform: "uppercase",
            fontSize: "clamp(24px, 4vw, 44px)", lineHeight: 1.05,
            letterSpacing: "-0.02em", color: "var(--ink-900)", marginBottom: "56px",
          }}>
            THE MEN AND WOMEN<br />THIS WEEKEND IS FOR
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            {/* For */}
            <div>
              <p style={{ fontWeight: 800, fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--teal-400)", marginBottom: "20px" }}>
                This is for you if…
              </p>
              {[
                "You've been through the Refinery, Awakening, Covenant, or Revival, and you want to deepen what started",
                "You're a RUK man who wants to bring your wife into the weekend with you",
                "You're a RUQ woman who's ready for the next chapter of what Freedom opened up",
                "You've heard about Rise Up Kings from someone who changed, and you're ready to see it for yourself",
                "You're a Christian man or woman who wants a weekend that rebuilds Faith, Family, Fitness, and Finance at the same time",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "16px", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--teal-400)", fontWeight: 800, marginTop: "2px", flexShrink: 0 }}>✓</span>
                  <p style={{ fontSize: "16px", lineHeight: 1.6, color: "var(--ink-700)", margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
            {/* Not for */}
            <div>
              <p style={{ fontWeight: 800, fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-400)", marginBottom: "20px" }}>
                This is not for you if…
              </p>
              {[
                "You're looking for a conference to get hyped up at and forget by Wednesday",
                "You think your faith and your life should stay in separate rooms",
                "You're not willing to sit in a room with men and women who've done the work and will tell you the truth",
                "You've decided this is just how life is going to feel from here on out",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "16px", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--ink-400)", fontWeight: 800, marginTop: "2px", flexShrink: 0 }}>—</span>
                  <p style={{ fontSize: "16px", lineHeight: 1.6, color: "var(--ink-500)", margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: FOUR PILLARS ── */}
      <section className="section-dark" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <hr className="gold-rule" style={{ marginBottom: "32px" }} />
          <h2 style={{
            fontWeight: 900, textTransform: "uppercase",
            fontSize: "clamp(24px, 4vw, 44px)", lineHeight: 1.05,
            letterSpacing: "-0.02em", color: "#F5F4F0", marginBottom: "16px",
          }}>
            FAITH. FAMILY. FITNESS. FINANCES.
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--ink-300)", marginBottom: "56px", maxWidth: "640px" }}>
            Most faith-driven leaders optimise one pillar and let the other three burn. RUKCON 11 is three days of rebuilding all four at once, in a room of men and women doing the same.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2px" }}>
            {[
              {
                label: "FAITH",
                color: "var(--gold-400)",
                text: "This is a collective of successful men and women who want to keep God at the center of their lives. You'll grow closer in your relationship with God, get more disciplined in your walk, and sharpen spiritually with other Christians doing the same.",
              },
              {
                label: "FAMILY",
                color: "var(--gold-400)",
                text: "Improve the connection and intimacy in your marriage. Become the father or mother you were designed to be. Break down the walls that keep you from being truly present with the people in your house.",
              },
              {
                label: "FITNESS",
                color: "var(--gold-400)",
                text: "The path to success has cost too many men and women their health. RUKCON 11 is where that pattern gets broken. You'll be around people who push themselves physically, and you'll stop treating your body like it doesn't matter.",
              },
              {
                label: "FINANCES",
                color: "var(--gold-400)",
                text: "Big financial goals require real skill. You'll learn the mindsets the wealthy operate from, the most effective ways to scale a business, and where the market is actually heading — from Skylar Lewis and a roster of speakers who've done it.",
              },
            ].map((pillar) => (
              <div key={pillar.label} style={{
                background: "var(--ink-800)",
                borderTop: `4px solid ${pillar.color}`,
                padding: "32px 28px",
              }}>
                <p style={{ fontWeight: 900, fontSize: "13px", letterSpacing: "0.18em", textTransform: "uppercase", color: pillar.color, marginBottom: "16px" }}>
                  {pillar.label}
                </p>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--ink-300)", margin: 0 }}>{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SCHEDULE ── */}
      <section className="section-light" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <hr className="gold-rule" style={{ marginBottom: "32px" }} />
          <h2 style={{
            fontWeight: 900, textTransform: "uppercase",
            fontSize: "clamp(24px, 4vw, 44px)", lineHeight: 1.05,
            letterSpacing: "-0.02em", color: "var(--ink-900)", marginBottom: "16px",
          }}>
            WHAT ACTUALLY HAPPENS<br />ACROSS THREE DAYS
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.65, color: "var(--ink-500)", marginBottom: "56px" }}>
            Most conferences hand you a vague schedule. RUKCON 11 is built as a sequence — every session, every experience, placed where it is for a reason.
          </p>

          {[
            {
              day: "DAY ONE · WEDNESDAY",
              badge: "OPTIONAL",
              sub: "The day the work starts for the people who want to go deeper.",
              items: [
                { time: "7:00 AM", desc: "RUK Fitness Standard. The morning assessment at North Dallas CrossFit. Transportation provided from the host hotel." },
                { time: "8:00 AM – 5:00 PM", desc: "Freedom. The RUQ intro event for women. Your wife walks through her own version of the 4 Pillars work. (Registration separate.)" },
                { time: "1:00 PM – 6:00 PM", desc: "Business Peer Forum. Exclusive to Refinery, Awakening Gold, Crucible Gold, and Revival Gold Mastermind members." },
              ],
            },
            {
              day: "DAY TWO · THURSDAY",
              badge: null,
              sub: "The main room opens.",
              items: [
                { time: "7:00 AM", desc: "Registration with coffee." },
                { time: "8:00 AM – 5:00 PM", desc: "RUKCON 11 General Session. Keynote speakers on Faith, Family, Fitness, and Finance. Deep-dive teaching on systemising a business. Deep-dive on intimacy and marriage." },
              ],
            },
            {
              day: "DAY THREE · FRIDAY",
              badge: null,
              sub: "You leave different than you walked in.",
              items: [
                { time: "5:30 AM – 6:30 AM", desc: "RUK Fitness Workout." },
                { time: "7:30 AM", desc: "Registration with coffee." },
                { time: "8:00 AM – 5:00 PM", desc: "RUKCON 11 General Session. Continued deep-dive teaching. Networking. The integration of the weekend." },
                { time: "6:30 PM", desc: "Gala Dinner. Cocktail attire. Rankings, recognitions, and celebration of the community. Included in your ticket." },
              ],
            },
          ].map((block) => (
            <div key={block.day} style={{
              marginBottom: "48px",
              borderLeft: "3px solid var(--gold-400)",
              paddingLeft: "28px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                <p style={{ fontWeight: 900, fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-900)", margin: 0 }}>
                  {block.day}
                </p>
                {block.badge && (
                  <span style={{ background: "var(--teal-400)", color: "#fff", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "2px 8px", borderRadius: "var(--r-pill)" }}>
                    {block.badge}
                  </span>
                )}
              </div>
              <p style={{ fontSize: "15px", color: "var(--ink-500)", marginBottom: "20px" }}>{block.sub}</p>
              {block.items.map((item, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "16px", marginBottom: "14px", alignItems: "start" }}>
                  <span style={{ fontFamily: "var(--font-montserrat)", fontSize: "12px", fontWeight: 700, color: "var(--gold-500)", letterSpacing: "0.04em" }}>{item.time}</span>
                  <span style={{ fontSize: "15px", lineHeight: 1.6, color: "var(--ink-700)" }}>{item.desc}</span>
                </div>
              ))}
            </div>
          ))}

          <p style={{ fontSize: "13px", color: "var(--ink-400)", marginTop: "8px" }}>
            All times listed in Central Daylight Time. Dress code for sessions: black shirt, black shorts, athletic shoes. Breakfast not provided.
          </p>
        </div>
      </section>

      {/* ── SECTION 5: FREEDOM (HER SEAT) ── */}
      <section id="freedom" style={{ background: "var(--teal-700)", padding: "96px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <hr style={{ width: "48px", height: "3px", background: "var(--teal-300)", border: "none", marginBottom: "32px" }} />
          <h2 style={{
            fontWeight: 900, textTransform: "uppercase",
            fontSize: "clamp(24px, 4vw, 44px)", lineHeight: 1.05,
            letterSpacing: "-0.02em", color: "#F5F4F0", marginBottom: "16px",
          }}>
            YOUR WIFE HAS<br />HER OWN SEAT THIS WEEKEND.
          </h2>
          {[
            "The Freedom intro event to Rise Up Queens runs parallel to RUKCON 11 starting on Day One. This is the RUQ intro event, designed by Jessica Lewis, founded for the women who are done watching their husbands change from the sidelines.",
            "Freedom is where a woman grounds her identity in who God says she is. Where she reconnects intimately with her husband. Where she steps into the passion and peace she was designed for.",
            "For the wife whose husband went through the RUK and came back different: this is your door in.",
            "For the wife walking into RUKCON with her husband: Day One is yours. Day Two and Three you sit side-by-side in the main room.",
          ].map((p, i) => (
            <p key={i} style={{ fontSize: "17px", lineHeight: 1.7, color: "rgba(245,244,240,0.8)", marginBottom: "16px" }}>{p}</p>
          ))}
          <div style={{ marginTop: "40px" }}>
            <a href="#reserve" className="btn-gold">Register Your Wife for Freedom</a>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: SPEAKERS ── */}
      <section className="section-dark" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <hr className="gold-rule" style={{ margin: "0 auto 32px" }} />
          <h2 style={{
            fontWeight: 900, textTransform: "uppercase",
            fontSize: "clamp(24px, 4vw, 44px)", lineHeight: 1.05,
            letterSpacing: "-0.02em", color: "#F5F4F0", marginBottom: "16px",
          }}>
            WHO YOU'LL HEAR FROM
          </h2>
          <p style={{ fontSize: "17px", color: "var(--ink-400)", marginBottom: "48px" }}>
            Full 2026 lineup announced soon.
          </p>
          <div style={{
            background: "var(--ink-800)", border: "1px solid rgba(201,155,48,0.2)",
            borderRadius: "var(--r-sm)", padding: "40px 32px", marginBottom: "32px",
          }}>
            <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-400)", marginBottom: "20px" }}>
              Past RUKCON Featured Speakers
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
              {["Coach Kav", "Brant Hansen", "Nate Burkhalter", "Sean & Lanette Reed", "Marty B", "Damon West", "Ruslan KD", "Sean Lowe"].map((name) => (
                <span key={name} style={{
                  border: "1px solid rgba(201,155,48,0.3)", borderRadius: "var(--r-pill)",
                  padding: "6px 16px", fontSize: "13px", fontWeight: 600, color: "var(--ink-200)",
                }}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: OUTCOMES ── */}
      <section className="section-inset" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <hr className="gold-rule" style={{ marginBottom: "32px" }} />
          <h2 style={{
            fontWeight: 900, textTransform: "uppercase",
            fontSize: "clamp(24px, 4vw, 44px)", lineHeight: 1.05,
            letterSpacing: "-0.02em", color: "var(--ink-900)", marginBottom: "56px",
          }}>
            WHAT HAPPENS AFTER<br />YOU HEAD HOME
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {[
              { n: "01", title: "A FAITH THAT'S ALIVE AGAIN", body: "Not a Sunday performance. A daily anchor that holds when life gets heavy." },
              { n: "02", title: "A MARRIAGE YOUR SPOUSE RECOGNISES", body: "The wall that's been in your house comes down. The version of you they married walks back through the door." },
              { n: "03", title: "A BUSINESS BUILT TO SCALE", body: "Direct teaching from Skylar Lewis, whose 2 Day CEO framework took Superior Restoration to $13M. Keys to scaling. Systems. Leadership. Team-building that actually works." },
              { n: "04", title: "A BODY THAT BACKS YOU UP", body: "The fitness sessions are optional, and they're the moment most attendees point to as the one they didn't know they needed." },
              { n: "05", title: "A BROTHERHOOD AND SISTERHOOD THAT LASTS", body: "The people in the room with you this weekend become the people in your corner for life. That's how RUK works. That's why it holds." },
            ].map((item) => (
              <div key={item.n} style={{
                display: "grid", gridTemplateColumns: "56px 1fr",
                gap: "24px", padding: "28px 0",
                borderBottom: "1px solid var(--border)",
                alignItems: "start",
              }}>
                <span style={{ fontWeight: 900, fontSize: "32px", color: "var(--gold-400)", lineHeight: 1 }}>{item.n}</span>
                <div>
                  <p style={{ fontWeight: 800, fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-900)", marginBottom: "8px" }}>{item.title}</p>
                  <p style={{ fontSize: "16px", lineHeight: 1.65, color: "var(--ink-600)", margin: 0 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: TESTIMONIALS ── */}
      <section className="section-dark" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <hr className="gold-rule" style={{ marginBottom: "32px" }} />
          <h2 style={{
            fontWeight: 900, textTransform: "uppercase",
            fontSize: "clamp(24px, 4vw, 44px)", lineHeight: 1.05,
            letterSpacing: "-0.02em", color: "#F5F4F0", marginBottom: "56px",
          }}>
            DON'T TAKE OUR WORD FOR IT.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2px" }}>
            {[
              { quote: "I went from $1M to $31M in sales over the last 3 years because of Rise Up Kings.", name: "Jared Hellum", context: "CEO, Constructable" },
              { quote: "I truly got my husband back.", name: "Jocelyn Monteverde", context: "" },
              { quote: "In the midst of chaos and a marriage on the rocks, my wife and I experienced a transformation that mended our bonds.", name: "BJ Tijerina", context: "" },
              { quote: "Our 11-year marriage felt renewed.", name: "Allison Meskimen", context: "Flipur Remodels" },
              { quote: "I've been missing a brotherhood of successful Christian men.", name: "Dr. Monty Montgomery", context: "North Texas Integrated Healthcare" },
              { quote: "I came here to get close to God. My faith came alive.", name: "Ted Williams", context: "Rockport Oil & Gas" },
            ].map((t, i) => (
              <div key={i} style={{
                background: "var(--ink-800)",
                borderTop: "4px solid var(--gold-400)",
                padding: "32px 28px",
              }}>
                <p style={{ fontSize: "17px", lineHeight: 1.65, color: "#F5F4F0", fontStyle: "italic", marginBottom: "24px" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p style={{ fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: "4px" }}>
                  {t.name}
                </p>
                {t.context && <p style={{ fontSize: "12px", color: "var(--ink-400)", margin: 0 }}>{t.context}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: SKYLAR LETTER ── */}
      <section className="section-light" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <hr className="gold-rule" style={{ marginBottom: "32px" }} />
          <p className="eyebrow" style={{ marginBottom: "20px" }}>A WORD FROM ME, PERSONALLY.</p>
          <h2 style={{
            fontWeight: 900, fontSize: "clamp(22px, 3.5vw, 38px)", lineHeight: 1.1,
            letterSpacing: "-0.02em", color: "var(--ink-900)", marginBottom: "40px",
          }}>
            My name is Skylar Lewis.<br />I'm the founder of Rise Up Kings.
          </h2>
          {[
            "I started this movement because I lived the version of success that wasn't working.",
            "I borrowed $1,000 to start my first business, grew Superior Restoration to $13 million, and sold the company to private equity. And along the way I almost lost my marriage, my health, and my faith to the grind of building it all.",
            "The Refinery is where a man rebuilds. RUKCON is where he deepens what he rebuilt, and where he brings the people he loves into the work he's been doing alone.",
            "If you've been through the Refinery, you know what this weekend will do for you. If you haven't… if you're reading this as a friend, a spouse, a brother, a son… this is the room designed for you to walk into.",
          ].map((p, i) => (
            <p key={i} style={{ fontSize: "18px", lineHeight: 1.75, color: "var(--ink-700)", marginBottom: "20px" }}>{p}</p>
          ))}
          <p style={{ fontSize: "18px", lineHeight: 2.0, color: "var(--ink-700)", marginBottom: "40px" }}>
            Bring your wife.<br />
            Bring your friend.<br />
            Bring your sons.<br />
            Bring the version of yourself you've been quietly tired of.<br />
            We'll take it from there.
          </p>
          <a href="#reserve" className="btn-gold">Reserve Your Seat</a>
        </div>
      </section>

      {/* ── SECTION 10: TICKETS ── */}
      <section id="reserve" className="section-dark" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <hr className="gold-rule" style={{ marginBottom: "32px" }} />
          <h2 style={{
            fontWeight: 900, textTransform: "uppercase",
            fontSize: "clamp(24px, 4vw, 44px)", lineHeight: 1.05,
            letterSpacing: "-0.02em", color: "#F5F4F0", marginBottom: "56px",
          }}>
            EVERYTHING ELSE YOU<br />NEED TO KNOW.
          </h2>

          {/* Ticket tiers */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2px", marginBottom: "48px" }}>
            {/* General */}
            <div style={{
              background: "var(--ink-800)", borderTop: "4px solid var(--ink-400)",
              padding: "36px 32px",
            }}>
              <p style={{ fontWeight: 900, fontSize: "13px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-400)", marginBottom: "8px" }}>General</p>
              <p style={{ fontWeight: 900, fontSize: "36px", color: "#F5F4F0", marginBottom: "24px" }}>[PRICE]</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                {[
                  "Official RUKCON T-shirt",
                  "Access to all Day 1 & Day 2 main stage sessions",
                  "Entry into RUK GAMES experience",
                  "Gala Dinner (shared experience with full community)",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "10px", marginBottom: "12px", fontSize: "15px", color: "var(--ink-300)" }}>
                    <span style={{ color: "var(--teal-400)", flexShrink: 0 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="btn-ghost" style={{ display: "block", textAlign: "center" }}>Select General</a>
            </div>

            {/* Premium */}
            <div style={{
              background: "var(--ink-800)", borderTop: "4px solid var(--gold-400)",
              padding: "36px 32px", position: "relative",
            }}>
              <span style={{
                position: "absolute", top: "20px", right: "20px",
                background: "var(--gold-400)", color: "var(--ink-950)",
                fontSize: "10px", fontWeight: 800, letterSpacing: "0.1em",
                textTransform: "uppercase", padding: "4px 10px", borderRadius: "var(--r-pill)",
              }}>RECOMMENDED</span>
              <p style={{ fontWeight: 900, fontSize: "13px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: "8px" }}>Premium</p>
              <p style={{ fontWeight: 900, fontSize: "36px", color: "#F5F4F0", marginBottom: "24px" }}>[PRICE]</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                {[
                  "Everything in General",
                  "Premium RUKCON Polo Shirt",
                  "Priority seating & expedited check-in",
                  "Day 0 Private Session (6:00–7:00 PM)",
                  "Featured speaker — intimate, high-impact teaching",
                  "Day 2 Private Lunch Session + Meet & Greet",
                  "Enhanced RUK GAMES Experience",
                  "Exclusive recognition moment",
                  "Day 2 Premium Lounge before Gala Dinner",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "10px", marginBottom: "12px", fontSize: "15px", color: "var(--ink-300)" }}>
                    <span style={{ color: "var(--gold-400)", flexShrink: 0 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="btn-gold" style={{ display: "block", textAlign: "center" }}>Select Premium</a>
            </div>
          </div>

          {/* Add-on tickets */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2px" }}>
            {[
              { title: "Business Peer Forum", sub: "Day One — Refinery + Gold Mastermind members only", note: "Complimentary component of the Refinery Mastermind program." },
              { title: "Coaching Client Dinner", sub: "Invitation only", note: "An exclusive dinner for prospective coaching clients. Request more info on the application form." },
              { title: "Gala Dinner Guest Ticket", sub: "For guests not attending RUKCON 11", note: "A night of honor, recognition, and connection. Already included in your RUKCON 11 ticket." },
            ].map((item) => (
              <div key={item.title} style={{
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "var(--r-sm)", padding: "24px",
              }}>
                <p style={{ fontWeight: 800, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#F5F4F0", marginBottom: "6px" }}>{item.title}</p>
                <p style={{ fontSize: "12px", color: "var(--gold-400)", fontWeight: 600, marginBottom: "10px" }}>{item.sub}</p>
                <p style={{ fontSize: "14px", color: "var(--ink-400)", margin: 0, lineHeight: 1.6 }}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11: HOTEL ── */}
      <section className="section-inset" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <hr className="gold-rule" style={{ marginBottom: "32px" }} />
          <h2 style={{
            fontWeight: 900, textTransform: "uppercase",
            fontSize: "clamp(24px, 4vw, 44px)", lineHeight: 1.05,
            letterSpacing: "-0.02em", color: "var(--ink-900)", marginBottom: "56px",
          }}>
            WHERE YOU'LL STAY.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2px" }}>
            {[
              {
                badge: "HOST HOTEL",
                name: "Hilton Dallas — Plano Granite Park",
                desc: "Next to The Boardwalk. Outdoor patio with fire pit, pool, and upscale bar Prairie Fire. Fitness center, restaurant, and Carso Market for ready-made meals and Starbucks.",
                cta: "Book Your Room",
              },
              {
                badge: "OVERFLOW HOTEL",
                name: "Sandman Signature Plano — Frisco Hotel",
                desc: "Two hospitality lounges, banquet and meeting facilities, 24/7 business center. Indoor heated pool, hot tub, fitness center, and on-site dining.",
                cta: "Book Your Room",
              },
            ].map((hotel) => (
              <div key={hotel.name} style={{
                background: "#fff", borderTop: "4px solid var(--gold-400)",
                padding: "32px 28px", boxShadow: "var(--shadow-sm)",
              }}>
                <p style={{ fontWeight: 800, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--teal-400)", marginBottom: "10px" }}>{hotel.badge}</p>
                <p style={{ fontWeight: 800, fontSize: "17px", color: "var(--ink-900)", marginBottom: "12px", lineHeight: 1.3 }}>{hotel.name}</p>
                <p style={{ fontSize: "15px", lineHeight: 1.65, color: "var(--ink-600)", marginBottom: "24px" }}>{hotel.desc}</p>
                <a href="#" style={{ fontWeight: 700, fontSize: "13px", color: "var(--gold-500)", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "1px solid var(--gold-400)" }}>
                  {hotel.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 12: FAQ ── */}
      <section className="section-dark" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <hr className="gold-rule" style={{ marginBottom: "32px" }} />
          <h2 style={{
            fontWeight: 900, textTransform: "uppercase",
            fontSize: "clamp(24px, 4vw, 44px)", lineHeight: 1.05,
            letterSpacing: "-0.02em", color: "#F5F4F0", marginBottom: "56px",
          }}>
            ANSWERED DIRECTLY.
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { q: "Do I have to be a Rise Up Kings graduate to attend?", a: "No. RUKCON 11 is designed to welcome both RUK graduates and first-time attendees. If you've never been to a RUK event, this is a strong entry point." },
              { q: "Is this only for men?", a: "No. RUKCON 11 is open to Christian men and women. The Freedom event for women runs alongside on RUKCON, starting the day before on Wednesday." },
              { q: "Do I have to be a Christian to attend?", a: "Rise Up Kings is a Christian-based organization. You're welcome to attend if you're open to the Christian faith." },
              { q: "Do I need to be a business owner?", a: "No. RUKCON 11 is built for Christian leaders — business owners, entrepreneurs, executives, and people serious about their faith, family, fitness, and finances." },
              { q: "Should I bring my spouse?", a: "Yes. Spouses are encouraged. They can choose to jump into the RUQ Freedom experience or join their husbands for the RUKCON 11 mainstage sessions." },
              { q: "Can children attend?", a: "18+ only." },
              { q: "What physical shape do I need to be in?", a: "We meet you where you are. The RUK Fitness components on Day One and Day Three are optional, and all levels are welcome." },
              { q: "What do I need to bring?", a: "Black shirt, black shorts, and athletic shoes for sessions are encouraged. Cocktail attire for the Gala Dinner on Friday evening." },
              { q: "What's included in the ticket?", a: "Access to all keynote speakers and general sessions. Networking with RUK alumni. RUK Games. The Gala Dinner on Friday evening. Optional add-on experiences are available separately." },
              { q: "Where is the event held?", a: "Dallas, Texas. The host hotel is the Hilton Dallas — Plano Granite Park. Full address and directions provided after registration." },
              { q: "What airports do I fly into?", a: "Dallas/Fort Worth International (DFW) or Dallas Love Field." },
              { q: "Is the hotel included?", a: "No. The hotel is booked separately. Discounted rates are provided at the host and overflow hotels." },
            ].map((item, i) => (
              <div key={i} style={{
                padding: "24px 0",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}>
                <p style={{ fontWeight: 700, fontSize: "16px", color: "#F5F4F0", marginBottom: "10px" }}>{item.q}</p>
                <p style={{ fontSize: "15px", lineHeight: 1.65, color: "var(--ink-400)", margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 13: OTHER WAYS IN ── */}
      <section className="section-inset" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <hr className="gold-rule" style={{ marginBottom: "32px" }} />
          <h2 style={{
            fontWeight: 900, textTransform: "uppercase",
            fontSize: "clamp(24px, 4vw, 44px)", lineHeight: 1.05,
            letterSpacing: "-0.02em", color: "var(--ink-900)", marginBottom: "56px",
          }}>
            THERE ARE MORE WAYS<br />TO BE IN THE ROOM.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2px" }}>
            {[
              { title: "Become a Sponsor", body: "Align your brand with a movement of purpose-driven men and women. Gain exposure, network with leaders, and invest in lasting transformation." },
              { title: "Become a Speaker", body: "Share your message with a room of high-performing, faith-driven attendees. Inspire transformation and build authority in the RUK community." },
              { title: "Become a Volunteer", body: "Serve alongside the RUK team. Grow in leadership. Help create the atmosphere that makes this weekend what it is." },
            ].map((item) => (
              <div key={item.title} style={{
                background: "#fff", borderTop: "4px solid var(--teal-400)",
                padding: "32px 28px", boxShadow: "var(--shadow-sm)",
              }}>
                <p style={{ fontWeight: 900, fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-900)", marginBottom: "12px" }}>{item.title}</p>
                <p style={{ fontSize: "15px", lineHeight: 1.65, color: "var(--ink-600)", marginBottom: "24px" }}>{item.body}</p>
                <a href="#" style={{ fontWeight: 700, fontSize: "13px", color: "var(--teal-500)", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "1px solid var(--teal-400)" }}>
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 14: FINAL CTA ── */}
      <section className="section-dark" style={{
        padding: "112px 24px", textAlign: "center",
        background: "var(--ink-950)", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Image src="/images/brushstroke-gradient-v2.png" alt="" fill style={{ objectFit: "cover" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: "720px", margin: "0 auto" }}>
          <hr className="gold-rule" style={{ margin: "0 auto 32px" }} />
          <h2 style={{
            fontWeight: 900, textTransform: "uppercase",
            fontSize: "clamp(32px, 6vw, 72px)", lineHeight: 0.95,
            letterSpacing: "-0.02em", color: "#F5F4F0", marginBottom: "32px",
          }}>
            THREE DAYS.<br />
            <span style={{ color: "var(--gold-400)" }}>ONE DECISION.</span><br />
            ALL IN.
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.75, color: "var(--ink-300)", marginBottom: "48px" }}>
            You've been doing this alone long enough.<br />
            The next RUKCON happens whether you're in the room or not. The question is whether you're the man who shows up with the people he loves this time, or the man who watches another year go by wishing he had.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.65, color: "var(--ink-400)", marginBottom: "48px" }}>
            Reserve your seat. Bring your wife. Bring your friend.<br />
            Bring the version of yourself that's been quietly waiting for a room that actually fits.
          </p>
          <a href="#" className="btn-gold" style={{ fontSize: "15px", padding: "18px 56px" }}>Reserve Your Seat</a>
          <p style={{ marginTop: "32px", fontSize: "12px", color: "var(--ink-500)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            RUKCON 11 · [DATES] · DALLAS, TX
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "var(--ink-900)", borderTop: "1px solid rgba(201,155,48,0.15)",
        padding: "48px 24px",
      }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", justifyContent: "space-between" }}>
          <Image src="/images/logo-solid-dark.png" alt="Rise Up Kings" width={120} height={34} style={{ objectFit: "contain" }} />
          <p style={{ fontSize: "13px", color: "var(--ink-500)", margin: 0 }}>
            © 2026 Rise Up Kings. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms", "Contact"].map((link) => (
              <a key={link} href="#" style={{ fontSize: "12px", color: "var(--ink-400)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>

    </main>
  );
}
