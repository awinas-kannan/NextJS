export default function Page({ repo }) {
    return (
        <main>

            <p>{repo.stargazers_count}</p>
            {repo.topics.map(topic => {
                return (
                    <h1 key={topic}>{topic}</h1>
                )
            })}
        </main>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    // Pass data to the page via props
    return {
        props:
        {
            repo
        }
    }
}