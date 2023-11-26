import { Responsive } from './responsive'

/**
 * The direction in which the children of the stack are laid out.
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
 */
type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse'

/**
 * The wrap property is used to specify whether the flex items should wrap or not.
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
 */
type Wrap = boolean | 'wrap' | 'nowrap' | 'wrap-reverse'

/**
 * The justify-content property aligns the flex container's items when the items
 * do not use all available space on the main-axis (horizontally).
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
 */
type justifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'left'
  | 'right'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'

/**
 * The align-items property aligns flex items of the current flex line the same way
 * as justify-content but in the perpendicular direction.
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
 */
type AlignContent =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'

/**
 * The align-items property aligns flex items of the current flex line the same way
 * as justify-content but in the perpendicular direction.
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
 */
type AlignItems =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'self-start'
  | 'self-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'

type Gap = `${number}`
type ColumnGap = `${number}`
type RowGap = `${number}`

export interface StackProps {
  children: React.ReactNode
  direction?: Responsive<Direction>
  wrap?: Responsive<Wrap>
  justifyContent?: Responsive<justifyContent>
  alignContent?: Responsive<AlignContent>
  alignItems?: Responsive<AlignItems>
  gap?: Responsive<Gap>
  columnGap?: Responsive<ColumnGap>
  rowGap?: Responsive<RowGap>
}
