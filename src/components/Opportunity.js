'use client'
import React from 'react'
import { useLang } from './LanguageContext'
import '../styles/Opportunity.css'

const content = {
    geo: {
        title: "შესანიშნავი შესაძლებლობა 'იუტოპია'-სთან ერთად",
        lookingFor: "თუ ეძებთ საცხოვრებელს დასვენებისთვის, ინვესტიციურ ბინას სტაბილური შემოსავლით, გარემოს, სადაც გსურთ დამკვიდრება ",
        fullSupport: "იუტოპია გთავაზობთ სრულ მხარდაჭერას – კონსულტაციიდან დაწყებული საკუთრების მართვამდე, გაქირავებიდან იურიდიულ დაცვამდე – ყველაფერი გამჭვირვალედ და უსაფრთხოდ.",
        georgiaPlace: "საქართველო არის ადგილი, სადაც დასვენება ლამაზია და ინვესტიცია ჭკვიანი გადაწყვეტილება.",
        relax: "დაისვენეთ და ინვესტიცია ჩადეთ ერთდროულად – იუტოპია-სთან ერთად.",
    },
    eng: {
        title: "A Golden Opportunity with Utopia",
        lookingFor: "Whether you're looking for a vacation home, a high-return rental property, a new lifestyle in a safe, beautiful country ",
        fullSupport: "Utopia offers full support: From consultation to property purchase, from management to rental — with complete legal transparency and peace of mind.",
        georgiaPlace: "Georgia is the place where luxury living meets smart investing.",
        relax: "Relax, and invest — all at once — with Utopia.",
    },
    ara: {
        title: "الفرصة الآن مع يوتوبيا",
        lookingFor: "سواء كنت تبحث عن منزل لقضاء العطلات، شقة استثمارية تدر دخلاً منتظمًا، فرصة للاستقرار في بلد جميل وآمن ",
        fullSupport: "يوتوبيا تقدم لك كل الدعم اللازم: من الاستشارات إلى الشراء، من الإدارة إلى التأجير، بأمان قانوني وشفافية تامة.",
        georgiaPlace: "جورجيا هي المكان الذي يجمع بين رقيّ الإقامة، جمال الطبيعة، وقوة العائد الاستثماري.",
        relax: "استمتع بعطلتك، واستثمر في مستقبلك — مع يوتوبيا.",
    },
}

export default function Opportunity() {
    const { lang } = useLang()
    const { title, lookingFor, fullSupport, georgiaPlace, relax } = content[lang] ?? content.ara

    return (
        <div className="opportunity-body">
            <h2 className="opportunity-title">{title}</h2>
            <p className="looking-for">
                {lookingFor}
                {fullSupport}
            </p>
            <p className="georgia-place">{georgiaPlace}</p>
            <p className="relax">{relax}</p>
        </div>
    )
}