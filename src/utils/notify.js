import { toast } from 'react-toastify'

const notifyPromise = async(func,text1, text2) => {
    const response = await toast.promise(
        func,
        {
          pending: `${text1} note..`,
          success: `${text2} successful 👌`,
          error: `${text2} failed 🤯`
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