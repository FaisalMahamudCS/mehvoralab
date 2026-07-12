import type { Metadata } from 'next'
import PortfolioGalleryPage from '@/components/portfolio-gallery-page'
import { getPackagingDesignData } from '@/lib/packaging-design'

const data = getPackagingDesignData()

export const metadata: Metadata = {
  title: `${data.title} | ${data.company}`,
  description: data.description,
}

export default function PackagingDesignRoutePage() {
  return <PortfolioGalleryPage data={data} />
}
