import httpClient from "./api.client";

export async function fetchAllProducts() {
    const response = await httpClient.get('/produit');
    return response.data;
}
