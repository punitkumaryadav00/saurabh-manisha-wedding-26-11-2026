export type Lang = "en" | "hi";

export interface ScheduleEvent {
  id: string;
  dateEn: string;
  dateHi: string;
  timeEn: string;
  timeHi: string;
  titleEn: string;
  titleHi: string;
  subtitleEn: string;
  subtitleHi: string;
}

export interface VenueInfo {
  id: string;
  tagEn: string;
  tagHi: string;
  nameEn: string;
  nameHi: string;
  dateEn: string;
  dateHi: string;
  addressEn: string;
  addressHi: string;
  mapQuery: string;
  embedUrl: string;
}

export const WEDDING_DATA = {
  invocations: {
    topHi: ["॥ जय श्री कृष्णा ॥", "॥ श्री गणेशाय नमः ॥", "॥ जय बाबा बलखंडी ॥"],
    topEn: ["|| Jai Shri Krishna ||", "|| Shri Ganeshaya Namah ||", "|| Jai Baba Balkhandi ||"],
    mantraHi: "वक्रतुण्ड महाकाय, सूर्यकोटि समप्रभः । निर्विघ्नं कुरु मे देव, सर्वकार्येषु सर्वदा ॥",
    mantraEn: "Vakratunda Mahakaya, Suryakoti Samaprabha | Nirvighnam Kuru Me Deva, Sarva-Karyeshu Sarvada ||",
  },
  couple: {
    groomEn: "Saurabh",
    groomHi: "चि. सौरभ",
    groomFullEn: "Chi. Saurabh",
    groomParentsEn: "Beloved grandson of Retd. Headmaster Shri Lakshmi Narayan Yadav & Late Smt. Lado Devi, and son of Smt. Prem Devi & Shri Anil Balrodia",
    groomParentsHi: "सेवानिवृत्त प्रधानाध्यापक श्री लक्ष्मी नारायण यादव एवं स्वर्गीय श्रीमती लाडो देवी के प्रिय सुपौत्र तथा श्रीमती प्रेम देवी एवं श्री अनिल बालरोड़िया के सुपुत्र",
    brideEn: "Manisha",
    brideHi: "सौ. मनीषा",
    brideFullEn: "Sau. Manisha",
    brideParentsEn: "Beloved daughter of Smt. Sarla Devi & Shri Omprakash Yadav (Narnaul, Distt. Mahendragarh, Haryana)",
    brideParentsHi: "श्रीमती सरला देवी एवं श्री ओमप्रकाश यादव (निवासी नारनौल, जिला-महेन्द्रगढ़, हरियाणा) की सुपुत्री",
    dateShort: "26.11.2026",
    targetIsoDate: "2026-11-24T15:15:00+05:30",
    weddingIsoDate: "2026-11-26T18:15:00+05:30",
  },
  schedule: [
    {
      id: "bhaat",
      dateEn: "Tuesday, Nov 24, 2026",
      dateHi: "मंगलवार, 24 नवम्बर 2026",
      timeEn: "3:15 PM",
      timeHi: "सायं 03:15",
      titleEn: "Bhaat Ceremony",
      titleHi: "भात",
      subtitleEn: "Maternal Blessing Ritual",
      subtitleHi: "मांगलिक स्वागत रस्म",
    },
    {
      id: "lagna",
      dateEn: "Tuesday, Nov 24, 2026",
      dateHi: "मंगलवार, 24 नवम्बर 2026",
      timeEn: "4:15 PM",
      timeHi: "सायं 04:15",
      titleEn: "Lagna Ceremony",
      titleHi: "लग्न समारोह",
      subtitleEn: "Nirvana Palace, Mahendragarh",
      subtitleHi: "निर्वाणा पैलेस, महेन्द्रगढ़",
    },
    {
      id: "preetibhoj",
      dateEn: "Tuesday, Nov 24, 2026",
      dateHi: "मंगलवार, 24 नवम्बर 2026",
      timeEn: "6:15 PM",
      timeHi: "सायं 06:15",
      titleEn: "Preetibhoj (Feast)",
      titleHi: "प्रीतिभोज",
      subtitleEn: "Dinner & Celebration",
      subtitleHi: "भोजन एवं मिलन समारोह",
    },
    {
      id: "nikasi",
      dateEn: "Thursday, Nov 26, 2026",
      dateHi: "वीरवार, 26 नवम्बर 2026",
      timeEn: "4:15 PM",
      timeHi: "सायं 04:15",
      titleEn: "Nikasi Ceremony",
      titleHi: "निकासी",
      subtitleEn: "Balrodia Farm House, Chamdera Rd",
      subtitleHi: "बालरोड़िया फार्म हाउस, चामधेड़ा रोड़",
    },
    {
      id: "baraat",
      dateEn: "Thursday, Nov 26, 2026",
      dateHi: "वीरवार, 26 नवम्बर 2026",
      timeEn: "6:15 PM",
      timeHi: "सायं 06:15",
      titleEn: "Baraat Departure",
      titleHi: "बारात प्रस्थान",
      subtitleEn: "For Shubham Garden, Narnaul",
      subtitleHi: "शुभम् गार्डन, निजामपुर रोड़, नारनौल",
    },
  ] as ScheduleEvent[],
  venues: [
    {
      id: "nirvana",
      tagEn: "Lagna Venue · 24 Nov",
      tagHi: "लग्न समारोह · 24 नवम्बर",
      nameEn: "Nirvana Palace",
      nameHi: "निर्वाणा पैलेस",
      dateEn: "Tuesday, November 24, 2026 at 4:15 PM",
      dateHi: "मंगलवार, दिनांक 24 नवम्बर, 2026 | सायं 04:15 बजे",
      addressEn: "Bhartiya Degree College, Chamdera Road, Mahendragarh, Haryana",
      addressHi: "भारतीय डिग्री कॉलेज, चामधेड़ा रोड़, महेन्द्रगढ़ (हरियाणा)",
      mapQuery: "https://www.google.com/maps/search/?api=1&query=Nirvana+Palace+Chamdera+Road+Mahendragarh+Haryana",
      embedUrl: "https://maps.google.com/maps?q=Mahendragarh,Haryana&t=&z=14&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: "balrodia",
      tagEn: "Residence & Nikasi · 26 Nov",
      tagHi: "निवास व निकासी · 26 नवम्बर",
      nameEn: "Balrodia Farm House",
      nameHi: "बालरोड़िया फार्म हाउस",
      dateEn: "Thursday, November 26, 2026 at 4:15 PM",
      dateHi: "वीरवार, दिनांक 26 नवम्बर, 2026 | सायं 04:15 बजे",
      addressEn: "Chamdera Road, Mahendragarh, Haryana",
      addressHi: "चामधेड़ा रोड़, महेन्द्रगढ़ (हरियाणा)",
      mapQuery: "https://www.google.com/maps/search/?api=1&query=Chamdera+Road+Mahendragarh+Haryana",
      embedUrl: "https://maps.google.com/maps?q=Chamdera+Road,Mahendragarh,Haryana&t=&z=14&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: "shubham",
      tagEn: "Baraat Destination · 26 Nov",
      tagHi: "शुभ विवाह स्थल · 26 नवम्बर",
      nameEn: "Shubham Garden",
      nameHi: "शुभम् गार्डन",
      dateEn: "Thursday, November 26, 2026 (Evening Arrival)",
      dateHi: "वीरवार, दिनांक 26 नवम्बर, 2026 (सायं बारात स्वागत)",
      addressEn: "Nizampur Road, Narnaul, Distt. Mahendragarh, Haryana",
      addressHi: "निजामपुर रोड़, नारनौल, जिला-महेन्द्रगढ़ (हरियाणा)",
      mapQuery: "https://www.google.com/maps/search/?api=1&query=Shubham+Garden+Nizampur+Road+Narnaul+Haryana",
      embedUrl: "https://maps.google.com/maps?q=Nizampur+Road,Narnaul,Haryana&t=&z=14&ie=UTF8&iwloc=&output=embed",
    },
  ] as VenueInfo[],
  family: {
    hostsEn: [
      { name: "Anil Balrodia", role: "Father of the Groom" },
      { name: "Pradeep Balrodia (Journalist)", role: "District President, Haryana Patrakar Sangh" },
    ],
    hostsHi: [
      { name: "अनिल बालरोड़िया", role: "विनीत" },
      { name: "प्रदीप बालरोड़िया (पत्रकार)", role: "जिला प्रधान, हरियाणा पत्रकार संघ" },
    ],
    addressEn: "Balrodia Farm House, Chamdera Road, Mahendragarh (Haryana)",
    addressHi: "बालरोड़िया फार्म हाउस, चामधेड़ा रोड़, महेन्द्रगढ़ (हरि०)",
    phones: ["9416909082", "9416286289"],
    specialRequestEn: ["Dr. Surbhi Yadav", "Kartik, Lakshya"],
    specialRequestHi: ["डॉ. सुरभि यादव", "कार्तिक, लक्ष्य"],
    firmEn: "Shri Krishna Graphics & Flex, Masani Chowk, Mahendragarh",
    firmHi: "श्री कृष्णा ग्राफिक्स एवं फ्लैक्स, मसानी चौक, महेन्द्रगढ़",
    darshanabhilashiEn:
      "Retd. Headmaster Shri Ramniwas Yadav, Dharamveer Singh, Rajkumar Pradhan, Ashok Kumar, Devendra Kumar, Rajesh Yadav, Rajendra Kumar, Sunil, Vinod, Manoj, Yogesh, Pawan, Sunny, Navdeep, and all relatives & friends.",
    darshanabhilashiHi:
      "सेवानिवृत्त प्रधानाध्यापक श्री रामनिवास यादव, धर्मवीर सिंह, राजकुमार प्रधान, अशोक कुमार, देवेन्द्र कुमार, राजेश यादव, राजेन्द्र कुमार, सुनील, विनोद, मनोज, योगेश, पवन, सन्नी, नवदीप एवं सगे सम्बंधी व मित्रगण।",
  },
};

