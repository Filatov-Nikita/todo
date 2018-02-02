<template>
    <div>
        <div class="input-field col s6">
            <input id="last_name" type="text" 
                :class="validClass"
                :value="value"
                @input="onInput($event.target.value)"
            >
            <label for="last_name">{{name}}</label>
        </div>
            
    </div> 
</template>

<script>
	export default {
		props: ['name', 'value'],
		data(){
			return {
                activated: this.value != '',
                pattern: /.+/
			}
		},
		mounted(){
            this.$emit('changeStatus', this.isValid);
		},
		computed: {
            isValid(){
                if(this.activated) {
                    return this.pattern.test(this.value);
                }
                    return true;
			},
			validClass(){
				return this.isValid ? 
						'validate' :
						'err';
			}
		},
		methods: {
			onInput(value) {
                this.activated = true;
                this.$emit('onInput', value);
            }
		},
		watch: {
			isValid(){
				this.$emit('changeStatus', this.isValid);
			}
		}
	}
</script>

    <style scoped>
        .err {
            border-color: #cc0000 !important;
            outline: none;
            box-shadow: transparent;
        }
    </style>
    