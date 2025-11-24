export const Summary = () => {
    return (
        <section id="summary" className="py-20 px-6 bg-background">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Final Detail Summary</h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                    Area 2 forms the "Student Village," the heart of the Outdoor Education LOB. It is playful and welcoming, designed to hold 160 students in A-frame houses with AC and Wi-Fi. Also contains 315,000L drinking water supply.
                </p>
                <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
                    <div className="p-6 rounded-lg bg-secondary/50">
                        <h3 className="font-semibold text-xl mb-3 text-primary">Student Focused</h3>
                        <p className="text-muted-foreground">Focused on student life, open spaces, and gathering areas.</p>
                    </div>
                    <div className="p-6 rounded-lg bg-secondary/50">
                        <h3 className="font-semibold text-xl mb-3 text-primary">Balanced Design</h3>
                        <p className="text-muted-foreground">Balances energy with ease, creating a welcoming atmosphere.</p>
                    </div>
                    <div className="p-6 rounded-lg bg-secondary/50">
                        <h3 className="font-semibold text-xl mb-3 text-primary">Communal Spaces</h3>
                        <p className="text-muted-foreground">Features communal spaces like an Amphitheatre with Campfire.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
