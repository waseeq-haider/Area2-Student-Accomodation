import { Hero } from "@/components/student-accommodation/Hero";
import { Summary } from "@/components/student-accommodation/Summary";
import { Features } from "@/components/student-accommodation/Features";
import { Location } from "@/components/student-accommodation/Location";
import { SiteMap } from "@/components/student-accommodation/SiteMap";
import { FloorPlan } from "@/components/student-accommodation/FloorPlan";
import { SpecificItems } from "@/components/student-accommodation/SpecificItems";
import { References } from "@/components/student-accommodation/References";
import { ImageGallery } from "@/components/student-accommodation/ImageGallery";
import { Footer } from "@/components/student-accommodation/Footer";

const StudentAccommodation = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <Summary />
            <Features />
            <Location />
            <SiteMap />
            <FloorPlan />
            <SpecificItems />
            <References />
            <ImageGallery />
            <Footer />
        </div>
    );
};

export default StudentAccommodation;
