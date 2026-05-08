import {
    sevenNightsEightDays,
    nineNightsTenDays,
    twelveNightsThirteenDays,
    fourteenNightsFifteenDays,
} from '../components/Array'

// Returns the 4 tour cards with titles in the correct language
export function getToursData(lang) {
    const l = lang || 'ara'
    return [
        {
            id: 1,
            category: 'INDIVIDUAL',
            title: sevenNightsEightDays[l]?.title ?? sevenNightsEightDays.ara.title,
            rating: 4.8,
            price: '$1111',
            image: '/tour1.jpg',
        },
        {
            id: 2,
            category: 'INDIVIDUAL',
            title: nineNightsTenDays[l]?.title ?? nineNightsTenDays.ara.title,
            rating: 4.9,
            price: '$1500',
            image: '/tour2.jpg',
        },
        {
            id: 3,
            category: 'INDIVIDUAL',
            title: twelveNightsThirteenDays[l]?.title ?? twelveNightsThirteenDays.ara.title,
            rating: 4.9,
            price: '$3600',
            image: '/tour3.jpg',
        },
        {
            id: 4,
            category: 'INDIVIDUAL',
            title: fourteenNightsFifteenDays[l]?.title ?? fourteenNightsFifteenDays.ara.title,
            rating: 4.8,
            price: '$4000',
            image: '/tour4.jpg',
        },
    ]
}