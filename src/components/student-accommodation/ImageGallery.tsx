import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import images
import mainImage from "@/assets/student-accommodation/Student_Accommodation.png";
import area2_01 from "@/assets/student-accommodation/area2_01.png";
import area2_02 from "@/assets/student-accommodation/area2_02.png";
import area2_03 from "@/assets/student-accommodation/area2_03.png";
import aFrame from "@/assets/student-accommodation/A-FRAME STUDENT_S ACCOMMODATION (160 beds).jfif";
import amphitheatre from "@/assets/student-accommodation/Amphitheatre, Gazebo, Pergola.jfif";

const galleryImages = [
    { src: mainImage, alt: "Student Accommodation Main View", category: "Overview" },
    { src: area2_01, alt: "Area 2 Perspective 1", category: "Overview" },
    { src: area2_02, alt: "Area 2 Perspective 2", category: "Overview" },
    { src: area2_03, alt: "Area 2 Perspective 3", category: "Overview" },
    { src: aFrame, alt: "A-Frame Accommodation", category: "Specific Items" },
    { src: amphitheatre, alt: "Amphitheatre & Gazebo", category: "Specific Items" },
];

export const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="py-12 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold mb-3 cursor-pointer hover:text-primary transition-colors duration-300 animate-fade-up">Image Gallery</h2>
                    <div className="w-16 h-1 bg-accent mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">
                        Explore the visual documentation of Area 2
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                            onClick={() => setSelectedImage(image.src)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <p className="text-sm text-primary-foreground/80 mb-1">{image.category}</p>
                                    <p className="text-lg font-semibold text-primary-foreground">{image.alt}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                    <DialogContent className="max-w-6xl p-0 bg-transparent border-none">
                        <img
                            src={selectedImage || ''}
                            alt="Full size"
                            className="w-full h-auto rounded-lg"
                        />
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
};
