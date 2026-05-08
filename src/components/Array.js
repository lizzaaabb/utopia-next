// src/Array.js

// A single constant holding the "7 Nights / 8 Days" program in multiple languages.
export const sevenNightsEightDays = {
  // English version
  eng: { // <--- Changed from 'en' to 'eng'
    title: "7 Nights / 8 Days Program",
    duration: "8 Days",
    groupSize: "Max 15 people",
    itinerary: [
      {
        day: "Day 1",
        description: "Arrival at Tbilisi International Airport and transfer to the hotel for check-in, followed by a visit to the old capital, the Bridge of Peace, and the European Park. Then take the cable car to visit the statue of “Mother of Georgians,” descend to the Botanical Garden to see the waterfall, Lovers' Bridge, the sulfur baths, and the Tbilisi mosque. After that, dinner and return to the hotel for overnight stay."
      },
      {
        day: "Day 2",
        description: "Visit to Turtle Lake and the history museum, followed by lunch and rest. An evening tour to Mtatsminda Park, then dinner and return to the hotel for overnight stay."
      },
      {
        day: "Day 3",
        description: "Visit to the historic Ananuri Fortress located on the breathtakingly scenic Ananuri Lake, then head toward the Caucasus Mountains passing through the Basanuri area. Ascend to the highest peak of the Caucasus Mountains at an altitude of 2750 meters to enjoy the panoramic balcony view in Gudauri. Enjoy lunch and spend the rest of the day there, then return to the hotel for overnight stay."
      },
      {
        day: "Day 4",
        description: "Depart from the hotel after breakfast and head to the city of Borjomi. Visit Borjomi Park, known for its healthy natural underground water, and see the Borjomi Waterfall. Take the cable car to the mountain top and descend again. Have lunch and rest, followed by an evening tour to the tourist bazaar outside the park which offers Georgian souvenirs. Then head to the hotel for check-in and overnight stay."
      },
      {
        day: "Day 5",
        description: "Depart from the hotel after breakfast and head to Sighnaghi, Georgia's city of love. It is one of the most attractive towns for those seeking peace and tranquility. Everything in Sighnaghi is charming and beautiful—from the cobblestone streets to the romantic scenery of its delicately designed architecture. As you stroll through Sighnaghi, you may feel like you've stepped into one of Italy’s romantic cities or are walking through the pages of a classic love story, like Romeo and Juliet. The widespread balconies with their antique architecture make tourism in Sighnaghi a journey into the city of love."
      },
      {
        day: "Day 6",
        description: "Tour to the city of Mtskheta (the ancient capital of Georgia), where you can visit the elevated Jvari Monastery, offering a view of the confluence of two rivers (Mtkvari and Aragvi), each maintaining its distinct color. Then head to the Mtskheta tourist bazaar with Georgian souvenirs, enjoy lunch, and return to the hotel for overnight stay."
      },
      {
        day: "Day 7",
        description: "Depart from the hotel after breakfast and go shopping at Tbilisi Mall, followed by free time for individual exploration. Return to the Tbilisi hotel for check-in and overnight stay."
      },
      {
        day: "Day 8",
        description: "Depart from the hotel after breakfast and head to Tbilisi International Airport for departure."
      }
    ],
    inclusions: {
      title: "The Trip Includes:",
      items: [
        "Double hotel rooms including breakfast.",
        "Transportation.",
        "Transfer to and from Tbilisi International Airport.",
        "Transportation between cities during tours.",
        "English-speaking tour guide.",
        "Mobile SIM card including internet data package.",
        "Transportation of tourists to halal restaurants."
      ]
    },
    exclusions: {
      title: "The Trip Does Not Include:",
      items: [
        "International flight tickets.",
        "Cable car tickets and entrance fees to tourist sites.",
        "Lunch and dinner."
      ]
    },
    optionalActivities: {
        title: "Optional Activities (Extra Fee):",
        items: [
            "Traditional Georgian dinner",
            "A private place to cook Georgian food yourself",
            "Photographer",
            "Bird hunting, fishing, and archery (in designated areas)",
            "Rage room",
            "(Halal) barbecue parties",
            "Mount Gomi above the clouds + camping",
            "A special romantic night on the glass bridge",
            "Hot air balloon",
            "Self-discovery museum",
            "Arabic translator guide (female or male)",
            "All water activities including (yacht - boat - rafting - water parachuting - jet ski)",
            "Sulfur bath – Spa",
            "Bicycle – Beach buggy"
        ]
    },
    farewell: "We wish you a safe arrival and a pleasant journey."
  },

  // Arabic version
  ara: { // <--- Changed from 'ar' to 'ara'
    title: "برنامج 7 ليالي 8 أيام",
    itinerary: [
      {
        day: "اليوم الأول",
        description: "الوصول إلى مطار تبليسي الدولي والانتقال إلى الفندق لاستلام الغرف، ثم زيارة العاصمة القديمة وكوبري السلام والحديقة الأوروبية وركوب التليفريك لزيارة تمثال \"أم الجورجيين\" والنزول إلى حديقة النباتات لمشاهدة شلال حديقة النباتات وكوبري العشاق والحمامات الكبريتية ومسجد تبليسي وبعدها تناول وجبة العشاء ثم الذهاب إلى الفندق للمبيت."
      },
      {
        day: "اليوم الثاني",
        description: "زيارة بحيرة السلاحف والمتحف التاريخي ثم وقت للغداء والراحة، وجولة مسائية لزيارة متاتسميندا بارك ثم الذهاب لتناول وجبة العشاء ثم الذهاب إلى الفندق للمبيت."
      },
      {
        day: "اليوم الثالث",
        description: "بقلعة انانوري التاريخية والتي تقع على بحيرة انانوري ذات المشهد الطبيعي فائق الجمال ثم التوجه إلى جبال القوقاز مروراً بمنطقة باسانوري ثم الصعود إلى أعلى قمة في جبال القوقاز والتي يصل ارتفاعها 2750 متر والاستمتاع بالمشهد الطبيعي للجبال الخضراء من أعلى بانوراما بلكوني بمدينة جوداوري وأخذ وقت للغداء والاستمتاع بباقي اليوم ثم العودة إلى الفندق للمبيت."
      },
      {
        day: "اليوم الرابع",
        description: "التحرك من الفندق بعد تناول وجبة الإفطار والتوجه إلى مدينة برجومي وزيارة حديقة برجومي والتي بها المياه الجوفية الطبيعية الصحية ورؤية شلال برجومي وركوب التلفريك ثم الصعود إلى أعلى الجبل ثم النزول مرة أخرى وأخذ وقت للغداء والراحة، ثم جولة مسائية لزيارة البازار السياحي خارج البارك والذي به الهدايا التذكارية الجورجية ثم التوجه إلى الفندق لاستلام الغرف والمبيت."
      },
      {
        day: "اليوم الخامس",
        description: "التحرك من الفندق بعد تناول وجبة الإفطار والذهاب إلى مدينة الحب الجورجية سغناغي، هي واحدة من أكثر المدن الجاذبة لمن يتطلعون لقضاء أوقات من الهدوء والطمأنينة، فكل شيء في سغناغي لطيف وجميل؛ بداية من الشوارع المرصوفة بالحصى، والمشهد الرومانسي الساحر لمبانيها التي تمتاز بهندستها الرقيقة الخاصة، لتشعر أثناء تجولك في سغناغي جورجيا وكأنك زرت إحدى مدن العشق الإيطالية، أو أنك تتنزه بين فصول إحدى روايات الحب العالمية، مثل روميو وجوليت، خصوصاً عندما تنظر لتلك الشرفات المنتشرة التي تمتاز بفنها المعماري القديم، حيث تعني السياحة في سغناغي أن تكون في مدينة الحب."
      },
      {
        day: "اليوم السادس",
        description: "جولة إلى مدينة متسخيتا (العاصمة القديمة لجورجيا) وبها قلعة جفاري المرتفعة والتي يمكن منها رؤية المشهد الطبيعي لالتقاء النهرين (نهر متكفاري ونهر أراجفي) مع احتفاظ كل منهما بلونه الخاص. ثم نتوجه إلى زيارة بازار متسخيتا السياحي والذي به الهدايا التذكارية الجورجية وأخذ وقت للغداء ثم الذهاب إلى الفندق للمبيت."
      },
      {
        day: "اليوم السابع",
        description: "التحرك من الفندق بعد تناول وجبة الإفطار والذهاب إلى تبليسي مول للتسوق ثم الذهاب في جولة حرة والعودة إلى فندق تبليسي لاستلام الغرف والمبيت."
      },
      {
        day: "اليوم الثامن",
        description: "التحرك من الفندق بعد تناول وجبة الفطور والمغادرة إلى مطار تبليسي الدولي."
      }
    ],
    inclusions: {
      title: "الرحلة تشمل:",
      items: [
        "غرف فندقية مزدوجه تشمل وجبه الإفطار.",
        "المواصلات.",
        "الانتقال من وإلى مطار تبليسي الدولي.",
        "الانتقال بين المدن خلال الزيارات.",
        "مرشد سياحي يتحدث الإنجليزية.",
        "خط هاتف موبايل يشمل باقة بيانات إنترنت.",
        "توصيل السائحين إلى المطاعم الحلال."
      ]
    },
    exclusions: {
      title: "الرحلة لا تشمل:",
      items: [
        "تذاكر الطيران الدولي.",
        "تذاكر ركوب التليفريك ودخول الأماكن السياحية.",
        "وجبات الغداء والعشاء."
      ]
    },
    optionalActivities: {
        title: "أنشطة برسوم إضافية (اختياري):",
        items: [
            "عشاء جورجي تقليدي",
            "مكان خاص لطهي الطعام الجورجي بنفسك",
            "مصور فوتوغرافي",
            "صيد الطيور وصيد الأسماك وألعاب الرماية (في الأماكن المخصصة)",
            "غرفة الغضب",
            "حفلات الشواء (حلال)",
            "جبل جومي فوق السحاب والتخييم",
            "ليلة رومانسية خاصة على الجسر الزجاجي",
            "منطاد الهواء",
            "متحف الذات",
            "مترجم عربي دليل (بنت أو ولد)",
            "جميع الألعاب المائية تشمل (يخت - قارب - تجديف - القفز بالمظلات المائية - جت سكي)",
            "حمام كبريت – سبا",
            "دراجة – بيتش بجي"
        ]
    },
    farewell: "مع كامل تمنياتنا لكم بسلامة الوصول"
  }
};

