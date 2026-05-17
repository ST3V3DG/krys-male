"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import { cn } from "@/lib/utils";
import Image from "next/image";

export function SwipeableCards({
	images,
	className,
	showPagination = false,
	showNavigation = false,
	loop = true,
	autoplay = false,
	spaceBetween = 40,
}: {
	images: { src: string; alt: string }[];
	className?: string;
	showPagination?: boolean;
	showNavigation?: boolean;
	loop?: boolean;
	autoplay?: boolean;
	spaceBetween?: number;
}) {
	return (
		<div className={cn("relative w-full max-w-3xl", className)}>
			<Swiper
				spaceBetween={spaceBetween}
				autoplay={
					autoplay
						? {
								delay: 1000,
								disableOnInteraction: false,
							}
						: false
				}
				effect="cards"
				grabCursor={true}
				loop={loop}
				pagination={
					showPagination
						? {
								clickable: true,
							}
						: false
				}
				navigation={
					showNavigation
						? {
								nextEl: ".swiper-button-next",
								prevEl: ".swiper-button-prev",
							}
						: false
				}
				className="h-95 w-65"
				modules={[EffectCards, Autoplay, Pagination, Navigation]}
			>
				{images.map((image, index) => (
					<SwiperSlide key={index} className="rounded-md">
						<Image className="size-full object-cover" src={image.src} alt={image.alt} width={400} height={800} />
					</SwiperSlide>
				))}
				{showNavigation && (
					<div>
						<div className="swiper-button-next after:hidden">
							<ChevronRightIcon className="h-6 w-6 text-white" />
						</div>
						<div className="swiper-button-prev after:hidden">
							<ChevronLeftIcon className="h-6 w-6 text-white" />
						</div>
					</div>
				)}
			</Swiper>
		</div>
	);
}
