import { CheckCircle2 } from "lucide-react";
import aFrameImage from "@/assets/student-accommodation/A-FRAME STUDENT_S ACCOMMODATION (160 beds).jfif";
import amphitheatreImage from "@/assets/student-accommodation/Amphitheatre, Gazebo, Pergola.jfif";
import waterTankImage from "@/assets/student-accommodation/RAINWATER TANKS (20,000L) for irrigation.jfif";

const items = [
    {
        title: "A-Frame Student Accommodation",
        description: "160 beds with AC and Wi-Fi",
        image: aFrameImage
    },
    {
        title: "Communal Structures",
        description: "Amphitheatre, Gazebo, Pergola",
        image: amphitheatreImage
    },
    {
        title: "Water Infrastructure",
        description: "2 Drink Water Tanks (315,000L), Heat Pump Central, Hot Water Storage Tank",
        image: waterTankImage
    }
];

export const SpecificItems = () => {
    return (
        <section className="py-16 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Specific Items</h2>
                    <div className="w-16 h-1 bg-accent mx-auto" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                            <div className="aspect-video w-full overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end text-white">
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-accent" />
                                    {item.title}
                                </h3>
                                <p className="text-white/80 text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