export const nineNightsTenDays = {
  // English 'eng' content
  eng: { // <--- Changed from 'en' to 'eng'
    title: "9 Nights / 10 Days Program",
    duration: "10 Days",
    groupSize: "Max 12 people",
    itinerary: [
      {
        day: "Day 1",
        description: "Arrival at Tbilisi International Airport, transfer to the hotel for check-in, then visit the old capital, the Bridge of Peace, and the European Park. Take the cable car to the “Mother of Georgians” statue, descend into the Botanical Garden to see the waterfall, Lovers’ Bridge, the sulfur baths, and the Tbilisi Mosque. Then enjoy dinner and return to the hotel for overnight stay."
      },
      {
        day: "Day 2",
        description: "Visit to Turtle Lake and the history museum, followed by time for lunch and rest. Evening tour to Mtatsminda Park, then dinner and return to the hotel for overnight stay."
      },
      {
        day: "Day 3",
        description: "Head to the Caucasus Mountains, passing through the historic Ananuri Fortress, located on the scenic Ananuri Lake. Continue through Basanuri area, ascend to the highest peak in the Caucasus Mountains (2750m), and enjoy the panoramic balcony view of the green mountains in Gudauri. Lunch and free time, then return to the hotel for overnight stay."
      },
      {
        day: "Day 4",
        description: "Depart from the hotel after breakfast and head to Bakuriani, where you can enjoy: Winter sports like skiing, Wellness resorts (spa) for relaxation, Hiking, camping, and exploring beautiful nature, Horseback and bike riding, Scenic cable car rides, Ideal springs for fishing."
      },
      {
        day: "Day 5",
        description : "Depart from the hotel after breakfast and head to Borjomi. Visit the park with natural healing water, see the waterfall, and take the cable car to the top and down the mountain. Lunch and rest. Evening visit to the souvenir bazaar, then head to Batumi (Pearl of the Black Sea), where we ride the Batumi cable car from the shore to Mount Argo’s peak for a panoramic view. Then descend, dinner, and overnight at the hotel."
      },
      {
        day: "Day 6",
        description: "Visit Batumi’s National Botanical Garden, a 110-hectare nature reserve and the largest bamboo garden in Europe. Explore the garden and enjoy mountain and coastal views. Lunch and rest, followed by an evening tour to the Alphabet Tower and the “Ali and Nino” statue. Then dinner and return to the hotel."
      },
      {
        day: "Day 7",
        description: "Visit Makhuntseti area, including the historic Queen Tamar Bridge, an arched structure with unique design. Then visit Makhuntseti Waterfall. Lunch in Tkhilnari town, return to the hotel to rest. Evening dolphin show—one of Batumi’s most joyful attractions."
      },
      {
        day: "Day 8",
        description: "Travel back to Tbilisi via Martvili. Visit Martvili waterfalls, the glass bridge, and take a boat along the underground river to see fossilized waterfalls, underground rivers, and cave lakes. Lunch, then return to Tbilisi for overnight stay."
      },
      {
        day: "Day 9",
        description: "Tour to Mtskheta (ancient capital), visit the elevated Jvari Monastery to view the confluence of the Mtkvari and Aragvi rivers, each keeping its color. Visit Mtskheta souvenir bazaar, lunch, then shop at Tbilisi Mall and return to the hotel."
      },
      {
        day: "Day 10",
        description: "Check out from the hotel after breakfast and depart to Tbilisi International Airport."
      }
    ],
    inclusions: {
      title: "The Trip Includes:",
      items: [
        "Double hotel rooms with breakfast",
        "Transportation",
        "Transfers to/from Tbilisi Airport",
        "Inter-city transfers during tours",
        "English-speaking tour guide",
        "Mobile SIM with data",
        "Halal restaurant transfers"
      ]
    },
    exclusions: {
      title: "The Trip Does Not Include:",
      items: [
        "International flight tickets",
        "Cable car and entrance tickets",
        "Lunch and dinner"
      ]
    },
    optionalActivities: {
        title: "Optional Paid Activities:",
        items: [
            "Traditional Georgian dinner",
            "Private Georgian cooking class",
            "Photographer",
            "Bird/fish hunting, archery (in designated areas)",
            "Rage Room",
            "Halal BBQ",
            "Jomi Mountain camping",
            "Romantic night on the glass bridge",
            "Hot air balloon",
            "Self-discovery museum",
            "Arabic-speaking guide (female or male)",
            "All water activities (yacht, boat, rafting, parasailing, jet ski)",
            "Sulfur bath, spa",
            "Bicycles, beach buggy"
        ]
    },
    farewell: "We wish you a safe arrival and a pleasant journey."
  },

  // Arabic 'ara' content
  ara: { // <--- Changed from 'ar' to 'ara'
    title: "برنامج 9 ليالي 10 أيام",
    itinerary: [
      {
        day: "اليوم الأول",
        description: "الوصول إلى مطار تبليسي الدولي والانتقال إلى الفندق لاستلام الغرف، ثم زيارة العاصمة القديمة وكوبري السلام والحديقة الأوروبية وركوب التليفريك لزيارة تمثال \"أم الجورجيين\" والنزول إلى حديقة النباتات لمشاهدة شلال حديقة النباتات وكوبري العشاق والحمامات الكبريتية ومسجد تبليسي وبعدها تناول وجبة العشاء ثم الذهاب إلى الفندق للمبيت."
      },
      {
        day: "اليوم الثاني",
        description: "زيارة بحيرة السلاحف والمتحف التاريخي ثم وقت للغداء والراحة، وجولة مسائية لزيارة متاتسميندا بارك ثم الذهاب لتناول وجبة العشاء ثم الذهاب إلى الفندق للمبيت."
      },
      {
        day: "اليوم الثالث",
        description: "التوجه إلى جبال القوقاز مروراً بقلعة انانوري التاريخية والتي تقع على بحيرة انانوري ذات المشهد الطبيعي فائق الجمال ثم نكمل مروراً بمنطقة باسانوري ثم الصعود إلى أعلى قمة في جبال القوقاز والتي يصل ارتفاعها 2750 متر والاستمتاع بالمشهد الطبيعي للجبال الخضراء من أعلى بانوراما بلكوني بمدينة جوداوري وأخذ وقت للغداء والاستمتاع بباقي اليوم ثم العودة إلى الفندق للمبيت."
      },
      {
        day: "اليوم الرابع",
        description: "التحرك من الفندق بعد تناول وجبة الإفطار والتوجه إلى مدينة باكورياني والتي يوجد بها: الرياضات الشتوية كالتزلج على الجليد، المنتجعات الصحية (سبا) للاسترخاء وتجديد النشاط، تسلق الجبال والتجول في أحضان الطبيعة، ركوب الخيل والدراجات، رحلات التليفريك، الينابيع المثالية لصيد الأسماك."
      },
      {
        day: "اليوم الخامس",
        description: "التحرك من الفندق بعد تناول وجبة الإفطار والتوجه إلى مدينة برجومي وزيارة حديقة برجومي التي تحتوي على المياه الجوفية الصحية، رؤية الشلال، وركوب التلفريك للصعود والنزول من الجبل. وقت للغداء والراحة، ثم جولة مسائية لزيارة البازار السياحي، ثم التوجه إلى مدينة باتومي (لؤلؤة البحر الأسود). هناك، نركب تلفريك باتومي من الساحل إلى قمة جبل أرجو لرؤية المدينة كاملة. ثم النزول، عشاء، والعودة إلى الفندق للمبيت."
      },
      {
        day: "اليوم السادس",
        description: "زيارة حديقة النباتات الوطنية في باتومي، محمية طبيعية مساحتها 110 هكتار، وتعد أكبر حديقة بامبو في أوروبا. التنزه داخلها ومشاهدة المناظر الجبلية والساحلية. وقت للغداء والراحة، ثم جولة مسائية لزيارة برج الحروف الأبجدية وتمثال علي ونينو، ثم عشاء والعودة للفندق."
      },
      {
        day: "اليوم السابع",
        description: "زيارة منطقة ماخونساتي، حيث كوبري الملكة تمارا التاريخي المصمم على شكل قوس، ثم شلال ماخونساتي. الغداء في مدينة تخلناري، ثم العودة للفندق للراحة. جولة مسائية لحضور عرض الدلافين الموسيقي، وهو من أبرز معالم باتومي."
      },
      {
        day: "اليوم الثامن",
        description: "التحرك للعودة إلى تبليسي مروراً بمنطقة مارتفيلي، وزيارة شلالات مارتفيلي، الجسر الزجاجي، وركوب القارب في نهر تحت الأرض لمشاهدة الشلالات المتحجرة، الأنهار الجوفية، والبحيرات. الغداء، ثم العودة والمبيت بتبليسي."
      },
      {
        day: "اليوم التاسع",
        description: "جولة إلى مدينة متسخيتا (العاصمة القديمة)، وزيارة قلعة جفاري المرتفعة لمشاهدة التقاء نهري متكفاري وأراجفي، كل منهما بلونه الخاص. زيارة بازار متسخيتا للهدايا التذكارية، الغداء، ثم التسوق في تبليسي مول والعودة للفندق."
      },
      {
        day: "اليوم العاشر",
        description: "التحرك من الفندق بعد تناول وجبة الإفطار والمغادرة إلى مطار تبليسي الدولي."
      }
    ],
    inclusions: {
      title: "الرحلة تشمل:",
      items: [
        "غرف فندقية مزدوجة تشمل وجبة الإفطار",
        "المواصلات",
        "الانتقال من وإلى مطار تبليسي",
        "التنقل بين المدن خلال الجولات",
        "مرشد سياحي بالإنجليزية",
        "خط هاتف مع باقة إنترنت",
        "التوصيل إلى مطاعم حلال"
      ]
    },
    exclusions: {
      title: "الرحلة لا تشمل:",
      items: [
        "تذاكر الطيران الدولي",
        "تذاكر التليفريك ودخول الأماكن السياحية",
        "الغداء والعشاء"
      ]
    },
    optionalActivities: {
        title: "أنشطة برسوم إضافية (اختيارية):",
        items: [
            "عشاء جورجي تقليدي",
            "مكان خاص لطهي الطعام الجورجي",
            "مصور فوتوغرافي",
            "صيد الطيور والأسماك، ألعاب الرماية (في أماكن مخصصة)",
            "غرفة الغضب",
            "حفلات شواء (حلال)",
            "جبل جومي والتخييم",
            "ليلة رومانسية على الجسر الزجاجي",
            "منطاد الهواء",
            "متحف الذات",
            "مترجم عربي (أنثى أو ذكر)",
            "جميع الألعاب المائية (يخت - قارب - تجديف - جت سكي - قفز بالمظلات)",
            "حمام كبريت، سبا",
            "دراجات، بيتش بجي"
        ]
    },
    farewell: "مع كامل تمنياتنا لكم بسلامة الوصول"
  }
};

