import Featured from "@/src/component/featured";
import Spin from "@/src/component/Spin";
import Work from "@/src/component/work";
import MainLayout from "@/src/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <MainLayout>
      <section className="bg-bg-1 bg-cover bg-no-repeat flex items-center justify-center min-h-screen">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center md:justify-between text-center md:text-left">
            <div>
              {/* Badge */}
              <div className="rounded-full w-full max-w-[219px] bg-white bg-opacity-15 mx-auto md:mx-0">
                <div className="flex justify-center items-center py-2">
                  <Image src="/images/Fire.svg" alt="" width={14} height={14} />
                  <span className="font-inter font-medium text-[14px] ml-2">
                    100% TRUSTED PLATFORM
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col items-center md:items-start">
                <span className="font-rubik font-bold text-[25px] md:text-[36px]">
                  Welcome to
                </span>
                <span className="font-rubik font-bold text-[50px] md:text-[80px]">
                  QMP MINI APP
                </span>
                <span className="font-rubik font-bold text-[50px] md:text-[60px]">
                  Flexibility
                </span>
                <span className="font-medium font-inter text-[18px] mt-4">
                  Control and optimize the operation of your blockchain nodes
                  easily and efficiently.
                </span>
                <Link
                  href="/"
                  className="rounded-full bg-[#FF8311] py-2 text-center w-full max-w-[180px] mt-5"
                >
                  <span className="font-inter text-white font-semibold">
                    Join now
                  </span>
                </Link>
              </div>
            </div>

            {/* Image */}
            <Image
              src="/images/Phone.png"
              alt="Phone"
              width={416}
              height={556}
              className="mt-10 md:mt-0"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container py-20">
          <div className="flex flex-col xl:flex-row xl:justify-between justify-center mt-5">
            <div className="xl:w-1/2">
              <Image
                src="/images/Chart.png"
                alt="Chart"
                width={557}
                height={545}
              />
            </div>
            <div className="md:w-1/2">
              <div className="rounded-full w-full max-w-[115px] border-2 bg-white bg-opacity-15 mx-auto md:mx-0">
                <div className="flex justify-center items-center py-2">
                  <Image
                    src="/images/Fire.svg"
                    alt="Icon"
                    width={14}
                    height={14}
                  />
                  <span className="font-inter font-medium text-[14px] ml-2">
                    About Us
                  </span>
                </div>
              </div>
              <div className="w-full max-w-[520px]">
                <span className="font-bold font-rubik text-[48px]">
                  All your money needs in one app
                </span>
                <div className="flex flex-col md:flex-row gap-5 mt-5">
                  <div className="w-16 h-64 bg-[#FF8311] rounded-full hidden md:block"></div>
                  <div className="rounded-xl bg-[#FFE7D2] px-10 py-10">
                    <span className="font-inter font-medium text-[16px]">
                      Metanode is a powerful, user-friendly platform designed to
                      simplify node management for crypto users like you.
                      Whether you're a seasoned blockchain veteran or just
                      getting started, Metanode makes it easy to interact with
                      various blockchain networks, manage your nodes, and
                      streamline your DeFi activities—all in one place.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-20">
          <div className="flex justify-between">
            <div className="">
              <div className="rounded-full w-full max-w-[115px] border-2 bg-white bg-opacity-15 mx-auto md:mx-0">
                <div className="flex justify-center items-center py-2">
                  <Image src="/images/Fire.svg" alt="" width={14} height={14} />
                  <span className="font-inter font-medium text-[14px] ml-2">
                    FEATURED
                  </span>
                </div>
              </div>
              <div className="w-full max-w-[520px]">
                <span className="font-bold font-rubik text-[48px]">
                  All the features in one app
                </span>
              </div>
              <Featured />
            </div>
            <div>
              <Image
                src="/images/Frame-1.png"
                alt=""
                width={559}
                height={456}
              />
              <Link href={"/"}>
                <div className="rounded-3xl bg-[#FF8311] mt-20">
                  <div className="flex items-center justify-center gap-5 py-5">
                    <span className="font-inter font-medium text-white text-[24px]">
                      Continue with Telegram
                    </span>
                    <Image
                      src="/images/icon/Tele.svg"
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-bg-1 bg-cover bg-no-repeat flex items-center justify-center min-h-screen">
        <div className="container py-20">
          <div className="flex justify-between items-center">
            <Image src="/images/Phone-2.png" alt="" width={387} height={625} />
            <div>
              <div className="rounded-full w-full max-w-[179px] bg-[#470000]  mx-auto md:mx-0">
                <div className="flex justify-center items-center py-2">
                  <Image src="/images/Fire.svg" alt="" width={14} height={14} />
                  <span className="font-inter font-medium text-[14px] text-white ml-2">
                    TRUSTWORTHINESS
                  </span>
                </div>
              </div>
              <div className="w-full max-w-[600px]">
                <span className="font-bold font-rubik text-[48px]">
                  We value your trust and security
                </span>
              </div>
              <div className="w-full max-w-[550px]">
                <span className="font-inter text-[16px]">
                  Our mission is to make finance more accessible, transparent,
                  and secure for everyone. With cutting.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-20">
          <div className="mb-5">
            <span className="font-inter font-bold text-[64px]">Work</span>
          </div>
          <Work />
          <Link href={"/"}>
            <div className="rounded-3xl bg-[#FF8311] mt-20 w-full max-w-[530px]">
              <div className="flex items-center justify-center gap-5 py-2">
                <span className="font-inter font-medium text-white text-[24px]">
                  Continue with Telegram
                </span>
                <Image
                  src="/images/icon/Tele.svg"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </Link>
          <div className="mt-5">
            <span className="font-inter font-medium text-[16px]">
              Click the 🚀 Launch button now to see how Metanode bridges social
              media and the metaverse, empowering you to own a piece of the
              future! 🌟
            </span>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-20">
          <div className=" flex justify-center mb-20">
            <Image src="/images/LuckySpin.png" alt="" width={656} height={80} />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="font-rubik font-semibold text-[32px]">
                Lucky Spin & Win
              </span>
              <div className="w-full max-w-[600px] mt-10">
                <span className="font-inter font-medium text-[15px]">
                  Lucky Spin & Win offers users an exciting and thrilling
                  experience by spinning a lucky wheel to earn points as
                  rewards. Each spin is not just an opportunity to test one's
                  luck but also helps users accumulate points that can be used
                  for various purposes on the platform. Users can earn these
                  reward points with each spin, with the potential to win larger
                  amounts if they spin multiple times. Points not only enhance
                  the excitement of using the application but also encourage
                  users to return frequently to accumulate and utilize their
                  points for exclusive services or content. With Lucky Spin &
                  Win, MINI QMP creates an engaging gamification environment
                  while providing valuable rewards for user participation.
                </span>
              </div>
            </div>
            <div>
              <Spin />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F6F9F8]">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-full w-full max-w-[179px] bg-white  mx-auto md:mx-0">
              <div className="flex justify-center items-center py-2">
                <Image src="/images/Fire.svg" alt="" width={14} height={14} />
                <span className="font-inter font-medium text-[14px] ml-2">
                  Testimonial
                </span>
              </div>
            </div>
            <span>
              GET TO KNOW OUR CLIENTS
            </span>
          </div>

        </div>
      </section>
    </MainLayout>
  );
}
export default Home;
