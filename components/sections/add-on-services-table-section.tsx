import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const addOnServices = [
  {
    service: "Character Design Sheet",
    price: "$50-100",
    description: "Reference sheet with multiple angles and expressions",
  },
  {
    service: "Animated Cover",
    price: "$80-200",
    description: "Subtle animation for social media (GIF/MP4)",
  },
  {
    service: "Alternate Covers",
    price: "30% off",
    description: "Special editions, seasonal variants",
  },
  {
    service: "Audiobook Cover Adaptation",
    price: "$40",
    description: "Reformatted for audiobook platforms",
  },
  {
    service: "Foreign Edition Adaptation",
    price: "$60",
    description: "Typography adjustment for translations",
  },
  {
    service: "Rush Delivery (1.5 week)",
    price: "+35%",
    description: "Expedited 1-week turnaround",
  },
  {
    service: "Rush Delivery (4 days)",
    price: "+20%",
    description: "Priority 3-day turnaround",
  },
  {
    service: "Extra Revisions",
    price: "$25-50 each",
    description: "Beyond included revision count",
  },
  {
    service: "Commercial Rights",
    price: "+$150-300",
    description: "For merchandise, extended marketing use",
  },
];

export function AddOnServicesTableSection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">
          ADD-ON SERVICES
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="border border-secondary rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-secondary">
                  <TableHead>Service</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {addOnServices.map((service, index) => (
                  <TableRow className="border-y border-secondary" key={index}>
                    <TableCell className="font-semibold">
                      {service.service}
                    </TableCell>
                    <TableCell>{service.price}</TableCell>
                    <TableCell>{service.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}
