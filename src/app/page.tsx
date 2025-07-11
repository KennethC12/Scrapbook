"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Heart, Calendar, Camera, MessageCircle, ArrowDown } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/src/components/ui/dialog"


interface Memory {
  id: number
  date: string
  title: string
  description: string
  image: string
  loveNote: string
  location?: string
}



export default function MemoryScrapbook() {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [memories] = useState<Memory[]>([
    {
      id: 1,
      date: "June 30, 2025",
      title: "Our First Date",
      description: "First Date WOOOOO!!",
      image: "/Photobooth.JPG",
      loveNote:
        "Our first offical date, where I couldnt stop staring at your amazing smile. After you confessing, I felt so relieved and happy, and made me realize how much I love you",
      location: "Brookline",
    },
    {
      id: 2,
      date: "June 29, 2025",
      title: "Study Date!!",
      description: "Dancing under the stars to our favorite band.",
      image: "/Study.JPG",
      loveNote:
        "This day was a roller coaster of emotions for you, but we were able to study together, cuddle, and even hold hands during the F1 movie. I am so happy that we were able to spend this time together, and I am so grateful for you.",
      location: "Cafe Nero",
    },
    {
      id: 3,
      date: "June 29, 2025",
      title: "ACAI BOWLSSS!!",
      description: "Building blanket forts and sharing secrets on a stormy afternoon.",
      image: "/Bowls.JPG",
      loveNote:
        "We got ACAI BOWLS!!! This was to make up for the fact that I was a bot and a dummy. Thank you for forgiving me.",
      location: "Cafe Nero",
    },
    {
      id: 4,
      date: "July 2, 2025",
      title: "Brandy Haul!",
      description: "Shopping Spree!!!",
      image: "/Car.JPG",
      loveNote:
        "SHOPPING SPREE!!!",
      location: "Newbury Street",
    },
    {
      id: 5,
      date: "July 2, 2025",
      title: "PIZZA PIZZA",
      description: "Joes Pizza is the best!!!",
      image: "/Pizza2.JPG",
      loveNote:
        "This day was my favorite, not only did we shop, got pizza, but I even got a KISS from you! This kiss will always be special to me, Thanks to you, you too my kiss viriginity!",
      location: "Joes Pizza",
    },
  ])

  useEffect(() => {
    setIsLoaded(true) 
  }, [])

  // Generate deterministic heart positions and animations
  const heartPositions = [
    { left: 46.5, top: 8.0, delay: 0, duration: 4.2 },
    { left: 63.8, top: 83.9, delay: 0.5, duration: 3.9 },
    { left: 32.4, top: 40.3, delay: 1, duration: 4.5 },
    { left: 74.9, top: 81.1, delay: 1.5, duration: 4.6 },
    { left: 27.5, top: 21.5, delay: 2, duration: 3.7 },
    { left: 19.5, top: 78.8, delay: 2.5, duration: 4.4 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 via-pink-100/30 to-purple-100/50" />
        <div
          className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-8">
            <Heart className="w-16 h-16 mx-auto text-rose-400 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Our Love Story
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            A digital scrapbook of our most precious memories together.
            <br />
            Every moment, every laugh, every adventure that brought us closer.
          </p>
          <p className="text-base md:text-lg text-rose-600 font-medium mb-12">Happy Birthday, Beautiful ✨</p>
          <Button
            onClick={() => document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Begin Our Journey
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {heartPositions.map((position, i) => (
            <Heart
              key={i}
              className={`absolute text-rose-200 animate-bounce opacity-20 ${i % 2 === 0 ? "w-4 h-4" : "w-6 h-6"}`}
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
                animationDelay: `${position.delay}s`,
                animationDuration: `${position.duration}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Calendar className="w-12 h-12 mx-auto text-rose-500 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Timeline</h2>
            <p className="text-lg text-gray-600">The moments that made us who we are today</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-300 via-pink-300 to-purple-300 transform md:-translate-x-0.5" />

            {memories.map((memory, index) => (
              <div
                key={memory.id}
                className={`relative mb-12 ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"} transition-all duration-700 hover:scale-105`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute w-4 h-4 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full border-4 border-white shadow-lg ${
                    index % 2 === 0 ? "left-2 md:right-0 md:left-auto md:-mr-2" : "left-2 md:left-0 md:-ml-2"
                  } top-8 z-10`}
                />

                <Card
                  className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"} shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm`}
                >
                  <CardContent className="p-0">
                    <div className="md:flex">
                      <div className={`md:w-1/2 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                        <div className="relative h-64 md:h-full">
                          <Image
                            src={memory.image || "/placeholder.svg"}
                            alt={memory.title}
                            fill
                            className="object-cover rounded-t-lg md:rounded-none md:rounded-l-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                            onClick={() => setSelectedMemory(memory)}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-lg md:rounded-none md:rounded-l-lg" />
                        </div>
                      </div>
                      <div className={`md:w-1/2 p-6 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                        <div className="flex items-center gap-2 text-rose-600 text-sm font-medium mb-2">
                          <Calendar className="w-4 h-4" />
                          {memory.date}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{memory.title}</h3>
                        {memory.location && <p className="text-sm text-gray-500 mb-3">📍 {memory.location}</p>}
                        <p className="text-gray-600 mb-4 leading-relaxed">{memory.description}</p>
                        <Button
                          onClick={() => setSelectedMemory(memory)}
                          variant="outline"
                          className="border-rose-300 text-rose-600 hover:bg-rose-50 hover:border-rose-400 transition-all duration-300"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Read Love Note
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Camera className="w-12 h-12 mx-auto text-rose-500 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Gallery</h2>
            <p className="text-lg text-gray-600">Every picture tells our story</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {memories.map((memory) => (
              <div
                key={`gallery-${memory.id}`}
                className="relative aspect-square group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Image
                  src={memory.image || "/placeholder.svg"}
                  alt={memory.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  onClick={() => setSelectedMemory(memory)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium truncate">{memory.title}</p>
                  <p className="text-xs opacity-80">{memory.date}</p>
                </div>
                <Heart className="absolute top-2 right-2 w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center bg-gradient-to-r from-rose-100 to-pink-100">
        <div className="max-w-2xl mx-auto">
          <Heart className="w-8 h-8 mx-auto text-rose-500 mb-4" />
          <p className="text-lg text-gray-700 mb-2">Made with endless love for the most amazing person in my world</p>
          <p className="text-sm text-gray-500">Every day with you is a new page in our beautiful story ✨</p>
        </div>
      </footer>

      {/* Memory Modal */}
      <Dialog open={!!selectedMemory} onOpenChange={() => setSelectedMemory(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-rose-50 to-pink-50 border-0">
          {selectedMemory && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-800 mb-2">{selectedMemory.title}</DialogTitle>
                <div className="flex items-center gap-2 text-rose-600 text-sm">
                  <Calendar className="w-4 h-4" />
                  {selectedMemory.date}
                  {selectedMemory.location && (
                    <>
                      <span className="mx-2">•</span>📍 {selectedMemory.location}
                    </>
                  )}
                </div>
              </DialogHeader>

              <div className="space-y-6">
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                  <Image
                    src={selectedMemory.image || "/placeholder.svg"}
                    alt={selectedMemory.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="w-5 h-5 text-rose-500" />
                    <h3 className="text-lg font-semibold text-gray-800">A Love Note</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">&quot;{selectedMemory.loveNote}&quot;</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
