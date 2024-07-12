"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { PiCoffee } from "react-icons/pi";

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
    <div className="mt-20 mx-auto sm:flex sm:flex-wrap max-w-4xl gap-5">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            router.push("/home/2");
          }}
          className="cursor-pointer group hover:bg-neutral-900 w-[96%] sm:w-[44%] md:w-[48%] my-2 rounded-sm h-fit mx-auto bg-[#1C1C1C] border border-neutral-800"
        >
          <div className="text-neutral-500 md:text-xl py-2 px-2 font-bold">
            {item.title}
          </div>
          <div className="border-b border-neutral-800"></div>
          <div className="text-neutral-500 mx-2 py-2 md:text-base text-sm">
            {item.description}
          </div>
          <div>
            <PiCoffee className=" text-neutral-500" />
            <PiCoffee className=" text-neutral-500" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
