import React from 'react'
import { client } from './client'
import Posts from './Posts'
import './Articles.css'

class Articles extends React.Component{

  state = {
    articles: []
  }

  componentDidMount() {
    client.getEntries().then((response) =>{
      console.log(response)
      this.setState({
        articles: response.items
      })
    })
    .catch(console.error)
  }

  render(){
    return (
      <div>
        <div className='container'>
          <header>
            <div className='wrapper'>
              <span className="b-title">Latest Blogs...</span>
            </div>
          </header>
          <main>
            <div className='wrapper'>
              <Posts posts={this.state.articles} />
            </div>
          </main>
        </div>
      </div>
    )
  }
}

export default Articles
