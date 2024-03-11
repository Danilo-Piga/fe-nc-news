import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { fetchSingleArticle} from "../Utils/api";
import moment from 'moment'
import './SingleArticle.css'

function SingleArticle({currentUser}) {

const [article, setArticle] = useState([])
const {article_id} = useParams()

useEffect(() => {
    fetchSingleArticle(article_id).then(({article}) =>
    setArticle(article))
}, [])



return (
    <main>
        <div key={article.article_id}>
        <h2 className="article-title">{article.title}</h2>
        <h3>Written by {article.author} on<br></br> {moment(`${article.created_at}`).format("Do MMMM YYYY")}{" "} </h3>
        <img src={article.article_img_url}/>
        <p>{article.body}</p>
        </div>
    </main>
)
}

export default SingleArticle;