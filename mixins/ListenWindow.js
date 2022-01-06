import { LazyFile } from '@/plugins/LazyCSSFile'
export default {
    methods: {
        reportWindowSize(e) {
            const width = e.target.innerWidth;
            if (width < 962) {
                LazyFile('response/tablet/tablet')
            }
        },
    },
    mounted() {
        window.addEventListener('resize', this.reportWindowSize);
    }
}