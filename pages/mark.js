// import ReactMarkdown from 'react-markdown'
// import {render} from 'react-dom'
// import {useState, useEffect} from 'react'
// const Mark = ({content}) => {
// return(<>
//  <div className='mt-24 container mx-auto'>
// <ReactMarkdown children={content} />
// </div>
// </>)
// }

// export default Mark

// export async function getStaticProps(context) {
//     const data = await fetch('https://king-prawn-app-phcky.ondigitalocean.app/api/tests')
//     const res = await data.json()
//     console.log(res.data[0].attributes.content)
//     const content = res.data[0].attributes.content
//     return {
//       props: {content},
//     }
//   }