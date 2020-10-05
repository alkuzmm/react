import React, { Component } from "react";
// import React, { Component, PureComponent } from "react";


// class Article extends PureComponent {
class Article extends Component {
    state = {
        isOpen: this.props.defaultOpen
    }

    // shouldComponentUpdate(nextProps, nextState) {
    // 	return this.state.isOpen !== nextState.isOpen;
    // }

    componentWillReceiveProps(nextProps) {
    	console.log("---", "will receive props");
    	if (nextProps.defaultOpen !== this.props.defaultOpen) {
    		this.setState({isOpen: nextProps.defaultOpen});
    	}
    }

    componentWillUpdate() {
    	console.log("---", "will update");
    }

    render() {
        const { article } = this.props;
        return (
            <div className="card mx-auto" style={{width: "70%"}}>
	            <div className="card-header">
		            <h2>
						{ article.title }
						<button className="btn btn-outline-secondary btn-lg float-right" onClick={ this.clickHandler }>
							{this.state.isOpen ? "Hide" : "Open"}
						</button>
						<hr />
					</h2>
	        	</div>
				<div className="card-body">
					<h6 className="card-subtitle text-muted">creation date: { (new Date(article.date)).toDateString() }</h6>	
					{ this.state.isOpen  && <section className="card-text">{ article.text }</section> }
				</div>
			</div>
        );
    }

    clickHandler = () => {
        console.log("---", "clicked");
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

export default Article;