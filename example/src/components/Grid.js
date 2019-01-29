import React from 'react'
import MagicGrid from 'magic-grid-react'

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
                style={{maxWidth: 200}}
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
