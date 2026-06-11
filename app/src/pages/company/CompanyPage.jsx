import PropTypes from 'prop-types'
import { FACTS, DIRECTORS, SHAREHOLDERS } from './companyData'

// ─── Sub-components ───────────────────────────────────────────────────────────

function FactTile({ label, value }) {
  return (
    <div className="rounded-2xl border border-[rgba(0,0,0,.06)] bg-[#faf9f8] px-[18px] py-4">
      <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#8f7f76]">
        {label}
      </div>
      <div className="mt-1.5 text-[16px] font-semibold leading-snug text-[#201a17]">
        {value}
      </div>
    </div>
  )
}
FactTile.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

function DirectorCard({ name }) {
  return (
    <li className="flex gap-3 items-start rounded-2xl border border-[rgba(0,0,0,.06)] bg-white px-4 py-3.5">
      <span className="mt-[7px] w-2 h-2 rounded-full bg-[#f58792] shrink-0" />
      <span>
        <span className="block text-[15.5px] font-bold text-[#2c2521]">{name}</span>
        <span className="block mt-0.5 text-[13px] font-medium text-[#8f7f76]">
          Director · Appointed 25 Feb 2026
        </span>
      </span>
    </li>
  )
}
DirectorCard.propTypes = {
  name: PropTypes.string.isRequired,
}

