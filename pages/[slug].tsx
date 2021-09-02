import Head from "next/head"
import Link from "next/link"
import fs from "fs/promises"
import path from "path"
import { getPageTitle } from "notion-utils"
import { NotionAPI } from "notion-client"
import { NotionRenderer, Code, CollectionRow, Collection } from "react-notion-x"
import getDatabase from "../utils/getDatabase"

const PagesFilePath = path.join(process.cwd(), "pages.json")

function savePagesToFile(pages: any) {
  const pageObj: any = {}
  for (let page of pages) {
    pageObj[page.properties.Slug.rich_text[0].text.content] = page.id
  }
  return fs.writeFile(PagesFilePath, JSON.stringify(pageObj))
}

async function getPageIdFromFile(slug: string) {
  const pagesFile = await fs.readFile(PagesFilePath)
  const pageObj = JSON.parse(pagesFile.toString())
  return pageObj[slug]
}

export const getStaticProps = async (context: any) => {
  const notion = new NotionAPI()
  const slug = context.params.slug as string
  const pageId = await getPageIdFromFile(slug)
  const recordMap = await notion.getPage(pageId)

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const pages = await getDatabase()
  await savePagesToFile(pages)

  const paths = pages.map((page: any) => ({
    params: {
      slug: page.properties.Slug.rich_text[0].text.content,
    },
  }))

  return {
    paths,
    fallback: false,
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
          // eslint-disable-next-line react/display-name
          pageLink: ({
            href,
            as,
            passHref,
            prefetch,
            replace,
            scroll,
            shallow,
            locale,
            ...props
          }: any) => (
            <Link
              href={href}
              as={as}
              passHref={passHref}
              prefetch={prefetch}
              replace={replace}
              scroll={scroll}
              shallow={shallow}
              locale={locale}
            >
              <a {...props} />
            </Link>
          ),
          code: Code,
          collection: Collection,
          collectionRow: CollectionRow,
        }}
        recordMap={recordMap}
        fullPage={true}
        footer={
          <Link href="/">
            <a>⏪ Go back home</a>
          </Link>
        }
      />
    </>
  )
}
