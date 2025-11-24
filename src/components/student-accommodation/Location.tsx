import { MapPin, Home, Droplets, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Location = () => {
    return (
        <section className="py-16 px-6 bg-secondary/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Locations</h2>
                    <div className="w-16 h-1 bg-accent mx-auto" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="border-none shadow-lg">
                        <CardContent className="p-8 flex flex-col items-center text-center">
                            <div className="p-4 rounded-full bg-primary/10 mb-6">
                                <Home className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Accommodation</h3>
                            <p className="text-muted-foreground">
                                Houses A-FRAME STUDENT'S ACCOMMODATION (Item 14)
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-lg">
                        <CardContent className="p-8 flex flex-col items-center text-center">
                            <div className="p-4 rounded-full bg-primary/10 mb-6">
                                <Droplets className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Water Infrastructure</h3>
                            <p className="text-muted-foreground">
                                Contains main water infrastructure: 2 DRINK WATER TANKS, CHLORINE DOSING SYSTEM, BOOSTER PUMPS
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-lg">
                        <CardContent className="p-8 flex flex-col items-center text-center">
                            <div className="p-4 rounded-full bg-primary/10 mb-6">
                                <ShieldCheck className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Overlay Zone</h3>
                            <p className="text-muted-foreground">
                                Located within RANGERS OVERLAY (GREEN HATCH AREA)
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};
