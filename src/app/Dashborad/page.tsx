"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "../Components/navbar";
import Link from "next/link";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard"); // Track the active tab
  const [sidebarOpen, setSidebarOpen] = useState(false); // Toggle sidebar for small screens

  return (
    <div className="flex w-full min-h-screen bg-[#F6F7F9]">
      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full w-[286px] bg-white border-r border-gray-200 p-6 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:relative md:translate-x-0`}
      >
        {/* Close Button (Small Screens Only) */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-4 right-4 text-gray-500 md:hidden"
        >
          ✕
        </button>

        {/* Sidebar Content */}
        <div>
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-600 mb-6">MORENT</h1>

          {/* Main Menu */}
          <p className="text-sm text-gray-500 mb-4">MAIN MENU</p>
          {[
            {
              name: "dashboard",
              label: "Dashboard",
              icon: "/home.png",
              link: "/",
            },
            {
              name: "carRent",
              label: "Car Rent",
              icon: "/car.png",
              link: "/car-rent",
            },
            {
              name: "insight",
              label: "Insight",
              icon: "/chart.png",
              link: "/insight",
            },
            {
              name: "reimburse",
              label: "Reimburse",
              icon: "/wallet.png",
              link: "/reimburse",
            },
            {
              name: "inbox",
              label: "Inbox",
              icon: "/message.png",
              link: "/inbox",
            },
            {
              name: "calendar",
              label: "Calendar",
              icon: "/calendar.png",
              link: "/calendar",
            },
          ].map((menu) => (
            <Link key={menu.name} href={menu.link}>
              <div
                onClick={() => setActiveTab(menu.name)}
                className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer mb-2 ${
                  activeTab === menu.name
                    ? "bg-blue-500 text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <Image
                  src={menu.icon}
                  alt={menu.label}
                  width={24}
                  height={24}
                  className="invert"
                />
                <span className="font-medium">{menu.label}</span>
              </div>
            </Link>
          ))}

          {/* Preferences */}
          <p className="text-sm text-gray-500 mt-10 mb-4">PREFERENCES</p>
          {[
            {
              name: "settings",
              label: "Settings",
              icon: "/setting.png",
              link: "/setting-1",
            },
            {
              name: "help",
              label: "Help & Center",
              icon: "/help.png",
              link: "/help-center",
            },
            {
              name: "darkMode",
              label: "Dark Mode",
              icon: "/dark.png",
              link: "/dark-mode",
            },
          ].map((menu) => (
            <Link key={menu.name} href={menu.link}>
              <div
                onClick={() => setActiveTab(menu.name)}
                className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer mb-2 ${
                  activeTab === menu.name
                    ? "bg-blue-500 text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <Image
                  src={menu.icon}
                  alt={menu.label}
                  width={24}
                  height={24}
                  className="invert"
                />
                <span className="font-medium">{menu.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </aside>

      {/* Overlay for Sidebar on Small Screens */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Navbar */}
        <div className="flex items-center justify-between">
          {/* Hamburger Menu for Small Screens */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-gray-500"
          >
            ☰
          </button>
        </div>
        <Navbar />
        {/* Main Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Details Rental */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-black mb-4">
              Details Rental
            </h2>
            <Image
              src="/Maps.png"
              alt="Map"
              width={600}
              height={300}
              className="rounded-lg"
            />
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Image
                  src="/Look1.png"
                  alt="Car"
                  width={60}
                  height={40}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-lg text-black font-bold">
                    Nissan GT - R
                  </h3>
                  <p className="text-sm text-gray-500">Sport Car</p>
                </div>
              </div>
              <p className="text-gray-500">#9761</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-bold text-black">Pick-Up</h4>
                <p className="text-sm text-gray-500">Kota Semarang</p>
                <p className="text-sm text-gray-500">20 July 2022</p>
                <p className="text-sm text-gray-500">07:00</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-black">Drop-Off</h4>
                <p className="text-sm text-gray-500">Kota Jakarta</p>
                <p className="text-sm text-gray-500">21 July 2022</p>
                <p className="text-sm text-gray-500">01:00</p>
              </div>
            </div>
            <div className="mt-6 border-t pt-4 flex justify-between">
              <p className="font-bold text-black">Total Rental Price</p>
              <p className="text-lg font-bold text-blue-500">$80.00</p>
            </div>
          </div>

          {/* Top 5 Car Rentals */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-black mb-4">
              Top 5 Car Rentals
            </h2>
            <Image
              src="/Top5.png"
              alt="Chart"
              width={300}
              height={300}
              className="mx-auto"
            />
            <div className="mt-6 text-black">
              {[
                { name: "Sport Car", color: "#002D62", value: 17439 },
                { name: "SUV", color: "#0066b2", value: 9478 },
                { name: "coupe", color: "#318CE7", value: 18197 },
                { name: "Hatchback", color: "#7CB9E8", value: 1250 },
                { name: "MPV", color: "#AFDBF5", value: 14406 },
              ].map((car, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: car.color }}
                    ></div>
                    <p className="text-sm">{car.name}</p>
                  </div>
                  <p className="text-sm font-bold">
                    {car.value.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-black mb-4">
              Recent Transactions
            </h2>
            <ul className="mt-6 text-black space-y-4">
              {[
                {
                  name: "Nissan GT - R",
                  date: "20 July",
                  price: "$80.00",
                  image: "/car1.png",
                },
                {
                  name: "koenigsegg",
                  date: "19 July",
                  price: "$99.00",
                  image: "/car2.png",
                },
                {
                  name: "Rolls-Royce",
                  date: "18 July",
                  price: "$96.00",
                  image: "/car3.png",
                },
                {
                  name: "CR-V",
                  date: "17 July",
                  price: "$80.00",
                  image: "/car4.png",
                },
              ].map((transaction, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <Image
                      src={transaction.image}
                      alt={transaction.name}
                      width={132}
                      height={70}
                      className="rounded-lg"
                    />
                    <div>
                      <p className="font-bold">{transaction.name}</p>
                      <p className="text-sm text-gray-500">
                        {transaction.date}
                      </p>
                    </div>
                  </div>
                  <p className="text-blue-500 font-bold">{transaction.price}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
