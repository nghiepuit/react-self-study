import CallApi from '@packages/http';

// Ví dụ mẫu lấy danh sách products
export async function getAllProducts() {
    log('getAllProducts')
    const response = await CallApi.getInstance()
        .to('/products')
        .asyncGet()
    if (response.error) {
        throw new Error(response.error.code || JSON.stringify(response.error))
    }
    return response
}

// Ví dụ mẫu thêm sản phẩm body có 2 field : name, price
export async function postNewProduct(name, price) {
    log('------postNewProduct------')
    log('name:', name)
    log('price:', price)
    const response = await CallApi.getInstance()
        .to('/products')
        .asyncPost({
            name: name,
            price // price : price
        })
    log('response: ', JSON.stringify(response))
    if(response.status === 200) return response
    if (response.error) throw new Error(response.error.code || JSON.stringify(response.error))
    throw new Error(errorCodes.NETWORK.CONNECTION_ERROR)
}
