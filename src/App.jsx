import React from "react";
import Navigation from "./component/Navigation";
import Header from "./component/Header";
import PopularFood from "./component/PopularFood";
import Offer from "./component/Offer";
import About from "./component/About";
import BestSelling from "./component/BestSelling";
import TodaySpecial from "./component/TodaySpecial";
import FoodMenu from "./component/FoodMenu";
import Chefe from "./component/Chefe";
import FoodNews from "./component/FoodNews";
import Footer from "./component/Footer";

const App= ()=>{


        const logo="./Image/Illustration/FooterLogo.svg"
        const links=["Home","About Us","Shop","Page","Blog","Contact us"]
        const icons=["bi bi-search","bi bi-bag"]
        const ListIcon="bi bi-list";
        const ListImg="/Image/Illustration/imgi_1_logo.svg";
        


    const carouselData = [
            {
                active:"carousel-item active",
                carouselPara: "WELCOME FRESHEAT",
                carouselh1: "SPICY FRIED CHICKEN",
                carouselbtn: "ORDER NOW",
                carouselImg: "/Image/Illustration/imgi_21_bannerThumb1_1.png"
            },
            {
                active:"carousel-item ",
                carouselPara: "WELCOME FRESHEAT",
                carouselh1: "CHINCAGO DEEP BURGER KING",
                carouselbtn: "ORDER NOW",
                carouselImg: "/Image/Illustration/imgi_22_bannerThumb1_2.png"
            },
            {
                active:"carousel-item ",
                carouselPara: "WELCOME FRESHEAT",
                carouselh1: "SPICY FRIED CHICKEN",
                carouselbtn: "ORDER NOW",
                carouselImg: "/Image/Illustration/imgi_20_bannerThumb1_3.png"
            }
            ];

    const PopularFoodTitle="Best Food"
    const PopularFoodHeading="Popular Food Items"
    const PopularFoodBurger="/Image/Illustration/Burger-sticker.png";
    const PopularFoodChilli="/Image/Illustration/chilli (1).png";

    const PopularFoodData=[
        {
            dish1Img:"/Image/Illustration/Popular-Food (1).png",
            dish1Name:"Chicken Pizza",
            dish1Fee:"The Registration Fee",
            dish1Price:"Rs.250"
        },
        {
            dish1Img:"/Image/Illustration/Popular-Food (2).png",
            dish1Name:"Veg Pasta",
            dish1Fee:"The Registration Fee",
            dish1Price:"Rs.150"
        },
        {
            dish1Img:"/Image/Illustration/Popular-Food (3).png",
            dish1Name:"Chicken Pasta",
            dish1Fee:"The Registration Fee",
            dish1Price:"Rs.350"
        },
        {
            dish1Img:"/Image/Illustration/Popular-Food (4).png",
            dish1Name:"Chicken Tandori",
            dish1Fee:"The Registration Fee",
            dish1Price:"Rs.450"
        },
        {
            comment:"d-none d-md-block",
            dish1Img:"/Image/Illustration/Popular-Food (4).png",
            dish1Name:"Chicken Tandori",
            dish1Fee:"The Registration Fee",
            dish1Price:"Rs.450"
        },
        {
            dish1Img:"/Image/Illustration/Popular-Food (1).png",
            dish1Name:"Chicken Pizza",
            dish1Fee:"The Registration Fee",
            dish1Price:"Rs.250"
        },
    ];

    const offerData=[
        {
            offertitle:"ON THIS WEEK",
            offerDish:"SPICY FRIED CHICKEN",
            offerTime:"Limits Time Offer",
            offerBtn:"ORDER NOW",
            offerimg:"/Image/Illustration/offer-img (2).png"
        },
        {
            offertitle:"WELCOME FRESHEAT",
            offerDish:"TODAY SPACIAL FOOD",
            offerTime:"Limits Time Offer",
            offerBtn:"ORDER NOW",
            offerimg:"/Image/Illustration/offer-img (3).png"
        },
        {
            offertitle:"ON THIS WEEK",
            offerDish:"SPECIAL CHICKEN ROLL",
            offerTime:"Limits Time Offer",
            offerBtn:"ORDER NOW",
            offerimg:"/Image/Illustration/offer-img (1).png"
        },

    ]

    const aboutImgLeft="/Image/Illustration/About Us img (4).png"
    const aboutImgRight="/Image/Illustration/About Us img (1).png"
    const aboutTitle="About US"
    const aboutHeading="Variety of flavours from american cuisine"
    const aboutDetail="It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point established fact that"
    const aboutBtn="ORDER NOW"

    const BestSellingTitle="POPULAR DISHES"
    const BestSellingHeading="Best selling Dishes"
    const BestSellingBtn="VIEW ALL ITEMS"
    const BestSellingData=[
        {
            dishLike:"bi bi-heart",
            dishImg:"/Image/Illustration/Selling dish (2).png",
            dishName:"Chicken Fried Rice",
            dishFee:"The Registration Fee",
            dishPrice:"Rs.349.99"
        },
        {
            dishLike:"bi bi-heart",
            dishImg:"/Image/Illustration/Selling dish (1).png",
            dishName:"Chinese Pasta",
            dishFee:"The Registration Fee",
            dishPrice:"Rs.199.99"
        },
        {
            dishLike:"bi bi-heart",
            dishImg:"/Image/Illustration/Selling dish (4).png",
            dishName:"Chicken Pizza",
            dishFee:"The Registration Fee",
            dishPrice:"Rs.249.99"
        },
        {
            dishLike:"bi bi-heart",
            dishImg:"/Image/Illustration/Selling dish (3).png",
            dishName:"Chicken Noodles",
            dishFee:"The Registration Fee",
            dishPrice:"Rs.159.99"
        },
        {
            dishLike:"bi bi-heart",
            dishImg:"/Image/Illustration/Selling dish (5).png",
            dishName:"Grilled Chicken",
            dishFee:"The Registration Fee",
            dishPrice:"Rs.449.99"
        },
        {
            dishLike:"bi bi-heart",
            dishImg:"/Image/Illustration/Selling dish (2).png",
            dishName:"Chicken Fried Rice",
            dishFee:"The Registration Fee",
            dishPrice:"Rs.349.99"
        },
    ]

    const TodaySpecialStickerUp="./Image/Illustration/TodaySpeciaImg (1).svg"
    const TodaySpecialStickerDown="./Image/Illustration/TodaySpeciaImg (2).svg"
    const TodaySpecialTitle="WELCOME FRESHEAT";
    const TodaySpecialHeading="TODAY SPACIAL FOOD";
    const TodaySpecialTime="Limits Time Offer";
    const TodaySpecialBtn="ORDER NOW ";
    const TodaySpecialImg="/Image/Illustration/TodaySpecialMainimg.png";
    const TodaySpecialTomato="/Image/Illustration/TodaySpeciaImg (3).png";


    const FoodMenuTitle="FOOD MENU";
    const FoodMenuHeading="Fresheat Foods Menu";

    const FoodMenuChoice =[
        {
           FoodMenuChoiceImg:"/Image/Illustration/imgi_58_menuIcon1_1.png",
           FoodMenuChoiceName:"Fast Food",
        },
        {
           FoodMenuChoiceImg:"/Image/Illustration/imgi_59_menuIcon1_2.png",
           FoodMenuChoiceName:"Drinks & Juice",
        },
        {
           FoodMenuChoiceImg:"/Image/Illustration/imgi_60_menuIcon1_3.png",
           FoodMenuChoiceName:"Chicken Pizza",
        },
        {
           FoodMenuChoiceImg:"/Image/Illustration/imgi_61_menuIcon1_4.png",
           FoodMenuChoiceName:"Fresh Pasta",
        },
    ]

    const FoodMenuCard=[
        {
            FoodMenuImg:"/Image/Illustration/Foodmenucard (1).png",
            FoodMenuName:"Chicken Noodles",
            FoodMenuPara:"It's a testament to our.",
            FoodMenuPrice:"Rs.154.99"
        },
        {
            FoodMenuImg:"/Image/Illustration/Foodmenucard (2).png",
            FoodMenuName:"Chicken Pizza",
            FoodMenuPara:"It's a testament to our.",
            FoodMenuPrice:"Rs.115.99"
        },
        {
            FoodMenuImg:"/Image/Illustration/Foodmenucard (3).png",
            FoodMenuName:"Chicken White Rice",
            FoodMenuPara:"It's a testament to our.",
            FoodMenuPrice:"Rs.135.99"
        },
        {
            FoodMenuImg:"/Image/Illustration/Foodmenucard (4).png",
            FoodMenuName:"Grilled Chicken",
            FoodMenuPara:"It's a testament to our.",
            FoodMenuPrice:"Rs.55.99"
        },
        {
            FoodMenuImg:"/Image/Illustration/Foodmenucard (5).png",
            FoodMenuName:"Spatial Barger",
            FoodMenuPara:"It's a testament to our.",
            FoodMenuPrice:"Rs.254.99"
        },
        {
            FoodMenuImg:"/Image/Illustration/Foodmenucard (6).png",
            FoodMenuName:"Vegetables Burger",
            FoodMenuPara:"It's a testament to our.",
            FoodMenuPrice:"Rs.94.99"
        },
        {
            FoodMenuImg:"/Image/Illustration/Foodmenucard (7).png",
            FoodMenuName:"Chinese Pasta",
            FoodMenuPara:"It's a testament to our.",
            FoodMenuPrice:"Rs.254.99"
        },
        {
            FoodMenuImg:"/Image/Illustration/Foodmenucard (8).png",
            FoodMenuName:"Brief Chicken",
            FoodMenuPara:"It's a testament to our.",
            FoodMenuPrice:"Rs.654.99"
        },
        {
            FoodMenuImg:"/Image/Illustration/Foodmenucard (9).png",
            FoodMenuName:"Egg and Cucumber",
            FoodMenuPara:"It's a testament to our.",
            FoodMenuPrice:"Rs.84.99"
        },
        {
            FoodMenuImg:"/Image/Illustration/Foodmenucard (10).png",
            FoodMenuName:"Chicken Fried Rice",
            FoodMenuPara:"It's a testament to our.",
            FoodMenuPrice:"Rs.454.99"
        },
    ]

    const FoodMenuAdd1="BURGER | CHICKEN PIZZA | GRILLED CHICKEN";

    const ChefeTitle="OUR CHEFE";
    const ChefeHeading="Meet Our Expert Chefe";

    const ChefeData=[
        {
            ChefeImg:"/Image/Illustration/ChefeImg (1).png",
            ChefeName:"Ronald Richards",
            ChefePosition:"Senior Cooker"
        },
        {
            ChefeImg:"/Image/Illustration/ChefeImg (2).png",
            ChefeName:"Rahl Pawar",
            ChefePosition:"Chefe Manager"
        },
        {
            ChefeImg:"/Image/Illustration/ChefeImg (3).png",
            ChefeName:"Marvin Jadhav",
            ChefePosition:"Main Chefe"
        },
    ]


    const FoodNewsTitle="LATEST NEWS";
    const FoodNewsHeading="Our Latest Foods News";
    const FoodNewsData=[
        {
            FoodNewsImg:"/Image/Illustration/FoodNewsImg (1).jpg",
            FoodNewsDate:"17 Dec",
            FoodNewsAdmin:"By Admin",
            FoodNewsTags:"Chicken",
            FoodNewsHead:"Benifits Of Healthy And Safety Measure",
            FoodNewsRead:"Read More"
        },
        
        {
            FoodNewsImg:"/Image/Illustration/FoodNewsImg (2).jpg",
            FoodNewsDate:"27 Dec",
            FoodNewsAdmin:"By Admin",
            FoodNewsTags:"Chicken",
            FoodNewsHead:"Benifits Of Healthy And Safety Measure",
            FoodNewsRead:"Read More"
        },
        {
            FoodNewsImg:"/Image/Illustration/FoodNewsImg (2).jpg",
            FoodNewsDate:"7 Nov",
            FoodNewsAdmin:"By Admin",
            FoodNewsTags:"Chicken",
            FoodNewsHead:"Benifits Of Healthy And Safety Measure",
            FoodNewsRead:"Read More"
        },
        {
            FoodNewsImg:"/Image/Illustration/FoodNewsImg (3).jpg",
            FoodNewsDate:"15 Dec",
            FoodNewsAdmin:"By Admin",
            FoodNewsTags:"Chicken",
            FoodNewsHead:"Benifits Of Healthy And Safety Measure",
            FoodNewsRead:"Read More"
        }
    ]


    const FooterContact=[
        {
            ContactIcon:"bi bi-geo-alt-fill",
            ContactAddressTitle:"Address",
            ContactAddress:"4648 Rocky Road Philadelphia"
        },
        {
            ContactIcon:"bi bi-envelope",
            ContactAddressTitle:"Send Email",
            ContactAddress:"info@exmple.com"
        },
        {
            ContactIcon:"bi bi-telephone-fill",
            ContactAddressTitle:"Call Emergency",
            ContactAddress:"+88 0123 654 99"
        }
    ]

    const FooterLogo="./Image/Illustration/FooterLogo.svg";
    const FooterLogoBelow="Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis";
    const FooterSocialMedia=[
        "bi bi-facebook",
        "bi bi-twitter-x",
        "bi bi-linkedin",
        "bi bi-youtube"
    ]

    const QuickLinkTitle="Quick Links";
    const QuickLinkData=[
        "About Us",
        "Our Gallery",
        "Our Blogs",
        "FAQ's",
        "Contact Us"
    ]

    const OurMenuTitle="Our Menu";
    const OurMenuData=[
        "Bugger King",
        "Pizza King",
        "Fresh Food",
        "Vegetables",
        "Desserts"
    ]

    const ContactUsTitle="Contact Us";
    const ContactUsTime1="Monday – Friday: 8am – 4pm ";
    const ContactUsTime2="Saturday: 8am – 12am";
    const ContactUsTerms="I agree to the Privacy Policy.";

    return(
        <React.Fragment>

            <Navigation logos={logo} nav={links} icon={icons} ListIcon={ListIcon} ListImg={ListImg}/>

            <Header slides={carouselData} />

            <PopularFood food={PopularFoodData} heading={PopularFoodHeading} PopularFoodTitle={PopularFoodTitle} PopularFoodBurger={PopularFoodBurger} PopularFoodChilli={PopularFoodChilli} />

            <Offer offer={offerData}/>

            <About aboutImgLeft={aboutImgLeft} aboutImgRight={aboutImgRight} aboutTitle={aboutTitle} aboutHeading={aboutHeading} aboutDetail={aboutDetail} aboutBtn={aboutBtn} />

            <BestSelling BestSellingTitle={BestSellingTitle} BestSellingHeading={BestSellingHeading} BestSellingData={BestSellingData} BestSellingBtn={BestSellingBtn} />
            
            <TodaySpecial TodaySpecialStickerUp={TodaySpecialStickerUp} TodaySpecialStickerDown={TodaySpecialStickerDown} TodaySpecialTitle={TodaySpecialTitle} TodaySpecialHeading={TodaySpecialHeading} TodaySpecialTime={TodaySpecialTime} TodaySpecialBtn={TodaySpecialBtn} TodaySpecialImg={TodaySpecialImg} TodaySpecialTomato={TodaySpecialTomato}  />

            <FoodMenu FoodMenuTitle={FoodMenuTitle} FoodMenuHeading={FoodMenuHeading} FoodMenuChoice={FoodMenuChoice} FoodMenuCard={FoodMenuCard} FoodMenuAdd1={FoodMenuAdd1}  />

            <Chefe ChefeTitle={ChefeTitle} ChefeHeading={ChefeHeading} ChefeData={ChefeData}  />

            <FoodNews FoodNewsTitle={FoodNewsTitle} FoodNewsHeading={FoodNewsHeading} FoodNewsData={FoodNewsData} />

            <Footer FooterContact={FooterContact}  FooterLogo={FooterLogo}  FooterLogoBelow={FooterLogoBelow} FooterSocialMedia={FooterSocialMedia} QuickLinkTitle={QuickLinkTitle}  QuickLinkData={QuickLinkData} OurMenuTitle={OurMenuTitle} OurMenuData={OurMenuData} ContactUsTitle={ContactUsTitle} ContactUsTime1={ContactUsTime1} ContactUsTime2={ContactUsTime2}  ContactUsTerms={ContactUsTerms}   />

        </React.Fragment>
    )
}

export default App;