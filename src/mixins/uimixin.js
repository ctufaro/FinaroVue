export default {
    data: () => ({
        loadingopts:{ loader: 'spinner', height:128, width:128, isFullPage:true, canCancel: true, 
                      color:'#63C394', backgroundColor:'#FFFFFF', opacity:.6 }
    }),
    methods: {
        isMobile(){
            return window.matchMedia("only screen and (max-width: 768px)").matches;
        },
        showLoader(){
            let loader = this.$loading.show(this.loadingopts);
            return loader;
        },
        hideLoader(loader){
            loader.hide();
        }        
    }
}