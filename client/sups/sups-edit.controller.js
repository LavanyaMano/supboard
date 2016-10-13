function SupsEditController() {
    const ctrl =this;
    ctrl.saveSup =function saveSup(){
        ctrl.save() //component binding will define what to do in this function.
    }
}


export default SupsEditController;