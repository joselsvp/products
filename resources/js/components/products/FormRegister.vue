<template>
    <div>
        <form v-on:submit.prevent="newProduct">
            <div class="form-group">
                <label for="name">Nombre</label>
                <input type="text" class="form-control" id="name" v-model = "product.name">
            </div>
            <div class="form-group">
                <label for="description">Descripción</label>
                <input type="text" class="form-control" id="description" v-model="product.description">
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="text" class="form-control" id="price" v-model="product.price">
            </div>
            <button type="submit" class="btn btn-primary">Guardar</button>
        </form>
        {{product}}
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Create",
    data(){
        return {
            product: {
                name: '',
                description: '',
                price: 0.0,
                image: 'https://via.placeholder.com/150'
            }
        }
    },
    methods: {
        newProduct() {
            axios.post('api/products', this.product).then((response) => {
                console.log(response);
                this.$emit('add', response.data.product);
                this.$router.push({name: 'Home'});
            })
        }
    }
}
</script>

<style scoped>

</style>
