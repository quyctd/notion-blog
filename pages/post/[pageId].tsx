import Head from "next/head"

import { getPageTitle } from "notion-utils"
import { NotionAPI } from "notion-client"
import { NotionRenderer, Code, CollectionRow } from "react-notion-x"

const notion = new NotionAPI()

export const getStaticProps = async (context: any) => {
  const pageId = context.params.pageId as string
  const recordMap = await notion.getPage(pageId)

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const DOMAIN = "http://localhost:3000"
  const response = await fetch(`${DOMAIN}/api/database`)
  const pages = await response.json()

  const paths = pages.results.map((page: any) => ({
    params: { pageId: page.id },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default function NotionPage({ recordMap }: any) {
  if (!recordMap) {
    return null
  }

  const title = getPageTitle(recordMap)

  return (
    <>
      <Head>
        <meta name="description" content="React Notion X demo renderer." />
        <title>{title}</title>
      </Head>

      <NotionRenderer
        components={{
          code: Code,
          collectionRow: CollectionRow,
        }}
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
      />
    </>
  )
}
