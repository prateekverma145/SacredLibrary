export interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  description: string;
  category: string;
  link:string;
}

// export const books: Book[] = [
//   {
//     id: 1,
//     title: "The Tao of Physics",
//     author: "Fritjof Capra",
//     cover: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
//     description: "An exploration of the parallels between modern physics and Eastern mysticism, revealing the profound connections between science and spirituality.",
//     category: "Philosophy"
//   },
//   {
//     id: 2,
//     title: "Mindfulness in Plain English",
//     author: "Bhante Henepola Gunaratana",
//     cover: "https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
//     description: "A clear and practical guide to developing mindfulness meditation, offering step-by-step instructions for cultivating awareness and peace.",
//     category: "Mindfulness"
//   },
//   {
//     id: 3,
//     title: "The Seven Chakras",
//     author: "Patricia Mercier",
//     cover: "https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
//     description: "A comprehensive guide to understanding and balancing the seven energy centers of the body for healing and spiritual growth.",
//     category: "Chakras"
//   },
//   {
//     id: 4,
//     title: "The Art of Happiness",
//     author: "Dalai Lama",
//     cover: "https://images.pexels.com/photos/1370695/pexels-photo-1370695.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
//     description: "Timeless wisdom on finding joy and meaning in life, combining Buddhist philosophy with practical advice for modern living.",
//     category: "Buddhism"
//   },
//   {
//     id: 5,
//     title: "Meditation for Beginners",
//     author: "Jack Kornfield",
//     cover: "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
//     description: "A gentle introduction to the practice of meditation, offering simple techniques for finding peace and clarity in daily life.",
//     category: "Meditation"
//   },
//   {
//     id: 6,
//     title: "The Upanishads",
//     author: "Patrick Olivelle",
//     cover: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
//     description: "Ancient Hindu philosophical texts that explore the nature of reality, consciousness, and the divine essence within all beings.",
//     category: "Ancient Wisdom"
//   },
//   {
//     id: 7,
//     title: "The Journey Within",
//     author: "Sarah Thompson",
//     cover: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
//     description: "A personal guide to self-discovery and inner transformation, offering practical exercises for spiritual awakening.",
//     category: "Self-Discovery"
//   },
//   {
//     id: 8,
//     title: "Energy Healing Essentials",
//     author: "Dr. Michael Chen",
//     cover: "https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
//     description: "An introduction to various energy healing modalities and techniques for physical, emotional, and spiritual wellness.",
//     category: "Energy Healing"
//   },
//   {
//     id: 9,
//     title: "Zen Mind, Beginner's Mind",
//     author: "Shunryu Suzuki",
//     cover: "https://images.pexels.com/photos/1370695/pexels-photo-1370695.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
//     description: "Classic teachings on Zen meditation and philosophy, emphasizing the importance of maintaining a fresh, open approach to practice.",
//     category: "Buddhism"
//   },
//   {
//     id: 10,
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     cover: "https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
//     description: "A timeless tale of following one's dreams and discovering the treasure that lies within the journey itself.",
//     category: "Self-Discovery"
//   },
//   {
//     id: 11,
//     title: "The Bhagavad Gita",
//     author: "Eknath Easwaran",
//     cover: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
//     description: "One of the world's most beloved spiritual classics, offering profound insights into duty, righteousness, and the path to liberation.",
//     category: "Ancient Wisdom"
//   },
//   {
//     id: 12,
//     title: "Present Moment Awareness",
//     author: "Lisa Martinez",
//     cover: "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
//     description: "Practical techniques for cultivating present-moment awareness and finding peace in the midst of life's challenges.",
//     category: "Mindfulness"
//   }
// ];

