"use client"

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../../ui/button";

const slideData = [
    {
        imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/007/669/088/small/happy-young-woman-in-casual-style-fashion-and-straw-hat-sit-at-sand-beach-relaxing-and-enjoy-holiday-at-tropical-paradise-beach-with-emerald-green-water-girl-in-summer-vacation-summer-vibes-free-photo.jpg",
        imgAlt: "The Architecture of Light",
        category: "Design",
        title: "The Architecture of Light",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus sed metus faucibus auctor. Nulla facilisi. Vestibulum vel tortor at quam elementum consequat.",
        author: "Alex Honnold",
    },
    {
        imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/005/224/232/small/young-beautiful-hipster-woman-sitting-on-the-lake-relaxing-with-fresh-air-free-photo.jpg",
        imgAlt: "A Serene Lake View",
        category: "Travel",
        title: "Journey to the Calm",
        description: "Discover the peace of secluded lakes and the beauty of untouched nature. A story of exploration and finding tranquility.",
        author: "Jane Smith",
    },
    {
        imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/007/566/930/small/young-beautiful-woman-dressed-in-a-white-dress-walk-barefoot-on-the-summer-beach-free-photo.jpg",
        imgAlt: "A Serene Lake View",
        category: "Travel",
        title: "Journey to the Calm",
        description: "Discover the peace of secluded lakes and the beauty of untouched nature. A story of exploration and finding tranquility.",
        author: "Jane Smith",
    },
];

export default function MostPopular() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const numSlides = slideData.length;

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % numSlides);
    };

    const handlePrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + numSlides) % numSlides);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentSlide(slideIndex);
    };

    return (
        <section className="py-24 relative">
            <div className=" max-w-6xl mx-auto px-6">
                <div className="mb-8 flex flex-col items-start justify-between md:flex-row md:items-end">
                    <div>
                        <h2 className="mb-2 font-gambarino text-3xl font-medium">Editor's Picks</h2>
                        <p className="text-muted-foreground max-w-xl">Carefully selected stories that showcase exceptional creativity and insight.</p>
                    </div>
                    <div className="mt-4 flex space-x-2 md:mt-0">
                        <Button className="rounded-full border cursor-pointer size-8 transition-colors duration-200" aria-label="Previous slide" variant="outline" onClick={handlePrevious}>
                            <ArrowLeft />
                        </Button>
                        <Button className="rounded-full border cursor-pointer size-8 transition-colors duration-200" aria-label="Next slide" variant="outline" onClick={handleNext}>
                            <ArrowRight />
                        </Button>
                    </div>
                </div>

                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {slideData.map((slide, index) => (
                            <div className="min-w-full" key={index}>
                                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                                    <div className="overflow-hidden rounded-lg">
                                        <Image src={slide.imgSrc} alt={slide.imgAlt} className="h-[400px] w-full object-cover md:h-[500px]" width={1000} height={1000} />
                                    </div>
                                    <div className="md:pl-8">
                                        <div className="mb-4">
                                            <span className="bg-primary/5 text-primary inline-block rounded-full px-3 py-1 text-xs tracking-widest uppercase"> {slide.category} </span>
                                        </div>
                                        <h3 className="mb-6 font-gambarino text-3xl leading-tight font-medium md:text-4xl">{slide.title}</h3>
                                        <p className="text-muted-foreground mb-6">{slide.description}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="bg-secondary mr-3 h-10 w-10 rounded-full"></div>
                                                <span className="text-sm">{slide.author}</span>
                                            </div>
                                            <Link href="#" className="group inline-flex items-center text-sm font-medium tracking-wider uppercase">
                                                Read More
                                                <ArrowRight className="size-5 stroke-1 ml-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute right-0 bottom-8 left-0 flex justify-center space-x-2 pb-4">
                        {slideData.map((_, index) => (
                            <Button
                                key={index}
                                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${currentSlide === index ? 'w-6 bg-primary' : 'w-2 bg-gray-300'}`}
                                aria-label={`Go to slide ${index + 1}`}
                                onClick={() => goToSlide(index)}
                            ></Button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}