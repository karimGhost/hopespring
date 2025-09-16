export function VideoSection() {
  return (
    <section className="py-12 md:py-24 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Watch How We Help</h2>
        </div>
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="aspect-video overflow-hidden rounded-xl shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/fW-7i2QYn1g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
