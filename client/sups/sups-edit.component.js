import template from './sups-edit.html';
import SupsEditController from './sups-edit.controller';

const supsEditComponent = {
    template,
    bindings:{
        save: '&',
        sup:'<',
        //? allows callback to be undefined, if ? not given it will create cancel button in  the adding form. 
        cancel:'&?',
    },
    controller: SupsEditController,
    controllerAs:'supsEditCtrl',

};

export default supsEditComponent;