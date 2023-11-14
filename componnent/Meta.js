import Head from "next/head";


export default function Meta({ title }) {

  const defaultSEO = {
    title: 'চান্দাশ মখদুম শাহ্ উচ্চ বিদ্যালয়',
    description: "চান্দাশ মখদুম শাহ্ উচ্চ বিদ্যালয়টি মনোরম ও সুন্দর পরিবেশে আবস্থিত। যা ১৯৪০ইং সালে জুনিয়র মাদ্রাসা থেকে ০১-০১-১৯৬৬ইং সালে মাধ্যমিক বিদ্যালয়ে রুপান্তরিত হয়ে ০১-০৬-১৯৮৫ইং সালে প্রথম এমপিও ভূক্ত হন। ওলি আওলিয়ার নামে প্রতিষ্ঠানটির নাম করণ করা হয়। বর্তমানে দৃশ্যমান ৪ (চার) তলা বিশিষ্ট নতুন একাডেমিক ভবনের পাশে পুকুর সহ বিদ্যালয় সংলগ্ন বিশাল খেলার মাঠ রয়েছে যা অত্র এলাকার ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান নামে খ্যাত",
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: process.env.NEXT_PUBLIC_BASE_URL,
      site_name: 'চান্দাশ মখদুম শাহ্ উচ্চ বিদ্যালয়',
    }
  };



  return (
    <Head>
      <title>{title ? title : defaultSEO.title}</title>
      <meta name="description" content={defaultSEO.description} />
      {/* OpenGraph meta tags */}
      <meta property="og:type" content={defaultSEO.openGraph.type} />
      <meta property="og:locale" content={defaultSEO.openGraph.locale} />
      <meta property="og:url" content={defaultSEO.openGraph.url} />
      <meta property="og:site_name" content={defaultSEO.openGraph.site_name} />
      {/* title icon */}
      <link rel="icon" href="./logo.png" type="image/png" />
    </Head>
  )
}
