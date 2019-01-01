import * as React from 'react'
import * as PropTypes from 'prop-types'

import {MagicGridProps, MagicGridState} from './MagicGrid.type'

class MagicGrid extends React.Component<MagicGridProps, MagicGridState> {  
  state = {
    started: false,
    items: document.createElement("div").getElementsByClassName('noClassHere')
  }

  private wrapperRef: React.RefObject<HTMLDivElement> = React.createRef()

  componentDidMount() {
    this.waitUntilReady()
  }

  waitUntilReady() {
    if (this.isReady()) {
      this.positionItems()

      window.addEventListener('resize', () => {
        setTimeout(this.positionItems, 200)
      })
    } else this.getReady()
  }

  isReady() {
    return this.wrapperRef.current && this.state.items.length > 0
  }

  getReady () {
    const interval = setInterval(() => {
      if (this.wrapperRef.current) {
        this.setState({items: this.wrapperRef.current.children})
      }

      if (this.isReady()) {
        clearInterval(interval)
        this.init()
      }
    }, 100)
  }

  init() {
    if (!this.isReady() || this.state.started) return

    if (this.wrapperRef.current) {
      this.wrapperRef.current.style.position = 'relative'
    }

    if (this.state.items) {
      Array.prototype.forEach.call(this.state.items, (item: HTMLElement) => {
        item.style.position = 'absolute'
        item.style.maxWidth = this.props.maxColWidth + 'px'
        if (this.props.animate) item.style.transition = 'top, left 0.2s ease'
      })
    }

    this.setState({started: true}, this.waitUntilReady)
  }

  colWidth () {
    if (this.state.items && this.state.items![0] && this.state.items![0]!.getBoundingClientRect().width) {
      return this.props.gap + this.state.items![0]!.getBoundingClientRect()!.width
    } else return 0
  }

  setup () {
    let width = this.wrapperRef.current!.getBoundingClientRect().width
    let numCols = Math.floor(width / this.colWidth()) || 1
    let cols = []

    if (this.props.maxCols && numCols > this.props.maxCols) {
      numCols = this.props.maxCols
    }

    for (let i = 0; i < numCols; i++) {
      cols[i] = {
        height: 0,
        top: 0,
        index: i
      }
    }

    let wSpace = width - numCols * this.colWidth() + this.props.gap

    return {
      cols,
      wSpace
    }
  }

  nextCol (cols: any[], i: number) {
    if (this.props.useMin) return this.getMin(cols)

    return cols[i % cols.length]
  }

  positionItems () {
    let {cols, wSpace} = this.setup()

    wSpace = Math.floor(wSpace / 2)

    Array.prototype.forEach.call(this.state.items, (item: HTMLElement, i: any) => {
      let min = this.nextCol(cols, i)
      let left = min.index * this.colWidth() + wSpace

      item.style.left = left + 'px'
      item.style.top = min.height + min.top + 'px'

      min.height += min.top + item.getBoundingClientRect().height
      min.top = this.props.gap
    })

    this.wrapperRef.current!.style!.height = this.getMax(cols).height + 'px'
  }

  getMax (cols: any[]) {
    let max = cols[0]

    for (let col of cols) {
      if (col.height > max.height) max = col
    }

    return max
  }

  getMin (cols: any[]) {
    let min = cols[0]

    for (let col of cols) {
      if (col.height < min.height) min = col
    }

    return min
  }

  render() {
    return <div ref={this.wrapperRef}>{this.props.children}</div>
  }
}

// @ts-ignore
MagicGrid.propTypes = {
  gap: PropTypes.number,
  maxCols: PropTypes.number,
  maxColWidth: PropTypes.number,
  useMin: PropTypes.bool,
  animate: PropTypes.bool
}

// @ts-ignore
MagicGrid.defaultProps = {
  gap: 32,
  maxCols: 5,
  maxColWidth: 280,
  useMin: false,
  animate: true
}

export default MagicGrid
