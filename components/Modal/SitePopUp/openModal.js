import ModalBase from '@/components/Modal/BasePopUp.vue';
import Modal from '@/components/Modal/SitePopUp/Modal.vue';

export function openSitePopUp($vfm, data) {
    return new Promise((resolve, reject) => {
        $vfm.show({
            component: ModalBase,
            bind: { 
                name: 'SitePopUp',
                clickClose: true,
            },
            on: {
                'click-outside'() {
                },
                close() {
                    $vfm.hide('SitePopUp');
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
                            $vfm.hide('SitePopUp');
                        },
                        complete() {
                            resolve();
                            $vfm.hide('SitePopUp');
                        },

                    },
                }
            },
        });
    });

}