import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;

  const dummyReviews = [
    { name: "Alice", avatar: "/avatar1.jpg", rating: 5, comment: "Amazing stay!" },
    { name: "Bob", avatar: "/avatar2.jpg", rating: 4, comment: "Very comfortable." },
  ];

  return (
    <div className="container mx-auto p-6 flex flex-col lg:flex-row gap-6">
      <div className="flex-1">
        <PropertyDetail property={property} />
        <ReviewSection reviews={dummyReviews} />
      </div>
      <div className="w-full lg:w-1/3">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
}
