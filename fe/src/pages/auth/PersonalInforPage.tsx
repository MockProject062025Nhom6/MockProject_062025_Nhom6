import React, { useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"

const PersonalInformation: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0)

  return (
    <div className="w-screen min-h-screen bg-pink-50">
      <div className="px-4 lg:px-12 xl:px-20 py-6">
        <div className="w-full max-w-[1600px] mx-auto">
          <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center sm:text-left">
            Thông tin cá nhân
          </h1>

          <div className="border-2 border-blue-400 rounded overflow-hidden bg-white shadow-lg">
            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div className="w-full md:w-72 bg-gray-100 p-6 space-y-3">
                {[
                  "Reporter information",
                  "Report the incident",
                  "Witnesses and initial evidence (if any)",
                ].map((label, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-4 py-3 rounded flex justify-between items-center transition ${
                      activeStep === index
                        ? "bg-blue-200 text-blue-800 font-semibold"
                        : "bg-white text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <span>{label}</span>
                    {activeStep === index ? (
                      <ChevronDown size={22} className="shrink-0" />
                    ) : (
                      <ChevronRight size={22} className="shrink-0" />
                    )}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="flex-1 p-8 border-t md:border-t-0 md:border-l border-gray-300">
                {activeStep === 0 && (
                  <>
                    <div className="bg-blue-200 text-blue-900 px-4 py-3 rounded-t font-semibold text-center border border-b-0 border-gray-300 text-lg">
                      Reporter information
                    </div>

                    <div className="mt-6 space-y-5">
                      {[
                        ["Full name:", "text"],
                        ["Address:", "text"],
                        ["Phone number:", "text"],
                        ["Email (if available):", "email"],
                      ].map(([label, type], idx) => (
                        <div
                          className="flex flex-col sm:flex-row items-start sm:items-center"
                          key={idx}
                        >
                          <label className="sm:w-64 font-medium mb-1 sm:mb-0">
                            {label}
                          </label>
                          <input
                            type={type}
                            className="w-full border border-gray-400 rounded px-4 py-2 text-base"
                          />
                        </div>
                      ))}

                      <div>
                        <label className="font-medium">
                          Relevance to the incident (victim, witness, etc.):
                        </label>
                        <input
                          type="text"
                          className="mt-2 block w-full border border-gray-400 rounded px-4 py-2 text-base"
                        />
                      </div>

                      <div className="bg-gray-300 text-sm px-3 py-1 inline-block rounded font-medium mt-8">
                        Victim information (if any):
                      </div>

                      {[
                        ["Full name:", "text"],
                        ["Address:", "text"],
                        ["Phone number:", "text"],
                      ].map(([label, type], idx) => (
                        <div
                          className="flex flex-col sm:flex-row items-start sm:items-center"
                          key={idx}
                        >
                          <label className="sm:w-64 font-medium mb-1 sm:mb-0">
                            {label}
                          </label>
                          <input
                            type={type}
                            className="w-full border border-gray-400 rounded px-4 py-2 text-base"
                          />
                        </div>
                      ))}

                      <div>
                        <label className="font-medium">
                          Description of injuries (if any):
                        </label>
                        <input
                          type="text"
                          className="mt-2 block w-full border border-gray-400 rounded px-4 py-2 text-base"
                        />
                      </div>
                    </div>

                    <div className="mt-8 text-right">
                      <button
                        className="bg-white text-gray-800 px-6 py-2.5 rounded border border-gray-300 shadow font-semibold text-base hover:bg-gray-100"
                        onClick={() => setActiveStep(1)}
                      >
                        Next page
                      </button>
                    </div>
                  </>
                )}

                {activeStep === 1 && (
                  <div className="text-gray-600">
                    <h2 className="text-xl font-semibold mb-4">
                      Report the incident
                    </h2>
                    <p>This section will be added next.</p>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="text-gray-600">
                    <h2 className="text-xl font-semibold mb-4">
                      Witnesses and initial evidence (if any)
                    </h2>
                    <p>This section will be added next.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInformation
