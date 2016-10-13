import { merge } from 'ramda';
function SupsEditController() {
    const ctrl =this;
    ctrl.editedSup = {};
    ctrl.$onChanges = function $onChanges(){
        ctrl.editedSup = merge({},ctrl.sup);
    }
    ctrl.saveSup =function saveSup(){
        ctrl.save({editedSup: ctrl.editedSup}) //component binding will define what to do in this function.
    };
}


export default SupsEditController;