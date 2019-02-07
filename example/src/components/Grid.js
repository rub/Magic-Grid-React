import React from 'react'
import MagicGrid from 'magic-grid-react'

import Card from './Card'

class Grid extends React.Component {
  state = {
    posts: [],
    width: 1000
  }
  
  componentDidMount() {
    fetch('//jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.setState({posts: json.slice(0, 12)})
      })
  }

  render() {
    const {posts, width} = this.state
    
    return (
      <section class="section">
        <input value={width} onChange={e => {this.setState({width: Number(e.target.value)})}}/>
      
        <div class="container" style={{width}}>
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
