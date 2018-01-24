<template>
	<div class="other" @click="jump">
		{{name}}
	</div>
</template>
<script>
	export default {
		name: 'other',
		data() {
			return {
                name:'另外一个'
			}
		},
		methods:{
			jump(){
				this.$router.push('/hello')
			}
		}
	}
</script>

<style>

</style>