export const books: Book[] = [
  {
    "id": 1,
    "title": "आत्मबोधमाला",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/atmabodhmala.png",
    "description": "आत्म-साक्षात्कार और स्वयं के वास्तविक स्वरूप को समझने पर केंद्रित शिक्षाओं का एक संग्रह, जो साधक को आध्यात्मिक जागृति के मार्ग पर मार्गदर्शन करता है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/AatmbodhMala.pdf"
  },
  {
    "id": 2,
    "title": "नामदान की तैयारी",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/atmabodh.png",
    "description": "कई आध्यात्मिक परंपराओं में एक महत्वपूर्ण कदम, 'नामदान' (दिव्य नाम में दीक्षा) प्राप्त करने से पहले आवश्यक तैयारी और मानसिकता पर एक मार्गदर्शिका।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Naamdaan ki tayiyari.pdf"
  },
  {
    "id": 3,
    "title": "आत्मबोध",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/atmabodh.png",
    "description": "आत्मा (आत्मन) के ज्ञान पर एक आवश्यक ग्रंथ, जो शाश्वत स्व और अस्थायी भौतिक शरीर के बीच अंतर करता है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Aatmbodh-.pdf"
  },
  {
    "id": 4,
    "title": "परमज्ञान",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/adyatmikPatori.jpg",
    "description": "परम ज्ञान या अंतिम सत्य की अवधारणा की पड़ताल करता है, जो वास्तविकता, चेतना और परमात्मा की प्रकृति में अंतर्दृष्टि प्रदान करता है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Paramgyaan.pdf"
  },
  {
    "id": 5,
    "title": "आध्यात्मिक पोटरी",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/adyatmikPatori.jpg",
    "description": "आध्यात्मिक ज्ञान का एक खजाना, जिसमें साधक के दैनिक जीवन के लिए विभिन्न छोटी शिक्षाएं, उपाख्यान और मार्गदर्शन शामिल हैं।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/adhyatmikPatori.pdf"
  },
  {
    "id": 6,
    "title": "परमवाणी",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "सर्वोच्च शिक्षाओं और दिव्य संदेशों की एक पुस्तक, जिसका उद्देश्य पाठक की चेतना को एक उच्च आध्यात्मिक स्तर तक पहुंचाना है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/ParamVarhi.pdf"
  },
  {
    "id": 7,
    "title": "अद्वैत भक्ति",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "अद्वैत (गैर-द्वैतवाद) और भक्ति के संश्लेषण पर चर्चा करता है, यह दर्शाता है कि कैसे प्रेम का मार्ग एकत्व की प्राप्ति की ओर ले जा सकता है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Advaita_Bhakti.pdf"
  },
  {
    "id": 8,
    "title": "पूर्ण आध्यात्मिक सफर",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "साधना के शुरुआती चरणों से लेकर मुक्ति और आत्मज्ञान के अंतिम गंतव्य तक की संपूर्ण आध्यात्मिक यात्रा की रूपरेखा प्रस्तुत करता है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/poorn Adhyatmik Safar.pdf"
  },
  {
    "id": 9,
    "title": "अज्ञानी जीव",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "अज्ञानी जीव की स्थिति, उसके भ्रम और आध्यात्मिक ज्ञान के माध्यम से अज्ञान पर विजय पाने के मार्ग को संबोधित करता है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Agayani Jeev.pdf"
  },
  {
    "id": 10,
    "title": "प्रार्थना",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "प्रार्थनाओं और विनती की शक्ति पर चिंतन का एक संग्रह, जो आध्यात्मिक अभ्यास और परमात्मा से जुड़ने में इसके महत्व को समझाता है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Prathna.pdf"
  },
  {
    "id": 11,
    "title": "अंदर से धोये डरो तो जानें",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "एक प्रवचन जो परम वास्तविकता को जानने के सच्चे मार्ग के रूप में मन और हृदय की आंतरिक शुद्धि के महत्व पर जोर देता है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Andar se dhoye daro tou jane.pdf"
  },
  {
    "id": 12,
    "title": "राम कृपा",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "भगवान राम की कृपा का उत्सव मनाने वाली एक पुस्तक, जो आस्था, भक्ति और दिव्य करुणा के बारे में कहानियों और शिक्षाओं से भरी है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Ram_Kripa.pdf"
  },
  {
    "id": 13,
    "title": "अपरोक्ष भक्ति",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "प्रत्यक्ष, अनुभवात्मक भक्ति की अवधारणा की पड़ताल करता है जो अनुष्ठानों से परे है, जो परमात्मा के साथ तत्काल और व्यक्तिगत संबंध की ओर ले जाती है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Aproksh Bhakti.pdf"
  },
  {
    "id": 14,
    "title": "सार का सार",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "एक ऐसी पुस्तक जिसका उद्देश्य 'सार का सार' प्रस्तुत करना है - विभिन्न आध्यात्मिक ग्रंथों और शिक्षाओं से निकाला गया अंतिम, सबसे संक्षिप्त सत्य।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Saar Ka Saar.pdf"
  },
  {
    "id": 15,
    "title": "धार कैसे",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "ध्यान और आध्यात्मिक चिंतन के दौरान मन को केंद्रित और स्थिर करने के तरीके पर एक व्यावहारिक मार्गदर्शिका।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Dhar_Kaise.pdf"
  },
  {
    "id": 16,
    "title": "सार वाणी",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "एक आध्यात्मिक गुरु के आवश्यक वचन या 'वाणी' का संग्रह, जो साधकों के लिए शक्तिशाली और प्रत्यक्ष ज्ञान प्रदान करता है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Saar Vani.pdf"
  },
  {
    "id": 17,
    "title": "फकीर",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "एक 'फकीर' के जीवन और मानसिकता पर चिंतन - एक आध्यात्मिक तपस्वी जो सादगी, वैराग्य और दैवीय इच्छा में संतोष का जीवन जीता है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Fakir.pdf"
  },
  {
    "id": 18,
    "title": "सदगुरु महिमा",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "'सदगुरु' (सच्चे गुरु) के महत्व और कृपा की महिमा का बखान करने वाली एक पुस्तक, जो आध्यात्मिक पथ पर एक मार्गदर्शक के रूप में उनकी भूमिका की व्याख्या करती है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/sadguru mahima.pdf"
  },
  {
    "id": 19,
    "title": "गीतासार",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "भगवद् गीता का सार प्रस्तुत करता है, जिसमें धर्म, कर्म और मोक्ष के मार्ग पर इसकी मुख्य शिक्षाओं का सारांश दिया गया है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/GeetaSaar.pdf"
  },
  {
    "id": 20,
    "title": "सतगुरु की चेतावनी",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "एक सतगुरु की 'चेतावनियाँ' या महत्वपूर्ण उपदेश शामिल हैं, जो शिष्यों को आध्यात्मिक यात्रा में सामान्य नुकसान से दूर मार्गदर्शन करते हैं।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/satguruKiChetavni.pdf"
  },
  {
    "id": 21,
    "title": "जीव का धर्म युद्ध",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "प्रत्येक आत्मा के अपने नकारात्मक प्रवृत्तियों जैसे अहंकार, क्रोध और लगाव के खिलाफ आंतरिक आध्यात्मिक लड़ाई का वर्णन करता है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Jeev ka Dharm Yudh.pdf"
  },
  {
    "id": 22,
    "title": "सतगुरु पंथ की खोज",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "एक सच्चे आध्यात्मिक गुरु का मार्ग खोजने की तलाश में साधकों के लिए एक मार्गदर्शिका, जिसमें सतगुरु के संकेतों और योग्यताओं का विवरण है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Satguru_Panth_Ki_Khoj.pdf"
  },
  {
    "id": 23,
    "title": "कल्कि अवतरण",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "'कल्कि अवतार' की भविष्यवाणियों और आध्यात्मिक महत्व पर चर्चा करता है, जो कलियुग के अंत में प्रकट होने वाले विष्णु के अंतिम अवतार हैं।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/kalki Avtaran.pdf"
  },
  {
    "id": 24,
    "title": "सतगुरु पंथ",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "'सच्चे गुरु के पंथ' पर एक व्याख्या, जिसमें सतगुरु द्वारा निर्देशित एक वंश के सिद्धांतों और प्रथाओं का विवरण है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Satguru Panth.pdf"
  },
  {
    "id": 25,
    "title": "कलियुग का निष्कलंक",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "भविष्यवाणी किए गए 'निष्कलंक' या 'शुद्ध' अवतार का वर्णन करता है जो कलियुग के अंधकार युग में दुनिया में धर्म को वापस लाएगा।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Kalyug_Ka_Nilkalank.pdf"
  },
  {
    "id": 26,
    "title": "सतज्ञान को जानें",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "'सतज्ञान को जानें' का आह्वान, यह पुस्तक सांसारिक ज्ञान और स्वयं के मुक्तिदायक ज्ञान के बीच अंतर करती है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/satgyankojane.pdf"
  },
  {
    "id": 27,
    "title": "मन की धारा पलटो",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "सांसारिक विकर्षणों से मन के प्रवाह को दिव्य चिंतन की ओर 'कैसे बदलें' इस पर एक व्यावहारिक मार्गदर्शिका।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Maan ki dhara palto.pdf"
  },
  {
    "id": 28,
    "title": "सत्संग माला",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "'सत्संग' (पवित्र संगति) के महत्व पर प्रवचनों की एक 'माला', यह समझाते हुए कि यह आध्यात्मिक विकास को कैसे गति देता है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/SathSang Mala.pdf"
  },
  {
    "id": 29,
    "title": "मूल ज्ञान ही सार",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "यह तर्क देता है कि स्वयं का 'मूल ज्ञान' ही एकमात्र सच्चा सार है, और अन्य सभी ज्ञान गौण हैं।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Mool gyaan hi saar.pdf"
  },
  {
    "id": 30,
    "title": "सतनाम",
    "author": "सुरेशादयाल जी",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "'सतनाम' (सच्चा नाम) पर एक ध्यान, जो दिव्य वास्तविकता से जुड़ने के एक उपकरण के रूप में इसके अर्थ और महत्व की खोज करता है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Satnam.pdf"
  },
  {
    "id": 31,
    "title": "मुक्ति पथ",
    "author": "सुरेशादयाल जी",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "'मुक्ति पथ' को प्रकाशित करता है, जो जन्म और मृत्यु के चक्र से मुक्त होने के लिए आवश्यक आध्यात्मिक अनुशासन और समझ की रूपरेखा तैयार करता है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Mukti_Path.pdf"
  },
  {
    "id": 32,
    "title": "सत्य खोज",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "'सत्य की खोज' को समर्पित एक पुस्तक, जो पाठकों को प्रश्न करने, पूछताछ करने और दिखावे से परे परम वास्तविकता की तलाश करने के लिए प्रोत्साहित करती है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Satya_Khoj.pdf"
  },
  {
    "id": 33,
    "title": "नाम दान का सार",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "'नाम दान का सार' प्रस्तुत करता है, जो एक सच्चे गुरु से दिव्य नाम प्राप्त करने के मूल दर्शन और परिवर्तनकारी शक्ति की व्याख्या करता है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Naam daan ka saar.pdf"
  },
  {
    "id": 34,
    "title": "सत्य पथ",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "'सत्य पथ' का विवरण, जो धार्मिकता, अखंडता और परम आध्यात्मिक वास्तविकता के साथ संरेखण पर आधारित जीवन का एक तरीका है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/Satya Path.pdf"
  },
  {
    "id": 35,
    "title": "हमको चाहिए",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "आत्मज्ञान, भक्ति और सतगुरु-पंथ का यह संदेश जीवन को शांति, प्रेम, समर्पण और सच्चे आत्मरूप की ओर ले जाता है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/book1.pdf"
  },
  {
    "id": 36,
    "title": "केवल न्यारा होना है",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "यह पुस्तक आत्मज्ञान, निष्काम कर्म, प्रेम, शांति और परमात्मा से जुड़कर जीवन को सरल, मुक्त और सफल बनाने का संदेश देती है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/book2.pdf"
  },
  {
    "id": 37,
    "title": "विराट बनो",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/book3.png",
    "description": "यह पुस्तक आत्मा, परमात्मा, कर्म, मोक्ष और सतगुरु ज्ञान द्वारा जीवन को दिव्यता तथा शांति की ओर ले जाती है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/book3.pdf"
  },
  {
    "id": 38,
    "title": "सत्यनारायण की सत्यकथा",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "यह पुस्तक आत्मा, परमात्मा, कर्म, मोक्ष और सतगुरु ज्ञान द्वारा जीवन को दिव्यता तथा शांति की ओर ले जाती है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/book4.pdf"
  }
  ,
  {
    "id": 39,
    "title": "ज्ञान गंगा",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": "यह पुस्तक आत्मा, परमात्मा, कर्म, मोक्ष और सतगुरु ज्ञान द्वारा जीवन को दिव्यता तथा शांति की ओर ले जाती है।",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/book5.pdf"
  },
  {
    "id": 40,
    "title": "सतगुरु पंथ के 21 प्रश्न व उनके उत्तर ",
    "author": "सुरेशादयाल जी ",
    "cover": "https://prateekstore123.blob.core.windows.net/contaner1/agyaniJeev.png",
    "description": " सतगुरु पंथ के 21 प्रश्न व उनके उत्तर ",
    "category": "Spiritual",
    "link": "https://prateekstore123.blob.core.windows.net/contaner1/21Q&A.pdf"
  }
]