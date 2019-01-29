# magic-grid-react

[![GitHub forks](https://img.shields.io/github/forks/IniZio/magic-grid-react.svg)](https://github.com/IniZio/magic-grid-react/network)
[![GitHub stars](https://img.shields.io/github/stars/IniZio/magic-grid-react.svg)](https://github.com/IniZio/magic-grid-react/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/IniZio/magic-grid-react.svg)](https://github.com/IniZio/magic-grid-react/issues)
[![GitHub license](https://img.shields.io/github/license/IniZio/magic-grid-react.svg)](https://github.com/IniZio/magic-grid-react/blob/master/LICENSE)

This is a React.js port of @[e-oj's](https://github.com/e-oj) [Magic Grid](https://github.com/e-oj/Magic-Grid).
Please check the `/example` folder for a example.

If you use images, make sure they have a set height, otherwise the grid will calculate weirdly.

### Setup
Install the component
```js
$ npm i magic-grid-react magic-grid
```

```jsx
import MagicGrid from 'magic-grid-react'

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
```

### Props

Supports all optinons in [Magic-Grid](https://github.com/e-oj/Magic-Grid#magicgridconfig)

#### Default Props: 

| Prop        | Default   | Comment                    |
|:------------|:----------|:---------------------------|
| gap         | `32`      | _Gap between elements_     |
| maxCols     | `5`       | _Max number of colums_     |
| useMin      | `false`   | _Use min width of columns_ |
| animate     | `false`   | _Animate item positioning_ |
