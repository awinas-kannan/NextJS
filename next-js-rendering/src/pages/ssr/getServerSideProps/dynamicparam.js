
export default function Page({ data }) {
    return (
        <main>
            {data.map(datum => {
                return (
                    <h1 key={datum.id}>{datum.name}</h1>
                )
            })}
        </main>
    )
}


export async function getServerSideProps(context) {
    //http://localhost:3000/ssr/getServerSideProps/dynamicparam?postId=100\
    const { query, resolvedUrl, req, res } = context
    console.log(context.query, context.resolvedUrl)
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie',
        [
            'type=ninja',
            'language=javascript'
        ]);
    const postId = context.query.postId
    const resp = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    const data = await resp.json()
    return {
        props:
        {
            data
        }
    }
}