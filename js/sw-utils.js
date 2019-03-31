function actualizarCacheDinamico (dynamicCache, request, response) {
    if (!response.ok) {
        return response;
    } else {
        return caches.open(dynamicCache).then( cache => {
            cache.put(request, response.clone());
            return response.clone();
        }); 
    }
}