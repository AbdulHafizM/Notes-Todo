import { toast } from 'react-toastify'

const notifyPromise = async(func) => {
    const response = await toast.promise(
        func,
        {
          pending: 'saving note..',
          success: 'save successful 👌',
          error: 'save failed 🤯'
        },
        {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        }
    );
    console.log(response)
}

const notifySuccess = (text) => {toast.success(text, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});
}


const notifyErr = (text) => {
    toast.error(text, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}

export {notifySuccess, notifyErr, notifyPromise}