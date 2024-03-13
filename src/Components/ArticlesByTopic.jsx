import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchArticlesByTopic } from "../Utils/api"
import { useState } from "react"
import ArticleCard from "./ArticleCard/ArticleCard"


export default function ArticlesByTopic () {
    
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const {topic} = useParams()

    useEffect(() => {
        fetchArticlesByTopic(topic).then(( articles ) => {
            setArticles(articles)
            setIsLoading(false)
        })
    }, [])
    
    
    if(isLoading) {
        return <h2>Loading...</h2>
    }

    
    return (
        <>
            <ul className="article-block">
                <ArticleCard topic={topic} articles = {articles}/>
            </ul>
        </>
    )
}