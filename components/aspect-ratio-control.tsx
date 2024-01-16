"use client"

import { ChangeEvent, useState } from "react"
import Image from "next/image"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { AspectRatio } from "./ui/aspect-ratio"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export const AspectRatioControl = () => {
  const [ratio, setRatio] = useState(16 / 9)
  const [src, setSrc] = useState(
    "https://images.unsplash.com/photo-1682695799561-033f55f75b25?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  )

  const handleRatioChange = (ratio: string) => {
    const parsed = parseRatio(ratio)

    setRatio(parsed)
  }

  const parseRatio = (ratio: string) => {
    const [width, height] = ratio.split(":")
    return parseInt(width) / parseInt(height)
  }

  const handleImageChange = (image: string) => {
    setSrc(image)
  }

  return (
    <div className="grid grid-cols-[0.8fr_0.2fr] gap-8">
      <div className="relative w-full">
        <AspectRatio ratio={ratio}>
          <Image
            src={src}
            alt="Example Image"
            className="rounded object-cover shadow-md"
            fill
          />
        </AspectRatio>
      </div>
      <div className="flex flex-col gap-6">
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label>Aspect Ratio</Label>
          <Select onValueChange={handleRatioChange} defaultValue="16:9">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a ratio" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="16:9">16:9</SelectItem>
                <SelectItem value="4:3">4:3</SelectItem>
                <SelectItem value="3:2">3:2</SelectItem>
                <SelectItem value="1:1">1:1</SelectItem>
                <SelectItem value="6:13">6:13</SelectItem>
                <SelectItem value="5:3">5:3</SelectItem>
                <SelectItem value="5:4">5:4</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="src">Image Source</Label>
          <Input
            type="text"
            id="src"
            placeholder={src}
            onChange={(event) => handleImageChange(event.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
