const { default: cctv_camera } = require("@/utils/cctv_camera")

export const getProductsByCategory = async () => {
    const products = await cctv_camera;
    return products
}
