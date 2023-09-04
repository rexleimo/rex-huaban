export default async function Home() {
  const data = await fetch("http://www.baidu.com").then(res => res.text());
  return (
    <div dangerouslySetInnerHTML={{ __html: data }}></div>
  )
}
