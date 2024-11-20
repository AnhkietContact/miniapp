import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer data-aos="fade-up" className=" text-white px-10 py-10">
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Logo và mô tả */}
          <div className="flex flex-col items-center xl:items-start ">
            {/* Cân bằng chiều cao và căn chỉnh logo */}
            <Image src="/images/Logo.svg" width={250} height={250} alt="Logo" />
          </div>
          {/* Mạng xã hội */}
          {/* <div className="flex mb-6 mt-5">
            <ul className="flex items-center gap-4 mt-2">
              {Icon.map((icon) => (
                <li
                  className="transform transition-transform duration-200 ease-in-out hover:translate-y-[-3px] "
                  key={icon.name}
                >
                  <Link href={icon.href}>
                    <Image
                      src={icon.src}
                      width={40}
                      height={40}
                      alt={icon.alt}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
          <div className="flex gap-2 ">
            <span className="font-inter font-bold text-black text-[16px]">
              Send Your Feedback :
            </span>
            <span className="font-inter text-[#000] text-[16px]">
              moc.edargpu@tcatnoc
            </span>
          </div>
          {/* Danh sách sản phẩm */}
          <div className="mb-6 font-inter text-[16px] leading-4">
            {/* Cân bằng chiều cao và giãn các mục sản phẩm */}
            {Products.map((product) => (
              <div key={product.id}>
                <ul className="text-[#646161] text-[16px] flex flex-col md:flex-row md:space-x-5 mt-4">
                  {product.links.map((link, index) => (
                    <li key={index} className="flex items-center">
                      {/* Link sản phẩm */}
                      <Link
                        href={link.link}
                        className="hover:text-primary focus:text-primary"
                      >
                        {/* Thêm hiệu ứng hover và focus */}
                        {link.label}
                      </Link>

                      {/* Divider: Hiển thị trừ mục cuối */}
                      {index < product.links.length - 1 && (
                        <div className="h-5 lg:border-l-2 border-t-2 lg:border-t-0 border-[#646060] mx-5 w-full md:w-auto"></div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#646161]">
            © 2024 Design Monks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Dữ liệu sản phẩm mẫu với các mục con
export const Icon = [
  {
    name: "Telegram",
    src: "/images/icon/Tele.png",
    alt: "Telegram",
    href: "/",
  },
  {
    name: "Support",
    src: "/images/icon/Tele.png",
    alt: "Telegram",
    href: "/",
  },
  {
    name: "group",
    src: "/images/icon/Tele.png",
    alt: "Telegram",
    href: "/",
  },
];
export const Products = [
  {
    id: 1,

    links: [
      { label: "Contact", link: "/contact" },
      { label: "Privacy policy", link: "/privacy" },
      { label: "Terms of Service", link: "/terms" },
    ],
  },
];
