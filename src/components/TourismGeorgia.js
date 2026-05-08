'use client';
import React from 'react';
import '../styles/TourismGeorgia.css';
import { useLang } from '../components/LanguageContext';

const content = {
  eng: {
    features: [
      "Breathtaking nature: Caucasus Mountains, mineral springs, waterfalls, and lakes",
      "Mild climate all year round",
      "Affordable prices compared to Europe and neighboring countries",
      "Friendly locals who welcome visitors warmly",
      "Ideal for Gulf families: privacy, tradition, and luxury combined",
      "Wide range of activities: skiing, spa resorts, mountain hiking, modern shopping"
    ]
  },
  geo: {
    features: [
      "შვენიერი ბუნება: კავკასიონის მთები, მინერალური წყლები, ჩანჩქერები და ტბები",
      "ზომიერი კლიმატი მთელი წლის განმავლობაში",
      "მოსახერხებელი ფასები ევროპასთან შედარებით",
      "მეგობრული ხალხი – სტუმრებს დიდი სითბოთი ხვდებიან",
      "შესაფერისია არაბული ოჯახებისთვის: კონფიდენციალურობა, ტრადიციული გარემო, მაღალი დონის სერვისები",
      "მრავალფეროვანი აქტივობები: თხილამურები, სპა, მთის ტურები, შოპინგი"
    ]
  },
  ara: {
    features: [
      "طبيعة مذهلة: جبال القوقاز، ينابيع معدنية، شلالات، وبحيرات",
      "مناخ معتدل طوال العام، مع ثلوج شتوية وربيع مدهش",
      "أسعار معقولة مقارنة بأوروبا ودول الجوار",
      "شعب ودود يستقبلك بحب واحترام",
      "مناسب للعوائل الخليجية: خصوصية، أجواء محافظة، ومرافق راقية",
      "تنوع في الأنشطة: من التزلج والرحلات الجبلية إلى الحمامات الكبريتية والتسوق العصري"
    ]
  }
};

export default function TourismGeorgia() {
  const { lang } = useLang();
  const features = (content[lang] ?? content.ara).features;

  return (
    <div className="tourism-georgia-body">
      <div className="card-3d">
        {features.map((text, i) => (
          <div key={i}>
            <p className="tourism-georgia-text">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}