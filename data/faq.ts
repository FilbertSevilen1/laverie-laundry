export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "How does the same-day 12-hour hotel express laundry work?",
    answer: "Place your booking via WhatsApp or hotel concierge before 10:00 AM. Our team picks up your laundry bag directly from your hotel front desk or room lobby, meticulously processes and steams your garments, and delivers them back fresh and sealed the same evening before 10:00 PM."
  },
  {
    question: "Do you offer doorstep pickup for private residences and villas?",
    answer: "Yes! While our 12-hour express was designed with partner hotels and travelers in mind, we also service private residences, apartments, and villas within our delivery perimeter. Regular and express turnaround slots are available daily."
  },
  {
    question: "How do you handle delicate fabrics, designer wear, and suits?",
    answer: "Garments categorized under our Delicate & Premium care receive individual care labels inspection, cold ozone sanitization, pH-neutral eco detergents, and delicate steam pressing on hangers with breathable dust covers to protect fiber integrity."
  },
  {
    question: "What are the payment methods accepted?",
    answer: "We support seamless digital payments including Indonesian QRIS (GoPay, OVO, Dana, BCA Mobile), Bank Transfer, Credit/Debit cards, and room billing charge agreements for partner hotel guests."
  },
  {
    question: "What is the minimum order quantity for laundry pickup?",
    answer: "Our minimum pickup order is 3 KG for standard wash & fold, or a minimum order value of Rp 50.000 for express or delicate piece-rate dry clean services."
  }
];
