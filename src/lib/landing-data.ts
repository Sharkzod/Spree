export interface Drop {
  name: string;
  price: string;
  old: string | null;
  num: string;
  img: string;
}

export const DROPS: Drop[] = [
  {
    name: "Street Style Puffer",
    price: "₦119,000",
    old: "₦149,000",
    num: "Drop 01",
    img: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80",
  },
  {
    name: "Oversized Graphic Tee",
    price: "₦36,000",
    old: "₦44,000",
    num: "Drop 02",
    img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80",
  },
  {
    name: "Denim Trucker Jacket",
    price: "₦76,000",
    old: null,
    num: "Drop 03",
    img: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&q=80",
  },
];

export interface Step {
  title: string;
  desc: string;
}

export const STEPS: Step[] = [
  {
    title: "Browse the drop",
    desc: "New limited collections land every week. Members see them first, days before the public.",
  },
  {
    title: "Reserve your size",
    desc: "Pick your pieces and lock your size in a tap. Limited stock means once it's gone, it's gone.",
  },
  {
    title: "Delivered to you",
    desc: "We bring it to your door — same week in launch cities, with tracking the whole way.",
  },
];

export interface City {
  abbr: string;
  name: string;
  sub: string;
  status: "live" | "soon";
  label: string;
}

export const CITIES: City[] = [
  { abbr: "LG", name: "Lagos", sub: "Same-week delivery", status: "live", label: "Launching" },
  { abbr: "AB", name: "Abuja", sub: "Same-week delivery", status: "live", label: "Launching" },
  { abbr: "PH", name: "Port Harcourt", sub: "Next in the rollout", status: "soon", label: "Soon" },
  { abbr: "IB", name: "Ibadan", sub: "Voting open on the waitlist", status: "soon", label: "Soon" },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "What exactly is Spree?",
    a: "A premium streetwear label built around limited, exclusive drops. Instead of endless racks, we release small collections you won't find anywhere else — and deliver them straight to your door.",
  },
  {
    q: "What does joining the waitlist actually get me?",
    a: "You lock in 15% off your first order, free first delivery, early access to every collection before the public, and the chance at launch-only limited pieces. It's the best deal we'll ever offer.",
  },
  {
    q: "Does it cost anything to join?",
    a: "Nothing. The waitlist is completely free. You're simply reserving your spot and your member perks ahead of launch.",
  },
  {
    q: "When does the first collection drop?",
    a: "We're launching this season — the exact date is on the countdown above. Everyone on the waitlist gets an email and SMS the moment it goes live.",
  },
  {
    q: "Where do you deliver?",
    a: "We're launching in Lagos and Abuja first, then expanding city by city. When you join we ask for your city so we can prioritise where demand is highest — your answer helps decide where we go next.",
  },
  {
    q: "How will you contact me?",
    a: "Only about the launch and your member perks. We'll email you (and text, if you share your number) when the drop is live. No spam, and you can unsubscribe anytime.",
  },
];
