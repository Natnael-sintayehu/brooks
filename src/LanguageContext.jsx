import React, { createContext, useContext, useState } from "react";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "am" : "en"));

  const translations = {
    en: {
      about: {
        title: "About Us",
        subtitle: "Learn more about our company and how to contact us",
        company: {
          title: "Our Company",
          desc: "We are a leading real estate platform helping you buy, rent, and post properties with ease.",
        },
        contact: {
          title: "Contact Information",
        },
        social: {
          title: "Social Links",
        },
      },
      footer: {
        contact: "Contact Us",
        social: "Follow Us",
        about: "About",
        aboutBtn: "Learn More",
      },
      postProperty: {
        title: "Post Your Property",
        type: "Property Type",
        selectType: "Select Type",
        housesell: "House for Sale",
        houserent: "House for Rent",
        land: "Land",
        other: "Other",
        price: "Price",
        pricePlaceholder: "e.g. 2,500,000",
        address: "Address",
        addressPlaceholder: "Enter property address",
        squarekm: "Square Meters",
        squarekmPlaceholder: "e.g. 250",
        bedrooms: "Bedrooms",
        bedroomsPlaceholder: "e.g. 3",
        toilet: "Toilets",
        toiletPlaceholder: "e.g. 2",
        miniHouse: "Mini House",
        yes: "Yes",
        no: "No",
        sellerPhone: "Contact Phone",
        phonePlaceholder: "e.g. 0910 203 040",
        photos: "Upload Photos (max 3)",
        submit: "Post Property",
        success: "✅ Property posted successfully!",
      },

      liked: {
        title: "Liked Properties",
        empty: "No liked properties yet.",
      },

      home: {
        title: "Find Your Dream Property",
        subtitle: "Buy, Rent, or Post with Confidence",
        housesell: {
          title: "House Sell",
          desc: "Discover beautiful houses for sale.",
          btn: "Explore",
        },
        houserent: {
          title: "House Rent",
          desc: "Find your next rental home.",
          btn: "Explore",
        },
        land: {
          title: "Land",
          desc: "Find bare plots ready for your project.",
          btn: "Explore",
        },
        others: {
          title: "Others",
          desc: "Shops, offices, and commercial spaces.",
          btn: "Explore",
        },
      },
      listings: {
        available: "Available Properties",
        housesell: "House Sell",
        houserent: "House Rent",
        land: "Land",
        others: "Others",
        prev: "Prev",
        next: "Next",
        noImage: "No Image Available",
        filters: {
          all: "All",
          price: "Price",
          squarekm: "Square km",
          bedrooms: "Bedrooms",
        },
        unit: {
          m2: "m²",
          beds: "Beds",
          toilets: "Toilets",
          miniHouse: "Mini-house",
        },
      },
    },
    am: {
      about: {
        title: "ስለ እኛ",
        subtitle: "ስለ ኩባንያችን ተማሩ እና እንዴት እንደሚገናኙ",
        company: {
          title: "ኩባንያችን",
          desc: "እኛ የንብረት ገበያ መድረክ ነን ፣ ቤት ግዥ ፣ ኪራይ እና ማስታወቂያ በቀላሉ የሚያከናውን ፕላትፎርም።",
        },
        contact: {
          title: "የእኛ የግንኙነት መረጃ",
        },
        social: {
          title: "ማህበራዊ መንገዶች",
        },
      },
      footer: {
        contact: "አግኙን",
        social: "ተከታትሉን",
        about: "ስለ እኛ",
        aboutBtn: "ስለ አገልግሎታችን ለማወቅ",
      },
      postProperty: {
        title: "ንብረትዎን ይለጥፉ",
        type: "የንብረት ዓይነት",
        selectType: "ዓይነት ይምረጡ",
        housesell: "የሽያጭ ቤት",
        houserent: "የኪራይ ቤት",
        land: "መሬት",
        other: "ሌሎች",
        price: "ዋጋ",
        pricePlaceholder: "ለምሳሌ 2,500,000",
        address: "አድራሻ",
        addressPlaceholder: "የንብረት አድራሻ ያስገቡ",
        squarekm: "ካሬ ሜትር",
        squarekmPlaceholder: "ለምሳሌ 250",
        bedrooms: "መኝታ ክፍሎች",
        bedroomsPlaceholder: "ለምሳሌ 2",
        toilet: "መፀዳጃ ቤት",
        toiletPlaceholder: "ለምሳሌ 2",
        miniHouse: "ሰርቪስ",
        yes: "አለ",
        no: "የለም",
        sellerPhone: "ስልክ",
        phonePlaceholder: "ለምሳሌ  0910 203 040",
        photos: "ምስሎችን ይጫኑ (ከፍተኛ 3)",
        submit: "ንብረት ይለጥፉ",
        success: "✅ ንብረት በተሳካ ሁኔታ ተለጥፏል!",
      },

      liked: {
        title: "የወደዷቸዉ ንብረቶች",
        empty: "እስካሁን የወደዱት ንብረት የለም።",
      },

      home: {
        title: "የምትፈልጉትን ንብረት ይግዙ ፣ ይሽጡ::",
        subtitle: "ቤት ግዥ ወይም ኪራይ ፣ መሬት ሽያጭ እና ሌሎችም",
        housesell: { title: "ቤት ሽያጭ", desc: "የሚሸጡ ውብ ቤቶችን ያግኙ", btn: "ይመልከቱ" },
        houserent: { title: "ቤት ኪራይ", desc: "ቀጣዩን የኪራይ ቤት ያግኙ", btn: "ይመልከቱ" },
        land: { title: "መሬት", desc: "ለፕሮጀክትዎ ዝግጁ የሆነ መሬት ያግኙ", btn: "ይመልከቱ" },
        others: { title: "ሌሎች", desc: "የተለያዩ ቁሶች", btn: "ይመልከቱ" },
      },
      listings: {
        available: "ያሉት ንብረቶች",
        housesell: "ቤት ሽያጭ",
        houserent: "ቤት ኪራይ",
        land: "መሬት",
        others: "ሌሎች",
        prev: "ወደ ፊት",
        next: "ወደ ኋላ",
        noImage: "ምስል የለም",
        filters: {
          all: "ሁሉም",
          price: "ዋጋ",
          squarekm: "ካሬ ",
          bedrooms: "መኝታ ክፍሎች",
        },
        unit: {
          m2: "ካሬ",
          beds: "መኝታ ",
          toilets: "መፀዳጃ ቤት",
          miniHouse: "ሰርቪስ",
        },
      },
    },
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[lang];
    keys.forEach((k) => (value = value?.[k]));
    return value || key;
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
