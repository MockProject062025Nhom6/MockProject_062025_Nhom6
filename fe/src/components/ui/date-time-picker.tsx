"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon, Clock } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DateTimePickerProps {
  value?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  className?: string
  required?: boolean
}

export function DateTimePicker({
  value,
  onChange,
  placeholder = "Pick a date and time",
  className,
  required = false,
}: DateTimePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(value)
  const [time, setTime] = React.useState<string>(
    value ? format(value, "HH:mm") : ""
  )

  React.useEffect(() => {
    if (value) {
      setDate(value)
      setTime(format(value, "HH:mm"))
    }
  }, [value])

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      const newDateTime = new Date(selectedDate)
      if (time) {
        const [hours, minutes] = time.split(":")
        newDateTime.setHours(Number.parseInt(hours), Number.parseInt(minutes))
      }
      setDate(newDateTime)
      onChange?.(newDateTime)
    } else {
      setDate(undefined)
      onChange?.(undefined)
    }
  }

  const handleTimeChange = (newTime: string) => {
    setTime(newTime)
    if (date && newTime) {
      const [hours, minutes] = newTime.split(":")
      const newDateTime = new Date(date)
      newDateTime.setHours(Number.parseInt(hours), Number.parseInt(minutes))
      setDate(newDateTime)
      onChange?.(newDateTime)
    }
  }

  return (
    <div className="relative">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            data-empty={!date}
            className={cn(
              "w-full justify-start text-left font-normal",
              "data-[empty=true]:text-muted-foreground",
              "border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              className
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? (
              <span>
                {format(date, "PPP")} {time && `at ${time}`}
              </span>
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="p-3 space-y-3">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
            />
            <div className="border-t pt-3">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <Input
                  type="time"
                  value={time}
                  onChange={(e) => handleTimeChange(e.target.value)}
                  className="flex-1 bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  placeholder="Select time"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      {/* Hidden input for form validation */}
      {required && (
        <input
          type="hidden"
          value={date ? date.toISOString() : ""}
          required={required}
          onChange={() => {}} // Controlled by the DateTimePicker
        />
      )}
    </div>
  )
}
