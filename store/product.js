export const state = ()=>({
  products:[],
  procuct2:[],
  selectedProduct:{},
  })
  export const mutations={
    setProducts:(state,products) => (state.products=products),
    setProduct2:(state,product2) => (state.product2=product2),
    updateSelectedProducts(state,products){
      state.selectedProduct=products
    }
  };
  import axios from "axios"

  export const actions={
    async getProducts({commit}){
       const res=await axios.get("https://backend.eradco.murabba.dev/api/latest_products")


      commit("setProducts",res.data)
    },
    async getProduct2({commit},item){

     const res=await axios.get(`https://backend.eradco.murabba.dev/api/products/${item}`)
     console.log(item);
     commit("setProduct2",res.data)
   }
  };

  export default{
    state,
    mutations,
    actions
  }
