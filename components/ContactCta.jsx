// components/ContactCta.jsx

"use client";

export default function ContactCta() {
  return (
    <a
      href="mailto:info@shipfeatures.dev?subject=Project%20Inquiry"
      onClick={() => {
        window.gtag?.("event", "contact_click", {
          method: "email",
          location: "homepage",
        });
      }}
      className="inline-block mt-8 rounded px-6 py-3 font-medium
                 bg-[color:var(--button-bg)] text-[color:var(--button-fg)]
                 hover:opacity-90"
    >
      Email me about a project
    </a>
  );
}
