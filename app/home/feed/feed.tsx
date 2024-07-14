"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  PiCashRegister,
  PiCoffee,
  PiHouse,
  PiMoney,
  PiMoneyWavy,
} from "react-icons/pi";
import { ImFeed } from "react-icons/im";

const Home = () => {
  const router = useRouter();

  const items = [
    {
      id: 1,
      title: "Track Billing App",
      description: `It looks like you're trying to reverse the transactions array before
                    mapping it in your component. However, if it's not reversing as
                    expected, there could be a couple of reasons.`,
    },

    {
      id: 6,
      title: "Analytics Dashboard",
      description: `The analytics dashboard provides a comprehensive view of your financial data.
                    It includes charts and graphs that help you analyze your performance over time.`,
    },
    {
      id: 2,
      title: "Manage Invoices",
      description: `This feature allows you to create, send, and manage invoices efficiently.
                    You can track the status of each invoice and receive notifications on payment.`,
    },
    {
      id: 3,
      title: "Expense Tracker",
      description: `Keep an eye on your expenses by logging them into the expense tracker.
                    It provides insights into your spending habits and helps you manage your budget.`,
    },
    {
      id: 9,
      title: "Track Billing App",
      description: `It looks like you're trying to reverse the transactions array before
                    mapping it in your component. However, if it's not reversing as
                    expected, there could be a couple of reasons.`,
    },
    {
      id: 0,
      title: "Track Billing App",
      description: `It looks like you're trying to reverse the transactions array before
                    mapping it in your component. However, if it's not reversing as
                    expected, there could be a couple of reasons.`,
    },
    {
      id: 4,
      title: "Customer Management",
      description: `Manage your customer information in one place. You can add new customers,
                    update their details, and keep track of your interactions with them.`,
    },
    {
      id: 5,
      title: "Analytics Dashboard",
      description: `The analytics dashboard provides a comprehensive view of your financial data.
                    It includes charts and graphs that help you analyze your performance over time.`,
    },
  ];

  return (
    <div className="mt-20 max-w-4xl mx-auto">
      <div className=" mx-5">
        <h1 className=" text-neutral-500 flex items-center gap-1 lg:pt-5 lg:pb-5">
          News Today <ImFeed />
        </h1>
      </div>

      <div className=" flex w-[100vw] md:max-w-4xl md:mx-auto ">
        <div className=" p-0 ">
          <div className="  flex flex-col md:flex-row md:gap-5 md:flex md:flex-wrap p-2 ">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  router.push("/home/2");
                }}
                className="cursor-pointer group hover:bg-neutral-900 md:w-[48%] my-1 rounded-sm h-fit mx-auto bg-[#1C1C1C] border border-neutral-800"
              >
                <div className="text-neutral-500 md:text-xl py-2 px-2 font-bold">
                  {item.title}
                </div>
                <div className="border-b border-neutral-800"></div>
                <div className="text-neutral-500 mx-2 py-2 md:text-base text-sm">
                  {item.description}
                </div>
                <div className=" flex justify-between mx-5 py-2">
                  <PiCoffee className=" text-neutral-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
