import notion from "./notion"

async function getDatabase() {
  const DB_ID = process.env.NOTION_DATABASE_ID!
  const response = await notion.databases.query({
    database_id: DB_ID,
  })

  return response.results
}

export default getDatabase
