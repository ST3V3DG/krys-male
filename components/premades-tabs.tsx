import PremadesGrid from "@/components/premades-grid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  {
    name: "$80",
    value: "80",
    content: [
      {
        title: "Cardiologie",
        description:
          "Centre d'excellence en cardiologie offrant des soins complets pour le diagnostic et le traitement des maladies cardiaques. Technologies de pointe pour les interventions cardiaques complexes.",
        imageSrc: "/images/80/bermuda 4.png",
        imageAlt: "Équipement de cardiologie moderne",
        priority: true,
      },
      {
        title: "Urologie",
        description:
          "Service spécialisé dans le traitement des pathologies urologiques et la transplantation rénale, utilisant des techniques robotiques et mini-invasives de dernière génération.",
        imageSrc: "/images/80/GRUNDGE 2.png",
        imageAlt: "Bloc opératoire urologique",
        priority: true,
      },
      {
        title: "Oncologie",
        description:
          "Département d'oncologie et chirurgie oncologique proposant des traitements personnalisés innovants. Expertise en immunothérapie et thérapies ciblées.",
        imageSrc: "/images/80/ROMANTASY VINTAGE.png",
        imageAlt: "Centre de traitement oncologique",
        priority: true,
      },
      {
        title: "Chirurgie G.I.",
        description:
          "Service spécialisé dans la chirurgie gastro-intestinale, offrant des solutions innovantes pour les pathologies digestives complexes.",
        imageSrc: "/images/80/Science Fiction.png",
        imageAlt: "Équipement chirurgical G.I.",
        priority: true,
      },
      {
        title: "Soins intensifs",
        description:
          "Unité de soins intensifs ultramoderne assurant une surveillance continue et des soins critiques avec les dernières technologies médicales.",
        imageSrc: "/images/80/sf.png",
        imageAlt: "Unité de soins intensifs",
        priority: true,
      },
      {
        title: "Chirurgie bariatrique",
        description:
          "Centre spécialisé dans le traitement chirurgical de l'obésité, proposant une approche multidisciplinaire complète.",
        imageSrc: "/images/80/SHOW3.png",
        imageAlt: "Bloc opératoire bariatrique",
        priority: true,
      },
    ],
  },
  {
    name: "$100",
    value: "100",
    content: [
      {
        title: "Urologie",
        description:
          "Service spécialisé dans le traitement des pathologies urologiques et la transplantation rénale, utilisant des techniques robotiques et mini-invasives de dernière génération.",
        imageSrc: "/images/100/C.png",
        imageAlt: "Bloc opératoire urologique",
        priority: true,
      },
      {
        title: "Oncologie",
        description:
          "Département d'oncologie et chirurgie oncologique proposant des traitements personnalisés innovants. Expertise en immunothérapie et thérapies ciblées.",
        imageSrc: "/images/100/fui.png",
        imageAlt: "Centre de traitement oncologique",
        priority: true,
      },
      {
        title: "Chirurgie G.I.",
        description:
          "Service spécialisé dans la chirurgie gastro-intestinale, offrant des solutions innovantes pour les pathologies digestives complexes.",
        imageSrc: "/images/100/FANTY.png",
        imageAlt: "Équipement chirurgical G.I.",
        priority: true,
      },
    ],
  },
  {
    name: "$120",
    value: "120",
    content: [
      {
        title: "Cardiologie",
        description:
          "Centre d'excellence en cardiologie offrant des soins complets pour le diagnostic et le traitement des maladies cardiaques. Technologies de pointe pour les interventions cardiaques complexes.",
        imageSrc: "/images/120/hf3.png",
        imageAlt: "Équipement de cardiologie moderne",
        priority: true,
      },
      {
        title: "Urologie",
        description:
          "Service spécialisé dans le traitement des pathologies urologiques et la transplantation rénale, utilisant des techniques robotiques et mini-invasives de dernière génération.",
        imageSrc: "/images/120/Western Love 2.png",
        imageAlt: "Bloc opératoire urologique",
        priority: true,
      },
    ],
  },
  {
    name: "$150",
    value: "150",
    content: [
      {
        title: "Cardiologie",
        description:
          "Centre d'excellence en cardiologie offrant des soins complets pour le diagnostic et le traitement des maladies cardiaques. Technologies de pointe pour les interventions cardiaques complexes.",
        imageSrc: "/images/150/INKTOBER.png",
        imageAlt: "Équipement de cardiologie moderne",
        priority: true,
      },
      {
        title: "Urologie",
        description:
          "Service spécialisé dans le traitement des pathologies urologiques et la transplantation rénale, utilisant des techniques robotiques et mini-invasives de dernière génération.",
        imageSrc: "/images/150/llpp.jpg",
        imageAlt: "Bloc opératoire urologique",
        priority: true,
      },
      {
        title: "Urologie",
        description:
          "Service spécialisé dans le traitement des pathologies urologiques et la transplantation rénale, utilisant des techniques robotiques et mini-invasives de dernière génération.",
        imageSrc: "/images/150/SPOOKY1.png",
        imageAlt: "Bloc opératoire urologique",
        priority: true,
      },
      {
        title: "Urologie",
        description:
          "Service spécialisé dans le traitement des pathologies urologiques et la transplantation rénale, utilisant des techniques robotiques et mini-invasives de dernière génération.",
        imageSrc: "/images/150/ORLEANS IN LOVE.png",
        imageAlt: "Bloc opératoire urologique",
        priority: true,
      },
      {
        title: "Urologie",
        description:
          "Service spécialisé dans le traitement des pathologies urologiques et la transplantation rénale, utilisant des techniques robotiques et mini-invasives de dernière génération.",
        imageSrc: "/images/150/ROMANTASY 2.png",
        imageAlt: "Bloc opératoire urologique",
        priority: true,
      },
    ],
  },
  {
    name: "$200",
    value: "200",
    content: [
      {
        title: "Cardiologie",
        description:
          "Centre d'excellence en cardiologie offrant des soins complets pour le diagnostic et le traitement des maladies cardiaques. Technologies de pointe pour les interventions cardiaques complexes.",
        imageSrc: "/images/200/ko2.png",
        imageAlt: "Équipement de cardiologie moderne",
        priority: true,
      },
      {
        title: "Urologie",
        description:
          "Service spécialisé dans le traitement des pathologies urologiques et la transplantation rénale, utilisant des techniques robotiques et mini-invasives de dernière génération.",
        imageSrc: "/images/200/JY.png",
        imageAlt: "Bloc opératoire urologique",
        priority: true,
      },
      {
        title: "Urologie",
        description:
          "Service spécialisé dans le traitement des pathologies urologiques et la transplantation rénale, utilisant des techniques robotiques et mini-invasives de dernière génération.",
        imageSrc: "/images/200/hhh.png",
        imageAlt: "Bloc opératoire urologique",
        priority: true,
      },
      {
        title: "Urologie",
        description:
          "Service spécialisé dans le traitement des pathologies urologiques et la transplantation rénale, utilisant des techniques robotiques et mini-invasives de dernière génération.",
        imageSrc: "/images/200/Dark Romance.png",
        imageAlt: "Bloc opératoire urologique",
        priority: true,
      },
      {
        title: "Urologie",
        description:
          "Service spécialisé dans le traitement des pathologies urologiques et la transplantation rénale, utilisant des techniques robotiques et mini-invasives de dernière génération.",
        imageSrc: "/images/200/SPORT ROMANCE.png",
        imageAlt: "Bloc opératoire urologique",
        priority: true,
      },
      {
        title: "Urologie",
        description:
          "Service spécialisé dans le traitement des pathologies urologiques et la transplantation rénale, utilisant des techniques robotiques et mini-invasives de dernière génération.",
        imageSrc: "/images/200/star.webp",
        imageAlt: "Bloc opératoire urologique",
        priority: true,
      },
      {
        title: "Urologie",
        description:
          "Service spécialisé dans le traitement des pathologies urologiques et la transplantation rénale, utilisant des techniques robotiques et mini-invasives de dernière génération.",
        imageSrc: "/images/200/Art Nouveau.png",
        imageAlt: "Bloc opératoire urologique",
        priority: true,
      },
    ],
  },
];

export function PremadesTabs() {
  return (
    <Tabs defaultValue="80" className="gap-4">
      <TabsList className="bg-background rounded-none border-b p-0 w-full">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="bg-background data-[state=active]:border-primary dark:data-[state=active]:border-primary h-full rounded-none border-0 border-b-2 border-transparent shadow data-[state=active]:shadow-none cursor-pointer"
          >
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <div className="lg:columns-4 max-w-lg:flex justify-between max-w-lg:flex-col gap-4">
            <PremadesGrid premades={tab.content} />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
