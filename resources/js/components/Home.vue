<template>
    <div class="carousel-inner py-4">
        <!-- Single item -->
        <div class="carousel-item active">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4" v-for="product in products" :key="product.id">
                        <div class="card">
                            <img
                                :src="product.image"
                                class="card-img-top"
                                alt="Waterfall"
                            />
                            <div class="card-body">
                                <h5 class="card-title">{{product.name}}</h5>
                                <p class="card-text">{{product.description}}</p>

                                <router-link class="btn btn-info" :to='{name: "edit", params: {id: product.id}}'>Editar</router-link>
                                <button @click="deleteProduct(product.id)" type="button" class="btn btn-danger">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            products: [
                {
                id: 1,
                name: 'Producto 1',
                description: 'This is a first item',
                price: 20,
                image: 'https://via.placeholder.com/150'
                },
                {
                    id: 2,
                    name: 'Producto 2',
                    description: 'This is a second item',
                    price: 10,
                    image: 'https://via.placeholder.com/150'
                },
            ]
        }
    },
    methods: {
        deleteProduct(product_id){
            console.log("eliminando producto");
        }
    }
}
</script>

<style scoped>

</style>
