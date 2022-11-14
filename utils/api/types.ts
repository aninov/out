export interface rentalVehicleData {
    attributes: {
        name: string
    }
    relationships: {
        primary_image: {
            data: {
                id: string
            }
        }
    }
}

export interface includedAssets {
    id: string
    type: string
    attributes?: { url?: string }
}

export interface apiResponse {
    data?: rentalVehicleData[]
    included?: includedAssets[]
}