export const fourteenNightsFifteenDays = {
  // English 'eng' content
  eng: { // <--- Changed from 'en' to 'eng'
    title: "14 Nights / 15 Days Program",
    duration: "15 Days",
    groupSize: "Max 18 people",
    itinerary: [
      {
        day: "Day 1",
        description: "Arrival at Tbilisi International Airport and transfer to the hotel to receive the rooms, then visit the old city, Peace Bridge, and the European Park. Take the cable car to visit the \"Mother of Georgians\" statue, then descend to the Botanical Garden to see the Botanical Garden waterfall, Lovers' Bridge, the sulfur baths, and Tbilisi Mosque. Afterwards, have dinner and return to the hotel for overnight stay."
      },
      {
        day: "Day 2",
        description: "Return from the hotel after breakfast to visit Turtle Lake and the Historical Museum, then time for lunch and rest. Evening tour to visit Mtatsminda Park, then have dinner and return to the hotel for overnight stay."
      },
      {
        day: "Day 3",
        description: "Head to the Caucasus Mountains starting from the hotel after breakfast and visit the historic Ananuri Fortress located by Ananuri Lake with its stunning natural scenery. Then continue passing Basanuri area, and ascend to the highest peak in the Caucasus Mountains at 2750 meters elevation to enjoy the panoramic view of the green mountains from the balcony in the town of Gudauri. Take time for lunch and enjoy the rest of the day, then return to stay overnight at Kazbegi Hotel."
      },
      {
        day: "Day 4",
        description: "Return from the hotel after breakfast and go on a tour to Dashbashi Canyon, known for its stunning successive waterfalls which provide coolness in summer. The Tsalka waterfall takes a strange emerald color and forms dozens of frozen waterfalls in winter compared to the neighboring villages of Tsalka and Dashbashi. On the way to the valley, the weather is warmer around the waterfalls in winter. Passing through Tsalka, visit the medieval Kldekari Castle ruins, which was the center of resistance by Kldekari rulers against Georgian kings. Then visit the \"Glass Bridge\" which extends 240 meters long and is suspended 280 meters above the valley. The bridge is the longest and highest suspended structure in the world."
      },
      {
        day: "Day 5",
        description: "Return from the hotel after breakfast and go to the Georgian city of love, Sighnaghi. It is one of the most attractive cities for those seeking peaceful and tranquil times. Everything in Sighnaghi is charming and beautiful, from the cobbled streets to the romantic and enchanting view of its buildings characterized by their delicate architecture. While wandering in Sighnaghi, Georgia, you feel like you are visiting one of Italy’s cities of love or strolling through the chapters of one of the world's famous love stories, like Romeo and Juliet, especially when you look at the widespread balconies known for their ancient architectural art. Tourism in Sighnaghi means being in the city of love."
      },
      {
        day: "Day 6",
        description: "Return from the hotel after breakfast then head to the city and take the cable car, then go on a tour to enjoy the breathtaking views in Bakuriani city. Then time for lunch followed by enjoying activities such as horseback riding, mountain biking, hiking, and fishing. Return to the hotel for overnight stay."
      },
      {
        day: "Day 7",
        description: "Return from the hotel after breakfast and head to Borjomi city. Visit Borjomi Park which has natural healthy mineral springs, see Borjomi waterfall, ride the cable car, then ascend to the top of the mountain and descend again. Take time for lunch and rest, then an evening tour to visit the tourist bazaar outside the park with Georgian souvenirs. Return to the hotel in Bakuriani."
      },
      {
        day: "Day 8",
        description: "Depart to Batumi city (The Pearl of the Black Sea) known for its charming nature where green mountains meet the sea coast. Then head to ride the Batumi cable car which starts from the seaside and ends at the top of Argo Mountain where you enjoy a full view of Batumi city. Then free time followed by descent, dinner, and return to overnight stay."
      },
      {
        day: "Day 9",
        description: "Depart to visit the Batumi National Botanical Garden, which is a nature reserve covering 110 hectares and is the largest bamboo garden in Europe. Take a tour walking through the reserve to enjoy the breathtaking mountain and coastal landscapes, then time for lunch and rest. Evening tour includes cable car ride and visiting the Alphabet Tower and the unique Ali and Nino statue, then dinner and return for overnight stay."
      },
      {
        day: "Day 10",
        description: "Visit the Machkhnistskali area which includes Queen Tamara’s historic bridge shaped as an arch with a unique engineering design. Then visit Machkhnistskali waterfall, time for lunch in Tskhaltubo city where there are waterfalls, then return to the hotel for rest. Evening tour to attend the Dolphin Musical Show, one of the most prominent and joyful attractions of Batumi city."
      },
      {
        day: "Day 11",
        description: "Depart to Kutaisi city passing through Martvili area to visit Martvili Waterfalls and the suspended glass bridge. Take a boat ride along the underground river to enjoy breathtaking views of petrified waterfalls, underground rivers, and cave lakes. Time for lunch then return to hotel for overnight stay."
      },
      {
        day: "Day 12",
        description : "Return from the hotel after breakfast and head to Tbilisi city for lunch and free tour, then return to the hotel for overnight stay."
      },
      {
        day: "Day 13",
        description: "Return from the hotel after breakfast and head to Tbilisi Mall for shopping and lunch, then return to the hotel."
      },
      {
        day: "Day 14",
        description: "Tour to Mtskheta city (the ancient capital of Georgia) with its high Jvari Fortress from where you can see the natural view of the confluence of the two rivers (Mtkvari River and Aragvi River), each retaining its own color. Then visit Mtskheta tourist bazaar with Georgian souvenirs, time for lunch, then go to the hotel for overnight stay."
      },
      {
        day: "Day 15",
        description: "Departure and transfer to Tbilisi International Airport for departure."
      }
    ],
    inclusions: {
      title: "The trip includes:",
      items: [
        "Private car throughout the visit including fuel.",
        "Transfers to and from Tbilisi International Airport.",
        "Transfers between cities during visits.",
        "English-speaking tour guide.",
        "Mobile phone line including internet data package.",
        "Transportation of tourists to halal restaurants."
      ]
    },
    exclusions: {
      title: "The trip does NOT include:",
      items: [
        "Cable car tickets and entrance fees to tourist sites.",
        "Lunch and dinner meals."
      ]
    },
    optionalActivities: {
        title: "Additional paid optional activities:",
        items: [
          "Traditional Georgian dinner",
          "Private place to cook Georgian food yourself",
          "Photographer",
          "Bird hunting, fishing, and shooting games (in designated areas)",
          "Anger room",
          "BBQ parties (halal)",
          "Mount Jomi above the clouds and camping",
          "Special romantic night on the glass bridge",
          "Hot air balloon",
          "Museum of self",
          "Arabic-speaking guide (male or female)",
          "All water games including (yacht - boat - rafting - water parachuting - jet ski)",
          "Sulfur bath – spa",
          "Bicycle – beach buggy"
        ]
    },
    farewell: "With our best wishes for your safe arrival",
    company: "Raizend Tourism",
    finalMessage: "Wishing you a happy trip"
  },

  // Arabic 'ara' content
  ara: { // <--- Changed from 'ar' to 'ara'
    title: "برنامج 14 ليله 15 يوم",
    duration: "15 يوم",
    groupSize: "لحد أقصى 18 شخص",
    itinerary: [
      {
        day: "اليوم الأول",
        description: "الوصول إلى مطار تبليسي الدولي واالنتقال إلى الفندق الستالم الغرف، ثم زيارة العاصمة القديمة وكوبري السالم والحديقة األوروبية وركوب التليفريك لزيارة تمثال \"أم الجورجيين\" والنزول إلى حديقة النباتات لمشاهدة شالل حديقة النباتات وكوبري العشاق والحمامات الكبريتية ومسجد تبليسي وبعدها تناول وجبة العشاء ثم الذهاب الي الفندق للمبيت."
      },
      {
        day: "اليوم الثاني",
        description: "التحرك من الفندق بعد وجبه الفطار و الذهاب لزيارة بحيرة السالحف والمتحف التاريخي ثم وقت للغداء والراحة، وجولة مسائية لزيارة متتسميندا بارك ثم الذهاب لتناول وجبه العشاء ثم الذهاب الي الفندق للمبيت."
      },
      {
        day: "اليوم الثالث",
        description: "التوجه إلى جبال القوقاز مروراً التحرك من الفندق بعد وجبه الفطار و بقلعة انانورى التاريخية والتي تقع على بحيرة انانورى ذات المشهد الطبيعي فائق الجمال ثم نكمل مرورا بمنطقة باسانوري ثم الصعود إلى أعلى قمة في جبال القوقاز والتي يصل ارتفاعها 2750 متر واالستمتاع بالمشهد الطبيعي للجبال الخضراء من أعلى بانوراما بلكوني بمدينة جوداوري وأخذ وقت للغداء واالستمتاع بباقي اليوم ثم العودة للمبيت في فندق كازبيجي."
      },
      {
        day: "اليوم الرابع",
        description: "لتحرك من الفندق بعد وجبه الفطار ثم الذهاب في جوله الي (canion Dashbashi) تشتهر Canyon Tsalka بشالالتها المتتالية المذهلة ، والتي توفر البرودة في الصيف. يأخذ شالل Tsalka لون الزمرد الغريب ويشكل العشرات من الشالالت المتجمدة في الشتاء. يأتي إلى المنطقة في الشتاء ، يكون الجو أكثر دفئ ا في محيط الشالل ق الجورجيين ثم الذهاب لزياره جسر الماس ويمتد جسر الماس على ارتفاع 240 متًرا ، معل 280 مترًا فوق الوادي. الجسر هو أطول وأطول هيكل معلق في العالم."
      },
      {
        day: "اليوم الخامس",
        description: "لتحرك من الفندق بعد تناول وجبة الإفطار والذهاب الى مدينة الحب الجورجية سغناغي، هي واحدة من أكثر المدن الجاذبة لمن يتطلعون لقضاء أوقات من الهدوء الطمأنينة، فكل شيء في سغناغي لطيف وجميل؛ بداية من الشوارع المرصوفة بالحصى، والمشهد الرومانسي الساحر لمبانيها التي تمتاز بهندستها الرقيقة الخاصة، لتشعر أثناء تجولك في سغناغي جورجيا وكأنك زرت إحدى مدن العشق الإيطالية، أو أنك تتنزه بين فصول إحدى روايات الحب العالمية، مثل روميو وجوليت، خصوصا عندما تنظر لتلك الشرفات المنتشرة التي تمتاز بفنها المعماري القديم، حيث تعني السياحة في سغناغي أن تكون في مدينة الحب."
      },
      {
        day: "اليوم السادس",
        description: "التحرك من الفندق بعد وجبه الفطار ثم التحرك الي مدينه و التوجه لركوب التلفريك ثم الذهاب في جوله لالستمتاع بالمناظر الخالبه في مدينه باكورياني ثم وقت للغداء و الذهاب لالستمتاع باالنشطه مثل (ركوب الخيل وركوب الدراجات في الجبال و المشي لمسافات طويلة وصيد األسم اك) و العوده الي الفندق للمبيت."
      },
      {
        day: "اليوم السابع",
        description: "التحرك من الفندق بعد تناول وجبة الإفطار والتوجه إلى مدينة برجومي وزيارة حديقة برجومي والتي بها المياه الجوفية الطبيعية الصحية ورؤية شالل برجومي وركوب التلفريك ثم الصعود إلى أعلى الجبل ثم النزول مرة أخرى وأخذ وقت للغداء والراحة، ثم جولة مسائية لزيارة البزار السياحي خارج البارك والذي به الهدايا التذكارية الجورجية ثم العوده الي الفندق في باكو رياني."
      },
      {
        day: "اليوم الثامن",
        description: "التحرك إلى مدينة باتومي (لؤلؤة البحر األسود) ذات الطبيعة الساحرة حيت التقاء الجبال الخضراء مع ساحل البحر ثم نتوجه لركوب تلفريك باتومي والذي يبدأ من ساحل البحر وينتهي أعلى قمة جبل أرجو حيث الاستمتاع برؤية كامل مدينة باتومي ثم جولة حرة ثم النزول مرة أخرى ثم وقت للعشاء والعودة للمبيت."
      },
      {
        day: "اليوم التاسع",
        description: "التحرك لزيارة حديقة النباتات الوطنية بباتومي وهي تعتبر محميه طبيعية وتبلغ مساحتها 110 هكتار وتعتبر أكبر حديقة بامبو بقارة أوروبا وجولة للتنزه في جميع أنحاء المحمية ومشاهدة المناظر الطبيعية الجبلية والساحلية الخالبة ثم وقت للغداء والراحة، ثم جولة مسائية لركوب وأيضا زيارة برج الحروف األبجدية وتمثال على ونينو الهندسي ثم وقت للعشاء والعودة للمبيت."
      },
      {
        day: "اليوم العاشر",
        description: "زيارة منطقة ماخونساتى وبها كوبري الملكة تمارا التاريخي وهو على شكل قوس حيث يتميز بتصميم هندسي فريد وبعده نقوم بزيارة شالل ماخونساتى ووقت للغداء في مدينة تخلنارى حيث الشالالت ثم العودة للفندق للراحة، ثم جولة مسائية لحضور عرض الدولفين الموسيقى وهو من أبرز معالم مدينة باتومى الساحرة لما به من بهجه."
      },
      {
        day: "اليوم الحادي عشر",
        description: "التحرك الي مدينة كوتايسي مروراً منطقة مارتفيلي لزيارة شالالت مارتفيلي والجسر الزجاجي المعلق وركوب القارب على طول نهر تحت األرض لالستمتاع بمناظر خلابة للشالالت المتحجرة، األنهار الجوفية وبحيرات الكهف ووقت للغداء ثم العودة للمبيت بالفندق."
      },
      {
        day: "اليوم الثاني عشر",
        description: "التحرك من الفندق بعد تناول وجبة الإفطار والتوجه إلى مدينة تبليسي والذهاب إلى تناول الغداء وجولة حرة ثم العودة إلى الفندق للمبيت."
      },
      {
        day: "اليوم الثالث عشر",
        description: "التحرك من الفندق بعد تناول وجبة الإفطار والتوجه إلى مول تبليسي للتسوق والغداء ثم العودة إلى الفندق."
      },
      {
        day: "اليوم الرابع عشر",
        description: "جولة إلى مدينة متسخيتا (العاصمة القديمة لجورجيا) وبها قلعة جفاري المرتفعة والتي يمكن منها رؤية المشهد الطبيعي للقاء النهرين (نهر متكفارى ونهر أراجفاى) مع احتفاظ كل منهما بلونه الخاص. ثم نتوجه الى زيارة بازار متسخيتا السياحي والذي به الهدايا التذكارية الجورجية وأخذ وقت للغداء ثم الذهاب الى الفندق للمبيت."
      },
      {
        day: "اليوم الخامس عشر",
        description: "التحرك والمغادرة إلى مطار تبليسي الدولي للمغادرة."
      }
    ],
    inclusions: {
      title: "الرحلة تشمل:",
      items: [
        "سيارة خاصة طوال مدة الزيارة تشمل تعبئة الوقود.",
        "الانتقال من وإلى مطار تبليسي الدولي.",
        "الانتقال بين المدن خلال الزيارات.",
        "مرشد سياحي الإنجليزية.",
        "خط هاتف موبايل يشمل باقة بيانات إنترنت.",
        "توصيل السائحين إلى المطاعم الحاللة."
      ]
    },
    exclusions: {
      title: "الرحلة لا تشمل:",
      items: [
        "تذاكر ركوب التليفريك ودخول الأماكن السياحية.",
        "وجبات الغداء والعشاء."
      ]
    },
    optionalActivities: {
        title: "أنشطة برسوم إضافية (اختياري):",
        items: [
          "عشاء جورجي تقليدي",
          "مكان خاص لطهي الطعام الجورجي بنفسك",
          "مصور فوتوغرافي",
          "صيد الطيور وصيد الأسماك وألعاب الرماية (في الأماكن المخصصة)",
          "غرفة الغضب",
          "حفلات الشواء (حلال)",
          "جبل جومي فوق السحاب والتخييم",
          "ليلة رومانسية خاصة على الجسر الزجاجي",
          "منطاد الهواء",
          "متحف الذات",
          "مترجم عربي دليل (بنت أو ولد)",
          "جميع الألعاب المائية تشمل (يخت - قارب - تجديف - القفز بالمظلات المائية - جت سكي)",
          "حمام كبريت – سبا",
          "دراجة – بيتش بجي"
        ]
    },
    farewell: "مع كامل تمنياتنا لكم بسالمة الوصول",
    company: "رايزند للسياحة",
    finalMessage: "تتمنى لكم رحلة سعيدة"
  }
};

