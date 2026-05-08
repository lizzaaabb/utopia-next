'use client'
import React from 'react'
import { useLang } from '../components/LanguageContext'
import '../styles/ReGeorgia.css'

const benefitIcons = [
    '/rre1.png',
    '/rre2.png',
    '/rre3.png',
    '/rre4.png',
    '/rre5.png',
    '/rre6.png',
]

const content = {
    eng: {
        title: 'Benefits of Real Estate Investment in Georgia',
        benefits: [
            'Easy ownership for foreigners. Anyone can fully own property in their name — legally and securely.',
            'Attractive property prices. High-end apartments or villas can cost a fraction of what you would pay in Europe or the Gulf.',
            'Strong rental returns. With a booming tourism market, short-term rentals yield consistent income.',
            'High demand from tourists. Over 9 million visitors annually — perfect for investing in hotel-style apartments or tourist units.',
            'Residency through property ownership. Buying property above a certain value qualifies you for legal residency.',
            'Low taxes & supportive government. Georgia ranks among the easiest countries in the world for doing business.',
        ],
    },
    geo: {
        title: 'უძრავი ქონების ინვესტიციის უპირატესობები საქართველოში',
        benefits: [
            'ადვილი საკუთრების გაფორმება უცხოელებისთვის. ნებისმიერ უცხოელს შეუძლია სრულად და კანონიერად ფლობდეს ქონებას საქართველოში.',
            'მიმზიდველი ფასები. ბინა ან ვილა შეიძლება ღირდეს 3-4-ჯერ ნაკლები, ვიდრე ევროპაში ან GCC ქვეყნებში.',
            'მაღალი გაქირავების შემოსავალი. ტურისტული ნაკადი მზარდია და სეზონი გრძელდება თითქმის მთელი წელი.',
            'მუდმივი მოთხოვნა ტურისტული ქონებაზე. წელიწადში 9 მილიონზე მეტი ტურისტი სტუმრობს საქართველოს – ინვესტიცია სასტუმრო ბინებში ძალიან მომგებიანია.',
            'მუდმივი ბინადრობა ქონების მეშვეობით. განსაზღვრული ღირებულების ქონების შეძენის შემთხვევაში შესაძლებელია ბინადრობის ნებართვის მიღება.',
            'დაბალი გადასახადები და მთავრობის მხარდაჭერა. საქართველო აღიარებულია როგორც ერთ-ერთი საუკეთესო ქვეყანა ბიზნესის გამარტივებისთვის.',
        ],
    },
    ara: {
        title: 'مكاسب الاستثمار العقاري في جورجيا',
        benefits: [
            'سهولة التملك للأجانب. يمكن لأي أجنبي تملك عقار باسمه مباشرة، بدون شركاء محليين، وبتسجيل قانوني شفاف خلال أيام.',
            'أسعار تنافسية. يمكنك شراء شقة أو فيلا راقية بسعر يعادل ربع ما تدفعه في أوروبا أو الخليج.',
            'عوائد إيجارية ممتازة. جورجيا بلد سياحي ناشئ، وموسمها ممتد، مما يجعل تأجير العقارات مربحًا طوال العام.',
            'طلب مرتفع من السياح. أكثر من 9 ملايين سائح يزورون جورجيا سنويًا، مما يجعل الاستثمار في الشقق الفندقية أو الوحدات السياحية فرصة حقيقية.',
            'الإقامة عبر التملك. يمكن الحصول على إقامة قانونية عبر امتلاك عقار بقيمة معينة.',
            'ضرائب منخفضة وتشجيع حكومي. جورجيا تصنف ضمن الدول الأفضل عالميًا في سهولة ممارسة الأعمال.',
        ],
    },
}

export default function ReGeorgia() {
    const { lang } = useLang()
    const { title, benefits } = content[lang] ?? content.ara

    return (
        <div className="re-georgia-body">
            <div className="re-georgia-benefits">
                <h2 className="re-georgia-benefits-title">{title}</h2>
                <div className="benefits-cards-container">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="benefit-card"
                            style={{ animationDelay: `${index * 0.12}s` }}
                        >
                            <div className="benefit-card-content">
                                <img
                                    src={benefitIcons[index % benefitIcons.length]}
                                    alt={`Benefit ${index + 1}`}
                                    className="benefit-icon"
                                />
                                <p className="benefit-text">{benefit}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}