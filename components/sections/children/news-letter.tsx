import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewsLetter() {
    return (
        <section className="bg-primary text-white py-24">
            <div className=" max-w-6xl mx-auto px-6 text-center">
                <div className="mx-auto max-w-2xl">
                    <span className="mb-3 inline-block text-xs tracking-widest uppercase opacity-80"> Stay Updated </span>
                    <h2 className="mb-6 text-3xl font-medium md:text-4xl font-gambarino">Subscribe to Our Newsletter</h2>
                    <p className="text-white/80 mx-auto mb-8 max-w-lg">Join our community of readers and receive the latest stories, interviews, and insights delivered directly to your inbox.</p>

                    <form className="mx-auto flex max-w-md flex-col items-center gap-3 sm:flex-row">
                        <input type="email" placeholder="Your email address" className="bg-primary-foreground/10 text-white border-primary-foreground/20 focus:ring-primary-foreground/30 placeholder:text-white/50 grow rounded-md border px-4 py-3 focus:ring-2 focus:outline-none" required />
                        <Button type="submit" className="group bg-primary-foreground text-white hover:bg-primary-foreground/90 inline-flex h-full items-center justify-center rounded-md px-5 py-3 font-medium transition-all">
                            Subscribe
                            <ArrowRight />
                        </Button>
                    </form>

                    <p className="text-white/60 mt-6 text-xs">We respect your privacy. Unsubscribe at any time.</p>
                </div>
            </div>
        </section>
    );
}