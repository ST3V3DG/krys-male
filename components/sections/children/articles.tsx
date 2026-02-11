import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const articles = [
    {
        imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/023/531/013/small/beautiful-happy-mom-with-child-illustration-ai-generative-free-photo.jpg",
        imgAlt: "Slow Living",
        category: "Lifestyle",
        title: "The Art of Slow Living in Modern Cities",
        description: "Exploring how urban dwellers are embracing mindfulness and intentional living amidst the chaos.",
        author: "Emma Chen",
    },
    {
        imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/012/654/501/small/happy-young-people-group-have-fun-on-beach-free-photo.jpg",
        imgAlt: "Culinary Traditions",
        category: "Food",
        title: "Culinary Traditions Reimagined",
        description: "How chefs are preserving cultural heritage while innovating with modern techniques.",
        author: "Marcus Johnson",
    },
    {
        imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/012/648/677/small/happy-young-people-group-have-fun-on-beach-free-photo.jpg",
        imgAlt: "Digital Craftsmanship",
        category: "Design",
        title: "The New Era of Digital Craftsmanship",
        description: "Artisans embracing technology to create unique pieces that blur the line between traditional and digital.",
        author: "Nicole Patel",
    },
];

export default function Articles() {
    return (
        <section className="bg-secondary/30 py-24">
            <div className=" max-w-6xl mx-auto px-6">
                <div className="mb-12 flex items-end justify-between">
                    <div>
                        <h2 className="mb-2 font-gambarino text-3xl font-medium">Latest Articles</h2>
                        <p className="text-muted-foreground max-w-xl">Insights and stories that capture the essence of contemporary culture.</p>
                    </div>
                    <Link href="#" className="group hidden items-center text-sm font-medium tracking-wider uppercase md:inline-flex">
                        View All
                        <ArrowRight className="size-5 stroke-1 ml-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {articles.map((article, index) => (
                        <article key={index} className="overflow-hidden rounded-lg">
                            <Link href="#" className="flex flex-col h-full">
                                <figure className="overflow-hidden">
                                    <Image src={article.imgSrc} alt={article.imgAlt} className="h-64 w-full object-cover" height={500} width={1280} />
                                </figure>
                                <div className="p-6 grow flex flex-col">
                                    <div>
                                        <span className="text-primary text-xs font-medium tracking-wider uppercase"> {article.category} </span>
                                    </div>
                                    <h3 className="font-gambarino text-xl font-medium">{article.title}</h3>
                                    <p className="text-muted-foreground text-sm grow mb-4">{article.description}</p>
                                    <div className="text-muted-foreground flex items-center justify-between text-xs">
                                        <span>{article.author}</span>
                                        <span>May 23, 2023</span>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="#" className="group inline-flex items-center text-sm font-medium tracking-wider uppercase">
                        View All Articles
                        <ArrowRight className="size-5 stroke-1 ml-1" />
                    </Link>
                </div>
            </div>
        </section>
    )
}