function ShareholderRow({ name, shares }) {
  return (
    <li className="flex items-baseline justify-between gap-3.5">
      <span className="text-[15px] font-semibold text-[#2c2521]">{name}</span>
      <span className="text-[14px] font-bold text-[#5f5752] shrink-0">{shares}%</span>
    </li>
  )
}
ShareholderRow.propTypes = {
  name: PropTypes.string.isRequired,
  shares: PropTypes.number.isRequired,
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[rgba(0,0,0,.06)]">
      <div className="max-w-6xl mx-auto h-20 px-6 flex items-center justify-between gap-5">
        <a href="https://delivere.app" className="flex items-center shrink-0">
          <img
            src="/deliver-e-logo-trim.png"
            alt="Deliver-E"
            className="h-[38px] w-auto object-contain"
          />
        </a>
        <nav className="flex items-center gap-1.5 flex-wrap">
          <a
            href="#registration"
            className="rounded-lg px-3 py-2 text-[14px] font-medium text-[#6b7280] no-underline hover:text-[#0B0A07] transition-colors"
          >
            Registration
          </a>
          <a
            href="#documents"
            className="rounded-lg px-3 py-2 text-[14px] font-medium text-[#6b7280] no-underline hover:text-[#0B0A07] transition-colors"
          >
            Documents
          </a>
          <a
            href="#products"
            className="rounded-lg px-3 py-2 text-[14px] font-medium text-[#6b7280] no-underline hover:text-[#0B0A07] transition-colors"
          >
            Products
          </a>
          <a
            href="https://delivere.app"
            className="ml-1.5 inline-flex items-center gap-1.5 rounded-full bg-[#FF6B9D] px-[18px] py-[9px] text-[14px] font-extrabold text-white no-underline shadow-[0_8px_20px_rgba(255,107,157,.28)] hover:bg-[#FF5A8A] transition-colors"
          >
            Visit Deliver-E
          </a>
        </nav>
      </div>
    </header>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="w-full bg-[#f9fafb] border-t border-[rgba(0,0,0,.08)]">
      <div className="max-w-6xl mx-auto px-6 py-7 flex items-center justify-between gap-4 flex-wrap">
        <p className="m-0 text-[14px] font-medium text-[#6b7280]">
          © 2026 E 4 Holdings Proprietary Limited. All rights reserved.
        </p>
        <p className="m-0 text-[13px] font-medium text-[#9ca3af]">
          Registered in the Republic of Botswana · UIN BW00009650250
        </p>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CompanyPage() {
  return (
    <div
      className="min-h-screen font-[Urbanist,system-ui,sans-serif]"
      style={{ background: 'linear-gradient(180deg,#fff7f6 0%,#ffffff 28%,#f6fbf8 100%)' }}
    >
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-14 pb-10">
          <div className="max-w-3xl">
            <p className="m-0 text-[14px] font-semibold uppercase tracking-[0.24em] text-[#8f7f76]">
              Company · Republic of Botswana
            </p>
            <h1
              className="mt-[18px] mb-0 font-bold text-[#111111]"
              style={{
                fontSize: 'clamp(40px, 6vw, 64px)',
                letterSpacing: '-0.05em',
                lineHeight: 1.04,
              }}
            >
              E 4 Holdings Proprietary Limited
            </h1>
            <p className="mt-[22px] max-w-[640px] text-[19px] font-normal leading-[1.55] text-[#5f5752]">
              The registered technology company behind{' '}
              <a
                href="https://delivere.app"
                className="font-bold text-[#1e6f57] underline decoration-[#9fd4be] underline-offset-4"
              >
                Deliver-e
              </a>{' '}
              — the marketplace connecting customers, sellers, and drivers across
              Botswana.
            </p>
            <div className="mt-[26px] flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-[9px] rounded-full border border-[rgba(0,0,0,.08)] bg-[rgba(255,255,255,.85)] px-4 py-[9px] text-[14px] font-bold text-[#2b2522] shadow-[0_10px_24px_rgba(22,18,15,.08)]">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] shrink-0" />
                Registered &amp; Active
              </span>
              <span className="inline-flex items-center rounded-full border border-[rgba(0,0,0,.08)] bg-[rgba(255,255,255,.85)] px-4 py-[9px] text-[14px] font-semibold text-[#6b625c] shadow-[0_10px_24px_rgba(22,18,15,.08)]">
                UIN BW00009650250
              </span>
              <span className="inline-flex items-center rounded-full border border-[rgba(0,0,0,.08)] bg-[rgba(255,255,255,.85)] px-4 py-[9px] text-[14px] font-semibold text-[#6b625c] shadow-[0_10px_24px_rgba(22,18,15,.08)]">
                Incorporated 25 Feb 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Body: TOC + Content */}
      <section className="max-w-6xl mx-auto px-6 pt-2 pb-20">
        <div className="grid gap-8 items-start lg:grid-cols-[280px_minmax(0,1fr)]">

          {/* TOC Sidebar */}
          <aside className="lg:sticky lg:top-[104px]">
            <div className="rounded-[32px] border border-[rgba(0,0,0,.08)] bg-[rgba(255,255,255,.88)] p-6 shadow-[0_18px_40px_rgba(22,18,15,.08)] backdrop-blur-sm">
              <p className="m-0 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#8f7f76]">
                Contents
              </p>
              <nav className="mt-[18px] flex flex-col gap-2">
                {[
                  { href: '#registration', label: 'Company Registration' },
                  { href: '#documents', label: 'Verification Documents' },
                  { href: '#products', label: 'Our Products' },
                  { href: '#contact', label: 'Contact' },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="rounded-2xl px-3.5 py-2 text-[14px] font-medium text-[#3e3833] no-underline hover:bg-[#fff1f3] hover:text-[#1f1716] transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content column */}
          <div className="flex flex-col gap-6">

            {/* Overview banner */}
            <section
              className="rounded-[32px] border border-[#f3e2e4] p-8 shadow-[0_18px_40px_rgba(22,18,15,.08)]"
              style={{ background: 'linear-gradient(135deg,#ffe7eb 0%,#fff7f6 55%,#ffffff 100%)' }}
            >
              <p className="m-0 text-[13px] font-semibold uppercase tracking-[0.22em] text-[#8f7f76]">
                Overview
              </p>
              <p className="mt-4 max-w-3xl text-[17px] leading-[1.6] text-[#2b2522]">
                E 4 Holdings Proprietary Limited is a private company incorporated in
                the Republic of Botswana under the Companies Act CAP:42:01. It owns and
                operates the Deliver-e platform at delivere.app.
              </p>
            </section>

            {/* Company Registration */}
            <section
              id="registration"
              className="scroll-mt-[104px] rounded-[32px] border border-[rgba(0,0,0,.08)] bg-[rgba(255,255,255,.9)] p-8 shadow-[0_18px_40px_rgba(22,18,15,.08)]"
            >
              <h2 className="m-0 text-[30px] font-bold tracking-[-0.04em] text-[#121212]">
                Company Registration
              </h2>
              <p className="mt-3 text-[16px] leading-[1.6] text-[#5f5752]">
                As recorded in the Botswana companies register, maintained by the
                Registrar of Companies and Business Names.
              </p>

              {/* Fact tiles */}
              <div className="mt-6 grid gap-3.5 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
                {FACTS.map((f) => (
                  <FactTile key={f.label} label={f.label} value={f.value} />
                ))}
              </div>

              {/* Directors */}
              <div className="mt-7">
                <h3 className="m-0 mb-3.5 text-[19px] font-bold tracking-[-0.02em] text-[#1f1716]">
                  Directors
                </h3>
                <ul className="m-0 p-0 list-none grid gap-3 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
                  {DIRECTORS.map((d) => (
                    <DirectorCard key={d.name} name={d.name} />
                  ))}
                </ul>
              </div>

              {/* Secretary + Shareholders */}
              <div className="mt-6 grid gap-4 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
                {/* Company Secretary */}
                <div className="rounded-3xl border border-[rgba(0,0,0,.06)] bg-[#fff8f8] px-[22px] py-5">
                  <p className="m-0 text-[13px] font-bold uppercase tracking-[0.16em] text-[#8f7f76]">
                    Company Secretary
                  </p>
                  <p className="mt-3 text-[15.5px] font-bold text-[#2c2521]">
                    Luminary Creations Proprietary Limited
                  </p>
                  <p className="mt-1 text-[13.5px] font-medium leading-[1.5] text-[#6b625c]">
                    UIN BW00002428146 · Plot 17533, Broadhurst, Gaborone · Appointed
                    25 Feb 2026
                  </p>
                </div>

                {/* Shareholders */}
                <div className="rounded-3xl border border-[rgba(0,0,0,.06)] bg-[#fff8f8] px-[22px] py-5">
                  <p className="m-0 text-[13px] font-bold uppercase tracking-[0.16em] text-[#8f7f76]">
                    Shareholders
                  </p>
                  <ul className="mt-3 p-0 list-none flex flex-col gap-2">
                    {SHAREHOLDERS.map((s) => (
                      <ShareholderRow key={s.name} name={s.name} shares={s.shares} />
                    ))}
                  </ul>
                  <p className="mt-3.5 pt-3 border-t border-[rgba(0,0,0,.07)] text-[13px] font-semibold text-[#8f7f76]">
                    100 shares issued · Exempt from audit
                  </p>
                </div>
              </div>
            </section>

            {/* Verification Documents */}
            <section
              id="documents"
              className="scroll-mt-[104px] rounded-[32px] border border-[rgba(0,0,0,.08)] bg-[rgba(255,255,255,.9)] p-8 shadow-[0_18px_40px_rgba(22,18,15,.08)]"
            >
              <h2 className="m-0 text-[30px] font-bold tracking-[-0.04em] text-[#121212]">
                Verification Documents
              </h2>
              <p className="mt-3 text-[16px] leading-[1.6] text-[#5f5752]">
                Official documents issued by the Registrar of Companies and Business
                Names, Republic of Botswana.
              </p>

              {/* Document row */}
              <div className="mt-[22px] flex items-center gap-5 flex-wrap rounded-3xl border border-[#d7efe3] bg-[#f3fff8] px-6 py-[22px]">
                {/* Icon tile */}
                <div className="w-[54px] h-[54px] rounded-2xl bg-white border border-[#d7efe3] flex items-center justify-center shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1e6f57"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M9 15l2 2 4-4" />
                  </svg>
                </div>

                {/* Title + meta */}
                <div className="flex-1 min-w-[220px]">
                  <div className="text-[17px] font-extrabold text-[#163228]">
                    Certificate of Incorporation
                  </div>
                  <div className="mt-[3px] text-[13.5px] font-medium text-[#244138]">
                    Companies Act CAP:42:01 · Issued 25 February 2026 · PDF
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2.5 flex-wrap">
                  <a
                    href="/documents/E4-Holdings-Certificate-of-Incorporation.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#FF6B9D] px-5 py-[10px] text-[14px] font-extrabold text-white no-underline shadow-[0_8px_20px_rgba(255,107,157,.28)] hover:bg-[#FF5A8A] transition-colors"
                  >
                    View certificate
                  </a>
                  <a
                    href="/documents/E4-Holdings-Certificate-of-Incorporation.pdf"
                    download="E4-Holdings-Certificate-of-Incorporation.pdf"
                    className="inline-flex items-center gap-2 rounded-full border border-[#d7efe3] bg-white px-5 py-[10px] text-[14px] font-bold text-[#1e6f57] no-underline hover:bg-[#ecfdf3] transition-colors"
                  >
                    Download
                  </a>
                </div>
              </div>
            </section>

            {/* Our Products */}
            <section
              id="products"
              className="scroll-mt-[104px] rounded-[32px] border border-[rgba(0,0,0,.08)] bg-[rgba(255,255,255,.9)] p-8 shadow-[0_18px_40px_rgba(22,18,15,.08)]"
            >
              <h2 className="m-0 text-[30px] font-bold tracking-[-0.04em] text-[#121212]">
                Our Products
              </h2>

              <a
                href="https://delivere.app"
                className="no-underline block mt-[22px]"
              >
                <div className="group flex items-center gap-2 flex-wrap rounded-3xl border border-[rgba(0,0,0,.06)] bg-[#faf9f8] py-3 pr-6 pl-3 transition-[border-color,box-shadow] duration-200 hover:border-[#d7efe3] hover:shadow-[0_14px_30px_rgba(22,18,15,.10)]">
                  {/* Logo tile */}
                  <div className="flex items-center justify-center shrink-0 w-[132px] h-24 rounded-[18px] bg-white border border-[rgba(0,0,0,.05)]">
                    <img
                      src="/deliver-e-logo-trim.png"
                      alt="Deliver-e"
                      className="w-[100px] h-auto object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-[220px]">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-[20px] font-extrabold text-[#121212]">
                        Deliver-e
                      </span>
                      <span className="text-[12px] font-extrabold uppercase tracking-[0.06em] text-[#1e6f57] bg-[#ecfdf3] border border-[#d7efe3] rounded-full px-[11px] py-[3px]">
                        Live
                      </span>
                    </div>
                    <p className="mt-1.5 max-w-[460px] text-[14.5px] leading-[1.5] text-[#5f5752]">
                      An online marketplace connecting customers, sellers, and drivers —
                      owned and operated by E 4 Holdings.
                    </p>
                  </div>

                  {/* Domain */}
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-extrabold text-[#1e6f57] shrink-0">
                    delivere.app
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M8 7h9v9" />
                    </svg>
                  </span>
                </div>
              </a>
            </section>

            {/* Contact */}
            <section
              id="contact"
              className="scroll-mt-[104px] rounded-[32px] border border-[#d7efe3] bg-[#f3fff8] p-8 shadow-[0_18px_40px_rgba(22,18,15,.08)]"
            >
              <h2 className="m-0 text-[30px] font-bold tracking-[-0.04em] text-[#163228]">
                Contact
              </h2>
              <div className="mt-5 grid gap-[22px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
                <div>
                  <p className="m-0 text-[13px] font-bold uppercase tracking-[0.16em] text-[#6b9685]">
                    Email
                  </p>
                  <p className="mt-2 text-[17px]">
                    <a
                      href="mailto:hello@delivere.app"
                      className="font-bold text-[#1e6f57] underline decoration-[#9fd4be] underline-offset-4"
                    >
                      hello@delivere.app
                    </a>
                  </p>
                </div>
                <div>
                  <p className="m-0 text-[13px] font-bold uppercase tracking-[0.16em] text-[#6b9685]">
                    Registered Office
                  </p>
                  <p className="mt-2 text-[15.5px] font-semibold leading-[1.5] text-[#244138]">
                    5354, Old Industrial Site,
                    <br />
                    Mahalapye, Botswana
                  </p>
                  <p className="mt-1 text-[13.5px] font-medium text-[#6b9685]">
                    Postal: P O Box 2872, Mahalapye
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
