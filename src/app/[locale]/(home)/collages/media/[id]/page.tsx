import { getMedia } from "@/utlis/explore";
import Media from "./Media";
import { notFound } from "next/navigation";

interface UniversityMediaProps {
  params: { id: string; locale: string };
}

async function fetchMediaData(locale: string, id: number) {
  try {
    const response = await getMedia(locale, id);
    if (!response || !response.success) {
      throw new Error("Invalid response from getMedia");
    }
    return response;
  } catch (error) {
    console.error("Failed to fetch Media data:", error);
    return null;
  }
}

export default async function Page({ params }: UniversityMediaProps) {
  const id = parseInt(params.id, 10);
  const rawMediaData = await fetchMediaData(params.locale, id);

  if (!rawMediaData || !rawMediaData.data) {
    notFound();
  }

  const mediaData = {
    data: {
      events: { data: rawMediaData.data.events?.data || [] },
      conference: { data: rawMediaData.data.conference?.data || [] },
      stories_success: { data: rawMediaData.data.stories_success?.data || [] },
    },
  };

  return <Media mediaData={mediaData} />;
}