import { apiResponse, includedAssets } from "../api/types"
import { searchResultItem } from './types'

export const mappingData = (data: apiResponse): searchResultItem[]  => {
    const mappedData = data.data?.map(item => {
        findImageUrl(data.included, item.relationships?.primary_image?.data?.id)
        return {
            name: item.attributes?.name,
            imageUrl: findImageUrl(
                data.included,
                item.relationships?.primary_image?.data?.id
            ),
            id: item.relationships?.primary_image?.data?.id
        }
    })
    return mappedData as searchResultItem[]
}

const findImageUrl = (assetsList: includedAssets[], id: string): string => {
    return assetsList?.find(asset => asset.type && asset.id === id)?.attributes?.url
}