import React from "react"
import { Button } from "@/components/ui/button"

interface ProgramItem {
  title: string
  description: string
  image: string
  ribbonColor: string
  ribbonText: string
}

export const ProgramsSection: React.FC = () => {
  const programs: ProgramItem[] = [
    {
      title: "CompStat & Crime Stats",
      description:
        "Access crime statistics, traffic data, reports, and CompStat 2.0, the NYPD's crime analysis and tracking system that delivers block-by-block data.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ribbonColor: "bg-red-500",
      ribbonText: "COMPSTAT",
    },
    {
      title: "Body-worn Cameras",
      description:
        "Body-worn cameras have come to the NYPD. What you need to know about this important technology.",
      image:
        "https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ribbonColor: "bg-orange-500",
      ribbonText: "TECHNOLOGY",
    },
    {
      title: "Help is Available",
      description:
        "Before cops can help others, they must first take care of themselves. Mental health resources and support are available.",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ribbonColor: "bg-blue-500",
      ribbonText: "SUPPORT",
    },
  ]

  const createFallbackImage = (type: string) => {
    const fallbacks = {
      chart:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa'/%3E%3Cg fill='%23dc2626'%3E%3Crect x='50' y='200' width='40' height='80' rx='4'/%3E%3Crect x='120' y='150' width='40' height='130' rx='4'/%3E%3Crect x='190' y='180' width='40' height='100' rx='4'/%3E%3Crect x='260' y='120' width='40' height='160' rx='4'/%3E%3Crect x='330' y='160' width='40' height='120' rx='4'/%3E%3C/g%3E%3C/svg%3E",
      camera:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23374151'/%3E%3Cg fill='%23ffffff'%3E%3Crect x='100' y='100' width='200' height='120' rx='20' fill='none' stroke='%23ffffff' stroke-width='4'/%3E%3Ccircle cx='200' cy='160' r='30' fill='none' stroke='%23ffffff' stroke-width='4'/%3E%3Crect x='160' y='80' width='80' height='20' rx='10'/%3E%3Ccircle cx='260' cy='120' r='8'/%3E%3C/g%3E%3C/svg%3E",
      badge:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%232563eb'/%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M200 60 L240 120 L320 120 L260 170 L280 240 L200 200 L120 240 L140 170 L80 120 L160 120 Z'/%3E%3Ccircle cx='200' cy='150' r='25' fill='%232563eb'/%3E%3C/g%3E%3C/svg%3E",
    }
    return fallbacks[type as keyof typeof fallbacks] || fallbacks.badge
  }

  return (
    <section className="py-20 lg:py-24 bg-gray-50 w-full">
      <div className="w-full px-0">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-900">
          Programs and Resources
        </h2>

        <div className="grid md:grid-cols-3 gap-10 w-full px-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <div className="h-72 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      const imageType =
                        index === 0 ? "chart" : index === 1 ? "camera" : "badge"
                      target.src = createFallbackImage(imageType)
                    }}
                  />
                </div>

                {/* Colored Ribbon */}
                <div
                  className={`absolute top-4 left-0 ${program.ribbonColor} text-white px-6 py-3 font-bold text-sm transform -rotate-3 shadow-lg`}
                >
                  {program.ribbonText}
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-bold text-2xl mb-4 text-gray-900">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {program.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full text-white hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 font-semibold py-3 text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection
