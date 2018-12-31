export interface MagicGridProps extends React.Props<any> {
  gap: number;
  maxCols: number;
  maxColWidth: number;
  useMin: boolean;
  animate: boolean;
}

export interface MagicGridState {
  started: boolean;
  items: HTMLCollection;
}
