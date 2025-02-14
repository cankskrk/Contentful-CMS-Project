import { useState, useEffect } from "react";
import { createClient, Asset } from "contentful";

// Contentful Client Ayarları
const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_Contentful_CMS_API,
});

// Tip Tanımları
type Project = {
  title: string;
  url: string;
  id: string;
  image: string;
};

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "projects",
      });

      const projectsData = response.items.map((item) => {
        const rawTitle = item.fields.title;
        const rawUrl = item.fields.url;

        const title =
          typeof rawTitle === "string" ? rawTitle : String(rawTitle);
        const url = typeof rawUrl === "string" ? rawUrl : String(rawUrl);
        const id = item.sys.id;

        let imageUrl = "No Image";
        if (
          item.fields.image &&
          typeof item.fields.image === "object" &&
          "fields" in item.fields.image
        ) {
          const imageAsset = item.fields.image as Asset;
          imageUrl = imageAsset.fields?.file?.url
            ? String(imageAsset.fields.file.url)
            : "No Image";
        }

        return { title, url, id, image: imageUrl };
      });

      setProjects(projectsData);
    } catch (error) {
      console.error("Veri çekilirken hata oluştu:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};

export default useFetch;
