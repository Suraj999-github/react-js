import  { useRef } from 'react';

export default function useToaster() {
    const toast = useRef(null);

    const showSuccess = (message) => {
        toast.current.show({severity:'success', summary: 'Success', detail:message, life: 3000});
    }

    const showInfo = (message) => {
        toast.current.show({severity:'info', summary: 'Info', detail:message, life: 3000});
    }

    const showWarn = (message) => {
        toast.current.show({severity:'warn', summary: 'Warning', detail:message, life: 3000});
    }

    const showError = (message) => {
        toast.current.show({severity:'error', summary: 'Error', detail:message, life: 3000});
    }

    const showSecondary = (message) => {
        toast.current.show({ severity: 'secondary', summary: 'Secondary', detail: message, life: 3000 });
    };

    const showContrast = (message) => {
        toast.current.show({ severity: 'contrast', summary: 'Contrast', detail: message, life: 3000 });
    };
    return {
        toast,
        showSuccess,
        showInfo,
        showWarn,
        showError,
        showSecondary,
        showContrast
    }
}