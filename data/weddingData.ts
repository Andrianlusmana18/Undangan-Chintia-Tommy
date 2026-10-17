export interface CoupleInfo {
  name: string;
  fullName: string;
  role: string;
  father: string;
  mother: string;
  instagram: string;
  instagramUrl: string;
  image: string;
}

export interface EventInfo {
  title: string;
  badge: string;
  date: string;
  time: string;
  venueName: string;
  address: string;
  note?: string;
  googleMapsUrl: string;
  googleCalendarUrl: string;
  distanceInfo?: string;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  logo: string;
}

export interface WishMessage {
  id: string;
  name: string;
  status: "Hadir" | "Ragu" | "Maaf";
  message: string;
  timeAgo: string;
}

export const WEDDING_DATA = {
  general: {
    title: "WALIMATUL 'URS",
    coupleShort: "Chintia & Tommy",
    monogram: "C&T",
    weddingDate: "Sabtu, 28 November 2026",
    targetDateIso: "2026-11-28T08:00:00+07:00",
    audioTitle: "TEMAN HIDUP • TULUS",
    locationSummary: "BEKASI, JAWA BARAT",
    couplePhoto: "/images/couple-front.jpg",
  },
  groom: {
    name: "Tommy",
    fullName: "Tommy Halim",
    role: "MEMPELAI PRIA",
    father: "Bpk. Abdul Halim",
    mother: "Ibu Pahriyah",
    instagram: "@tommyhalim",
    instagramUrl: "https://instagram.com",
    image: "/images/couple-front.jpg",
  },
  bride: {
    name: "Chintia",
    fullName: "Chintia, S.M.",
    role: "MEMPELAI WANITA",
    father: "Bpk. Arnen",
    mother: "Ibu Siti",
    instagram: "@chintia",
    instagramUrl: "https://instagram.com",
    image: "/images/couple-front.jpg",
  },
  events: {
    akad: {
      badge: "PEMBERKATAN SUCI",
      title: "Akad Nikah",
      date: "Sabtu, 28 November 2026",
      time: "08.00 - 10.00 WIB",
      venueName: "Kediaman Mempelai",
      address: "Kampung Tapakserang RT 008 / RW 004, Desa Lenggahjaya, Kec. Cabangbungin, Kabupaten Bekasi, Jawa Barat",
      note: "Nuansa Formal Putih Bersih / Champagne Lembut",
      googleMapsUrl: "https://maps.app.goo.gl/yJAgCQxeYNpdMPx59",
      googleCalendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Akad+Nikah+Chintia+%26+Tommy&dates=20261128T010000Z/20261128T030000Z&details=Akad+Nikah+Chintia+S.M+%26+Tommy+Halim&location=Kampung+Tapakserang+RT+008+RW+004,+Desa+Lenggahjaya,+Kec.+Cabangbungin,+Kabupaten+Bekasi,+Jawa+Barat",
    },
    resepsi: {
      badge: "PERAYAAN BERSAMA",
      title: "Resepsi Pernikahan",
      date: "Sabtu, 28 November 2026",
      time: "10.00 WIB - Selesai",
      venueName: "Kediaman Mempelai",
      address: "Kampung Tapakserang RT 008 / RW 004, Desa Lenggahjaya, Kec. Cabangbungin, Kabupaten Bekasi, Jawa Barat",
      distanceInfo: "Desa Lenggahjaya, Kec. Cabangbungin, Kab. Bekasi",
      googleMapsUrl: "https://maps.app.goo.gl/yJAgCQxeYNpdMPx59",
      googleCalendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan+Chintia+%26+Tommy&dates=20261128T030000Z/20261128T080000Z&details=Resepsi+Pernikahan+Chintia+S.M+%26+Tommy+Halim&location=Kampung+Tapakserang+RT+008+RW+004,+Desa+Lenggahjaya,+Kec.+Cabangbungin,+Kabupaten+Bekasi,+Jawa+Barat",
    },
  },
  dressCode: {
    title: "Panduan Warna Tamu",
    subtitle: "Sentuhan warna busana yang selaras untuk mengabadikan memori penuh harmoni",
    note: "Pakaian Formal / Batik Modern / Gaun Elegan bernuansa pastel hangat",
    colors: [
      { name: "Rose Quartz", hex: "#E0A5A5" },
      { name: "Champagne", hex: "#CCA680" },
      { name: "Sage Green", hex: "#8E9E88" },
      { name: "Warm Ivory", hex: "#FAF6F0" },
    ],
  },
  liveStream: {
    title: "Live Streaming YouTube & Zoom",
    description: "Bagi sahabat dan keluarga terkasih yang berhalangan hadir secara langsung, doa restu Anda tetap dapat tersampaikan melalui tayangan interaktif kami.",
    youtubeUrl: "https://youtube.com",
    zoomUrl: "https://zoom.us",
  },
  stories: [
    {
      year: "2020",
      title: "Pertemuan Pertama",
      date: "14 Februari 2020",
      description: "Berawal dari perkenalan manis yang tak disangka, sapaan hangat dan tawa sederhana membuka gerbang kisah cinta kami berdua.",
    },
    {
      year: "2022",
      title: "Masa Bersemi Kasih",
      date: "20 Mei 2022",
      description: "Menemukan begitu banyak kesamaan mimpi dan saling menguatkan di setiap langkah kehidupan, kami bertekad merajut komitmen bersama.",
    },
    {
      year: "2025",
      title: "Ikatan Janji & Lamaran",
      date: "15 September 2025",
      description: "Dikelilingi oleh kehangatan keluarga tercinta, janji suci pertunangan terukir indah saat Tommy melamar Chintia untuk melangkah ke jenjang pernikahan.",
    },
    {
      year: "2026",
      title: "Menuju Pelaminan",
      date: "28 November 2026",
      description: "Dengan memohon doa dan ridho Allah SWT serta restu orang tua, kami siap mengikrarkan akad suci pernikahan sehidup sesurga.",
    },
  ],
  bankAccounts: [
    {
      bankName: "BANK CENTRAL ASIA",
      accountHolder: "Chintia S.M",
      accountNumber: "8170 9181 44",
      logo: "BCA",
    },
    {
      bankName: "BANK MANDIRI",
      accountHolder: "Tommy Halim",
      accountNumber: "1370 0291 8820",
      logo: "MANDIRI",
    },
  ],
  giftAddress: {
    recipient: "Chintia, S.M. & Tommy Halim",
    phone: "0812-8890-4521",
    address: "Kampung Tapakserang RT 008 / RW 004, Desa Lenggahjaya, Kec. Cabangbungin, Kabupaten Bekasi, Jawa Barat",
  },
  initialWishes: [
    {
      id: "1",
      name: "Iliana Kusuma",
      status: "Hadir" as const,
      message: "Selamat menempuh babak baru kehidupan, Chintia & Tommy! Semoga cinta kasih kalian selalu diberkahi ketenangan dan kebahagiaan abadi.",
      timeAgo: "10 menit yang lalu",
    },
    {
      id: "2",
      name: "Bimo Perkasa & Keluarga",
      status: "Hadir" as const,
      message: "Baarakallahu laka wa baaraka 'alaika wa jama'a bainakuma fii khoir untuk Chintia & Tommy. Sampai jumpa di hari bahagia nanti!",
      timeAgo: "1 jam yang lalu",
    },
    {
      id: "3",
      name: "Siti & Adrian",
      status: "Ragu" as const,
      message: "Happy wedding Chintia & Tommy! Kami usahakan hadir, semoga seluruh rangkaian acara berjalan lancar dan penuh berkah.",
      timeAgo: "3 jam yang lalu",
    },
    {
      id: "4",
      name: "Rizky Firmansyah",
      status: "Hadir" as const,
      message: "Masya Allah, selamat Tommy sahabat terbaikku & Chintia! Lancar sampai hari H ya kawan, samawa selalu!",
      timeAgo: "5 jam yang lalu",
    },
  ] as WishMessage[],
};
