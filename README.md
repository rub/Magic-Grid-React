# magic-grid-react
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

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
| gutter      | `32`      | _Gap between elements_     |
| maxCols     | `5`       | _Max number of colums_     |
| useMin      | `false`   | _Use min width of columns_ |
| animate     | `false`   | _Animate item positioning_ |

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/998924?v=4" width="100px;" alt="Arek Mytych"/><br /><sub><b>Arek Mytych</b></sub>](http://amytych.github.io)<br />[💻](https://github.com/IniZio/Magic-Grid-React/commits?author=amytych "Code") [📖](https://github.com/IniZio/Magic-Grid-React/commits?author=amytych "Documentation") [🤔](#ideas-amytych "Ideas, Planning, & Feedback") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!