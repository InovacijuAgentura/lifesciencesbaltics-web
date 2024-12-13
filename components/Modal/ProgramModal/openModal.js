import ModalBase from '@/components/Modal/Base.vue';
import Modal from '@/components/Modal/ProgramModal/Modal.vue';

export function openProgramModal($vfm, data) {
    return new Promise((resolve, reject) => {
        $vfm.show({
            component: ModalBase,
            bind: { 
                name: 'ProgramModal',
                clickClose: true,
            },
            on: {
                'click-outside'() {
                },
                close() {
                    $vfm.hide('ProgramModal');
                },
            },
            slots: {
                default: {
                    component: Modal,
                    bind: {
                        data
                    },
                    on: {
                        close() {
                            $vfm.hide('ProgramModal');
                        },
                        complete() {
                            resolve();
                            $vfm.hide('ProgramModal');
                        },

                    },
                }
            },
        });
    });

}