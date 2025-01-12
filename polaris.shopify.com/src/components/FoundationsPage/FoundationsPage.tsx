import { MarkdownFile } from "../../types";
import { foundationsNavItems } from "../../data/navItems";
import Layout from "../Layout";
import Longform from "../Longform";
import Markdown from "../Markdown";
import PageMeta from "../PageMeta";

interface Props {
  markdownFile: MarkdownFile;
}

function FoundationsPage({
  markdownFile: { readme, intro, frontMatter },
}: Props) {
  let title = frontMatter?.name || "";

  if (title.includes("/")) {
    const parts = title.split("/");
    title = parts[parts.length - 1];
  }

  return (
    <Layout width="narrow" navItems={foundationsNavItems} title={title}>
      <PageMeta title={title} description={intro} />

      <Longform>
        <Markdown text={readme} skipH1 />
      </Longform>
    </Layout>
  );
}

export default FoundationsPage;
