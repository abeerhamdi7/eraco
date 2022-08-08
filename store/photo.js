export const state = ()=>({
  photos:[],
  photo2:[],
  selectedPhoto:{},
  })
  export const mutations={
    setPhotos:(state,photos) => (state.photos=photos),
    setPhoto2:(state,photo2) => (state.photo2=photo2),
    updateSelectedPotos(state,photos){
      state.selectedPhoto=photos
    }
  };
  import axios from "axios"

  export const actions={
    async getPhotos({commit}){
       const res=await axios.get("https://jsonplaceholder.typicode.com/photos")

      
      commit("setPhotos",res.data)
    },
    async getPhoto2({commit},id){

     const res=await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
     console.log(id);
     commit("setPhoto2",res.data)
   }
  };

  export default{
    state,
    mutations,
    actions
  }
