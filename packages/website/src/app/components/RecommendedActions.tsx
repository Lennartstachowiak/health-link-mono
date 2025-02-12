"use client";

import {
  Calendar,
  Bell,
  Salad,
  Heart,
  Stethoscope,
  Pill,
  Droplet,
  Apple,
  Dumbbell,
  Thermometer,
  BedDouble,
  Info,
  AlertTriangle,
  Sun,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { RecommendedAction } from "@/types/results";

const getColorCodes = (color: string) => {
  switch (color) {
    case "green":
      return {
        bg: "bg-green-100",
        text: "text-green-600",
        buttonBg: "bg-green-50",
      };
    case "blue":
      return {
        bg: "bg-blue-100",
        text: "text-blue-600",
        buttonBg: "bg-blue-50",
      };
    case "red":
      return {
        bg: "bg-red-100",
        text: "text-red-600",
        buttonBg: "bg-red-50",
      };
    default:
      return {
        bg: "bg-gray-100",
        text: "text-gray-600",
        buttonBg: "bg-gray-50",
      };
  }
};

interface RecommendedActionItemProps {
  index: number;
  header: string;
  text: string;
  info?: string;
  link?: string;
  buttonText: string;
  iconType: string;
}

function RecommendedActionItem(props: RecommendedActionItemProps) {
  const { index, header, text, link, buttonText, iconType } = props;
  const Icon = getIcon(iconType);
  const getColor = (index: number) => {
    const colors = ["green", "blue", "red", "yellow", "purple", "teal"];
    return colors[index % colors.length];
  };
  const color = getColor(index);
  const selectedColor = getColorCodes(color);

  const handleOnClick = () => {
    if (link && link?.length > 0) {
      window.open(link, "_blank");
    }
  };

  return (
    <Card className="rounded-2xl border p-6 shadow-none">
      <CardTitle className="flex flex-row items-center gap-2 p-0 mb-2 text-lg font-medium text-gray-900">
        <div
          className={`size-10 rounded-full flex items-center justify-center ${selectedColor.bg}`}
        >
          <Icon className={`h-4 w-4 ${selectedColor.text}`} />
        </div>
        {header}
      </CardTitle>
      <CardContent className="p-0 flex flex-col flex-grow">
        <div className="mb-6 text-sm text-gray-600 flex-grow">{text}</div>
        <div className="mt-auto">
          <Button
            variant="outline"
            className={`w-full gap-2 rounded-lg px-4 py-2 text-sm font-medium ${selectedColor.text}`}
            onClick={handleOnClick}
          >
            <Icon className={`h-4 w-4 ${selectedColor.text}`} />
            {buttonText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

const getIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "calendar":
      return Calendar;
    case "reminder":
    case "bell":
      return Bell;
    case "diet":
    case "nutrition":
      return Salad;
    case "heart":
      return Heart;
    case "checkup":
      return Stethoscope;
    case "medication":
    case "pill":
      return Pill;
    case "blood":
    case "droplet":
      return Droplet;
    case "apple":
      return Apple;
    case "exercise":
      return Dumbbell;
    case "temperature":
      return Thermometer;
    case "sleep":
      return BedDouble;
    case "alert-triangle":
      return AlertTriangle;
    case "sun":
      return Sun;
    case "book":
      return BookOpen;
    default:
      return Info;
  }
};

interface RecommendedActionsProps {
  recommendedActions: RecommendedAction[];
}

export function RecommendedActions(props: RecommendedActionsProps) {
  const { recommendedActions } = props;
  return (
    <div className="rounded-2xl bg-white pt-8 shadow-none">
      <h2 className="mb-4 text-lg font-medium text-gray-900">
        Recommended Actions
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {recommendedActions.map((action, index) => {
          return (
            <RecommendedActionItem
              key={`action_${index}`}
              index={index + 1}
              {...action}
            />
          );
        })}
      </div>
    </div>
  );
}
