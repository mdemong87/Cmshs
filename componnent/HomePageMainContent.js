import React from 'react';
import Option from "../componnent/Opinion";
import img from "../public/profile.jpg";

export default function HomePageMainContent() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <Option img={img} heading={"প্রতিষ্ঠানের ইতিহাস"} dis={"মানুষের জীবনের শ্রেষ্ঠ অর্জন হল শিক্ষা । শিক্ষার প্রথম এবং প্রধান কাজ হল পরিবেশের সাথে শিক্ষার্থীর সংগতি বিধান করা । শিক্ষা অর্জনে আনুষ্ঠানিক শিক্ষার গুরুত্ব অনস্বীকার্য আর আনুষ্ঠানিক শিক্ষা অর্জনে শিক্ষা প্রতিষ্ঠান তথা বিদ্যালয়ের কোন বিকল্প নেই । তাই দিনাজপুর সরকারি বালিকা উচ্চ বিদ্যালয় দীর্ঘ দিন ধরে শিক্ষা অর্জনের লক্ষ্যে সে ভূমিকা নিষ্ঠার সাথে পালন করে আসছে । উত্তরাঞ্চল তথা সমগ্র বাংলাদেশে যে কয়টি আদর্শ শিক্ষা প্রতিষ্ঠান রয়েছে, দিনাজপুর সরকারি বালিকা উচ্চ বিদ্যালয় নিঃসন্দেহে তাদের অন্যতম । সু-প্রসিদ্ধ কাটারী ভোগ চাল আরত রসাল লিচুর জেলা দিনাজপুর । সেই জেলার মাঝ দিয়ে বয়ে গেছে পুনর্ভবা নদী । এই নদীর প্রায় ছয় কিলোমিটার পুর্বে সমান্তরাল ভাবে বহমান ছিল গর্ভেশ্বরী নদী । কালের বিবর্তনে যা আজ মরা নদীর রূপ নিয়েছে । এই দুই নদীর মাঝখানে গড়ে উঠেছিল একটি বন্দর নগরী । এই বন্দর নগরীর আধুনিক রূপ আজকের দিনাজপুর শহর । আর এই শহরের প্রাণ কেন্দ্রে এক মনোরম পরিবেশে এই বিদ্যালয়টি অবস্থিত ।"} />


            <Option heading={"প্রধান শিক্ষকের বাণী"} img={img} dis={"তথ্য ও যোগাযোগের প্রযুক্তি (Information and Communication Technology-ICT) মানুষের জীবন ধারণের পদ্ধতিকে বদলে দিয়েছে- জীবনকে করেছে সহজ ও আনন্দময়।  তাই দিনাজপুর সরকারি বালিকা উচ্চ বিদ্যালয় দীর্ঘ দিন ধরে শিক্ষা অর্জনের লক্ষ্যে সে ভূমিকা নিষ্ঠার সাথে পালন করে আসছে । উত্তরাঞ্চল তথা সমগ্র বাংলাদেশে যে কয়টি আদর্শ শিক্ষা প্রতিষ্ঠান রয়েছে, দিনাজপুর সরকারি বালিকা উচ্চ বিদ্যালয় নিঃসন্দেহে তাদের অন্যতম । সু-প্রসিদ্ধ কাটারী ভোগ চাল আরত রসাল লিচুর জেলা দিনাজপুর । সেই জেলার মাঝ দিয়ে বয়ে গেছে পুনর্ভবা নদী । "} />
        </div>
    )
}
