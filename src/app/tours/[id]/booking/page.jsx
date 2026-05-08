import { Suspense } from 'react'
import TourBooking from '../../../../components/TourBooking'

export default async function TourBookingPage({ params }) {
    const { id } = await params
    return (
        <Suspense fallback={null}>
            <TourBooking id={id} />
        </Suspense>
    )
}