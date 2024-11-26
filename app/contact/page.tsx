import React from "react";
import Image from "next/image";

const Contact = () => {
  const contacts = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      address: "123 Main Street, Cityville",
      image: "/images/icon/Avatar-1.svg", // Thay thế bằng đường dẫn hình ảnh của bạn
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      address: "456 Elm Street, Townsville",
      image: "/images/icon/Avatar-2.svg", // Thay thế bằng đường dẫn hình ảnh của bạn
    },
    {
      id: 3,
      name: "Support",
      email: "1@gmail.com",
      address: "789 Oak Avenue, Villagetown",
      image: "/images/icon/Avatar-3.svg", // Thay thế bằng đường dẫn hình ảnh của bạn
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5 md:px-20">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center text-center"
          >
            <Image
              src={contact.image}
              alt={contact.name}
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{contact.name}</h2>
            <p className="text-gray-500">{contact.address}</p>
            <a
              href={`mailto:${contact.email}`}
              className="text-blue-500 hover:underline mt-2"
            >
              {contact.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
