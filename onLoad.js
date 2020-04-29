import { scrollToTop } from './src/functions/scrollToTop'
import { showAllProducts } from './src/functions/showAllProducts'
import { showCurrentYear } from './src/functions/showCurrentYear'
import { slider } from './src/functions/slider'

export const onLoad = () => {
    scrollToTop()
    showAllProducts()
    showCurrentYear()
    slider()
}