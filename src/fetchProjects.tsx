import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_Contentful_CMS_API,
});

client
  .getEntries({
    content_type: "projects",
  })
  .then((res) => console.log(res));
