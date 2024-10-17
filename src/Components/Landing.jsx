import "./landing.css"
import { RiSearch2Fill } from "react-icons/ri";

const navlinks=[
    {title:"Energy",
        link:""
    },
    {title:"Energy",
        link:""
    },
    {title:"Energy",
        link:""
    },
    {title:"Energy",
        link:""
    },
    {title:"Energy",
        link:""
    },
    {title:"Energy",
        link:""
    },
    {title:"Energy",
        link:""
    },
]
const ldcard=[
    {titleb:"Get access to unforgettable events",
        titleg:" from just $125 a month with 0% financing through RushArena.",
        btntitle:"Take a look",
        imgsrc:""
    },
    {titleb:"Get access to unforgettable events",
        titleg:" from just $125 a month with 0% financing through RushArena.",
        btntitle:"Take a look",
        imgsrc:""
    },{titleb:"Get access to unforgettable events",
        titleg:" from just $125 a month with 0% financing through RushArena.",
        btntitle:"Take a look",
        imgsrc:""
    },{titleb:"Get access to unforgettable events",
        titleg:" from just $125 a month with 0% financing through RushArena.",
        btntitle:"Take a look",
        imgsrc:""
    }
]
function Landing(){
    return(
        <div>
            <div className="navbar">
                <div className="nav-logo"><h3>Logo</h3></div>
                <div className="nav-links">
                     {navlinks.map((item,key)=>(
                         <h4>{item.title}</h4>
                     ))}
                </div>
                <div className="nav-cred">
                    <div className="search-nav">
                    <RiSearch2Fill />
                    <h4>Search</h4>
                    </div>
                <div className="account-nav">
                <RiSearch2Fill />
                <h4>Account</h4>
                </div>
                </div>
            </div>
            <div className="ld1">
                <div className="ld1-mat">
                    <div className="ld1-head">
                    <h1  >Unleash Your Inner Champion at RushArena</h1>
                    </div>
                    <div className="ld1-p">
                   <p>
                   "RushArena is your ultimate destination for sports enthusiasts. Whether you're a player or a fan, dive into the action, stay updated with the latest news, and fuel your passion for the game."
</p>

                   {/* Join us today to unlock Beyond, with rewards like free solar panels2 and more. Fixing is a great way to lock in your prices over winter. <a className="learn-more" href="">Learn more.</a></p>  */}
                    </div>
                    <div className="ld1-btn">
                        <button>Switch now</button>
                    </div>
                </div>
                <div>
                    <img  className="ld1-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1728665186/j2e4mtn5r4rcqkcdho9p.jpg" alt="jj"/>
                </div>
            </div>
            <div className="ld2">
                <h2>Switch to RushArena today.
                <p>
                Let’s make unforgettable memories, effortlessly and sustainably, with RushArena.
                </p>
                </h2>
                <div className="search-post">
                <input type="text" placeholder="Postcode"  />
                 <button>Get a quote</button>
                </div>
            </div>
            {/* <button className="dw">ff</button> */}
            <div className="ld-cards">
              
              {ldcard.map((item,key)=>(
                   <div className="ld-card">
                    <div className="ld-card-mat">
                    <h1>{item.titleb}
                    <span className="mat-p">{item.titleg}</span>
                    </h1>
                    <button>Take a look</button>
                    </div>
                    <img src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1728795851/dhsuqmzntxlw8saxlyll.jpg" alt="g"/>
                 </div>
              ))}
            </div>
            <div className="ld3">
                <h2>Why choose RushArena?</h2>
                <div className="ld3-matter">
                    <div className="mat1">
                        <h3>Your event essentials</h3>
                        <p>
                        Use our free app to track and manage your event bookings anytime, anywhere.
                        </p>
                    </div>
                    <div className="mat2">
                    <h3>Your event essentials</h3>
                    <p>
                    Enjoy personalized event recommendations tailored to your interests.

                    </p>
                    </div>
                    <div className="mat3">
                    <h3>Your event essentials</h3>
                    <p>
                    Access exclusive offers and promotions for the best events.

                    </p>
                    </div>
                </div>
            </div>
            <div className="ld4">
                <img className="ld4-img" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1728794449/fnngsdb6r2ycwtfbfo9k.jpg" alt="dd"/>
                <div className="ld4-mat">
                    <h1>
                    Path to RushArena</h1>
                  <h2>"With cutting-edge sports tech and expert guidance, RushArena helps you elevate your game while embracing a healthier, active lifestyle. Join us on the path to peak performance—better for you, your fitness, and your competitive edge."</h2>
                    {/* <h2>With a range of smart tech to choose from and our expert teams by your side, we can help reduce your energy bills and our collective carbon footprint. Join us on the path to energy that's better for you, your wallet and the planet.</h2> */}
                </div>
            </div>
            <div className="ld5">
                <div className="ld5-matter">
                    <h1>RushArena – Your gateway to unforgettable experience</h1>
                    <p>
                    Get more with RushArena. Enjoy exclusive access to the most thrilling events at legendary venues like RushArena Wembley, RushArena Hydro Glasgow, and The O2 Arena.
                    </p>
                    <button>Join for free</button>
                </div>
                <div className="ld5-image">
                    <img className="ld5img" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1728793193/no9mpyrebnrovy9wksnh.png" alt="d"/>
                </div>
            </div>
            <div className="ld6">
                <h3>Important information </h3>
                <p>
                RushArena is a premier platform that gives users access to exclusive tickets for the biggest and most exciting events across iconic venues. From concerts and live performances to sports and cultural events, RushArena ensures that users never miss out on unforgettable moments. Key features include:
                </p>
                
                <p>
                Exclusive Ticket Access: Early access to tickets for high-demand events at renowned venues like RushArena Wembley, RushArena Hydro Glasgow, and The O2 Arena.
                </p>

<p>
Seamless Booking Experience: Intuitive and user-friendly platform offering a fast and secure ticket booking process.<br/>
</p>

<p>
Premium Seating: Option to select from the best seats in the house for a more immersive event experience.<br/>

</p>
<p>
Special Offers: Frequent promotions, discounts, and member-only offers to make the event experience even more affordable and enjoyable.<br/>

</p>
<p>
VIP Packages: Access to exclusive VIP packages with added benefits like backstage passes, meet-and-greet opportunities, and premium hospitality.<br/>

</p>
<p>
Event Diversity: From international concerts, and sports events, to theater performances, and cultural festivals, RushArena covers a broad spectrum of entertainment.<br/>

</p>
<p>
Mobile-Friendly Access: Book tickets on the go using the RushArena app, making it easy to access tickets anywhere, anytime.<br/>

</p>
<p>
24/7 Customer Support: Dedicated support team available to assist with bookings, inquiries, and any event-related issues.<br/>

</p>
<p>
RushArena is designed for those who don’t want to miss out on the best entertainment experiences. Whether it’s live music, sports, or cultural events, RushArena is your ticket to good times!<rb/>
</p>                
            </div>
            <div className="footer">
                <div className="footerlinks">

                </div>
                <div className="footermat">

                </div>
            </div>
            {/* <Nayan /> */}
        </div>
    )
}

// function Nayan(){
//      return(
//         <div>
//             <h1>NAYAN</h1>
//             </div>
//      )
// }

export default Landing;