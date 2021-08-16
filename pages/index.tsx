import useSWR from "swr"
import fetcher from "../utils/fetcher"

export default function Home() {
  const { data, error } = useSWR("/api/database", fetcher)

  console.log(data, error)

  return (
    <div>
      <h1>Quyctd Blog</h1>
    </div>
  )
}
