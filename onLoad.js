import { scrollToTop } from './src/functions/scrollToTop'
import { showAllProducts } from './src/functions/showAllProducts'
import { showCurrentYear } from './src/functions/showCurrentYear'
import { slider, loadSliderElements } from './src/functions/slider'
import { loadNewArrivalsElements } from './src/functions/loadNewArrivals'
import { loadGridElements } from './src/functions/loadGridElements'

export const onLoad = () => {
    scrollToTop()
    showAllProducts()
    showCurrentYear()
    slider()
    loadSliderElements()
    loadNewArrivalsElements()
    loadGridElements()
}