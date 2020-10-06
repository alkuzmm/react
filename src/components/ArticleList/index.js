import React, { Component } from "react";
import Article from "../Article";
import "./style.css";

export default class ArticleList extends Component {
    state = {
        openArticleId: null
    }

    render() {
        const articleElements = this.props.articles.map((article, index) =>
            <li className="article-list__li" key={ article.id }>
                <Article article={ article }
                    isOpen={ this.state.openArticleId === article.id }
                    onButtonClick={ this.clickHandler.bind(this, article.id) }
                 />
            </li>
        )
        return (
            <ul>
                { articleElements }
            </ul>
        )
    }

    clickHandler = (openArticleId) => this.setState({
        openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
    })
}