import { useTranslations } from "next-intl";
import AccordionComponent from "./AccordionComponent";
import EventAndConferencesClient from "./EventAndConferences";
import SuccessStoriesAccordion from "./SuccessStoriesData.ts";

interface MediaProps {
  mediaData: {
    data: {
      events: { data: { name: string; description: string; image?: string }[] };
      conference: { data: { name: string; description: string; image?: string }[] };
      stories_success: {
        data: { name: string; description: string; image?: string; college?: string; category?: string }[];
      };
    };
  };
}

export default function Media({ mediaData }: MediaProps) {
  const t = useTranslations();

  const accordionData = [
    {
      name: t("Events"),
      description: "",
      items: mediaData.data.events.data || [],
    },
    {
      name: t("Conferences"),
      description: "",
      items: mediaData.data.conference.data || [],
    },
  ];

  const successStoriesData = {
    name: t("SuccessStories"),
    description: "",
    items: mediaData.data.stories_success.data || [],
  };

  const options = [
    ...(mediaData.data.events.data.map((event) => ({
      type: "event",
      name: event.name,
    })) || []),
    ...(mediaData.data.conference.data.map((conference) => ({
      type: "conference",
      name: conference.name,
    })) || []),
  ];

  return (
    <div className="mb-12">
      <EventAndConferencesClient options={options} />
      <div className="rounded-xl">
        <AccordionComponent AccordionComponentData={accordionData} />
        <SuccessStoriesAccordion successStoriesData={successStoriesData} />
      </div>
    </div>
  );
}