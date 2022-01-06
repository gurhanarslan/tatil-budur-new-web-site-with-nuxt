export default {
    data() {
        return {
            ResultAutocomplete: [],
            AutocompleteIsLoading: false,
            LazyAutoCompleteTimeout: -1,
            ShowAutocomplete: false,
            ShowChildrenSelect: false
        }
    },
    methods: {
        sendAutoComplate(search) {
            this.ShowAutocomplete = true
            if (this.LazyAutoCompleteTimeout !== -1) {
                clearTimeout(this.LazyAutoCompleteTimeout)
            }
            this.ResultAutocomplete = []
            this.AutocompleteIsLoading = true
            this.LazyAutoCompleteTimeout = setTimeout(() => {
                const response = this.$api.autocomplete(search)
                console.log(Array.isArray(response));
                this.ResultAutocomplete = response
                this.AutocompleteIsLoading = false
            }, 1000);
        }
    }
}