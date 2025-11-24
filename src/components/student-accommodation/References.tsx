import plantingImage from "@/assets/student-accommodation/Planting palette Pink, Green, Purple, Blue.jfif";
import treeImage from "@/assets/student-accommodation/tree.jfif";
import communalImage from "@/assets/student-accommodation/Communal spaces like Amphitheatre with Campfire..jfif";

export const References = () => {
    return (
        <section className="py-16 px-6 bg-secondary/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Design References</h2>
                    <div className="w-16 h-1 bg-accent mx-auto" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                            <img src={plantingImage} alt="Planting Palette" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <h3 className="text-xl font-bold">Planting Palette</h3>
                        <p className="text-muted-foreground">Pink, Green, Purple, Blue</p>
                    </div>

                    <div className="space-y-4">
                        <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                            <img src={treeImage} alt="Trees" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <h3 className="text-xl font-bold">Trees</h3>
                        <p className="text-muted-foreground">Willow Myrtle, Smoke Bush, Chinaberry</p>
                    </div>

                    <div className="space-y-4">
                        <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                            <img src={communalImage} alt="Programs" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <h3 className="text-xl font-bold">Programs</h3>
                        <p className="text-muted-foreground">First Nation performances by local artists</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