export const twelveNightsThirteenDays = {
  // English 'eng' content
  eng: { // <--- Changed from 'en' to 'eng'
    title: "12 Nights and 13 Days Program",
    duration: "13 Days",
    groupSize: "Max 20 people",
    itinerary: [
      {
        day: "Day 1",
        description: "Arrival at Tbilisi International Airport and transfer to the hotel to check in. Then visit the old town, Peace Bridge, and European Park. Take the cable car to visit the statue \"Mother of Georgians,\" then descend to the Botanical Garden to see the Botanical Garden waterfall, Lovers’ Bridge, sulfur baths, and Tbilisi Mosque. Afterwards, have dinner and go to the hotel for overnight stay."
      },
      {
        day: "Day 2",
        description: "Return from the hotel after breakfast and go to visit Turtle Lake and the Historical Museum. Then time for lunch and rest, and an evening tour to visit Mtatsminda Park. Then go have dinner and return to the hotel for overnight stay."
      },
      {
        day: "Day 3",
        description: "Head to the Caucasus Mountains, departing from the hotel after breakfast. Visit the historic Ananuri Fortress located on the beautifully scenic Ananuri Lake. Then continue passing through the Basanuri area, then ascend to the highest peak in the Caucasus Mountains, which reaches 2750 meters. Enjoy the natural view of the green mountains from the panoramic balcony in Gudauri city. Take time for lunch and enjoy the rest of the day, then return to stay overnight at the hotel in Tbilisi."
      },
      {
        day: "Day 4",
        description: "Return from the hotel after breakfast, then go on a tour to Dashbashi Canyon. Canyon Tsalka is famous for its amazing consecutive waterfalls which provide coolness in summer. The Tsalka waterfall takes a strange emerald color and forms dozens of frozen waterfalls in winter. In the surrounding area in winter, the weather is warmer compared to other waterfalls, in the nearby villages of Tsalka and Dashbashi. On the way to the valley through Tsalka, there are ruins of Kldekari Castle dating back to the medieval era, which was a center of resistance by the lords of Kldekari against the Georgian kings. Then go visit the Bridge of Peace (Glass Bridge), which extends 240 meters in length and is located 280 meters above the valley. The bridge is the longest and tallest suspended structure in the world."
      },
      {
        day: "Day 5",
        description: "Return from the hotel after breakfast, then head to the city of Bakuriani and go to the hotel for rest and overnight stay."
      },
      {
        day: "Day 6",
        description: "Return from the hotel after breakfast and head to ride the cable car, then go on a tour to enjoy the beautiful scenery in the city of Bakuriani. Then time for lunch and go enjoy activities such as horse riding, mountain biking, long hikes, and fishing. Then return to the hotel for overnight stay."
      },
      {
        day: "Day 7",
        description: "Return from the hotel after breakfast and head to Borjomi city. Visit Borjomi Park, which has natural healthy mineral springs, see Borjomi waterfall and ride the cable car. Then ascend to the top of the mountain and descend again. Take time for lunch and rest. Then an evening tour to visit the tourist bazaar outside the park where Georgian souvenirs are available. Then return to the hotel in Bakuriani."
      },
      {
        day: "Day 8",
        description: "Move to Batumi city (Pearl of the Black Sea), known for its enchanting nature where green mountains meet the sea coast. Then head to ride the Batumi cable car, which starts from the seaside and ends at the top of Argo Mountain where you can enjoy the full view of the charming city of Batumi. Then descend again, time for dinner, and return for overnight stay."
      },
      {
        day: "Day 9",
        description: "Depart to visit the National Botanical Garden in Batumi, which is a nature reserve covering 110 hectares and considered the largest bamboo garden in Europe. Take a tour walking throughout the reserve and see the stunning mountain and coastal scenery. Then time for lunch and rest. In the evening, enjoy a cable car ride and also visit the Alphabet Tower and the Ali and Nino sculpture. Then time for dinner and return for overnight stay."
      },
      {
        day: "Day 10",
        description: "Visit the Machakhela region which has the historic Queen Tamara Bridge shaped as an arch with a unique architectural design. Afterwards, visit Machakhela waterfall and have lunch in Tskhaltubo city where the waterfalls are. Then return to the hotel to rest, followed by an evening tour to attend the dolphin music show, which is one of the most prominent joyful landmarks of charming Batumi city."
      },
      {
        day: "Day 11",
        description: "Depart to return to Tbilisi passing through Martvili area to visit Martvili waterfalls, the suspended glass bridge, and take a boat ride along an underground river to enjoy breathtaking views of frozen waterfalls, underground rivers, and cave lakes. Then time for lunch and return to the hotel in Tbilisi for overnight stay."
      },
      {
        day: "Day 12",
        description : "A tour to Mtskheta city (the old capital of Georgia) which has the high Jvari Fortress from which you can see the natural scene of the confluence of two rivers (Mtkvari River and Aragvi River), each maintaining its own color. Then proceed to visit Mtskheta tourist bazaar, which has Georgian souvenirs. Take time for lunch, then go to Tbilisi Mall for shopping in Tbilisi city, and then go to the hotel for overnight stay."
      },
      {
        day: "Day 13",
        description: "Depart and leave for Tbilisi International Airport for departure."
      }
    ],
    inclusions: {
      title: "The trip includes:",
      items: [
        "Triple rooms with breakfast.",
        "Private car for the entire visit duration including fuel.",
        "Transfers to and from Tbilisi International Airport.",
        "Transfers between cities during visits.",
        "English-speaking tour guide.",
        "Mobile phone line including internet data package.",
        "Transporting tourists to halal restaurants.",
        "Flight tickets."
      ]
    },
    exclusions: {
      title: "The trip does not include:",
      items: [
        "Cable car tickets and entrance to tourist sites.",
        "Lunch and dinner meals."
      ]
    },
    optionalActivities: {
        title: "Optional activities with extra fees:",
        items: [
          "Traditional Georgian dinner",
          "Private place to cook Georgian food yourself",
          "Photographer",
          "Bird hunting, fishing, and shooting games (in designated places)",
          "Anger room",
          "Halal barbecue parties",
          "Mount Jomi above the clouds and camping",
          "Special romantic night on the glass bridge",
          "Hot air balloon",
          "Museum of self",
          "Arabic translator guide (male or female)",
          "All water games including yacht, boat, rowing, parasailing, jet ski",
          "Sulfur bath – spa",
          "Bicycle – beach buggy"
        ]
    },
    farewell: "With our best wishes for a safe arrival",
    company: "Raizand Tourism",
    finalMessage: "Wishing you a happy trip"
  },

  // Arabic 'ara' content
  ara: { // <--- Changed from 'ar' to 'ara'
    title: "برنامج 12 ليلة و 13 يوم في جورجيا",
    duration: "13 يوم",
    groupSize: "لحد أقصى 20 شخص",
    itinerary: [
      {
        day: "اليوم الأول",
        description: "الوصول إلى مطار تبليسي الدولي واالنتقال إلى الفندق الستالم الغرف، ثم زيارة العاصمة القديمة وكوبري السالم والحديقة األوروبية وركوب التليفريك لزيارة تمثال \"أم الجورجيين\" والنزول إلى حديقة النباتات لمشاهدة شالل حديقة النباتات وكوبري العشاق والحمامات الكبريتية ومسجد تبليسي وبعدها تناول وجبة العشاء ثم الذهاب الي الفندق للمبيت."
      },
      {
        day: "اليوم الثاني",
        description: "التحرك من الفندق بعد وجبه الفطار و الذهاب لزيارة بحيرة السالحف والمتحف التاريخي ثم وقت للغداء والراحة، وجولة مسائية لزيارة متتسميندا بارك ثم الذهاب لتناول وجبه العشاء ثم الذهاب الي الفندق للمبيت."
      },
      {
        day: "اليوم الثالث",
        description: "التوجه إلى جبال القوقاز مروراً التحرك من الفندق بعد وجبه الفطار و بقلعة انانورى التاريخية والتي تقع على بحيرة انانورى ذات المشهد الطبيعي فائق الجمال ثم نكمل مرورا بمنطقة باسانوري ثم الصعود إلى أعلى قمة في جبال القوقاز والتي يصل ارتفاعها 2750 متر واالستمتاع بالمشهد الطبيعي للجبال الخضراء من أعلى بانوراما بلكوني بمدينة جوداوري وأخذ وقت للغداء واالستمتاع بباقي اليوم ثم العودة للمبيت في فندق تبيليسي"
      },
      {
        day: "اليوم الرابع",
        description: "التحرك من الفندق بعد وجبه الفطار ثم الذهاب في جوله الي (canion Dashbashi) تشتهر Canyon Tsalka بشالالتها المتتالية المذهلة ، والتي توفر البرودة في الصيف. يأخذ شالل Tsalka لون الزمرد الغريب ويشكل العشرات من الشالالت المتجمدة في الشتاء. في محيط الشالل يكون الجو أكثر دفئ ا في الشتاء مقارنة بقرية تسالكا وداشباشي المجاورة. في الطريق إلى الوادي عبر تسالكا ، توجد أنقاض قلعة [ka [Kldekari التي تعود إلى القرون الوسطى ، وهي مركز مقاومة مديري Kldekari ضد الملوك الجورجيين ثم الذهاب لزياره جسر الماس و ًق يمتد جسر الماس على ارتفاع 240 ا على ارتفاع متًرا ، معل 280 مترً ا فوق الوادي. الجسر هو أطول وأطول هيكل معلق في العالم."
      },
      {
        day: "اليوم الخامس",
        description: "التحرك من الفندق بعد وجبه الفطار ثم التحرك الي مدينه باكورياني و الذهاب الي الفندق لالستراحه و المبيت ."
      },
      {
        day: "اليوم السادس",
        description: "التحرك من الفندق بعد وجبه الفطار و التوجه لركوب التلفريك ثم الذهاب في جوله لالستمتاع بالمناظر الخالبه في مدينه باكورياني ثم وقت للغداء و الذهاب لالستمتاع باالنشطه مثل ( ركوب الخيل وركوب الدراجات في الجبال والمشي لمسافات طويلة وصيد األسماك) و العوده الي الفندق للمبيت ."
      },
      {
        day: "اليوم السابع",
        description: "التحرك من الفندق بعد تناول وجبة اإلفطار والتوجه إلى مدينة برجومي وزيارة حديقة برجومي والتي بها المياه الجوفية الطبيعية الصحية ورؤية شالل برجومي وركوب التلفريك ثم الصعود إلى أعلى الجبل ثم النزول مره أخرى وأخذ وقت للغداء والراحة، ثم جولة مسائية لزيارة البزار السياحي خارج البارك والذي به الهدايا التذكارية الجورجية ثم العوده الي الفندق في باكورياني ."
      },
      {
        day: "اليوم الثامن",
        description: "التحرك إلى مدينة باتومى (لؤلؤة البحر األسود) ذات الطبيعة الساحرة حيت التقاء الجبال الخضراء مع ساحل البحر ثم نتوجه لركوب تلفريك باتومى والذي يبدأ من ساحل البحر وينتهي أعلى قمة جبل أرجو حيث االستمتاع برؤية كامل مدينة باتومى الساحرة ثم النزول مره أخرى ثم وقت للعشاء والعودة للمبيت."
      },
      {
        day: "اليوم التاسع",
        description: "التحرك لزيارة حديقة النباتات الوطنية بباتومي وهي تعتبر محميه طبيعية وتبلغ مساحتها 110 هكتار وتعتبر أكبر حديقة بامبو بقارة أوروبا وجولة للتنزه في جميع أنحاء المحمية ومشاهدة المناظر الطبيعية الجبلية والساحلية الخالبة ثم وقت للغداء والراحة، ثم جولة مسائية لركوب وأيضا زيارة برج الحروف األبجدية وتمثال على ونينو الهندسي ثم وقت للعشاء والعودة للمبيت"
      },
      {
        day: "اليوم العاشر",
        description: "زيارة منطقة ماخونساتى وبها كوبري الملكة تمارا التاريخي وهو على شكل قوس حيث يتميز بتصميم هندسي فريد وبعده نقوم بزيارة شالل ماخونساتى ووقت للغداء في مدينة تخلنارى حيث الشالالت ثم العودة للفندق للراحة، ثم جولة مسائية لحضور عرض الدولفين الموسيقى وهو من أبرز معالم مدينة باتومى الساحرة لما به من بهجه."
      },
      {
        day: "اليوم الحادي عشر",
        description: "التحرك للعودة إلى تبليسي مرورا منطقه م ارتفيلي لزيارة شالالت مارتفيلى والجسر الزجاجي المعلق وركوب القارب على طول نهر تحت األرض لالستمتاع بمناظر خالبة للشالالت المتحجرة، األنهار الجوفية وبحيرات الكهف ووقت للغداء ثم العودة للمبيت بالفندق في تبليسي"
      },
      {
        day: "اليوم الثاني عشر",
        description: "جولة إلى مدينة متسخيتا (العاصمة القديمة لجورجيا) وبها قلعة جفاري المرتفعة والتي يمكن منها رؤية المشهد الطبيعي اللتقاء النهرين (نهر متكفارى ونهر أراجفاى) مع احتفاظ كل منهما بلونه الخاص. ثم نتوجه الى زيارة بزار متسخيتا السياحي والذي به الهدايا التذكارية الجورجية وأخد وقت للغداء ثم الذهاب الى تبليسي مول للتسوق بمدينة تبليسي والذهاب الى الفندق للمبيت."
      },
      {
        day: "اليوم الثالث عشر",
        description: "التحرك و المغادرة الى مطار تبليسى الدولي للمغادرة."
      }
    ],
    inclusions: {
      title: "الرحلة تـشمل:",
      items: [
        "غرف ثالثيه مع وجبه اإلفطار.",
        "سيارة خاصه طوال مده الزيارة تشمل تعبئه الوقود.",
        "االنتقال من وإلى مطار تبيليسي الدولي.",
        "االنتقال بين المدن خالل الزيارات.",
        "مرشد سياحي االنجليزية.",
        "خط هاتف موبيل يشمل باقة بيانات انترنت",
        "توصيل السائحين إلى المطاعم الحالل.",
        "تذاكر الطيران"
      ]
    },
    exclusions: {
      title: "الرحلة ال تـشمل:",
      items: [
        "تذاكر ركوب التليفريك ودخول االماكن السياحية.",
        "وجبات الغداء والعشاء."
      ]
    },
    optionalActivities: {
        title: "أنشطة برسوم إضافية (اختياري)",
        items: [
          "عشاء جورجي تقليدي",
          "مكان خاص لطهي الطعام الجورجي بنفسك",
          "مصور فوتوغرافي",
          "صيد الطيور وصيد األسماك وألعاب الرماية (في األماكن المخصصة)",
          "غرفة الغضب",
          "حفالت الشواء (حالل)",
          "جبل جومي فوق السحاب و التخيي م",
          "ليلة رومانسية خاصة على الجسر الزجاجي",
          "منطاد الهواء",
          "متحف الذات",
          "مترجم عربي دليل (بنت او ولد)",
          "جميع االلعاب المائية تشمل (يخت - قارب - تجديف - القفز بالمظالت المائية - جت سكي)",
          "حمام كبريت – سبا",
          "دراجة – بيتش بجي"
        ]
    },
    farewell: "مع كامل تمنياتنا لكم بسالمة الوصول",
    company: "رايزند للسياحة",
    finalMessage: "تـتــمنى لــكم رحـله ســعيدة"
  }
};