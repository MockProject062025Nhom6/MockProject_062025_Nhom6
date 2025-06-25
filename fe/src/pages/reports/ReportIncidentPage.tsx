"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronDown, ChevronRight, Upload, FileText } from "lucide-react"
import { DateTimePicker } from "@/components/ui/date-time-picker"

interface ReportFormData {
  typeOfCrime: string
  severity: string
  timeOfOccurrence: Date | undefined
  locationOfIncident: string
  summaryOfIncident: string
  suspectFullName: string
  physicalDescription: string
  contactInformation: string
  meansOfTransport: string
  attachments: File[]
}

const ReportIncidentPage = () => {
  const [activeSection, setActiveSection] = useState<string>("report-incident")
  const [formData, setFormData] = useState<ReportFormData>({
    typeOfCrime: "",
    severity: "",
    timeOfOccurrence: undefined,
    locationOfIncident: "",
    summaryOfIncident: "",
    suspectFullName: "",
    physicalDescription: "",
    contactInformation: "",
    meansOfTransport: "",
    attachments: [],
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleDateTimeChange = (date: Date | undefined) => {
    setFormData((prev) => ({
      ...prev,
      timeOfOccurrence: date,
    }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setFormData((prev) => ({
      ...prev,
      attachments: [...prev.attachments, ...files],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Report submitted:", formData)
    // Handle form submission
  }

  const sidebarSections = [
    { id: "reporter-info", title: "Reporter Information", icon: ChevronRight },
    { id: "report-incident", title: "Report the incident", icon: ChevronDown },
    {
      id: "witnesses",
      title: "Witnesses and initial evidence",
      icon: ChevronRight,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-80 bg-white shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-xl font-bold text-blue-900">Report Incident</h1>
          </div>

          <div className="p-4">
            {sidebarSections.map((section) => {
              const Icon = section.icon
              const isActive = activeSection === section.id

              return (
                <div
                  key={section.id}
                  className={`mb-2 rounded-lg transition-colors ${
                    isActive ? "bg-blue-100" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center justify-between p-3 text-left ${
                      isActive ? "text-blue-900 font-medium" : "text-gray-700"
                    }`}
                  >
                    <span className="text-sm">{section.title}</span>
                    <Icon className="h-4 w-4" />
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="bg-blue-100 px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-blue-900">
                  Report the incident
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Type of Crime & Severity */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="typeOfCrime"
                      className="text-sm font-medium text-blue-900"
                    >
                      Type of crime <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("typeOfCrime", value)
                      }
                      required
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select type of crime" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="theft">Theft</SelectItem>
                        <SelectItem value="assault">Assault</SelectItem>
                        <SelectItem value="fraud">Fraud</SelectItem>
                        <SelectItem value="vandalism">Vandalism</SelectItem>
                        <SelectItem value="harassment">Harassment</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="severity"
                      className="text-sm font-medium text-blue-900"
                    >
                      Severity <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("severity", value)
                      }
                      required
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select severity level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Time of occurrence */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-blue-900">
                    Time of occurrence <span className="text-red-500">*</span>
                  </Label>
                  <DateTimePicker
                    value={formData.timeOfOccurrence}
                    onChange={handleDateTimeChange}
                    placeholder="Select date and time of occurrence"
                    required
                  />
                </div>

                {/* Location of the incident */}
                <div className="space-y-2">
                  <Label
                    htmlFor="locationOfIncident"
                    className="text-sm font-medium text-blue-900"
                  >
                    Location of the incident{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="locationOfIncident"
                    name="locationOfIncident"
                    type="text"
                    value={formData.locationOfIncident}
                    onChange={handleInputChange}
                    placeholder="Enter the location where the incident occurred"
                    className="w-full"
                    required
                  />
                </div>

                {/* Summary of the incident */}
                <div className="space-y-2">
                  <Label
                    htmlFor="summaryOfIncident"
                    className="text-sm font-medium text-blue-900"
                  >
                    Summary of the incident{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="summaryOfIncident"
                    name="summaryOfIncident"
                    value={formData.summaryOfIncident}
                    onChange={handleInputChange}
                    placeholder="Provide a detailed description of what happened..."
                    className="w-full h-32 resize-none"
                    required
                  />
                </div>

                {/* Suspect Information Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-900 border-b border-gray-200 pb-2">
                    Suspect information
                  </h3>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="suspectFullName"
                        className="text-sm font-medium text-blue-900"
                      >
                        Full name
                      </Label>
                      <Input
                        id="suspectFullName"
                        name="suspectFullName"
                        type="text"
                        value={formData.suspectFullName}
                        onChange={handleInputChange}
                        placeholder="Enter suspect's name if known"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="physicalDescription"
                        className="text-sm font-medium text-blue-900"
                      >
                        Physical description
                      </Label>
                      <Textarea
                        id="physicalDescription"
                        name="physicalDescription"
                        value={formData.physicalDescription}
                        onChange={handleInputChange}
                        placeholder="Describe the suspect's physical appearance (height, build, clothing, etc.)"
                        className="w-full h-24 resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="contactInformation"
                        className="text-sm font-medium text-blue-900"
                      >
                        Contact information
                      </Label>
                      <Input
                        id="contactInformation"
                        name="contactInformation"
                        type="text"
                        value={formData.contactInformation}
                        onChange={handleInputChange}
                        placeholder="Phone number, email, social media, etc."
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="meansOfTransport"
                        className="text-sm font-medium text-blue-900"
                      >
                        Means of transport
                      </Label>
                      <Input
                        id="meansOfTransport"
                        name="meansOfTransport"
                        type="text"
                        value={formData.meansOfTransport}
                        onChange={handleInputChange}
                        placeholder="Vehicle description, license plate, etc."
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Attachments */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium text-blue-900">
                      Attachments (images, videos, documents, etc.)
                    </Label>
                    <div className="relative">
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept="image/*,video/*,.pdf,.doc,.docx"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="flex items-center space-x-2 text-blue-900 border-blue-900 hover:bg-blue-50"
                      >
                        <Upload className="h-4 w-4" />
                        <span>Attach file</span>
                      </Button>
                    </div>
                  </div>

                  {/* Display uploaded files */}
                  {formData.attachments.length > 0 && (
                    <div className="space-y-2">
                      {formData.attachments.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 p-2 bg-gray-50 rounded-md"
                        >
                          <FileText className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-700">
                            {file.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            ({(file.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Next Page Button */}
                <div className="flex justify-between pt-6">
                  <Button
                    type="submit"
                    className="bg-gray-600 hover:bg-gray-500 text-white px-8 py-2 rounded-md font-medium"
                  >
                    Previous page
                  </Button>
                  <Button
                    type="submit"
                    className="bg-blue-900 hover:bg-blue-700 text-white px-8 py-2 rounded-md font-medium"
                  >
                    Next page
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportIncidentPage
