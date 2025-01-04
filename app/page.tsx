import Image from "next/image";
import { Navbar } from "./components/navbar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import DashboardPreview from "./public/dashboard.png"

import  { Customer1, Customer2, Customer3, Customer4, Customer5, Customer6 } from "./components/icons/customers";
import feature1 from "./public/feature1.png"
import feature2 from "./public/feature2.png"
import feature3 from "./public/feature3.png"
import carousel1 from "./public/carousel1.png"
import carousel2 from "./public/carousel2.png"
import carousel3 from "./public/carousel3.png"
import carousel4 from "./public/carousel4.png"
import carousel5 from "./public/carousel5.png"
import carousel6 from "./public/carousel6.png"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import LinearAppIcon from "./components/icons/linear-app";

const customers = [Customer1, Customer2, Customer3, Customer4, Customer5, Customer6]

const features = [
  {
    title: <span>
            Purpose-built for <br/>product development
          </span>,
    thumbnail: feature1,
    descriptions: [
      "Linear was developed with a specific purpose: to empower product teams to do their best work. Every aspect is intentionally designed to help teams focus on what they do best: Planning, building, and shipping great products.",
      "Because of its fit-to-purpose design, Linear is incredibly easy to use, but grows more powerful as you scale. It’s opinionated where it needs to be, but provides enough flexibility to adapt to your team’s unique way of working.",
      "We believe that this approach creates a better way to build products. And more than 10,000 product teams around the globe – from early-stage startups to public companies – agree.",
    ],
    quote: "“We’d tried many tools before Linear but none of them felt like they were made for the way we work. Linear was a breath of fresh air - speedy, snappy, and a pleasure to use.”",
    customer: Customer4
  },
  {
    title: "Designed to move fast",
    thumbnail: feature2,
    descriptions: [
      "Linear is built in pursuit of high-performance. With its keyboard-first design, realtime sync, and zero-friction workflows, it delivers a focused experience ideal for fast-paced development environments.",
      "Linear’s obsessive focus on speed not only results in improved developer productivity, but also enables teams to move faster.",
      "Companies that switch to Linear report a significant uplift in newly filed tickets, vastly reduced issue closing times, and products that ship faster.",
      "For us, speed is not just an afterthought. It’s our most important feature."
    ],
    quote: "“Even as we continue to grow, we’re moving faster because Linear keeps our workflows simple.”",
    customer: Customer5
  },
  {
    title: "Crafted to perfection",
    thumbnail: feature3,
    descriptions: [
      "We believe that there is a lost art of building software. A craftsmanship that yields products of an exceptional, almost magical, quality.",
      "It’s difficult to describe this quality with words and impossible to measure it in numbers, but you can feel it when it’s there. You know it when you experience it.",
      "Achieving this product quality is a function of both the talent of its creators and the tools at their disposal. Linear was built in pursuit of giving the best product teams a tool that matches their skill and ambition.",
      "A tool with unparalleled speed, precision-engineered robustness, and pixel-perfect UI. A tool that abstracts away any impurity that stands in the way between the creator and their craft. A tool that finally lets product teams focus on what matters most:",
      "Bringing back product experiences of the highest level of quality.",
    ],
    quote: "“In a world of clunky, slow, and bloated tools, Linear reverses the script on all three and adds an unrivaled level of delight and polish.”",
    customer: Customer6
  }
]

const carousels = [
  {
    title: <span>Build what customers <br/> actually want </span>,
    head: "Customer Requests",
    thumbnail: carousel1,
  },
  {
    title: <span>Automate pull requests <br/> and commit workflows</span>,
    head: "Powerful git workflows",
    thumbnail: carousel2,
  },
  {
    title: <span>Move Product work<br/>forward form anywhere</span>,
    head: "Linear Mobile",
    thumbnail: carousel3,
  },
  {
    title: <span>Turn workspace requests <br/>into actionable issues</span>,
    head: "Linear Asks",
    thumbnail: carousel4,

  },
  {
    head: "Linear Integrations",
    title: <span>Connect Linear to the <br/>tools you already use</span>,
    thumbnail: carousel5,
  },
  {
    head: "Figma integrations",
    title: <span>Bridge the gap between <br/> engineering and design</span>,
    thumbnail: carousel6,
  },
  {
    head: "Built for developers",
    title: <span>Build your own add-<br/>ons with the linear API</span>,
    thumbnail: carousel3,
  }
]

