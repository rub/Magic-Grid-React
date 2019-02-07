import * as React from 'react'
import MagicGrid, {MagicGridProps} from 'magic-grid'
import ReactResizeDetector from 'react-resize-detector'

class RevokableMagicGrid extends MagicGrid {
  revoke() {}
  
  listen() {
    if (this.ready()) {
      let revokeTimeout: any

      // @ts-ignore
      const positionHandler = () => {
        if (!revokeTimeout) {
          revokeTimeout = setTimeout(() => {
            this.positionItems();
            revokeTimeout = null;
          }, 200);
        }
      }

      window.addEventListener("resize", positionHandler);

      this.revoke = () => {
        window.removeEventListener('resize', positionHandler)
        if (revokeTimeout) {
          revokeTimeout()
        }
        this.revoke = () => {}
      }

      this.positionItems();
    }
    // @ts-ignore
    else this.getReady();
  }
}

export interface MagicGridComponentProps extends MagicGridProps {
  children?: React.ReactNode
}

class MagicGridComponent extends React.Component<MagicGridComponentProps> {  
  private gridInstance?: RevokableMagicGrid
  private wrapperRef: React.RefObject<HTMLDivElement> = React.createRef()

  componentDidMount = this.recreateInstance

  componentDidUpdate(prevProps: MagicGridComponentProps) {
    if (this.props.children !== prevProps.children && this.gridInstance) {
      this.positionItems()
    } else if (this.props !== prevProps) {
      this.recreateInstance()
      return
    }
  }

  componentWillUnmount = this.revokeInstance

  private positionItems = () => {
    console.log('gonna reposition')
    
    if (this.gridInstance) {
      this.gridInstance.positionItems()
    }
  }

  private revokeInstance() {
    if (this.gridInstance) {
      this.gridInstance.revoke()

      this.gridInstance = undefined
    }
  }

  private recreateInstance() {
    if (this.wrapperRef.current) {
      this.revokeInstance()
      
      const {children, ...config} = {
        container: this.wrapperRef.current,
        items: (!this.props.static && this.props.children) ? ([] as React.ReactNode[]).concat(this.props.children).length : undefined,
        ...this.props
      }

      if (config.static || (config.items && config.items > 0)) {
        try {
          this.gridInstance = new RevokableMagicGrid(config)

          setTimeout(() => {
            if (this.gridInstance) {
              this.gridInstance.positionItems()
            }
          }, 500)

          this.gridInstance.listen()
        } catch(e) {
          console.error(e)
        }
      }
    }
  }

  render() {
    return (
      <ReactResizeDetector
        render={() => {
          this.positionItems()
          return (
            <div ref={this.wrapperRef} className="magic-grid" style={{width: '100%'}}>
              {this.props.children}
            </div>
          )
        }}
        handleWidth
        skipOnMount
      />
    )
  }
}

// @ts-ignore
MagicGridComponent.defaultProps = {
  gap: 32,
  maxCols: 5,
  maxColWidth: 280,
  useMin: false,
  animate: true
}

export * from 'magic-grid'
export default MagicGridComponent
