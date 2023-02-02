AFRAME.registerComponent("car-model",{
    schema:{
        posX:{type:"number",default:0},
        posY:{type:"number",default:0},
        posZ:{type:"number",default:0},
        modelRef:{type:"string",default:"./Assets/Car1/scene.gltf"}
    },

    init:function(){
        this.el.setAttribute("gltf-model",this.data.modelRef);
    }
});