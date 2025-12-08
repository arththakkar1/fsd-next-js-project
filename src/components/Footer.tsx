"use client";

export default function Footer() {
  return (
    <footer className="bg-[#f0e8dd] border-t border-black/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-full bg-[#789e99] text-white flex items-center justify-center text-[0.65rem] font-semibold">
            PB
          </span>
          <span>© 2025 PureBrush. All rights reserved.</span>
        </div>

        <div className="flex gap-4">
          <a href="#benefits">Benefits</a>
          <a href="#how-it-works">How it works</a>
          <a href="#bestsellers">Shop</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>
    </footer>
  );
}
