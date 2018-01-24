<template>
	<div class="hello" @click="jump">
		{{name}}
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name: 'hello',
		data() {
			return {
                name:'哈哈哈哈哈哈'
			}
		},
		methods:{
			jump(){
				this.$router.push('/other')
			}
		},
		created(){
			axios.get('/api/course').then(suc=>{
			    console.log(suc)
			}).catch(err=>{
				console.log(err)
			})
		}
	}
</script>

<style>

</style>