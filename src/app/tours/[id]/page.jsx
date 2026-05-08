import TourDetail from '../../../components/TourDetail'

export default async function TourDetailPage({ params }) {
  const { id } = await params
  return <TourDetail id={id} />
}