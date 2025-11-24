import { Users, Wind, Tent, Trees } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
    {
        icon: Users,
        title: "Student Life Focus",
        description: "Designed specifically for student interaction, with open spaces and gathering areas."
    },
    {
        icon: Wind,
        title: "Balanced Atmosphere",
        description: "A design that balances high energy with ease and relaxation."
    },
    {
        icon: Tent,
        title: "Communal Spaces",
        description: "Features an Amphitheatre with a Campfire for group activities and bonding."
    },
    {
        icon: Trees,
        title: "Green Overlay",
        description: "Located within the Rangers Overlay (Green Hatch Area) for a natural setting."
    }
];

export const Features = () => {
    return (
        <section className="py-12 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Features</h2>
                    <div className="w-16 h-1 bg-accent mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 border-border animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardContent className="p-8">
                                <div className="mb-6 inline-flex p-4 rounded-lg bg-nature-green-light group-hover:bg-accent transition-colors">
                                    <feature.icon className="h-8 w-8 text-nature-green group-hover:text-accent-foreground transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
