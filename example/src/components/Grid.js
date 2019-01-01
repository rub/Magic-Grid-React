import React from 'react'
import MagicGrid from 'react-magic-grid'

import Card from './Card'

class Grid extends React.Component {
  state = {
    posts: []
  }
  
  componentDidMount() {
    fetch('//jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.setState({posts: json.slice(0, 12)})
      })
  }

  render() {
    const {posts} = this.state
    
    return (
      <section class="section">
        <div class="container">
          <MagicGrid>
            {posts.map(post => (
              <Card
                key={post.id}
                title={post.title}
                body={post.body}
              />
            ))}
          </MagicGrid>
        </div>
      </section>
    )
  }
}

export default Grid
