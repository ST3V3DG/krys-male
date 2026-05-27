"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function CTASection() {
	return (
		<section className="min-h-screen w-full relative isolate py-8 sm:py-16 lg:py-24 dark:bg-background">
			<div
				className="absolute inset-0 -z-1 bg-radial-[125%_125%_at_50%_120%] from-[oklch(0.74_0.06_329.12)] dark:from-primary/10 from-50% to-[oklch(98.82%_0.004_17.23)] dark:to-secondary/10 to-60%"
				// style={{
				// 	background:
				// 		"radial-gradient(125% 125% at 50% 120%, oklch(0.74 0.06 329.12) 50%, oklch(98.82% 0.004 17.23) 60%)",
				// }}
			/>

			<div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				<Card className="shadow-none bg-background">
					<CardContent>
						<div className="grid grid-cols-1 gap-6 lg:grid-cols-2 place-content-center">
							{/* Left Column - Image */}
							<div className="relative overflow-hidden">
								<Image
									src="/images/gregoire.png"
									alt="Workspace with laptop"
									className="h-full rounded-lg object-cover lg:scale-120 mx-auto"
									width={500}
									height={500}
								/>
							</div>

							{/* Right Column - Content */}
							<Card className="bg-secondary/10 rounded-lg border-0 shadow-none">
								<CardContent className="flex h-full flex-col justify-between gap-4">
									<h2 className="text-xl leading-tight font-semibold text-primary lg:text-2xl">
										Explore insights, stories, and strategies that help you build better products
										every day.
									</h2>
									<div>
										<p className="text-muted-foreground mb-3 text-base">
											Join 1,000,000+ subscribers receiving expert tips on earning more, investing
											smarter and living better, all in our free newsletter.
										</p>
										{/* Email Form */}
										<form className="gap-3 max-sm:space-y-2 sm:flex sm:flex-row bg-background rounded-full p-2">
											<Input
                        type="email"
                        id="email"
                        name="email"
												placeholder="Your email"
												className="h-11 flex-1 text-base flex items-center bg-transparent border-none rounded-full"
											/>
											<Button
												size="lg"
												className="rounded-full bg-primary text-base max-sm:w-full"
												type="submit"
											>
												Subscribe
											</Button>
										</form>
									</div>
								</CardContent>
							</Card>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