const footerMenus = [
  {
    title: "Features",
    items: [
      "Plan",
      "Build",
      "Insights",
      "Customer Requests",
      "Linear Asks",
      "Security",
      "Mobile"
    ]
  },
  {
    title: "Product",
    items: [
      "Pricing",
      "Method",
      "Integrations",
      "Changelog",
      "Documentation",
      "Download",
      "Switch"
    ]
  },
  {
    title: "Company",
    items: [
      "About",
      "Customers",
      "Careers",
      "Blog",
      "README",
      "Quality",
      "Brand"
    ]
  },
  {
    title: "Resources",
    items: [
      "API",
      "Status",
      "Startups",
      "Report issue",
      "DPA",
      "Privacy",
      "Terms"
    ]
  },
  {
    title: "Connect",
    items: [
      "Contact us",
      "Community",
      "X (Twitter)",
      "GitHub",
      "YouTube"
    ]
  }
];


export default function Home() {
  return (
    <>
      <Navbar/>

     <div className="max-w-screen-lg mx-auto mt-24">
        <h1 className=" text-5xl font-bold">
          <div>
            Linear is a purpose-built tool for 
          </div>
          <div>
            planning and building products
          </div>
        </h1>
        <p className=" mt-6 mb-10 text-xl font-semibold text-muted-foreground">
          Meet the system for modern software development. 
          <br/>
          Streamline issues, projects, and product roadmaps.</p>
        <div className="flex gap-7 mt-10">
          <Button className="font-semibold bg-zinc-200">Start Building</Button>
          <Button variant="ghost" className="font-semibold hover:bg-zinc-700">
            <span >Introducing</span>
            <span className="text-zinc-400">Customer Requests</span>
          </Button>
        </div>
     </div>

     <div className=" w-11/12 m-auto">
      <Image 
      className="relative left-28 -top-12 -z-10"
      src={DashboardPreview} 
      alt="Dashboard"
            sizes="100vw"
            // Make the image display full width
            style={{
              width: '100%',
              height: 'auto',
            }} />
     </div>

     <div className="max-w-screen-lg mx-auto mb-40 ">
        <div className="flex flex-col items-center mt-10">
          <p className=" text-xl font-semibold">Powering the world’s best product teams.</p>
          <p className="text-xl font-semibold text-muted-foreground">From next-gen startups to established enterprises.</p>
        </div>

      <div className="group relative hover:cursor-pointer">
        <div className=" group-hover:blur-sm mt-20 mx-12 flex flex-wrap justify-between gap-y-20 gap-x-16">
          {
            customers.map((Customer, index) => (
              <div key={index} className="w-48">
                <div className="w-40">
                  <Customer />
                </div>
              </div>
            ))
          }
        </div>
        <div className="w-full h-full absolute justify-center items-center top-0 hidden group-hover:flex">
          <Button className="rounded-full bg-zinc-700 text-foreground hover:bg-zinc-700 px-8 border-zinc-600 border">Meet our customers</Button>
        </div>
      </div>
     </div>

    <div className="max-w-screen-lg mx-auto">
      <div className="flex items-end mb-20">
        <div className=" w-1/2">
          <h2 className=" text-5xl font-semibold leading-tight">Made for modern <br/> product teams</h2>
        </div>
        <div className=" w-1/2">
          <p className="text-muted-foreground">
            Linear is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft.
            <Button variant="ghost" className="m-o p-0 text-foreground font-bold hover:bg-background"> &nbsp;Make the switch</Button>
          </p>
        </div>
      </div>

      <div className="flex gap-8">
        {
          features.map((feature, index) => (
            <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="group flex flex-col justify-between border border-zinc-800 items-center gap-10 bg-[#08090a] w-full rounded-3xl p-6 hover:cursor-pointer opacity-75 hover:opacity-100" key={index}>
                      <Image src={feature.thumbnail} alt="Feature1" 
                        sizes="100vw"
                        // Make the image display full width
                        style={{
                          width: '80%',
                          height: '80%',
                        }} 
                      />
                    <div className="flex justify-between items-center gap-4">
                    <h3 className=" text-xl font-semibold">{feature.title}</h3>
                      <span className=" group-hover:bg-zinc-900 text-xl rounded-full h-10 w-10 border-neutral-800 border flex justify-center items-center">+</span>
                    </div>
                  </div>
                </DialogTrigger>
              <DialogContent className=" max-w-screen-lg my-10 overflow-x-hidden max-h-svh overflow-y-scroll pb-20">
                    <div className="overflow-y-scroll h-full flex items-center flex-col">
                    <Image 
                    className="relative"
                    src={feature.thumbnail} alt="Feature1" 
                        sizes="100vw"
                        // Make the image display full width
                        style={{
                          width: '60%',
                          height: '60%',
                        }} 
                      />
                      <div className=" px-28">
                        <h3 className=" text-5xl font-semibold mb-8">
                         {feature.title}
                        </h3>
                        <div className="flex flex-col gap-8">
                          {
                            feature.descriptions.map((description, index) => (
                              <p key={index} className="text-muted-foreground ">{description}</p>
                            ))
                          }
                        </div>
                        <Separator className="my-12" />
                        <p className=" mx-12 text-center text-xl">{feature.quote}</p>
                        <div className="w-60 m-auto mt-10">
                          <feature.customer />
                        </div>
                        </div>
                    </div>

              </DialogContent>
            </Dialog>
          ))
        }
      </div>
    </div>
    <div className="max-w-screen-lg mx-auto mt-20">
      <div className="flex items-end mb-20">
        <div className=" w-1/2">
          <h2 className=" text-5xl font-semibold leading-tight">Made for modern <br/> product teams</h2>
        </div>
        <div className=" w-1/2">
          <p className="text-muted-foreground">
            Linear is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft.
            <Button variant="ghost" className="m-o p-0 text-foreground font-bold hover:bg-background"> &nbsp;Make the switch</Button>
          </p>
        </div>
      </div>
      <Carousel>
        <CarouselContent >
        {
          carousels.map((carousel, index) => (
            <CarouselItem className=" basis-1/3" key={index}>
              <div className="group h-full flex flex-col justify-between border border-zinc-800 items-center gap-6 bg-[#08090a] w-full rounded-3xl hover:cursor-pointer opacity-75 hover:opacity-100" key={index}>
                  <div className="w-4/5 relative h-72">
                    <Image src={carousel.thumbnail} alt="Feature1" 
                      fill
                      style={{
                        objectFit: 'cover', // cover, contain, none
                      }}
                    />
                  </div>
                  <div className="flex justify-between items-center gap-4 p-6 ">
                    <h3 className=" text-xl font-semibold">{carousel.title}</h3>
                    <span className=" group-hover:bg-zinc-900 text-xl rounded-full h-10 w-10 border-neutral-800 border flex justify-center items-center">+</span>
                  </div>
                </div>
            </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex gap-8">
       
      </div>
      </div>

      <div  className="bg-neutral-900 mt-20">
        <div className="flex justify-between max-w-screen-lg mx-auto py-20">
          <div>
            <LinearAppIcon size={60} height={16} />
          </div>
          {footerMenus.map((menu, index) => (
            <div key={index} className="flex flex-col gap-4 pt-0 p-8">
              <h3 className="text-sm font-semibold">{menu.title}</h3>
              <ul className="flex flex-col gap-2">
                {
                  menu.items.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground">{item}</li>
                  ))
                }
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
