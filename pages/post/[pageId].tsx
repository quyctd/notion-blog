import Head from "next/head"
import Link from "next/link"
import { getPageTitle } from "notion-utils"
import { NotionAPI } from "notion-client"
import { NotionRenderer, Code, CollectionRow, Collection } from "react-notion-x"
import getDatabase from "../../utils/getDatabase"

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
  const pages = await getDatabase()

  const paths = pages.map((page: any) => ({
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
