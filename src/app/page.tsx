import Carousel from "@/components/Slider";

const images = [
  "/1481255769.jpg",
  "/253252523.jpg",
  "/1186004215.jpg",
  "/1344472442.jpg",
];

export default function Home() {
  return (
    <>
      <div className="my-2 mx-5 flex">
        <div className="w-[70%] h-[400px]">
          <Carousel images={images} />
        </div>
        <div className="w-1/4 flex flex-col gap-5">
          <div className="bg-white p-[15px] h-auto">
            <header>
              <div className="text-[21px] font-bold border-b-[2px] border-[#ddd0d0bf] font-[fgDemi] mb-5">
                BOXING HEADLINES
              </div>
            </header>
            <div className="row nomargin bg-grey0 news_data">
              {[
                "Anderson vs Bakole joins Riyadh Season on Aug. 3",
                "Crowley fails eye exam, pulled from Ennis title fight",
                "Kenshiro Teraji aims for move up to flyweight, WBC title fight",
                "Daniel Jacobs returns against Shane Mosley Jr on July 6",
                "Shields to face heavyweight champion Lepage-Joanisse on July 27",
                "PODCAST: What’s left for Wilder, Canelo vacates IBF, Broner vs Cobbs preview",
                "‘Ready to go in there and capitalize’: Martin will bring best version of himself against Tank",
                " Raymond Ford moving up in weight after featherweight title loss",
                "Skye Nicolson title defense, more set for Ennis vs Crowley card",
              ].map((item) => (
                <div
                  key={item}
                  className="pb-[7px] border-b border-[#d1d1d1] mb-[10px]"
                >
                  <div className="">
                    <a
                      className="headlines-text"
                      href="#/news/boxing/1717618209/1"
                      data-discover="true"
                    >
                      <strong className="headlines-text-item">{item}</strong>
                    </a>
                  </div>
                </div>
              ))}
              {/* <div className="headlines-item-block">
                <div className="">
                  <a
                    className="headlines-text"
                    href="#/news/boxing/1717607410/1"
                    data-discover="true"
                  >
                    <strong className="headlines-text-item">
                      ‘Like an animal going into the slaughter house’: Riakporhe
                      says Billam-Smith can’t stop what’s comin
                    </strong>
                  </a>
                </div>
              </div>
              <div className="headlines-item-block">
                <div className="">
                  <a
                    className="headlines-text"
                    href="#/news/boxing/1717607409/1"
                    data-discover="true"
                  >
                    <strong className="headlines-text-item">
                      ‘Shoot you in your sh-t’: Broner makes gun threats towards
                      Cobbs at final presser
                    </strong>
                  </a>
                </div>
              </div>
              
              
              
          
              
              
               */}
            </div>
          </div>
          {/* <div className="sidebar_home_two">
            <header>
              <div className="headlines">MMA HEADLINES</div>
            </header>
            <div className="row nomargin bg-grey0 news_data">
              <div className="headlines-item-block">
                <div className="">
                  <a
                    className="headlines-text"
                    href="#/news/mma/40604/1"
                    data-discover="true"
                  >
                    <strong className="headlines-text-item">
                      The War Room: Dan Hardy breaks down Jessica Andrade vs.
                      Rose Namajunas 2 at UFC 251
                    </strong>
                  </a>
                </div>
              </div>
              <div className="headlines-item-block">
                <div className="">
                  <a
                    className="headlines-text"
                    href="#/news/mma/40602/1"
                    data-discover="true"
                  >
                    <strong className="headlines-text-item">
                      Abdulmanap Nurmagomedov, Khabib’s father, dies from
                      COVID-19 complications
                    </strong>
                  </a>
                </div>
              </div>
              <div className="headlines-item-block">
                <div className="">
                  <a
                    className="headlines-text"
                    href="#/news/mma/40601/1"
                    data-discover="true"
                  >
                    <strong className="headlines-text-item">
                      MMA world mourns Abdulmanap Nurmagomedov’s death
                    </strong>
                  </a>
                </div>
              </div>
              <div className="headlines-item-block">
                <div className="">
                  <a
                    className="headlines-text"
                    href="#/news/mma/40600/1"
                    data-discover="true"
                  >
                    <strong className="headlines-text-item">
                      Video: Gilbert Burns positive for COVID-19, out of UFC 251
                      main event reaction
                    </strong>
                  </a>
                </div>
              </div>
              <div className="headlines-item-block">
                <div className="">
                  <a
                    className="headlines-text"
                    href="#/news/mma/40595/1"
                    data-discover="true"
                  >
                    <strong className="headlines-text-item">
                      Zane Richards vs. Zach Sanders: Adjustments from the
                      underhook
                    </strong>
                  </a>
                </div>
              </div>
              <div className="headlines-item-block">
                <div className="">
                  <a
                    className="headlines-text"
                    href="#/news/mma/40591/1"
                    data-discover="true"
                  >
                    <strong className="headlines-text-item">
                      Morning Report: Colby Covington suggests winner-take-all
                      fight with ‘scaredest motherf*cker’ Jorge M
                    </strong>
                  </a>
                </div>
              </div>
              <div className="headlines-item-block">
                <div className="">
                  <a
                    className="headlines-text"
                    href="#/news/mma/40586/1"
                    data-discover="true"
                  >
                    <strong className="headlines-text-item">
                      UFC ‘Fight Island’ poster released for Robert Whittaker
                      vs. Darren Till
                    </strong>
                  </a>
                </div>
              </div>
              <div className="headlines-item-block">
                <div className="">
                  <a
                    className="headlines-text"
                    href="#/news/mma/40585/1"
                    data-discover="true"
                  >
                    <strong className="headlines-text-item">
                      Jorge Masvidal ‘Absolutely Willing’ To Fight Kamaru Usman
                      At UFC 251
                    </strong>
                  </a>
                </div>
              </div>
              <div className="headlines-item-block">
                <div className="">
                  <a
                    className="headlines-text"
                    href="#/news/mma/40584/1"
                    data-discover="true"
                  >
                    <strong className="headlines-text-item">
                      Photo Vault: Vaudevillian Jiu-Jitsu
                    </strong>
                  </a>
                </div>
              </div>
              <div className="headlines-item-block">
                <div className="">
                  <a
                    className="headlines-text"
                    href="#/news/mma/40583/1"
                    data-discover="true"
                  >
                    <strong className="headlines-text-item">
                      O’Malley starting clothing line to counter lack of Reebok
                      revenue
                    </strong>
                  </a>
                </div>
              </div>
              <div className="headlines-item-block">
                <div className="">
                  <a
                    className="headlines-text"
                    href="#/news/mma/40576/1"
                    data-discover="true"
                  >
                    <strong className="headlines-text-item">
                      Former UFC fighter Clay Collard gets another Top Rank
                      Boxing spot
                    </strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar_home_three">
            <p className="follow_the">FOLLOW MVP BOXING</p>
            <div className="sidebar_home_social_icon">
              <a
                target="_blank"
                href="http://www.facebook.com/pages/MVP-Boxing/135461625286?ref=ts"
                title="Facebook"
              >
                <i
                  className="fab fa-facebook-f"
                  aria-hidden="true"
                  style={{ border: "1px solid grey", color: "white" }}
                ></i>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/manny_masson"
                title="Instagram"
              >
                <i
                  className="fab fa-instagram"
                  aria-hidden="true"
                  style={{ border: "1px solid grey", color: "white" }}
                ></i>
              </a>
              <a
                target="_blank"
                href="http://twitter.com/mvpboxing"
                title="Twitter"
              >
                <i
                  className="fa-brands fa-x-twitter"
                  style={{ border: "1px solid grey", color: "white" }}
                  aria-hidden="true"
                ></i>
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/user/MassonLLC"
                title="Youtube"
              >
                <i
                  className="fab fa-youtube"
                  aria-hidden="true"
                  style={{ border: "1px solid grey", color: "white" }}
                ></i>
              </a>
              <a
                target="_blank"
                href="https://https://tiktok.com/@manny_masson"
                title="TikTok"
              >
                <i
                  className="fa-brands fa-tiktok"
                  aria-hidden="true"
                  style={{ border: "1px solid grey", color: "white" }}
                ></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav"
                title="linkedin"
              >
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
