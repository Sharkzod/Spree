const TEXT =
  "Limited collections ✦ Exclusive member drops ✦ Fast local delivery ✦ Early-access pricing ✦ Made for the streets ✦";

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-ash bg-ink py-[22px] text-paper">
      <div className="flex w-max animate-marquee gap-14 whitespace-nowrap">
        <span className="flex items-center gap-14 font-display text-lg font-semibold tracking-[.01em]">
          {TEXT}
        </span>
        <span className="flex items-center gap-14 font-display text-lg font-semibold tracking-[.01em]">
          {TEXT}
        </span>
      </div>
    </div>
  );
}
