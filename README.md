# React-Magic-Grid

[![GitHub forks](https://img.shields.io/github/forks/IniZio/React-Magic-Grid.svg)](https://github.com/IniZio/React-Magic-Grid/network)
[![GitHub stars](https://img.shields.io/github/stars/IniZio/React-Magic-Grid.svg)](https://github.com/IniZio/React-Magic-Grid/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/IniZio/React-Magic-Grid.svg)](https://github.com/IniZio/React-Magic-Grid/issues)
[![GitHub license](https://img.shields.io/github/license/IniZio/React-Magic-Grid.svg)](https://github.com/IniZio/React-Magic-Grid/blob/master/LICENSE)

This is a React.js port of @[e-oj's](https://github.com/e-oj) [Magic Grid](https://github.com/e-oj/Magic-Grid).
Please check the `/example` folder for a example.

If you use images, make sure they have a set height, otherwise the grid will calculate weirdly.

### Setup
Install the component
```js
$ npm i react-magic-grid
```

```jsx
import MagicGrid from 'react-magic-grid'

<MagicGrid>
  {posts.map(post => (
    <Card
      key={post.id}
      title={post.title}
      body={post.body}
    />
  ))}
</MagicGrid>
```

### Props
| Prop        | Default   | Comment                    |
|:------------|:----------|:---------------------------|
| gap         | `32`      | _Gap between elements_     |
| maxCols     | `5`       | _Max number of colums_     |
| maxColWidth | `280`     | _Max width of columns_     |
| useMin      | `false`   | _Use min width of columns_ |
| animate     | `false`   | _Animate item positioning_ |
