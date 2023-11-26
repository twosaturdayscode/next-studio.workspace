type ResponsiveProp<T> = {
  xs?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
  xxl?: T
}

export type Responsive<T> = T | ResponsiveProp<T>
