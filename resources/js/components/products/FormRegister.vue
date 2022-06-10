<template>
    <div>
        <form v-on:submit.prevent="">
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
export default {
    name: "Create",
    data(){
        return {
            product: {
                name: '',
                description: '',
                price: 0.0
            }
        }
    }
}
</script>

<style scoped>

</style>
