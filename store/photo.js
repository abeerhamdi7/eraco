export const state = ()=>({
  photos:[],
  selectedPhoto:{},
  })
  export const mutations={
    setPhotos:(state,photos) => (state.photos=photos),
    updateSelectedPotos(state,photos){
      state.selectedPhoto=photos
    }
  };
  import axios from "axios"

  export const actions={
    async getPhotos({commit}){
       const res=await axios.get("https://jsonplaceholder.typicode.com/photos")
      // const res=await $axios.$get("https://jsonplaceholder.typicode.com/photos/${params.id}")

      commit("setPhotos",res.data)
    }
  };

  export default{
    state,
    mutations,
    actions
  }
