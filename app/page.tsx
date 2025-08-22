"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";

export default function Home() {
  // Slider 1 (your existing hero)
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <>
      <div className="md:relative w-full h-full overflow-hidden md:max-h-[640px] border-b border-gray-200">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            <div className="embla__slide flex-[0_0_100%]">
              <div className="h-full w-full flex items-center">
                <div className="w-full h-full abs">
                  <div className="grid grid-cols-12 items-center gap-8 md:gap-16">
                    <div className="col-span-12 md:col-start-2 md:col-span-4 min-w-0  hidden md:block">
                      <h1 className="!text-[100px] !font-medium">Abu Dhabi</h1>
                      <p className="!font-normal mt-8">
                        The city of Abu Dhabi is the capital of the United Arab
                        Emirates. The name "Abu Dhabi" means "father of the
                        gazelle" in Arabic, according to Visit Abu Dhabi and
                        Wikipedia. It was originally founded on an island and
                        has since grown into a modern, cosmopolitan city. The
                        city is known for its blend of ancient history, rich
                        culture, stunning nature, and luxury offerings.
                      </p>
                      <ButtonPrimary
                        text="Learn More "
                        href=""
                        className="!mt-8 !w-[180px]"
                        icon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                          </svg>
                        }
                      />
                    </div>
                    <div className="col-span-12 md:col-span-7 h-full relative">
                      <div className="absolute block md:hidden bottom-0 w-full">
                        <div className="flex justify-center items-center">
                          <h1 className="!font-medium text-white text-shadow-2xs">
                            Abu Dhabi
                          </h1>
                        </div>
                      </div>
                      <Image
                        src="/dubai.jpg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                        alt="Dubai"
                        className="!h-[300px] md:!h-auto w-full object-cover !m-0 !p-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-4 top-[300px] md:left-8 md:top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white text-black border border-gray-300 cursor-pointer shadow"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-4 d:right-8 top-[300px] md:top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white text-black border border-gray-300 cursor-pointer shadow"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="container">
        <div className="flex flex-col md:grid grid-cols-12 gap-0">
          <div className="col-span-6 md:col-span-4 mt-2">
            <div className="p-5 rounded-md flex flex-col gap-0 md:gap-6">
              <div className="flex items-center justify-center">
                <h1>5+</h1>
              </div>
              <h5 className="text-center text-black !font-semibold">
                Years of Experience
              </h5>
            </div>
          </div>

          <div className="col-span-6 md:col-span-4 mt-2">
            <div className="p-5 rounded-md flex flex-col gap-0 md:gap-6">
              <div className="flex items-center justify-center">
                <h1>10K+</h1>
              </div>
              <h5 className="text-center text-black !font-semibold">
                Happy Travelers Served
              </h5>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 mt-2">
            <div className="p-5 rounded-md flex flex-col gap-0 md:gap-6">
              <div className="flex items-center justify-center">
                <h1>100+</h1>
              </div>
              <h5 className="text-center text-black !font-semibold">
                Destinations Worldwide
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200"></div>

      <section className="md:container py-2 md:py-12">
        <div className="px-5 ">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <h3 className="!font-bold text-center">
                Top Destinations to Explore
              </h3>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-4 mt-1 md:mt-4">
              <p className="text-center text-gray-600">
                We carefully handpick every destination to ensure you get the
                perfect balance of adventure, comfort, and cultural experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex overflow-x-auto md:grid md:grid-cols-12 md:gap-0">
            <div className="min-w-[90%] md:col-span-4 p-4 relative">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="min-h-[350px] object-cover !m-0 rounded-lg"
                src={"/dubai.jpg"}
                alt=""
              />
              <button className="bg-white rounded-full px-12 py-2 absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Dubai
              </button>
            </div>

            <div className="min-w-[90%] md:col-span-4 p-4 relative">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="min-h-[350px] object-cover !m-0 rounded-lg"
                src={"/dubai.jpg"}
                alt=""
              />
              <button className="bg-white rounded-full px-12 py-2 absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Dubai
              </button>
            </div>

            <div className="min-w-[90%] md:col-span-4 p-4 relative">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="min-h-[350px] object-cover !m-0 rounded-lg"
                src={"/dubai.jpg"}
                alt=""
              />
              <button className="bg-white rounded-full px-12 py-2 absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Dubai
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="md:container py-12">
        <div className="px-5">
          <div className="flex items-center justify-between">
            <div className="">
              <h3 className="!font-bold text-center !m-0">Find a Tour</h3>
            </div>
            <div className="">
              <ButtonSecondary text={"See More"} href={""}></ButtonSecondary>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-12 mt-12">
            <div className="col-span-12 md:col-span-3 p-4 relative">
              <div className="flex flex-col gap-5  bg-white rounded-lg border border-gray-300">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="min-h-[200px] object-cover !m-0 rounded-t-lg"
                  src={"/dubai.jpg"}
                  alt=""
                ></Image>
                <div className="absolute top-0 w-full px-2 py-2">
                  <div className="flex justify-between items-center mb-2">
                    <div className="bg-white rounded px-4 py-1 text-[12px] font-bold mt-4">
                      Popular
                    </div>
                  </div>
                </div>
                <div className="relative px-4 pb-2">
                  <div className="flex justify-between items-start">
                    <h5 className="!text-black !font-semibold !text-[24px]">
                      Hatta Full Day Tour
                    </h5>
                  </div>
                  <div className="flex flex-col justify-start text-start items-start gap-1 mt-1">
                    <div className="flex items-center gap-2">
                      <p className="opacity-30 line-through !text-[14px] !font-bold">
                        AED 150
                      </p>
                      <p className="!text-[16px]">AED 99</p>
                    </div>
                  </div>

                  <p className="opacity-60 !mt-1 !text-[14px]">
                    Lorem ipsum is a text used to denote something somewhere
                  </p>
                  <div className="flex items-center gap-2 mt-6">
                    <ButtonPrimary
                      className="w-full text-center !justify-center"
                      text={"Book Online"}
                      href={""}
                    ></ButtonPrimary>
                    <ButtonSecondary
                      text={""}
                      href={""}
                      className="!py-1 !px-2 !min-w-[10px] !m-0 !w-fit h-fit"
                      icon={
                        <svg viewBox="0 0 32 32" className="whatsapp-ico">
                          <path
                            d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      }
                    ></ButtonSecondary>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 p-4 relative">
              <div className="flex flex-col gap-5  bg-white rounded-lg border border-gray-300">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="min-h-[200px] object-cover !m-0 rounded-t-lg"
                  src={"/dubai.jpg"}
                  alt=""
                ></Image>
                <div className="absolute top-0 w-full px-2 py-2">
                  <div className="flex justify-between items-center mb-2">
                    <div className="bg-white rounded px-4 py-1 text-[12px] font-bold mt-4">
                      Popular
                    </div>
                  </div>
                </div>
                <div className="relative px-4 pb-2">
                  <div className="flex justify-between items-start">
                    <h5 className="!text-black !font-semibold !text-[24px]">
                      Hatta Full Day Tour
                    </h5>
                  </div>
                  <div className="flex flex-col justify-start text-start items-start gap-1 mt-1">
                    <div className="flex items-center gap-2">
                      <p className="opacity-30 line-through !text-[14px] !font-bold">
                        AED 150
                      </p>
                      <p className="!text-[16px]">AED 99</p>
                    </div>
                  </div>

                  <p className="opacity-60 !mt-1 !text-[14px]">
                    Lorem ipsum is a text used to denote something somewhere
                  </p>
                  <div className="flex items-center gap-2 mt-6">
                    <ButtonPrimary
                      className="w-full text-center !justify-center"
                      text={"Book Online"}
                      href={""}
                    ></ButtonPrimary>
                    <ButtonSecondary
                      text={""}
                      href={""}
                      className="!py-1 !px-2 !min-w-[10px] !m-0 !w-fit h-fit"
                      icon={
                        <svg viewBox="0 0 32 32" className="whatsapp-ico">
                          <path
                            d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      }
                    ></ButtonSecondary>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 p-4 relative">
              <div className="flex flex-col gap-5  bg-white rounded-lg border border-gray-300">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="min-h-[200px] object-cover !m-0 rounded-t-lg"
                  src={"/dubai.jpg"}
                  alt=""
                ></Image>
                <div className="absolute top-0 w-full px-2 py-2">
                  <div className="flex justify-between items-center mb-2">
                    <div className="bg-white rounded px-4 py-1 text-[12px] font-bold mt-4">
                      Popular
                    </div>
                  </div>
                </div>
                <div className="relative px-4 pb-2">
                  <div className="flex justify-between items-start">
                    <h5 className="!text-black !font-semibold !text-[24px]">
                      Hatta Full Day Tour
                    </h5>
                  </div>
                  <div className="flex flex-col justify-start text-start items-start gap-1 mt-1">
                    <div className="flex items-center gap-2">
                      <p className="opacity-30 line-through !text-[14px] !font-bold">
                        AED 150
                      </p>
                      <p className="!text-[16px]">AED 99</p>
                    </div>
                  </div>

                  <p className="opacity-60 !mt-1 !text-[14px]">
                    Lorem ipsum is a text used to denote something somewhere
                  </p>
                  <div className="flex items-center gap-2 mt-6">
                    <ButtonPrimary
                      className="w-full text-center !justify-center"
                      text={"Book Online"}
                      href={""}
                    ></ButtonPrimary>
                    <ButtonSecondary
                      text={""}
                      href={""}
                      className="!py-1 !px-2 !min-w-[10px] !m-0 !w-fit h-fit"
                      icon={
                        <svg viewBox="0 0 32 32" className="whatsapp-ico">
                          <path
                            d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      }
                    ></ButtonSecondary>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 p-4 relative">
              <div className="flex flex-col gap-5  bg-white rounded-lg border border-gray-300">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="min-h-[200px] object-cover !m-0 rounded-t-lg"
                  src={"/dubai.jpg"}
                  alt=""
                ></Image>
                <div className="absolute top-0 w-full px-2 py-2">
                  <div className="flex justify-between items-center mb-2">
                    <div className="bg-white rounded px-4 py-1 text-[12px] font-bold mt-4">
                      Popular
                    </div>
                  </div>
                </div>
                <div className="relative px-4 pb-2">
                  <div className="flex justify-between items-start">
                    <h5 className="!text-black !font-semibold !text-[24px]">
                      Hatta Full Day Tour
                    </h5>
                  </div>
                  <div className="flex flex-col justify-start text-start items-start gap-1 mt-1">
                    <div className="flex items-center gap-2">
                      <p className="opacity-30 line-through !text-[14px] !font-bold">
                        AED 150
                      </p>
                      <p className="!text-[16px]">AED 99</p>
                    </div>
                  </div>

                  <p className="opacity-60 !mt-1 !text-[14px]">
                    Lorem ipsum is a text used to denote something somewhere
                  </p>
                  <div className="flex items-center gap-2 mt-6">
                    <ButtonPrimary
                      className="w-full text-center !justify-center"
                      text={"Book Online"}
                      href={""}
                    ></ButtonPrimary>
                    <ButtonSecondary
                      text={""}
                      href={""}
                      className="!py-1 !px-2 !min-w-[10px] !m-0 !w-fit h-fit"
                      icon={
                        <svg viewBox="0 0 32 32" className="whatsapp-ico">
                          <path
                            d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      }
                    ></ButtonSecondary>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 p-4 relative">
              <div className="flex flex-col gap-5  bg-white rounded-lg border border-gray-300">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="min-h-[200px] object-cover !m-0 rounded-t-lg"
                  src={"/dubai.jpg"}
                  alt=""
                ></Image>
                <div className="absolute top-0 w-full px-2 py-2">
                  <div className="flex justify-between items-center mb-2">
                    <div className="bg-white rounded px-4 py-1 text-[12px] font-bold mt-4">
                      Popular
                    </div>
                  </div>
                </div>
                <div className="relative px-4 pb-2">
                  <div className="flex justify-between items-start">
                    <h5 className="!text-black !font-semibold !text-[24px]">
                      Hatta Full Day Tour
                    </h5>
                  </div>
                  <div className="flex flex-col justify-start text-start items-start gap-1 mt-1">
                    <div className="flex items-center gap-2">
                      <p className="opacity-30 line-through !text-[14px] !font-bold">
                        AED 150
                      </p>
                      <p className="!text-[16px]">AED 99</p>
                    </div>
                  </div>

                  <p className="opacity-60 !mt-1 !text-[14px]">
                    Lorem ipsum is a text used to denote something somewhere
                  </p>
                  <div className="flex items-center gap-2 mt-6">
                    <ButtonPrimary
                      className="w-full text-center !justify-center"
                      text={"Book Online"}
                      href={""}
                    ></ButtonPrimary>
                    <ButtonSecondary
                      text={""}
                      href={""}
                      className="!py-1 !px-2 !min-w-[10px] !m-0 !w-fit h-fit"
                      icon={
                        <svg viewBox="0 0 32 32" className="whatsapp-ico">
                          <path
                            d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      }
                    ></ButtonSecondary>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 p-4 relative">
              <div className="flex flex-col gap-5  bg-white rounded-lg border border-gray-300">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="min-h-[200px] object-cover !m-0 rounded-t-lg"
                  src={"/dubai.jpg"}
                  alt=""
                ></Image>
                <div className="absolute top-0 w-full px-2 py-2">
                  <div className="flex justify-between items-center mb-2">
                    <div className="bg-white rounded px-4 py-1 text-[12px] font-bold mt-4">
                      Popular
                    </div>
                  </div>
                </div>
                <div className="relative px-4 pb-2">
                  <div className="flex justify-between items-start">
                    <h5 className="!text-black !font-semibold !text-[24px]">
                      Hatta Full Day Tour
                    </h5>
                  </div>
                  <div className="flex flex-col justify-start text-start items-start gap-1 mt-1">
                    <div className="flex items-center gap-2">
                      <p className="opacity-30 line-through !text-[14px] !font-bold">
                        AED 150
                      </p>
                      <p className="!text-[16px]">AED 99</p>
                    </div>
                  </div>

                  <p className="opacity-60 !mt-1 !text-[14px]">
                    Lorem ipsum is a text used to denote something somewhere
                  </p>
                  <div className="flex items-center gap-2 mt-6">
                    <ButtonPrimary
                      className="w-full text-center !justify-center"
                      text={"Book Online"}
                      href={""}
                    ></ButtonPrimary>
                    <ButtonSecondary
                      text={""}
                      href={""}
                      className="!py-1 !px-2 !min-w-[10px] !m-0 !w-fit h-fit"
                      icon={
                        <svg viewBox="0 0 32 32" className="whatsapp-ico">
                          <path
                            d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      }
                    ></ButtonSecondary>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
